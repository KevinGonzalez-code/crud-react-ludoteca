import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function SelectCategory({categories, handleChange}) {
    return (
        <>
            <InputLabel>Categoria</InputLabel>
            <Select
                fullWidth={true}
                onChange={handleChange}
                variant='standard'
                value={categories.name}
                name="category">
                {
                    categories.length > 0
                        ?
                        categories.reverse().map((category) => (
                            <MenuItem value={category.id} key={category.id} > {category.name} </MenuItem>
                        ))
                        :
                        <MenuItem value="">Loading...</MenuItem>
                }

            </Select>
        </>
    )
}
