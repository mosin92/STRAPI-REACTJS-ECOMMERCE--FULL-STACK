import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_PRODUCTS } from '../gqloperations/queries'
import { Cards } from '../components'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
const Home = () => {
    const { loading, data, error } = useQuery(GET_ALL_PRODUCTS)

    if (loading) return <h3>data is loading ...</h3>
    if (data) console.log("---- graqh data ----  ", data)
    return (

        <Container style={{
            display: 'flex',
            flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',
            marginTop: '15px', marginBottom: '15px'
        }}>
            {
                data && data.products.data.map((item, index) => <Cards key={index} data={item} />
                )
            }

        </Container>
    )
}

export default Home