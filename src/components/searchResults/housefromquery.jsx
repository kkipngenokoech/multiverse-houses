import { useParams } from "react-router-dom";
import House from "../house/indexHouse";

export default function HousefromQuery({allHouses}){
    const { id } = useParams()
    const house = allHouses.find((house)=> house.id === parseInt(id))

    return  house? (
                <House house={house} />
            ):
            (
            <div>
                house not found
            </div>
            )

}