import React from 'react'

import Typography, { TypographyProps } from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 16,
    marginBottom: 16,
    '&:last-child': {
      marginBottom: 0,
    },
  },
}))

export type SectionBodyProps = TypographyProps

const SectionBody = (props: SectionBodyProps) => {
  const classes = useStyles()
  return (
    <Typography variant="body1" className={classes.root}>
      {props.children}
    </Typography>
  )
}

export default SectionBody
