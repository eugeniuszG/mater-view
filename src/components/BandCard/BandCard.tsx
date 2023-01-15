import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BandData } from '../../types';
import { useEffect, useState } from 'react';
import store from '../../Store'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


export const BandCard: React.FC<any> = ({id, name, description, image, onClick, isSelected}) => {
    const [selected, setIsSelected] = useState(false);
    const [band, setBand] = useState();

    useEffect(() => {
        setBand(store.findRecord('bands', id))
    }, [id])

    return (
        <div >

        <Card 
            style={{background: isSelected ? '#add8e6' : ''}}
            sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={image}
            title={name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Link onClick={onClick} to={id.toString()}>Show more info</Link>
        </CardActions>
        </Card>
        </div>
    );
}