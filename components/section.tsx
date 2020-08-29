import React from 'react'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'
import { LeftFadeBody, LeftFadeTitle } from './left-fade'

const useStyles = makeStyles(() => ({
  subtitle: {
    marginTop: 16,
    marginBottom: 16,
    '&:last-child': {
      marginBottom: 0,
    },
  },
}))

export type SectionProps = {
  title: React.ReactChild
  content: React.ReactChild
}

const Section = ({ title, content }: SectionProps) => {
  const classes = useStyles()
  return (
    <div>
      <LeftFadeTitle>
        <Typography variant="h5" className={classes.subtitle}>
          {title}
        </Typography>
      </LeftFadeTitle>
      <LeftFadeBody>
        <Typography variant="body1" className={classes.subtitle}>
          {content}
        </Typography>
      </LeftFadeBody>
    </div>
  )
}

export default Section
