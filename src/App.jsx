import { Suspense } from 'react';
import './App.css'
import AvailablePlayers from './components/availablePlayers/availablePlayers';
import NavBar from './components/NavBar/navBar';

const fetchPlayers = async()=>
{
  const res = await fetch("/players.json")
  return res.json();
}

function App() {
 
  const getFetchPlayers = fetchPlayers();
  return (
    <>
   
   <NavBar></NavBar>
   <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
    <AvailablePlayers getPlayers={getFetchPlayers}></AvailablePlayers>
   </Suspense>

    </>
  )
}

export default App;
