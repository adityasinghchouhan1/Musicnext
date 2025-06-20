'use client'
import React from 'react'
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card'
import Cdata from '../data/music_courses.json'

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-5xl font-semibold font-serif text-center py-1 font-stretch-condensed mb-8">
        All Courses ({Cdata.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {Cdata.courses.map((course, id) => (
          <CardContainer key={id} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                <img
                  src={course.image.toString()}
                  alt="images"
                  className="h-60 w-full object-cover rounded-xl"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>

              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default page
