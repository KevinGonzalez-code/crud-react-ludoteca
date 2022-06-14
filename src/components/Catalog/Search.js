import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



export default function Search({category, setCategory,nameJuego,setNameJuego}) {

    const url = 'http://localhost:8080/category';
    
    const [categorySelected, setCategorySelected] = useState();

    const handleChange = (event) => {
        setCategorySelected(event.target.value);
    };

    const getFetch = async () => {
        let res = await fetch(url);
        res = await res.json();
        setCategory(res);
    }

    useEffect(() => getFetch(), []);

    return (
        <>
            <div className="row">
                <div className="col">
                    <TextField
                        label="Título del juego"
                        id="filled-size-normal"
                        defaultValue=""
                        variant="standard"
                        onChange={ (e) => setNameJuego(e.target.value) }
                    />
                </div>
                <div className="col">
                    <InputLabel id="demo-simple-select-standard-label">Categoria</InputLabel>
                    <Select fullWidth={true}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value=""
                        onChange={handleChange}
                        label="Age"
                        variant='standard'
                    >
                        {
                            category.length > 0
                                ?
                                category.map((category) => (
                                    <MenuItem value={category.id} key={category.id}> {category.name} </MenuItem>
                                ))
                                :
                                <MenuItem value="">Loading...</MenuItem>
                        }

                    </Select>
                </div>
                <div className="col">
                    <Button variant="contained" className=" ms-2 float-end" >Filtrar</Button>
                    <Button variant="contained" className=" float-end" >Limpiar</Button>
                </div>
            </div>
        </>
    )
}
