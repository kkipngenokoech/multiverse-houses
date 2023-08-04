import { useEffect, useState } from "react"

export default function useHouses(){
    const [allHouses, setAllHouses] = useState([])
    useEffect(()=>{
        const fetchHouses = async () => {
        const response = await fetch('/src/houses.json')
        const houses = await response.json()
        console.log(houses)
        setAllHouses(houses)
        }
        fetchHouses()
    },[])
    return allHouses
}