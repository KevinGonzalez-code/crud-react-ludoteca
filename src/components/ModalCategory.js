import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function ModalCategory({ open, handleClose, category }) {
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
            defaultValue={category.id}
          />
           <TextField className="mb-2"
            required
            id="outlined-required"
            label="Required"
            defaultValue={category.name}
            fullWidth={true}

        />
          <Button variant="contained" className="mt-5 float-end" onClick={handleClose}>Cerrar</Button>
        </Box>
      </Modal>
    </>
  )
}
