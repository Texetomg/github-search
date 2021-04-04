import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Table, 
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core'
import TableSkeleton from './TableSkeleton'
import Row from './Row'

const columns = [
  { id: 'collapse', label: '', minWidth: 50},
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'language', label: 'Lang', minWidth: 100 },
  { id: 'description', label: 'Description', minWidth: 170 },
  { id: 'stargazers_count', label: 'Stars', minWidth: 170},
]

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: 500,
  },
})

const RepoTable = ({ data = [], loading = true }) => {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper className={classes.root}>
      {
        loading ? (
          <TableSkeleton/>
        ) : (
          <>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                    <Row key={`repo-row-${i}`} columns={columns} data={row}/>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component='div'
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </>
        )
      }
    </Paper>
  )
}

export default RepoTable
