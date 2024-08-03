import React from 'react'

export default function SectionWrapper(props) {
    const {children, header, title, id} = props
  return (
    <section id ={id} className="min-h-screen flex flex-col gap-10 items-center">
        <div className="bg-slate-950 py-10 flex flex-col gap-2 justifi-center items-center p-4 w-full">
            <p className="uppercase font-md">{header}</p>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{title[0]} {title[1]} {title[2]} <span className="uppercase text-blue-400">{title[3]} {title[4]}</span></h2>
        </div>
        <div className="max-w-[800px] flex flex-col mz-auto gap-10 p-4">
            {children}
        </div>
    </section>
  )
}
