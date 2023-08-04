import { useMemo } from "react"

export default function useFeaturedHouse(allHouses){
    const featuredHouse = useMemo(()=>{
        if (allHouses.length){
          const randomIndex = Math.floor(Math.random() * allHouses.length)
          return allHouses[randomIndex]
        }
      }, [allHouses])
      return featuredHouse
}