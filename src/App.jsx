
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'

function App() {
    const myRoute = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Login/>} />
      )
    )

  return (
    <>
    <RouterProvider router={myRoute} />
    </>
  )
}

export default App
