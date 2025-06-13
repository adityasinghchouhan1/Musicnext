import Link from 'next/link'
import CData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'

 interface Course{
   id: number,
        title: String,
        slug: String,
        description: String,
        price:number,
        instructor: String,
        isFeatured: boolean,
}

const FeacturesCourses = () => {
 
 const fcourses= CData.courses.filter((course:Course)=>course.isFeatured )
  
  return (
    <>
    <div className='py-12 bg-gray-900'>
      <div>
        <div className="text-center">
          <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED COURSES</h2>
          <p className='mt-2 text-3xl leading-8 sm:text-4xl tracking-tight text-white'>Learn With The Best</p>
        </div>
      </div>
      <div className='mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
        {fcourses.map((course:Course)=>(<div className='flex justify-center' key={course.id}>
          <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
              <p>{course.title}</p>
              <p>{course.description}</p>
            </div>
          </BackgroundGradient>
        </div>) )}
      </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href={'/courses'} className='bg-white'>
        View All Courses</Link>
        </div></div></>
  )
}

export default FeacturesCourses