import React, { useEffect } from 'react'
import UserInfo from './components/UserInfo'
import { makeStyles } from '@material-ui/core/styles'
import { useGetAxiosFetch } from '../../helpers/useAxios'
import { Container, Card, CardContent } from '@material-ui/core'
import Header from './components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/authActions'
import RepoTable from './components/RepoTable'
import SearchBarWithLoader from './components/SearchBarWithLoader'
import { repoColumns } from '../../config/tables-config'
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
    height: '80vh',
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

  useEffect(() => {
    userError === 404 && toast.error('User not found.')
  }, [userError])
  
  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <Container className={classes.container}>
        <SearchBarWithLoader
          handleSearch={handleSearch}
          loading={userLoading || repoLoading}
        />
        {userData && 
          <Card className={classes.container}>
            <UserInfo
              data={userData?.data}
              loading={userLoading}
              userError={userError}
            />
            <CardContent>
              <RepoTable
                data={repoData?.data}
                columns={repoColumns}
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
