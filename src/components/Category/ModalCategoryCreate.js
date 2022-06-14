import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ModalCategoryCreate({ open, handleClose, generateId }) {

    let idAutoIncrement = generateId.length;
    const [newCategory, setNewCategory] = useState({ id: idAutoIncrement, name: '' });

    const handleChange = (event) => {
        const {name, value } = event.target;        
        setNewCategory( ()=> ({
            id: idAutoIncrement,
            [name]: value 
        }))
    }
   
    const putFetch = async () => {        
    
        let res = await fetch(`http://localhost:8080/category?id=${idAutoIncrement}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCategory),
        });

      //  res = await res.json();
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

                    <h3 className="mb-5 text-center">Crear Categoria</h3>

                    <TextField className="mb-2"
                        disabled
                        id="outlined-disabled"
                        label="Identificador"
                        fullWidth={true}
                        defaultValue={++idAutoIncrement}
                        name="id"

                    />
                    <TextField className="mb-2"
                        required
                        id="outlined-required"
                        label="Nombre categoria"
                        defaultValue={newCategory.name}
                        fullWidth={true}
                        name="name"
                        onChange={handleChange}
                        
                    />
                    <Button variant="contained" color="error" className="mt-5  float-end" onClick={handleClose}>Cerrar</Button>
                    <Button variant="contained" className="mt-5 float-end me-2" onClick={ () => putFetch() }>Insertar</Button>
                </Box>
            </Modal>
        </>
    )
}
