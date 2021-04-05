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
import { TableXlSkeleton } from './skeletons'
import RepoRow from './RepoRow'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: '60vh',
  },
})

const RepoTable = ({ data = [], columns = [], loading }) => {
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
          <TableXlSkeleton/>
        ) : (
          <>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    {columns.map(({ id, label, width }) => (
                      <TableCell
                        key={id}
                        width={width}
                      >
                        {label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                    <RepoRow
                      key={`repo-row-${i}`}
                      columns={columns}
                      data={row}
                      i={i}
                    />
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
