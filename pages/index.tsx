import React from 'react'

import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'

import useHomeStyles from '../styles/home.styles'
import Linked from '../components/linked'
import Layout from '../components/layout'
import Footer from '../components/footer'

export default function Home() {
  const classes = useHomeStyles()
  const [showAllExperience, setShowAllExperience] = React.useState(false)
  const [showAllProjects, setShowAllProjects] = React.useState(false)
  const [showAllEducation, setShowAllEducation] = React.useState(false)
  return (
    <Layout>
      <main>
        <div id="introduction">
          <div id="title" className={classes.appTitle}>
            <Typography variant="h2" gutterBottom>
              Hello,
            </Typography>
            <Typography variant="h3">My name is Kyler Wong.</Typography>
          </div>
          <img
            src="/images/profile-image.jpg"
            alt="Kyler Wong"
            draggable={false}
            className={classes.profile}
          />
        </div>
        <div id="about" className={classes.sectionRoot}>
          <Typography variant="h3" className={classes.title}>
            About Me
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            I am a Computer Science penultimate student at the National
            University of Singapore. As a tech enthusiast, I find myself
            consistently spending a chunk of my time learning and developing
            arbitrary apps with new tech stacks. Weird how building things out
            of nothing brings me joy.
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            I am a strong believer in ethical and collaborative programming, and
            am constantly looking for opportunities to make a change the digital
            way. When I am not programming, you might find me contributing to{' '}
            <Linked href="https://dsc.comp.nus.edu.sg/">#techforgood</Linked>,
            cooking my favourite dishes, or jogging really slowly.
          </Typography>
        </div>
        <div id="experience" className={classes.sectionRoot}>
          <div>
            <Typography variant="h3" className={classes.title} display="inline">
              My Experience
            </Typography>
            <Typography
              variant="body1"
              className={classes.title}
              display="inline"
            >
              <Linked onClick={() => setShowAllExperience(!showAllExperience)}>
                {!showAllExperience ? 'Show More' : 'Show Less'}
              </Linked>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className={classes.subtitle}>
              {'Software Engineer Intern @ Open Government Products'}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              Started an internal project that gives users more food insights.
              Hugely contributed to the revamp and open-sourcing of Go.gov.sg,
              the official link shortener for the Singapore government.
              Initiated and oversaw improvements for Go.gov.sg, which includes
              the link analytics feature, and TypeScript and React hooks
              migration for better application robustness.
            </Typography>
          </div>
          <Collapse in={showAllExperience}>
            <Typography variant="h5" className={classes.subtitle}>
              {'Teaching Assistant @ National University of Singapore'}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              As a teaching assistant, I prepare teaching materials, and hold
              recitations and lab sessions for undergraduate students. Modules I
              taught includes topics like Object-Oriented Programming, Software
              Engineering, Computer Organisation. These modules were taught in
              Java, C, and MIPS.
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              {'Software Engineer Intern @ Housing & Development Board'}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              I researched and prototyped solutions to better manage huge key
              inventories. In this period, I proposed a mobile application
              solution, and explored off-the-shelf solutions. The mobile
              application prototype was built with Flutter and Firebase.
              Additionally, I compiled and presented a vendor analysis.
            </Typography>
          </Collapse>
        </div>
        <div id="projects" className={classes.sectionRoot}>
          <div>
            <Typography variant="h3" className={classes.title} display="inline">
              My Projects
            </Typography>
            <Typography
              variant="body1"
              className={classes.title}
              display="inline"
            >
              <Linked onClick={() => setShowAllProjects(!showAllProjects)}>
                {!showAllProjects ? 'Show More' : 'Show Less'}
              </Linked>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className={classes.subtitle}>
              My Very Own Link Shortener
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              This is a simple link shortener application I have built to
              disseminate my personal dynamic links. An example shortened link
              is https://go.kylerwong.dev/linkedin, which deterministically
              redirects to my LinkedIn profile. Anyway, the source code is
              public and can be found{' '}
              <Linked href="https://github.com/kylerwsm/lambda-links">
                here
              </Linked>
              .
            </Typography>
          </div>
          <Collapse in={showAllProjects}>
            <div></div>
          </Collapse>
        </div>
        <div id="education" className={classes.sectionRoot}>
          <div>
            <Typography variant="h3" className={classes.title} display="inline">
              My Education
            </Typography>
            <Typography
              variant="body1"
              className={classes.title}
              display="inline"
            >
              <Linked onClick={() => setShowAllEducation(!showAllEducation)}>
                {!showAllEducation ? 'Show More' : 'Show Less'}
              </Linked>
            </Typography>
          </div>
          <div>
            <Typography variant="h5" className={classes.subtitle}>
              {'Computer Science @ National University of Singapore'}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              I pursued my honours degree in NUS in the 2017 to 2021 period.
              Over these years, apart from studying really hard and balancing my
              school-life balance, I also participated in a wide range of
              activities, picking up roles such as Teaching Assistant, Student
              Orientation Leader, and Student Volunteer.
            </Typography>
          </div>
          <Collapse in={showAllEducation}>
            <Typography variant="h5" className={classes.subtitle}>
              {'Winter School @ Hanyang University'}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              I participated in the Hanyang Winter School Programme 2019/2020
              held in Seoul, South Korea. Over there, I experienced how learning
              is like outside of my comfort zone.
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
              {'Aerospace Engineering @ Temasek Polytechnic'}
            </Typography>
            <Typography variant="body1" className={classes.subtitle}>
              I pursued my diploma in Temasek Polytechnic in the 2012 to 2015
              period. Over these years, I participated in various clubs which
              aligned with my interests, while holding Student Representative
              and Subcommittee roles.
            </Typography>
            <Typography variant="body1" className={classes.title}>
              <i>
                N.B.: I am a strong believer in education, as it hugely
                contributed to who I am today.
              </i>
            </Typography>
          </Collapse>
        </div>
      </main>

      <Footer />
    </Layout>
  )
}
