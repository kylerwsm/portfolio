import React from 'react'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useLayoutStyles = makeStyles((theme) => ({
  root: {
    width: 'unset',
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 32,
      paddingRight: 32,
    },
  },
}))

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const classes = useLayoutStyles()
  return (
    <Container maxWidth="md" className={classes.root}>
      {props.children}
    </Container>
  )
}
