import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Name = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 text-6xl">{children}</h1>
  )
}

export default Name