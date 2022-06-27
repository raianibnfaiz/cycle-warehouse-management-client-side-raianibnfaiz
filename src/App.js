import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Pages/Footer/Footer';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddNewBicycle from './Pages/AddNewBicycle/AddNewBicycle';
import MyItems from './Pages/MyItems/MyItems';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product/:id' element={
          <RequireAuth>
            <UpdateProduct></UpdateProduct>
          </RequireAuth>}>

        </Route>
        <Route path="/manageInventories" element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>}>

        </Route>
        <Route path="/addProduct" element={
          <RequireAuth>
            <AddNewBicycle></AddNewBicycle>
          </RequireAuth>}>

        </Route>
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>

        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
