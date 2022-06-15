import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SelectCategory from './SelectCategory';



export default function ModalGame({
    open, handleClose,
    generateId, category, setCategory,
    author, setAuthor }) {


    const [newGame, setNewGame] = useState({ title: '', age: '', category: { id: 0 }, author: { id: 0 } });

    useEffect(() => {
        async function getFetch() {
            let res = await fetch('http://localhost:8080/category');
            res = await res.json();
            console.log(res)
            setCategory(res);
        }
        getFetch();
    }, []);

    useEffect(() => {
        async function getFetch() {
            let res = await fetch('http://localhost:8080/author');
            res = await res.json();
            setAuthor(res);
        }
        getFetch();
    }, []);

    const handleChangeCategory = (event) => {
        const { name, value } = event.target;
        setNewGame(() => ({
            title: newGame.title,
            age: newGame.age,
            [name]: { id: value },
            author: { id: newGame.author.id }
        }))
        console.log(value)
    };


    const handleChangeAuthor = (event) => {
        const { name, value } = event.target;
        setNewGame(() => ({
            title: newGame.title,
            age: newGame.age,
            category: { id: newGame.category.id },
            [name]: { id: value }
        }))
        console.log(value)
    };

    const handleChangeTitle = (event) => {
        const { name, value } = event.target;
        
        setNewGame(() => ({
            [name]: value,
            age: newGame.age,
            category: { id: newGame.category.id },
            author: { id: newGame.author.id }
        }))
        console.log(newGame.category.id)
    }

    const handleChangeAge = (event) => {
        const { name, value } = event.target;
        setNewGame(() => ({
            title: newGame.title,
            [name]: value,
            category: { id: newGame.category.id },
            author: { id: newGame.author.id }
        }))
        console.log(newGame)
    }


    const putFecth = async () => {
        let res = await fetch(`http://localhost:8080/game?id=${++generateId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newGame)
        });

        console.log(res);

    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 400,
                    bgcolor: "white",
                    border: "2px solid #000",
                    boxShadow: 24,
                    p: 4
                }}>

                    <h3 className="mb-5 text-center">Crear Juego</h3>

                    <TextField className="mb-2"
                        disabled
                        id="outlined-disabled"
                        label="Identificador"
                        fullWidth={true}
                        defaultValue={++generateId}
                        name="id"

                    />
                    <TextField className="mb-2"
                        required
                        id="outlined-required"
                        label="Título"
                        defaultValue=""
                        fullWidth={true}
                        name="title"
                        onChange={handleChangeTitle}
                    />

                    <TextField
                        id="standard-number"
                        label="Edad recomendada"
                        type="number"
                        fullWidth={true}
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        name="age"
                        onChange={handleChangeAge}
                    />

                    <SelectCategory categories={category} handleChange={handleChangeCategory} />

                    <InputLabel className="mt-1">
                        Autor
                    </InputLabel>
                    <Select
                        fullWidth={true}
                        onChange={handleChangeAuthor}
                        variant='standard'
                        value={author.name}
                        name="author"
                    >
                        {
                            author.length > 0
                                ?
                                author.reverse().map((author) => (
                                    <MenuItem value={author.id} key={author.id} > {author.name} </MenuItem>
                                ))
                                :
                                <MenuItem value="">Loading...</MenuItem>
                        }
                    </Select>


                    <Button variant="contained" color="error" className="mt-5  float-end" onClick={handleClose}>Cerrar</Button>
                    <Button variant="contained" className="mt-5 float-end me-2" onClick={() => putFecth()}>Insertar</Button>
                </Box>
            </Modal>
        </>
    )
}
