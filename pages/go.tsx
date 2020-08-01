import Typography from '@material-ui/core/Typography'

import useGoStyles from '../styles/go.styles'
import Linked from '../components/linked'
import Footer from '../components/footer'
import Layout from '../components/layout'
import HomeButton from '../components/home-button'

export default function Go() {
  const classes = useGoStyles()
  return (
    <Layout>
      <main>
        <div className={classes.appTitle}>
          <HomeButton />

          <Typography variant="h2">My Very Own Link Shortener</Typography>
        </div>

        <div id="links" className={classes.sectionRoot}>
          <Typography variant="h3" className={classes.title}>
            My links
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            These are some links I have shortened using my link shortener.
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            <Linked href="https://go.kylerwong.dev/github">
              https://go.kylerwong.dev/github
            </Linked>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            <Linked href="https://go.kylerwong.dev/linkedin">
              https://go.kylerwong.dev/linkedin
            </Linked>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            <Linked href="https://go.kylerwong.dev/facebook">
              https://go.kylerwong.dev/facebook
            </Linked>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            <Linked href="https://go.kylerwong.dev/instagram">
              https://go.kylerwong.dev/instagram
            </Linked>
          </Typography>
        </div>
        <div id="about" className={classes.sectionRoot}>
          <Typography variant="h3" className={classes.title}>
            About
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            This is a simple link shortener application I have built to
            disseminate my personal dynamic links.
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            It is mainly built using the following technologies.
          </Typography>
          <div className={classes.iconGroupRoot}>
            <img
              src="/icons/golang-icon.svg"
              alt="Golang"
              draggable={false}
              className={classes.icon}
            />
            <img
              src="/icons/react-icon.svg"
              alt="React"
              draggable={false}
              className={classes.icon}
            />
            <img
              src="/icons/typescript-icon.svg"
              alt="TypeScript"
              draggable={false}
              className={classes.icon}
            />
          </div>
          <Typography variant="body1" className={classes.subtitle}>
            I am hosting this application as a Serverless Application on AWS.
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            The source code is public and can be found on my{' '}
            <Linked href="https://github.com/kylerwsm/lambda-links">
              GitHub
            </Linked>
            .
          </Typography>
        </div>
      </main>

      <Footer />
    </Layout>
  )
}
