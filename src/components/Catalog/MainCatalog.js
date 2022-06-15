import React, { useEffect, useState } from 'react';
import CatalogList from './CatalogList';
import ModalGame from './ModalGame';
import Search from './Search';
import Button from '@mui/material/Button';



export default function MainCatalog() {

    const url = 'http://localhost:8080/game';
    const [category, setCategory] = useState([]);
    const [nameJuego, setNameJuego] = useState("");
    const [game, setGame] = useState([]);
    const [categorySelected, setCategorySelected] = useState();
    const [reset, setReset] = useState(false);
    const [filter, setFilter] = useState(false);
    const [open, setOpen] = useState(false);
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        async function getFetch() {
            let res = await fetch(url);
            res = await res.json();
            setGame(res);
        }
        getFetch();
    }, [reset, open]);

    useEffect(() => {
        let filter;

        if (nameJuego.length > 0) {
            filter = game.filter(g => g.title.toLowerCase().search(nameJuego.toLowerCase()) !== -1)
        } else if (nameJuego.length > 0 && categorySelected !== 4) {
            filter = game.filter(g => g.title.toLowerCase().search(nameJuego.toLowerCase()) !== -1 && g.category.id === categorySelected)
        } else {
            filter = game.filter(g => g.category.id === categorySelected)
        }

        setGame(filter)
    }, [filter])

    const openAndCloseModal = () => {
        setOpen(!open);
    }


    return (
        <>
            <div className="container">
                <h1 className="mt-5">Catálogo de juegos</h1><br />
                <Search className="mt-5"
                    category={category}
                    setCategory={setCategory}
                    nameJuego={nameJuego}
                    setNameJuego={setNameJuego}
                    categorySelected={categorySelected}
                    setCategorySelected={setCategorySelected}
                    reset={reset}
                    setReset={setReset}
                    filter={filter}
                    setFilter={setFilter}
                />
                <CatalogList
                    game={game}
                />

                <Button variant="contained" className="mt-4 float-end" onClick={openAndCloseModal} >Nuevo juego</Button>

            </div>
            <ModalGame 
                    open={open}
                    handleClose={openAndCloseModal} 
                    generateId={game.length}
                    category={category}
                    setCategory={setCategory}
                    author={author}
                    setAuthor={setAuthor}
            />
        </>
    )
}
