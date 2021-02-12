import React from 'react'

import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
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
  const [showAllEducation, setShowAllEducation] = React.useState(false)
  const toggle = ({
    openExperience = false,
    openEducation = false,
  }: {
    openExperience?: boolean
    openProjects?: boolean
    openEducation?: boolean
  }) => {
    setShowAllExperience(openExperience)
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
            cooking my favourite dishes, or doing light exercises.
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
                Developed a new Golang micro-service to centralise customers’
                shipping notifications preferences. Introduced containerised
                integration testing into the existing Golang workflow. Improved
                existing internal products and workflow with the use of React,
                ELK, and Kubernetes.
              </SectionBody>
            </Section>
            <Section>
              <SectionTitle>
                Software Engineer Intern @ Open Government Products
              </SectionTitle>
              <SectionBody>
                Primary contributor to the revamp and open-source of{' '}
                <Linked href="https://go.gov.sg">Go.gov.sg</Linked>, the
                official link shortener for the Singapore government. Initiated
                and oversaw multiple features and improvements, including the
                implementation and integration of the link analytics feature.
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
                Researched and prototyped solutions to better manage huge key
                inventories. Proposed a prototyped mobile application solution,
                and sourced for other off-the-shelf solutions. Compiled and
                presented a vendor analysis and how they compare to in-house
                development.
              </SectionBody>
            </Section>
          </Collapse>
          <Collapse in={showAllExperience}>
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
                I was studying in the National University of Singapore over the
                2017 to 2021. Outside of studying really hard with minimal me
                time, I picked up roles in meaningful and ennriching activities.
                Some of these roles include Teaching Assistant, Student
                Orientation Leader, and Student Volunteer positions.
              </SectionBody>
            </Section>
            <Section>
              <SectionTitle>Winter School @ Hanyang University</SectionTitle>
              <SectionBody>
                I was an exchange student for the Hanyang Winter School
                Programme 2019/2020 in Seoul, South Korea. My relevant
                coursework are ISS1076 Digital Studio and ISS1132 Ceramic
                Practice.
              </SectionBody>
            </Section>
          </div>
          <Collapse in={showAllEducation}>
            <Section>
              <SectionTitle>
                Aerospace Engineering @ Temasek Polytechnic
              </SectionTitle>
              <SectionBody>
                I was studying in Temasek Polytechnic over 2012 to 2015. Outside
                of academics, I participated in activities and clubs that
                interests me. I represented the polytechnic for Polytechnic
                Forum 2013, was subcommittee member at Temasek Polytechnic
                International Students&apos; Group, and was an active member at
                Temasek Polytechnic Visual Central.
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
