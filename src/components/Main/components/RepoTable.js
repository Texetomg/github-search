import React, { useState } from 'react'
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
  Collapse,
  Box,
  Typography,
  IconButton
} from '@material-ui/core'
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

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
  mainRow: {
    "& > *": {
      borderBottom: "unset"
    }
  },
  container: {
    maxHeight: 600,
  },
})

const Row = ({ columns, data }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  return (
    <>
    <TableRow className={classes.mainRow}>
      {columns.map((column, i) => {
        return (
          column.id === 'collapse' ? (
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
          ) : (
            <TableCell key={`repo-row-col-${i}`}>
              {data[column.id]}
            </TableCell>
          )
        )
      })}
    </TableRow>
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                
                    <TableRow>
                      <TableCell>
                        111
                      </TableCell>
                    </TableRow>
                  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const RepoTable = ({ data = []}) => {
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
    </Paper>
  )
}

export default RepoTable
