import React from 'react'

const BreadCrumbs = ({dynamicText}:any) => {
  return (
    <section className="uper-section">
      <h1 className="font-black text-[40px]">{dynamicText}</h1>
      <p>Home/ {dynamicText}</p>
    </section>
   
  )
}

export default BreadCrumbs;