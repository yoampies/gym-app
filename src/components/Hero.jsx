import React from 'react'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center 
    max-w-[800px] w-full mx-auto p-4">
        <div className="flex flex-col gap-4">
            <p>Es momento de ponerse</p>
            <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Yu<span className="text-blue-400">ca</span></h1>
        </div>
        <p className="text-sm md:text-base font-light">A traves de la presente reconozco que puedo volverme 
            <span className='text-blue-400 font-medium'>increíblemente deslumbrante</span> y acepto todos los riesgos de convertirme en el 
            <span className='text-blue-400 font-medium'>montrosidad masiva local</span>
            , afectado por una dismorfia corporal severa, incapaz de pasar por las puertas.</p>
        <button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200"> 
            <p>Aceptar y empezar</p>
        </button>
       
    </div>
  )
}
