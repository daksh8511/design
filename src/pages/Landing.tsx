import SearchBar from "@/commonComponent/SearchBar"
import { Skeleton } from "@/components/ui/skeleton"

import first from '@/assets/first.jpg'
import second from '@/assets/second.jpg'
import third from '@/assets/third.jpg'
import four from '@/assets/four.jpg'
import { useEffect, useState } from "react"

interface ImageDataType {
  id: number,
  title: string,
  url: string
}

const Landing = () => {
  const [images, setImages] = useState<ImageDataType[]>([])

  useEffect(() => {
    setTimeout(() => {
      setImages([
        {
          id: 1,
          title: "Goku with vegeta fight",
          url: first
        },
        {
          id: 2,
          title: "Little goku with dragon",
          url: second
        },
        {
          id: 3,
          title: "Prime vegeta",
          url: third
        },
        {
          id: 4,
          title: "Dramer goku wish to dragon",
          url: four
        },
        {
          id: 5,
          title: "Super goku",
          url: second
        },
        {
          id: 6,
          title: "New goku with vegeta",
          url: first
        },
        {
          id: 7,
          title: "Goku with vegeta fight",
          url: third
        },
        {
          id: 8,
          title: "Goku with vegeta fight",
          url: second
        },
      ])
    }, 3000);
  }, [])
  return (
    <div className="mt-2.5">
      <SearchBar />

      {
        images?.length === 0 ? <>
          <div className="flex space-x-5 mt-4">
            <Skeleton className="h-100 w-170 rounded-xl" />
            <Skeleton className="h-100 w-full rounded-xl" />
          </div>
          <div className="flex space-x-5 mt-4">
            <Skeleton className="h-100 w-full rounded-xl" />
            <Skeleton className="h-100 w-full rounded-xl" />
          </div>
          <div className="flex space-x-5 mt-4">
            <Skeleton className="h-100 w-170 rounded-xl" />
            <Skeleton className="h-100 w-full rounded-xl" />
          </div>
          <div className="flex space-x-5 mt-4">
            <Skeleton className="h-100 w-full rounded-xl" />
            <Skeleton className="h-100 w-full rounded-xl" />
          </div>
          <div className="flex space-x-5 mt-4">
            <Skeleton className="h-100 w-170 rounded-xl" />
            <Skeleton className="h-100 w-full rounded-xl" />
          </div>
          <div className="flex space-x-5 mt-4">
            <Skeleton className="h-100 w-full rounded-xl" />
            <Skeleton className="h-100 w-full rounded-xl" />
          </div>
        </> : (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-4">
            {

              images?.map((myimg) => {
                return (
                  <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                    <img
                      className="w-full rounded-lg"
                      src={myimg?.url}
                      alt="images"
                    />

                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Text */}
                    <div className="absolute bottom-3 left-4 text-white font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                      {myimg.title}
                    </div>
                  </div>

                )
              })
            }
          </div>
        )
      }
    </div>)
}

export default Landing