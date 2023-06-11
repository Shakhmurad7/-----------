
import { Route, Routes } from 'react-router'
  
import Elaqe from './NavbarinMetodlari/Elaqe'
import EsasSehve from './NavbarinMetodlari/EsasSehve'
import Haqqimizda from './NavbarinMetodlari/Haqqimizda'
import Texnilkalar from './NavbarinMetodlari/Texnikalar'
import IcareSertleri from './NavbarinMetodlari/IcareSertleri'
import Blog from './NavbarinMetodlari/Blog'



function App() {  
  return (
   <>
   <Routes>
      <Route path='/' element={<EsasSehve/>}/>
      <Route path='/Elaqe' element={<Elaqe/>}/>
      <Route path='/Haqqimizda' element={<Haqqimizda/>}/>
      <Route path='/Texnikalar' element={<Texnilkalar/>}/>
      <Route path='/IcareSertleri' element={<IcareSertleri/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Texnikalar' element={<Texnilkalar/>}/>
   </Routes>
   </>
  )
}

export default App
