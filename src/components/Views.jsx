import { Routes, Route} from 'react-router-dom'
import Login from './Login/Login'
import Signup from './Login/Signup'

const Views = () => {
  return (
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path = '*' elemenet={<Login/>} />
  </Routes>
  )
}

export default Views;