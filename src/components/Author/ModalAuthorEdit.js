import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function ModalAuthorEdit({ open, handleClose, author }) {

    const [newAuthor, setNewAuthor] = useState(author);

    const handleChangeName = (event) => {
        const { value, name } = event.target;
        setNewAuthor(() => ({
            [name]: value,
            nationality: author.nationality
        }))
        console.log(newAuthor);
    }

    const handleChangeNationality = (event) => {
        const { value, name } = event.target;
        setNewAuthor(() => ({
          
            name: author.name,
            [name]: value
        }))
        console.log(value);
    }


    const putFetch = async () => {

        let res = await fetch(`http://localhost:8080/author/${author.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAuthor),
        });
        console.log(newAuthor);

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

                    <h3 className="mb-5 text-center">Modificar Categoria</h3>

                    <TextField className="mb-2"
                        disabled
                        id="outlined-disabled"
                        label="Identificador"
                        fullWidth={true}
                        defaultValue={author.id}
                        name="id"

                    />
                    <TextField className="mb-2"
                        required
                        id="outlined-required"
                        label="Nombre"
                        defaultValue={author.name}
                        fullWidth={true}
                        name="name"
                        onChange={handleChangeName}
                    />

                    <TextField className="mb-2"
                        required
                        id="outlined-required"
                        label="Nacionalidad"
                        defaultValue={author.nationality}
                        fullWidth={true}
                        name="nationality"
                        onChange={handleChangeNationality}
                    />

                    <Button variant="contained" color="error" className="mt-5  float-end" onClick={handleClose}>Cerrar</Button>
                    <Button variant="contained" className="mt-5 float-end me-2" onClick={putFetch}>Guardar</Button>
                </Box>
            </Modal>
        </>
    )
}
