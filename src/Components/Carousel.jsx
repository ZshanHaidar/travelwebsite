import React,{useState} from 'react'

import BoraBora from '../Assets/borabora.jpg'
import BoraBora2 from '../Assets/borabora2.jpg'
import Maldives from '../Assets/maldives.jpg'
import Maldives2 from '../Assets/maldives2.jpg'
import Maldives3 from '../Assets/maldives3.jpg'
import Keywest from '../Assets/keywest.jpg'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill,  } from 'react-icons/bs'


const sliderData=[
    {sliderpic:BoraBora},
    {sliderpic:BoraBora2},
    {sliderpic:Maldives},
    {sliderpic:Maldives2},
    {sliderpic:Maldives3},
    {sliderpic:Keywest},
]


const Carousel = () => {
    const [slide, setSlide] = useState(5);
    const length = sliderData.length


    const prevSlide = () =>{
        setSlide(slide === length -1 ? 0:slide+1)
    }
    const nextSlide = () =>{
        setSlide(slide === 0? length -1 :slide-1)
    }

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 flex justify-center items-center relative'>
        <BsArrowLeftSquareFill onClick={prevSlide} className='absolute left-8  text-white text-3xl cursor-pointer' />
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute  right-8 text-3xl text-white cursor-pointer' />
        {sliderData.map((items,index)=>{
          return  <div className={index ===slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (<img className='w-full rounded-md' src={items.sliderpic} alt="/" />)}
            </div>
        })}
    </div>
  )
}

export default Carousel