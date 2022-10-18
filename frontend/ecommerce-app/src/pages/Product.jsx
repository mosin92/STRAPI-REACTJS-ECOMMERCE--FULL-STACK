import { useQuery } from '@apollo/client'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT } from '../gqloperations/queries'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BACKEND_URL } from '../helper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = () => {
    const { pid } = useParams()
    console.log("----- pid  ---- ", pid)
    const { loading, data, error } = useQuery(GET_PRODUCT, {
        variables: {
            productId: pid
        }
    })

    console.log("---- specific product ----- ", data)
    if (loading) return <h1>Loading Plz wait</h1>
    if (error) console.log(error)
    if (data) console.log(data)
    const { Name, Price, Description, Images } = data.product.data.attributes
    return (
        <Grid container spacing={1}
            sx={{
                // alignItems: 'center',
                justifyContent: 'space-evenly',
                display: 'flex',
                marginTop: 5
            }}
        >
            <Grid sm={4}>
                <Carousel autoPlay showThumbs showIndicators={false} showStatus={false}>
                    {
                        Images.data.map(item => (
                            <div>
                                <img
                                    style={{
                                        width: "100%",
                                        maxHeight: 500
                                    }}
                                    src={`${BACKEND_URL + item.attributes.url}`} />
                            </div>
                        ))
                    }
                </Carousel>
            </Grid>


            <Grid sm={6} >
                <Typography variant="h4" gutterBottom>
                    {Name}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    $ {Price}
                </Typography>
                <p style={{ textAlign: 'justify', lineHeight: 2.0 }}
                >{Description}</p>
                <Button variant="contained">Add to Cart</Button>
            </Grid>
        </Grid>
    )
}

export default Product