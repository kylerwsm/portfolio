import makeStyles from '@material-ui/core/styles/makeStyles'

const useGoStyles = makeStyles((theme) => ({
  appTitle: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 48,
    marginBottom: 48,
  },
  sectionRoot: {
    marginTop: 32,
    marginBottom: 32,
  },
  title: {
    marginTop: 24,
    marginBottom: 16,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 16,
  },
  iconGroupRoot: {
    display: 'flex',
    flexWrap: 'nowrap',
    marginTop: 42,
    marginBottom: 42,
  },
  icon: {
    maxWidth: 60,
    maxHeight: 60,
    marginRight: 24,
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 120,
      maxHeight: 120,
      marginRight: 48,
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
}))

export default useGoStyles
