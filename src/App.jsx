import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayers from './components/availablePlayers/availablePlayers';
import NavBar from './components/NavBar/navBar';
import SelectedPlayers from './components/SelectedPLayers/selectedPlayers';

const fetchPlayers = async()=>
{
  const res = await fetch("/players.json")
  return res.json();
}

function App() {
  const[toggle,setToggle] = useState(true);
 
  const getFetchPlayers = fetchPlayers();
  return (
    <>
   
   <NavBar></NavBar>
   <div className="max-w-[1200px] mx-auto border-2 border-red-300
    flex justify-between items-center">
    <h1 className="font-bold text-2xl">Avaiable</h1>

    <div className="font-bold">
      <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-r-0
       border-gray-400
       rounded-l-2xl   ${toggle == true ? "bg-[#E7FE29]":""}`}>Avaiable</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 rounded-r-2xl rounded-l-0
       border-gray-400 border-l-0  ${toggle == false ? "bg-[#E7FE29]":""}`}>Selected <span>(0)</span></button>
    </div>
   </div>
   {
     toggle == true? <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
    <AvailablePlayers getPlayers={getFetchPlayers}></AvailablePlayers>
   </Suspense>:   <SelectedPlayers></SelectedPlayers>
   }

   




    </>
  )
}

export default App;
