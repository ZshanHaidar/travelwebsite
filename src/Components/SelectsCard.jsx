import React from 'react'

const SelectsCard = (props) => {
  return (
    <div>
         <div className='relative w-full h-full object-cover'>
            <img className='w-full h-full object-cover' src={props.bg} alt="/" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full     '>
                <p className='absolute left-4 text-2xl font-bold bottom-4 text-white'>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default SelectsCard