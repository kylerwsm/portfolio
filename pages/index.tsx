import React from 'react'
import Link from 'next/link'

import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import Linked from '../components/linked'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Section from '../components/sections/section'
import SectionTitle from '../components/sections/section-title'
import SectionBody from '../components/sections/section-body'

import useHomeStyles from '../styles/home.styles'

export default function Home() {
  const classes = useHomeStyles()
  const [showAllExperience, setShowAllExperience] = React.useState(false)
  const [showAllProjects, setShowAllProjects] = React.useState(false)
  const [showAllEducation, setShowAllEducation] = React.useState(false)
  const toggle = ({
    openExperience = false,
    openProjects = false,
    openEducation = false,
  }: {
    openExperience?: boolean
    openProjects?: boolean
    openEducation?: boolean
  }) => {
    setShowAllExperience(openExperience)
    setShowAllProjects(openProjects)
    setShowAllEducation(openEducation)
  }
  return (
    <Layout>
      <main>
        <div id="introduction">
          <div id="title" className={classes.appTitle}>
            <Typography variant="h1" gutterBottom data-aos="fade-left">
              Hello,
            </Typography>
            <Typography variant="h3" data-aos="fade-up">
              My name is Kyler Wong.
            </Typography>
          </div>
          <img
            src="/images/profile-image.jpg"
            alt="Kyler Wong"
            draggable={false}
            className={classes.profile}
            data-aos="fade-up"
          />
        </div>
        <div id="about" className={classes.sectionRoot}>
          <Typography variant="h3" className={classes.title}>
            About Me
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            I am a final year computing student at the National University of
            Singapore. As a tech enthusiast, I find myself spending a chunk of
            my time learning and developing arbitrary apps with new tech stacks.
            Weird how building things out of nothing brings me joy. I am also a
            believer of ethical and collaborative programming, and am constantly
            looking for opportunities to make a change the digital way. When I
            am not programming, you might find me contributing to{' '}
            <Linked href="https://dsc.comp.nus.edu.sg/">#techforgood</Linked>,
            cooking my favourite dishes, or jogging really slowly.
          </Typography>
        </div>
        <div id="experience" className={classes.sectionRoot}>
          <Collapse in={showAllExperience}>
            <Divider className={classes.divider} />
          </Collapse>
          <Typography variant="h3" className={classes.title} display="inline">
            My Experience
          </Typography>
          <Typography
            variant="body1"
            className={classes.title}
            display="inline"
          >
            <Linked
              underline="none"
              onClick={() => toggle({ openExperience: !showAllExperience })}
            >
              {!showAllExperience ? 'Show More' : 'Show Less'}
            </Linked>
          </Typography>
          <div>
            <Section>
              <SectionTitle>Software Engineer Intern @ Ninja Van</SectionTitle>
              <SectionBody>
                Supported and facilitated the backend development of new highly
                scalable and reliable microservices. These microservices are
                responsible for delivering and customising real-time shipping
                updates to shippers and consignees in the region.
              </SectionBody>
            </Section>
            <Section>
              <SectionTitle>
                Software Engineer Intern @ Open Government Products
              </SectionTitle>
              <SectionBody>
                Hugely contributed to the revamp and open-sourcing of{' '}
                <Linked href="https://go.gov.sg">Go.gov.sg</Linked>, the
                official link shortener for the Singapore government.
                Additionally, initiated and oversaw improvements, such as the
                link analytics feature, and TypeScript and React hooks migration
                for better application robustness.
              </SectionBody>
            </Section>
          </div>
          <Collapse in={showAllExperience}>
            <Section>
              <SectionTitle>
                Teaching Assistant @ National University of Singapore
              </SectionTitle>
              <SectionBody>
                Prepared teaching materials, and held recitations and lab
                sessions for undergraduate students. Modules I taught includes
                topics like Object-Oriented Programming, Software Engineering,
                and Computer Organisation. These modules were taught in Java, C,
                and MIPS.
              </SectionBody>
            </Section>
            <Section>
              <SectionTitle>
                Software Engineer Intern @ Housing & Development Board
              </SectionTitle>
              <SectionBody>
                I researched and prototyped solutions to better manage huge key
                inventories. In this period, I proposed a mobile application
                solution, and explored off-the-shelf solutions. The mobile
                application prototype was built with Flutter and Firebase.
                Additionally, I compiled and presented a vendor analysis.
              </SectionBody>
            </Section>
          </Collapse>
          <Collapse in={showAllExperience}>
            <Divider className={classes.divider} />
          </Collapse>
        </div>
        <div id="projects" className={classes.sectionRoot}>
          <Collapse in={showAllProjects}>
            <Divider className={classes.divider} />
          </Collapse>
          <Typography variant="h3" className={classes.title} display="inline">
            My Projects
          </Typography>
          <Typography
            variant="body1"
            className={classes.title}
            display="inline"
          >
            <Linked
              underline="none"
              onClick={() => toggle({ openProjects: !showAllProjects })}
            >
              {!showAllProjects ? 'Show More' : 'Show Less'}
            </Linked>
          </Typography>
          <div>
            <Section>
              <SectionTitle>My Very Own Link Shortener</SectionTitle>
              <SectionBody>
                This is a simple link shortener application I have built to
                disseminate my personal dynamic links. An example shortened link
                is{' '}
                <Linked href="https://go.kylerwong.dev/linkedin">
                  https://go.kylerwong.dev/linkedin
                </Linked>
                , which deterministically redirects to my LinkedIn profile. Find
                out more about it on{' '}
                <Link href="/go">
                  <MuiLink>this page</MuiLink>
                </Link>
                . Anyway, the source code is also public and can be found on my{' '}
                <Linked href="https://github.com/kylerwsm/lambda-links">
                  GitHub
                </Linked>
                .
              </SectionBody>
            </Section>
          </div>
          <Collapse in={showAllProjects}>
            <div></div>
          </Collapse>
          <Collapse in={showAllProjects}>
            <Divider className={classes.divider} />
          </Collapse>
        </div>
        <div id="education" className={classes.sectionRoot}>
          <Collapse in={showAllEducation}>
            <Divider className={classes.divider} />
          </Collapse>
          <Typography variant="h3" className={classes.title} display="inline">
            My Education
          </Typography>
          <Typography
            variant="body1"
            className={classes.title}
            display="inline"
          >
            <Linked
              underline="none"
              onClick={() => toggle({ openEducation: !showAllEducation })}
            >
              {!showAllEducation ? 'Show More' : 'Show Less'}
            </Linked>
          </Typography>
          <div>
            <Section>
              <SectionTitle>
                Computer Science @ National University of Singapore
              </SectionTitle>
              <SectionBody>
                I pursued my NUS Computing degree with Honours over the 2017 to
                2021 period. In these years, apart from studying really hard and
                coping with school-life imbalance, I also participated in a wide
                range of activities, picking up roles such as Teaching
                Assistant, Student Orientation Leader, and Student Volunteer.
              </SectionBody>
            </Section>
            <Section>
              <SectionTitle>Winter School @ Hanyang University</SectionTitle>
              <SectionBody>
                I participated in the Hanyang Winter School Programme 2019/2020
                held in Seoul, South Korea. Over there, I experienced how
                learning is like outside of my comfort zone.
              </SectionBody>
            </Section>
          </div>
          <Collapse in={showAllEducation}>
            <Section>
              <SectionTitle>
                Aerospace Engineering @ Temasek Polytechnic
              </SectionTitle>
              <SectionBody>
                I pursued my diploma in Temasek Polytechnic in the 2012 to 2015
                period. Over these years, I participated in various clubs which
                aligned with my interests, while holding Student Representative
                and Subcommittee roles.
              </SectionBody>
            </Section>
          </Collapse>
          <Collapse in={showAllEducation}>
            <Divider className={classes.divider} />
          </Collapse>
        </div>
      </main>

      <Footer />
    </Layout>
  )
}
