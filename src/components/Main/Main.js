import React from 'react'
import SearchBar from 'material-ui-search-bar'
import { makeStyles } from '@material-ui/core/styles'
import { useGetAxiosFetch } from '../../helpers/useAxios'
import { LinearProgress } from '@material-ui/core'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/authActions'
import RepoTable from './components/RepoTable'

const useStyles = makeStyles(() => ({
  search: {
    margin: '0 auto',
    maxWidth: 800
  }
}));

const Main = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const user = useSelector(state => state.auth.user)
  
  const [{ data : userData, error : userError, loading : userLoading }, sendUserRequest] = useGetAxiosFetch()
  const [{ data : repoData, error : repoError, loading : repoLoading }, sendRepoRequest] = useGetAxiosFetch()
  
  const handleLogout = () => dispatch(logoutUser())
  const handleSearch = name => (
    sendUserRequest(`https://api.github.com/users/${name}`)
      .then((res) => res?.data?.repos_url && sendRepoRequest(res.data.repos_url))
  )

  return (
    <>
      <Header user={user} handleLogout={handleLogout} handleSearch={handleSearch}/>
    
      {(userLoading || repoLoading) && <LinearProgress  className={classes.search}/>}
      <RepoTable data={repoData?.data}/>
    </>
  )
}

export default Main
