import { Routes, Route } from 'react-router'
import './App.css'
import AppLayout from './layout/AppLayout'
import HomePage from './pages/homePage/HomePage'
import RegisterPage from './pages/registerPage/RegisterPage'
import LoginPage from './pages/loginPage/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
