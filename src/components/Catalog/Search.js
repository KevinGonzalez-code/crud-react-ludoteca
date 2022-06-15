import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SelectCategory from './SelectCategory';



export default function Search(
    {
        category, setCategory,
        setNameJuego,
        setCategorySelected,
        reset, setReset,
        filter, setFilter
    }) {

    const url = 'http://localhost:8080/category';

    const handleChange = (event) => {
        setReset(!reset);
        setCategorySelected(event.target.value);
    };

    const cleanSearch = () => {
        setReset(!reset);
        setNameJuego("")
        setCategorySelected("")
    }
    
    const filterList = () =>{
     
        setFilter(!filter)
        document.getElementsByName("search-title")[0].value = "";
    }

    useEffect(() => {
        async function getFetch() {
            let res = await fetch(url);
            res = await res.json();
            console.log(res)
            setCategory(res);
        }
        getFetch();
    }, []);

    return (
        <>
            <div className="row">
                <div className="col">
                    <TextField
                        label="Título del juego"
                        id="filled-size-normal"
                        defaultValue=""
                        variant="standard"
                        onChange={e => setNameJuego(e.target.value)}
                        name="search-title"
                
                    />
                </div>
                <div className="col">
                    <SelectCategory categories={category} handleChange={handleChange} />     
                </div>
                <div className="col">
                    <Button variant="contained" className=" ms-2 float-end" onClick={ () =>  filterList() }>Filtrar</Button>
                    <Button variant="contained" className=" float-end" onClick={() => cleanSearch()} >Limpiar</Button>
                </div>
            </div>
        </>
    )
}
