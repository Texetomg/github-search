import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TableCell,
  TableRow,
  Collapse,
  Box,
  Typography,
  IconButton
} from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import CommitTable from './CommitTable'
import { commitColumns } from '../../../../config/tables-config'
import { useGetAxiosFetch } from '../../../../helpers/useAxios'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: 500,
  },
  mainRow: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

const RepoRow = ({ columns, data, i }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const [{
    data : commitData,
    error : commitError,
    loading : commitLoading
  }, sendCommitRequest] = useGetAxiosFetch()

  const handleOnClick = () => {
    setOpen(!open)
    sendCommitRequest(`${data.url}/commits`)
  }

  return (
    <>
      <TableRow className={classes.mainRow}>
        {columns.map((column, j) => {
          return (
            <TableCell key={`repo-row-col-${i}-${j}`}>
              {column.id === 'collapse' ? (
                <IconButton
                  aria-label='expand row'
                  size='small'
                  onClick={handleOnClick}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              ) : (
                data[column.id]
              )}
            </TableCell>
          )
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                Commits
              </Typography>
              <CommitTable
                data={commitData?.data}
                loading={commitLoading}
                columns={commitColumns}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default RepoRow
