import React from 'react'

import useLayoutStyles from '../styles/layout.styles'

export type LayoutProps = {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const classes = useLayoutStyles()
  return <div className={classes.root}>{props.children}</div>
}
