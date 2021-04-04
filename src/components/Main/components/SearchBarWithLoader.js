import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'

const useStyles = makeStyles(() => ({
  searchContainer: {
    height: 55
  },
  search: {
    margin: '0 auto',
    maxWidth: 400
  }
}));

const SearchBarWithLoader = ({ handleSearch, loading = false}) => {
  const classes = useStyles();
  console.log(loading)
  return (
    <div className={classes.searchContainer}>
      <SearchBar
        onRequestSearch={handleSearch}
        className={classes.search}
      />
      {loading && <LinearProgress  className={classes.search}/>}
    </div>
  )
}

export default SearchBarWithLoader
