import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../gqloperations/mutation';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [loginUser, { loading, data, error }] = useMutation(REGISTER_USER)
    const [formdata, setformData] = useState({})

    if (data) {
        console.log("---- signup data", data)
        localStorage.setItem("jwt", data.register.jwt)
        navigate("/")
    }
    const handleChange = (e) => {

        setformData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log("---data", formdata)
        loginUser({
            variables: {
                input: formdata
            }
        })

    }
    return (
        <Grid
            container spacing={2}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 5,
                alignItems: 'center',
            }}

        >
            <Typography variant="h3" gutterBottom>
                Sign Up
            </Typography>
            <Grid xs={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 5,
                }}
            >

                <TextField
                    required
                    onChange={(e) => handleChange(e)}
                    sx={{ width: 350, padding: 2 }}
                    name='username' id="standard-basic" label="Name" variant="standard" />
                <TextField
                    onChange={(e) => handleChange(e)}
                    required
                    sx={{ width: 350, padding: 2 }}
                    name='email' id="standard-basic" label="Email" variant="standard" />
                <TextField
                    onChange={(e) => handleChange(e)}
                    required
                    sx={{ width: 350, padding: 2 }}
                    name='password' id="standard-basic" label="Password" variant="standard" />
            </Grid>

            <Button onClick={handleSubmit} variant="contained">Sign Up</Button>
        </Grid>
    )
}

export default Signup