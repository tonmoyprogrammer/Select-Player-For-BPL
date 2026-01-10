import React, { use } from 'react';
import'./avaiablePlayers.css'
import PlayerCart from '../playerCart/playerCart';

const AvailablePlayers = ({getPlayers,availableBalance,
  setAvailableBalance,purchasePlayer,setPurchasePlayer}) => {
    const getPromise = use(getPlayers)
    

    return (
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-5">
        {
          getPromise.map(player=><PlayerCart availableBalance={availableBalance} 
            setAvailableBalance={setAvailableBalance} player={player} 
            purchasePlayer={purchasePlayer} setPurchasePlayer={setPurchasePlayer}></PlayerCart>)
        }
      </div>
    )
};

export default AvailablePlayers;