import React from 'react';
import Game from './Game';

export default function CatalogList({ game }) {



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
      </div>


    </>

  )
}
