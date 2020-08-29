import React from 'react'

export type LeftFadeProps = React.HTMLAttributes<HTMLDivElement>

export const LeftFadeHeader = (props: LeftFadeProps) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="300"
      {...props}
    >
      {props.children}
    </div>
  )
}

export const LeftFadeTitle = (props: LeftFadeProps) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-duration="700"
      {...props}
    >
      {props.children}
    </div>
  )
}

export const LeftFadeBody = (props: LeftFadeProps) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
      {...props}
    >
      {props.children}
    </div>
  )
}
