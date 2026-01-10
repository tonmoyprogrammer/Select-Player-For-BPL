import React, { useState } from 'react';
import PurchasePlayer from './purchasePlayer';
import AvailablePlayers from '../availablePlayers/availablePlayers';
import PlayerCart from '../playerCart/playerCart';

const SelectedPlayers = ({players, removePurchasePlayer,setToggle}) => {
    return (
        <div className=' w-[1200px] mx-auto'>
            {
                players.map(player=><PurchasePlayer player={player}
                 removePurchasePlayer={ removePurchasePlayer}
                 ></PurchasePlayer>)
            }
            
            <button  onClick={()=>setToggle(true)}
            className="btn mt-5 py-4 px-7  text-center bg-amber-400 rounded-3xl">Add more players</button>
        </div>
      
       
    );
};

export default SelectedPlayers;