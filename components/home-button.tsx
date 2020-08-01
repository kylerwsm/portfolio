import Link from 'next/link'

import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: -12,
    marginRight: 16,
  },
}))

export default function HomeButton() {
  const classes = useStyles()
  return (
    <Link href="/">
      <IconButton className={classes.root}>
        <img src="/icons/bx-left-arrow-alt.svg" alt="Back" draggable={false} />
      </IconButton>
    </Link>
  )
}
