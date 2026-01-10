import React from 'react';

const PurchasePlayer = ({player, removePurchasePlayer}) => {
    const handleClick = ()=>
    {
        removePurchasePlayer(player)
    }
    return (
        <div>
            <div className=" flex justify-between  items-center p-5 w-[1200px]
                    mx-auto border-1 border-gray-500
            shadow-md mt-5 rounded-2xl">
                <div className='flex gap-3 items-center'>
                    <img src={player.playerImage} alt="" className='h-[50px] w-[50[x] rounded-2xl' />
                    <div className="">
                    <h3 className='text-2xl font-bold'> {player.playerName}</h3>
                        <p className="text-gray-400">{player.battingStyle}</p>
                    </div>
                </div>
                <img onClick={handleClick}src="https://i.ibb.co.com/vCf5RXM4/Vector.png" alt="" />
            </div>
            
        </div>
    );
};

export default PurchasePlayer;