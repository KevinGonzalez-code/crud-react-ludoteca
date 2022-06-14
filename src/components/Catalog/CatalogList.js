import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Game from './Game';

export default function CatalogList({ game, setGame }) {



  return (

    <>
      <div className="container " >
        <div className="row ">
          {
            game.length > 0
              ?
              game.map((game) => (
                <div className="col mt-5" key={game.id} >
                  <Game game={game} />
                </div>
              ))
              :
              ""
          }
       </div>
       <Button variant="contained" className="mt-4 float-end" >Nuevo juego</Button>
      </div>


    </>

  )
}
