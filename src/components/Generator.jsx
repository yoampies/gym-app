import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import Button from './Button'
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

export default function Generator(props) {
    const {showModal, poison, muscles, goal, 
            setShowModal, setPoison, setMuscles, setGoal,
            updateWorkout} = props
    function toggleModal () {
        setShowModal(!showModal)
    }

    function updateMuscles (muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }
        if (muscles.length > 2) {
            return
        }
        if (poison !== "individual") {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }
    } 

    return (
        <SectionWrapper id={"generate"} header={"crea tu entrenamiento"} title={["Es", "hora", "de", "ponerse", "grande"]}>
            <Header index={"01"} title={"Entrenamiento"} description={"¿Cómo quién quieres entrenar?"}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {Object.keys(WORKOUTS).map((workout, workoutIndex) => {
                    return (
                        <button onClick={() => {
                            setPoison(workout)
                            setMuscles([])
                        }} className={"bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg" + (poison === workout ? " border-blue-600" : " border-blue-400")} key={workoutIndex}>                                                                               
                            <p className="capitalize">{workout.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>
            <Header index={"02"} title={"Músculos"} description={"¿Qué músculos vas a endurecer?"}/>
            <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
                <button className="relative p-3 flex items-center justify-center" onClick={toggleModal}>
                    <p className="capitalize">{muscles.length == 0 ? "Selecciona los grupos musculares que quieres trabajar" : muscles.join(" ")}</p>
                    <i className="fa-sharp fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                {showModal && (
                    <div className="flex flex-col px-3 pb-3">
                        {
                            (poison === "individual" ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                                return (
                                    <button className={"hover:text-blue-400 duration-200"  + (muscles.includes(muscleGroup) ? " text-blue-400" : "")} key={muscleGroupIndex}
                                     onClick={() => {updateMuscles(muscleGroup)}}>
                                        <p className="capitalize">{muscleGroup.replaceAll("_", " ")}</p>
                                    </button>
                                )
                            })
                        }
                    </div>
                )}
            </div> 
            <Header index={"03"} title={"Conviértete en la mejor versión de ti"} description={"¿A dónde quieres llegar?"}/>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button onClick={() => {
                            setGoal(scheme)
                        }} className={"bg-slate-950 border duration-200 px-4 hover:border-blue-600 py-3 rounded-lg" + (goal === scheme ? " border-blue-600" : " border-blue-400")} key={schemeIndex}>                                                                               
                            <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
                        </button>
                    )
                })}
            </div>   
            <Button func={updateWorkout} text="Formular"/>                
        </SectionWrapper>

    )
}
