import React, { useEffect, useState } from 'react';

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
import ModalCategoryEdit from './ModalCategoryEdit';
import ModalCategoryCreate from './ModalCategoryCreate';


export default function CategoryList() {

    const url = 'http://localhost:8080/category';
    const [data, setData] = useState([]);
    
   
    const [editModal, setEditModal] = useState(false);
    const [insertModal, setInsertModal] = useState(false);

    const [category, setCategory] = useState({ id: null, name: null });

    const deleteFetch = async (id) => {
     
        let res = await fetch(`http://localhost:8080/category/${id}`, {
            method: 'DELETE',
          });
   
        console.log(res);
        getFetch();
    }

    const openAndCloseModalEdit = () => {
        setEditModal(!editModal);
        getFetch();
    }
    const openAndCloseModalInsert = () => {
        setInsertModal(!insertModal);
        getFetch();        
    }

    const selectCategory = (category) => {
        setCategory(category);
        openAndCloseModalEdit();
    }

    const getFetch = async () => {
        let res = await fetch(url);
        res = await res.json();       
        setData(res); 
    }

    useEffect( () => getFetch() ,[]);

    return (
        <>
            <div className="container mt-5">
                <h1 className=" mt-5 mb-4">Categorias</h1>
                {
                    
                    data.length > 0
                        ?
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Identificador</TableCell>
                                        <TableCell align="right">Nombre Categoria</TableCell>
                                        <TableCell></TableCell>
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
                                                        
                                                    </TableCell>
                                                    <TableCell align="right">                                                       
                                                        <EditIcon onClick={() => selectCategory(category)} className="me-2"/>
                                                        <ClearIcon onClick={ () => deleteFetch(category.id) }/>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }

                                        )
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        "Loading..."
                        
                }
                <Button variant="contained" className="mt-5 float-end" onClick={ () => openAndCloseModalInsert() }>Nueva categoria</Button>
                <ModalCategoryEdit open={editModal} handleClose={ () => openAndCloseModalEdit() } category={category} />
                <ModalCategoryCreate open={insertModal} handleClose={ () => openAndCloseModalInsert() } generateId={insertModal && data}/>
            </div>

        </>
    )
}
