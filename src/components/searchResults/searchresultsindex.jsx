import { useParams } from "react-router-dom";
import SearchResultRow from "./searchresultsrow";

export default function SearchResults({allHouses}){
    const { country } = useParams()
    const filteredHouses = allHouses.filter((h)=> h.country === country)
    return (
        <div className="mt-2">
            <h4>Results for {country}:</h4>
            <table className="table table-hover">
                <tbody>
                    {filteredHouses.map((h)=>(
                        <SearchResultRow key={h.id} house={h}/>
                    ))

                    }
                </tbody>
            </table>
        </div>
    )
}