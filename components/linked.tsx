import Link, { LinkProps } from '@material-ui/core/Link'

export default function Linked(props: LinkProps) {
  return (
    <Link target="_blank" {...props}>
      {props.children}
    </Link>
  )
}
