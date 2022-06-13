import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import ModalCategory from './ModalCategory';






export default function CategoryList() {

    const { data, loading } = useFetch('http://localhost:8080/category');

    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState({ id: null, name: null });
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const selectCategory = (category) => {
        setCategory(category);
        handleOpen();
    }

    return (
        <>
            <div className="container mt-5">

                <h1 className=" mt-5 mb-4">Categorias</h1>

                {
                    loading
                        ?
                        "Loading..."
                        :
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Identificador</TableCell>
                                        <TableCell align="right">Nombre Categoria</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data.map((category, index) => {
                                            return (
                                                <TableRow
                                                    key={index}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {category.id}
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        {category.name}
                                                        <EditIcon onClick={() => selectCategory(category)} />
                                                        <Button className="ms-2" ><ClearIcon /></Button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }

                                        )
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                }
                <Button variant="contained" className="mt-5 float-end" onClick={handleOpen}>Nueva categoria</Button>
                <ModalCategory open={open} handleClose={handleClose} category={category} />
            </div>

        </>
    )
}
