import makeStyles from '@material-ui/core/styles/makeStyles'

const useLayoutStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1280,
    marginBottom: 64,
    marginLeft: 32,
    marginRight: 32,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 64,
      marginRight: 64,
      marginBottom: 96,
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 128,
      marginRight: 128,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 256,
      marginRight: 256,
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

export default useLayoutStyles
