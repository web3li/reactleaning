import {BrowserRouter,Routes,Route}from'react-router-dom'
import {Button} from 'antd'
import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import './App.css'

function App() {
  return (
    //路由配置
    <BrowserRouter>
    <div className="App">
      <Routes>
       <Route path='/' element={<Layout/>}/>
       <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
