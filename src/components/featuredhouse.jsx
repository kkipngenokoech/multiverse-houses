import House from "./house/indexHouse"

const FeaturedHouse = ({house}) => {
    return (
        <div>
            {house?(
                <div>
                    <div className="row featuredHouse">
                        <h3 className="col-md-12 text-center">Featured House</h3>
                    </div>
                    <House house={house}/>
                </div>
        
            ):
            (
            <div>No featured house at this time</div>
        )
        }
    </div>
    )
}
 
export default FeaturedHouse