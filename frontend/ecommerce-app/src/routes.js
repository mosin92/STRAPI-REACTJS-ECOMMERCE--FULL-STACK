import { Login, Cart, Home, Product, Signup } from "./pages";
const routes = [
    {
        path: '/', element: <Home />
    },
    {
        path: '/login', element: <Login />
    },
    {
        path: '/Signup', element: <Signup />
    },
    {
        path: '/Cart', element: <Cart />
    },
    {
        path: '/product/:pid', element: <Product />
    },
]

export default routes