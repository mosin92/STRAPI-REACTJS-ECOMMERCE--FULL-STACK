import React from 'react'
import { useParams } from 'react-router-dom'

const Cart = () => {
    const { pid } = useParams()
    console.log("----- pid ---  ", pid)

    return (
        <div>Cart</div>
    )
}

export default Cart