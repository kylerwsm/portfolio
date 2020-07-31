import makeStyles from '@material-ui/core/styles/makeStyles'

const useLayoutStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginLeft: 32,
    marginRight: 32,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 64,
      marginRight: 64,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 128,
      marginRight: 128,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 256,
      marginRight: 256,
    },
  },
}))

export default useLayoutStyles
