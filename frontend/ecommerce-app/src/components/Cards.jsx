import React from 'react'

import { BACKEND_URL } from '../helper'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Cards = ({ data }) => {
    console.log("---- card --- ", data)
    const { id, attributes: { Description, Images: { data: imgdata }, Name, Price } } = data

    return (
        <Link to={`/product/${id}`}>
            <Card sx={{ width: 300, marginTop: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width={"150"}
                        height="140"
                        image={`${BACKEND_URL + imgdata[0].attributes.url}`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h5" component="div">
                            {Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {Description.substr(0, 50)}...
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            ${Price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default Cards