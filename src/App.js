import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Boutic from './page/Boutic';
import Category from './page/Category';
import Item from  './page/Item';
import Carts from './page/Carts';
import LoginUp from './page/LoginUp';
import Abt from './page/Abt';
import Second from './page/Second';






function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Boutic/>} />
        <Route path='/collection' element={<Second category="collection"/>}  />
        <Route path='/accessories' element={<Category category="accessories"/>} />
        <Route path='/about' element={<Abt category="about" />} />
      <Route path='/product' element={<Item/>} >
        <Route path=':productId' element={<Item/>}/>
      </Route>
      <Route path='/cart' element={<Carts/>} />
      <Route path='/login' element={<LoginUp/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
