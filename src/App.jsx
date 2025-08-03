import './App.css'
import Books from './Components/Books'
import Home from './Components/Home'
import Login from './Components/Login'
import RootLayout from './Components/RootLayout'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

function App() {
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/books'element={<Books/>}/>
            </Route>
        )
    )

    return(
        <RouterProvider router={router}/>
    )   
}

export default App
