import { Suspense, useState } from 'react';
import './App.css'
import AvailablePlayers from './components/availablePlayers/availablePlayers';
import NavBar from './components/NavBar/navBar';
import SelectedPlayers from './components/SelectedPLayers/selectedPlayers';
  import { ToastContainer} from 'react-toastify';



const fetchPlayers = async()=>
{
  const res = await fetch("/players.json")
  return res.json();
}

function App() {
  const[toggle,setToggle] = useState(true);

  const [availableBalance,setAvailableBalance] = useState(200000)
  const [purchasePlayer,setPurchasePlayer] = useState([])

  const removePurchasePlayer = (pPlayer)=>
  {
     const removePlayerData = purchasePlayer.filter(player=> 
      player.playerName !== pPlayer.playerName)
      setPurchasePlayer(removePlayerData)
         const getNewBalance = parseInt(pPlayer.price.replace(/[^0-9]/g, ""));
         setAvailableBalance(availableBalance+getNewBalance)
  }
  const getFetchPlayers = fetchPlayers();
  return (
    <>
   
   <NavBar availableBalance={availableBalance}></NavBar>

   <div className="max-w-[1200px] mx-auto
    flex justify-between items-center">
    <h1 className="font-bold text-2xl">{toggle?"Avaiable":`Selected ${purchasePlayer.length}/6`}</h1>

    <div className="font-bold">
      <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-r-0
       border-gray-400
       rounded-l-2xl   ${toggle == true ? "bg-[#E7FE29]":""}`}>Available</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 rounded-r-2xl rounded-l-0
       border-gray-400 border-l-0  ${toggle == false ? "bg-[#E7FE29]":""}`}>Selected <span>
        {purchasePlayer.length}</span></button>
    </div>
   </div>
   {
     toggle == true? <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
    <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} getPlayers={getFetchPlayers}
    purchasePlayer={purchasePlayer} setPurchasePlayer={setPurchasePlayer}
   ></AvailablePlayers>
   </Suspense>:<SelectedPlayers players={purchasePlayer}
   removePurchasePlayer={removePurchasePlayer}
   ></SelectedPlayers>
   }

   


   <ToastContainer/>

    </>
  )
}

export default App;
