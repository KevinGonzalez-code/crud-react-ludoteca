import React, { useEffect, useState } from 'react'
import CatalogList from './CatalogList'
import Search from './Search'

export default function MainCatalog() {

    const [category, setCategory] = useState([]);
    const [nameJuego, setNameJuego] = useState("");
    const url = 'http://localhost:8080/game';
    const [game, setGame] = useState([]);
  
    const getFetch = async () => {
      let res = await fetch(url);
      res = await res.json();
      setGame(res);
    }
  
    useEffect(() => getFetch(), []);

/*
    game
    .filter( g => g.includes(nameJuego) )
    .forEach( g => console.log(g) )
*/


    return (
        <>
            <div className="container">
                <h1 className="mt-5">Catálogo de juegos</h1><br/>
                <Search className="mt-5"
                    category={category}
                    setCategory={setCategory}
                    nameJuego={nameJuego}
                    setNameJuego={setNameJuego}
                />
                <CatalogList
                    game={game}
                    setGame={setGame}
                />
            </div>
        </>
    )
}
