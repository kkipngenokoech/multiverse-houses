import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import FeaturedHouse from './components/featuredhouse'
import SearchResults from './components/searchResults/searchresultsindex'
import HouseFilter from './components/housefilter'
import HousefromQuery from './components/searchResults/housefromquery'
import useHouses from './components/hooks/useHouses'
import useFeaturedHouse from './components/hooks/useFeaturedHouse'

function App() {
  const allHouses = useHouses()
  const featuredHouse = useFeaturedHouse(allHouses)
  return (
    <Router>
      <div className='container'>
        <Header subtitle="providing houses all over the world" title = "multiverseK"/>
        <HouseFilter allHouses={allHouses}/>
      </div>
      <Routes>
        <Route exact path='/' element= {<FeaturedHouse house={featuredHouse}/>}/>
        <Route path='/searchresults/:country' element= {<SearchResults allHouses={allHouses}/>}/>
        <Route  path='/house/:id' element= {<HousefromQuery allHouses={allHouses}/>}/>
      </Routes>
    </Router>
  )
}

export default App
