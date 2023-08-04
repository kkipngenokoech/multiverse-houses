import { useNavigate } from 'react-router-dom'
import './searchresults.css'

export default function SearchResultRow({house}){
    const navigate = useNavigate()
    function setActive(){
        navigate(`/house/${house.id}`)
    }
    return (
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{house.price}</td>
            <td>{house.likes}</td>
        </tr>
    )
}