import React, { useState } from 'react';
import manImg from "../../assets/group(5).png"
import flagImg from '../../assets/Group(6).png'
import { toast } from 'react-toastify';
const PlayerCart = ({player,availableBalance,setAvailableBalance,
  purchasePlayer,setPurchasePlayer
}) => {
  const [isSelected,setIsSeleted] = useState(false)
  const handleSelected = (man)=>
  {
    

    const getNewBalance = parseInt(man.price.replace(/[^0-9]/g, ""));
  if(getNewBalance>availableBalance)
  {
    toast("you haven't enough money.")
    return;
  }
   setIsSeleted(true)
 
 setAvailableBalance(prev => prev - getNewBalance);
  setPurchasePlayer([...purchasePlayer,man])

  }
    return (
              <div className="card shadow-sm p-5 ">
  <figure>
  <img src={player.playerImage} alt="" className="w-full h-[300px] object-cover rounded-2xl" />
      
  </figure>
  <div className="card-body">

   <div className="flex items-center gap-3">
      <img src={manImg} alt="" className='max-w-[70px]'/>
       <p className="text-3xl font-bold">{player.playerName}</p>
   </div>

   <div className="flex  justify-between items-center border-b-2 border-gray-300 pb-3">
     <div className="flex gap-3">
       <img  src={flagImg} alt="" className="max-w-[30px]"/>
        <p className='text-[20px] text-gray-600'>{player.playerCountry}</p>
      </div>
    <button className='mybtn1 '>{player.playerRole}</button>
   </div>

   <div className="font-bold flex text-[20px] justify-between items-center">
        <p className="">Rating</p>
       <span className=''>{player.rating}</span>
   </div>

   <div className="flex justify-between items-center gap-18">
      <p className=" text-[20px] font-bold">{player.battingStyle}</p>
       <span className='text-[18px] text-gray-500'>{player.bowlingStyle}</span>
   </div>

   <div className="flex justify-between items-center ">
     <p className='text-[20px] font-bold'>Price : {player.price}</p>
    <button 
  disabled={isSelected} 
  onClick={() => handleSelected(player)} 
  className={`mybtn ${isSelected ? 'bg-gray-400 cursor-not-allowed opacity-50' : 'bg-yellow-400'}`}
>
  {isSelected ? "Selected" : "Choose player"}
</button>
   </div>
   
  </div>
</div>
    );
};

export default PlayerCart;