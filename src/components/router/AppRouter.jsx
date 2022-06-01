import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { Navbar } from '../../components/ui'

import {Home, Error, Rooms, SingleRoom} from '../../pages'

export const AppRouter =() => {

  return (
    <BrowserRouter>   
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />

          <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}