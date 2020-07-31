import React from 'react'

import useLayoutStyles from '../styles/layout.styles'
import Container from '@material-ui/core/Container'

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
