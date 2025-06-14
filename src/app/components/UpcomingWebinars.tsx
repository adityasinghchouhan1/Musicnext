'use client'

import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'
const upcomingWebinarsdata = [
  {
    title: 'Mastering Classical Piano Techniques',
    description:
      'Explore advanced techniques and expressive tools to elevate your classical piano skills.',
    link: '/webinars/classical-piano',
  },
  {
    title: 'The Evolution of Jazz Improvisation',
    description:
      'Discover the history and key concepts behind jazz improvisation with live examples.',
    link: '/webinars/jazz-improvisation',
  },
  {
    title: 'Music Production with Ableton Live',
    description:
      'Learn the foundations of digital music production using industry-standard tools.',
    link: '/webinars/ableton-production',
  },
  {
    title: 'Vocal Mastery for Performers',
    description:
      'Build vocal strength, clarity, and stage presence with expert guidance.',
    link: '/webinars/vocal-mastery',
  },
  {
    title: 'Composing Music for Film',
    description:
      'Learn how to write emotionally compelling scores for visual media projects.',
    link: '/webinars/film-scoring',
  },
]

const UpcomingWebinars = () => {
  return (
    <div className="sm:p-12 p-8 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 sm:text-4xl tracking-tight text-white">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect items={upcomingWebinarsdata} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-block bg-transparent text-sm border-2 p-3 font-semibold font-serif rounded-full border-cyan-300 hover:scale-95 transition-transform duration-300 ease-in-out transform"
          >
            View All WEBINARS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
