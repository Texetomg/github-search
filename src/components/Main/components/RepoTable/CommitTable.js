import React from 'react'
import {
  Table, 
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from '@material-ui/core'
import { TableXsSkeleton } from './skeletons'
import get from 'lodash/get'

const CommitTable = ({ data = [], columns = [], loading = false }) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    loading ? (
      <TableXsSkeleton/>
    ) : (
      <>  
        <Table size='small' aria-label='purchases'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
              <TableRow key={`commit-row-${i}`}>
                {columns.map((column, j) => {
                  console.log(row, column.id)
                  return (
                    <TableCell key={`commit-row-col-${i}-${j}`}>
                      {get(row,column.id) || '\u2014'}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component='div'
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </>
    )
  )
}

export default CommitTable
