import makeStyles from '@material-ui/core/styles/makeStyles'

const useHomeStyles = makeStyles(() => ({
  appTitle: {
    marginTop: 48,
    marginBottom: 48,
  },
  sectionRoot: {
    marginTop: 32,
    marginBottom: 32,
    maxWidth: 820,
  },
  title: {
    marginTop: 24,
    marginBottom: 16,
    marginRight: 16,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 16,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  inline: {
    display: 'flex',
    alignItems: 'baseline',
  },
}))

export default useHomeStyles
