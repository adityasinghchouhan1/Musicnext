'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from ".././utils/utils";


const musicCardData = [
  {
    quote: "Music is the divine way to tell beautiful, poetic things to the heart. It bypasses reason and goes straight to the soul, unlocking emotions we didn’t know we had.",
    name: "Pablo Casals",
    title: "Cellist & Composer"
  },
  {
    quote: "One good thing about music, when it hits you, you feel no pain. It becomes a balm for the soul, healing invisible wounds and giving strength in silence.",
    name: "Bob Marley",
    title: "Musician & Reggae Icon"
  },
  {
    quote: "Without music, life would be a mistake. It gives meaning to moments, fills the void of silence, and reminds us that beauty exists even in chaos.",
    name: "Friedrich Nietzsche",
    title: "Philosopher"
  },
  {
    quote: "Where words fail, music speaks. It carries the weight of emotions too complex to verbalize, painting feelings with melody and rhythm.",
    name: "Hans Christian Andersen",
    title: "Author & Poet"
  },
  {
    quote: "Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything. It is the heartbeat of existence, timeless and universal.",
    name: "Plato",
    title: "Greek Philosopher"
  },
  {
    quote: "The only truth is music. It cuts through illusion, speaks a universal language, and connects us to something eternal and pure.",
    name: "Jack Kerouac",
    title: "Novelist & Poet"
  },
  {
    quote: "Music can change the world because it can change people. It stirs the spirit, uplifts the oppressed, and unites us in ways no speech ever could.",
    name: "Bono",
    title: "Lead Singer of U2"
  }
];

const MSchoolTesimonialCards = () => {
  return (
    <>
       <div className="relative flex h-[35rem] w-full items-center justify-center bg-white dark:bg-black">

   <div className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] pt-28",
        )}>
       <h2 className="text-3xl font-bold text-center mb-8">Hear Our Harmony: Voice Of Success</h2>
     <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
       <div className="w-full max-w-6xl">
        <InfiniteMovingCards items={musicCardData} direction="right"
        speed="slow"/>
      </div></div>
   </div>
    </div>
    </>
  )
}

export default MSchoolTesimonialCards