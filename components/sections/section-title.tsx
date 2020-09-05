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

export type SectionTitleProps = TypographyProps

const SectionTitle = (props: SectionTitleProps) => {
  const classes = useStyles()
  return (
    <Typography variant="h5" className={classes.root} {...props}>
      {props.children}
    </Typography>
  )
}

export default SectionTitle
