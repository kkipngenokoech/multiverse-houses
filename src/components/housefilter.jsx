import { useNavigate } from "react-router-dom"

export default function HouseFilter({ allHouses }) {
    const navigate = useNavigate()
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((k) => k.country)))
    : []
    countries.unshift[null]

    function onSearchChange(event){
        const country = event.target.value
        navigate(`/searchresults/${country}`)
    }

  return (
  <div className="row mt-3">
        <div className="offset-md-2 col-md-4">
            look for your dream house in country:
        </div>
        <div className="col-md-4 mb-3">
            <select className="form-select" onChange={onSearchChange}>
                {countries.map((c)=>(
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))

                }
            </select>
        </div>
  </div>
  )
}
