import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



export default function Game({ game }) {



    return (
        <Card sx={{ minWidth: 400, width: '30%' }}>
            <CardContent>
                <div className="row">
                    <div className="col">
                        <img src="./game.png" height="150px" />
                    </div>
                    <div className="col">                     
                        <h4 className="card-text"> {game.title}</h4>                    
                        <p className="card-text">Edad recomendada: {game.age}</p>                       
                        <p className="card-text">Categoria: {game.category.name}</p>                       
                        <p className="card-text">Autor: {game.author.name}</p>                       
                        <p className="card-text">Nacionalidad: {game.author.nationality}</p>
                    </div>
                </div>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}
