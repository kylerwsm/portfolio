import makeStyles from '@material-ui/core/styles/makeStyles'

const useFooterStyles = makeStyles(() => ({
  root: {
    marginTop: 32,
    marginBottom: 48,
  },
  buttonRow: {
    display: 'flex',
  },
  icon: {
    width: 28,
    marginRight: 32,
    '&:first-child': {
      marginLeft: -12,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
}))

export default useFooterStyles
