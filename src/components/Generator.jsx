import React, { useState } from 'react'
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
    const [showModal, setShowModal] = useState(false)
    const [type, setType] = useState("individual")
    const [muscles, setMuscles] = useState([])
    const [goal, setGoal] = useState("strength_power")

    function toggleModal () {
        setShowModal(!showModal)
    }

    return (
        <SectionWrapper header={"crea tu entrenamiento"} title={["Es", "hora", "de", "ponerse", "grande"]}>
            <Header index={"01"} title={"Entrenamiento"} description={"¿Cómo quién quieres entrenar?"}/>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.keys(WORKOUTS).map((workout, workoutIndex) => {
                    return (
                        <button onClick={() => {
                            setType(workout)
                        }} className={"bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg" + (type === workout ? " border-blue-600" : " border-blue-400")} key={workoutIndex}>                                                                               
                            <p className="capitalize">{workout.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={"02"} title={"Músculos"} description={"¿Qué músculos vas a endurecer?"}/>
            <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
                <button className="relative p-3 flex items-center justify-center" onClick={toggleModal}>
                    <p>Selecciona los grupos musculares que quieres trabajar</p>
                    <i className="fa-sharp fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                {showModal && (
                    <div className="flex flex-col px-3 pb-3">
                        {
                            (workout === "individual" ? WORKOUTS[workout] : Object.keys(WORKOUTS[workout])).map((workout, workoutIndex) => {})
                            //2:33:20
                        }
                    </div>
                )}
            </div> 
            <Header index={"03"} title={"Conviértete en la mejor versión de ti"} description={"¿A dónde quieres llegar?"}/>
            <div className="grid grid-cols-3 gap-4">
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={"bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg" + (goal === scheme ? " border-blue-600" : " border-blue-400")} key={schemeIndex}>                                                                               
                            <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>                   
        </SectionWrapper>
    )
}
