import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'

const GITHUB_LINK = 'https://github.com/kylerwsm'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/kylerwsm/'
const INSTAGRAM_LINK = 'https://www.instagram.com/kylerwongg/'

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

export default function Footer() {
  const classes = useFooterStyles()
  return (
    <footer className={classes.root}>
      <section className={classes.buttonRow}>
        <div className={classes.icon}>
          <IconButton href={GITHUB_LINK} target="_blank">
            <img src="/icons/bxl-github.svg" alt="GitHub" draggable={false} />
          </IconButton>
        </div>
        <div className={classes.icon}>
          <IconButton href={LINKEDIN_LINK} target="_blank">
            <img
              src="/icons/bxl-linkedin-square.svg"
              alt="LinkedIn"
              draggable={false}
            />
          </IconButton>
        </div>
        <div className={classes.icon}>
          <IconButton href={INSTAGRAM_LINK} target="_blank">
            <img
              src="/icons/bxl-instagram-alt.svg"
              alt="Instagram"
              draggable={false}
            />
          </IconButton>
        </div>
      </section>
    </footer>
  )
}
