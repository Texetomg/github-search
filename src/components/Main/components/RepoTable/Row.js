import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table, 
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Collapse,
  Box,
  Typography,
  IconButton
} from '@material-ui/core'
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: 500,
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

export default Row
