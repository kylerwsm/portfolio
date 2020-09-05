import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  root: {},
}))

export type SectionProps = {
  children?: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  const classes = useStyles()
  return <div className={classes.root}>{children}</div>
}

export default Section
