import Tooltip from '@material-ui/core/Tooltip'

import useFooterStyles from '../styles/footer.styles'
import IconButton from '@material-ui/core/IconButton'

const GITHUB_LINK = 'https://go.kylerwong.dev/github'
const LINKEDIN_LINK = 'https://go.kylerwong.dev/linkedin'
const INSTAGRAM_LINK = 'https://go.kylerwong.dev/instagram'

export default function Footer() {
  const classes = useFooterStyles()
  return (
    <footer className={classes.root}>
      <section className={classes.buttonRow}>
        <div className={classes.icon}>
          <Tooltip title={GITHUB_LINK} placement="top" arrow>
            <IconButton href={GITHUB_LINK} target="_blank">
              <img src="/icons/bxl-github.svg" draggable={false} />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.icon}>
          <Tooltip title={LINKEDIN_LINK} placement="top" arrow>
            <IconButton href={LINKEDIN_LINK} target="_blank">
              <img src="/icons/bxl-linkedin-square.svg" draggable={false} />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.icon}>
          <Tooltip title={INSTAGRAM_LINK} placement="top" arrow>
            <IconButton href={INSTAGRAM_LINK} target="_blank">
              <img src="/icons/bxl-instagram-alt.svg" draggable={false} />
            </IconButton>
          </Tooltip>
        </div>
      </section>
    </footer>
  )
}
