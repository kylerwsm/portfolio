import React from 'react'

import Container from '@material-ui/core/Container'

import useLayoutStyles from '../styles/layout.styles'

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
