import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/yuca'

function Header(props) {
    const {index, title, description} = props
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center gap-2">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-slate-400">{index}</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
            </div>
            <p className="text-sm sm:text-base mx-auto">{description}</p>
        </div>
    )
}

export default function Generator() {
  return (
    <SectionWrapper header={"crea tu entrenamiento"} title={["Es", "hora", "de", "ponerse", "grande"]}>
        <Header index={"01"} title={"Elige de los siguientes"} description={"Selecciona el entrenamiento que deseas hacer"}/>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.keys(WORKOUTS).map((workout, workoutIndex) => {
                return (
                    <button key={workoutIndex} className="bg-slate-950 border border-blue-400 py-4 rounded">
                        <p>{workout}</p>
                    </button> //still needs to finish decorating the button, closed the window earlier than expected
                )
            })}
        </div>
        
        
    </SectionWrapper>
  )
}
