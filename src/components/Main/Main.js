import React from 'react'
import UserInfo from './components/UserInfo'
import { makeStyles } from '@material-ui/core/styles'
import { useGetAxiosFetch } from '../../helpers/useAxios'
import { LinearProgress, Container, Card, CardContent } from '@material-ui/core'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/authActions'
import RepoTable from './components/RepoTable'
import SearchBar from 'material-ui-search-bar'
import toast from 'react-hot-toast'

const useStyles = makeStyles(() => ({
  searchContainer: {
    height: 45
  },
  search: {
    margin: '0 auto',
    maxWidth: 800
  },
  container: {
    marginTop: 20,
    height: 660,
  }
}));

const Main = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const user = useSelector(state => state.auth.user)
  
  const [{
    data : userData,
    error : userError,
    loading : userLoading
  }, sendUserRequest] = useGetAxiosFetch()

  const [{
    data : repoData,
    error : repoError,
    loading : repoLoading
  }, sendRepoRequest] = useGetAxiosFetch()
  
  const handleLogout = () => dispatch(logoutUser())
  const handleSearch = name => (
    sendUserRequest(`https://api.github.com/users/${name}`)
      .then((res) => res?.data?.repos_url && sendRepoRequest(res.data.repos_url))
  )

  return (
    <>
      <Header user={user} handleLogout={handleLogout} handleSearch={handleSearch}/>
      <Container className={classes.container}>
        <div className={classes.searchContainer}>
        <SearchBar
          onRequestSearch={handleSearch}
          className={classes.search}
        />
        {(userLoading || repoLoading) && <LinearProgress  className={classes.search}/>}
        
        </div>
       {userData && 
          <Card className={classes.container}>
            <UserInfo
              data={userData?.data}
              loading={userLoading}
            />
            <CardContent>
              <RepoTable
                data={repoData?.data}
                loading={repoLoading}
              />
            </CardContent>
          </Card>
        }
      </Container>
    </>
  )
}

export default Main
