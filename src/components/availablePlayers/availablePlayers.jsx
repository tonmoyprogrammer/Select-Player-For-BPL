import React, { use } from 'react';
import'./avaiablePlayers.css'
import manImg from '../../assets/group(5).png'
import flagImg from '../../assets/Group(6).png'
const AvailablePlayers = ({getPlayers}) => {

    const getPromise = use(getPlayers)
    

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4' >
          {
            getPromise.map(player=><div className="card shadow-sm p-5 ">
  <figure>
  <img src={player.playerImage} alt="" className="w-full h-[300px] object-cover rounded-2xl" />
      
  </figure>
  <div className="card-body">

   <div className="flex items-center gap-3">
      <img src={manImg} alt="" className='max-w-[70px]'/>
       <p className="text-3xl font-bold">{player.playerName}</p>
   </div>

   <div className="flex  justify-between items-center">
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
     <button className='mybtn'>Choose Player</button>
   </div>
   
  </div>
</div>
)
          }
  
        </div>
    );
};

export default AvailablePlayers;