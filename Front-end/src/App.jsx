import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Header from './components/Header';
import MainSection from './components/MainSection';
import ContactUs from './components/ContactUs';
import FooterSection from './components/FooterSection';
import Fresh from './components/Fresh';
import DehydratedVegetables from './components/DehydratedVegetables';
import Spices from './components/Spices'
function App() {


  return (
    <Router>
    <div className='main-container relative'>
      <div className='main-header sticky  top-0 z-100'>
        <Header></Header>
      </div>
      <div className='main-content flex-col flex-auto min-h-full '>
        <Routes>
             <Route path="/" element={<MainSection />} />
             <Route path="/contact" element={<ContactUs />} />
             <Route path='/fresh' element={<Fresh></Fresh>}/>
             <Route path='/dehydrated-vegetables' element={<DehydratedVegetables></DehydratedVegetables>}/>
             <Route path='/spices' element={<Spices></Spices>}></Route>
             </Routes>
      </div>
              <FooterSection></FooterSection>
    </div>
    </Router> 
  )
}

export default App
