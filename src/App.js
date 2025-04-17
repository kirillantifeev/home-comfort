import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import clsx from "clsx";
import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";
import mockData from './components/CardList/mockData'
import Categories from "./components/Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./components/Modal/Modal";
import Layout from "./components/Layout/Layout";
import { Route, Routes, useLocation, useNavigate  } from "react-router-dom";
import Main from "./components/Main/Main";
import Delivery from "./components/Delivery/Delivery";
import { getProductsApi } from "./api/api";
import { useEffect } from "react";
import { getProducts, selectProducts } from "./store/productsSlice";
import User from "./components/User/User";

function App() {

  
const dispatch = useDispatch();
  const products = useSelector(selectProducts); 

  useEffect(() => {
    dispatch(getProducts()); // Диспетчите thunk для загрузки данных
  }, [dispatch]); // Добавьте dispatch в зависимости

  useEffect(() => {
    console.log(products); // Теперь тут должно быть обновленное значение
  }, [products]);

  const location = useLocation();
  const backgroundLocation = location.state?.background;
  const navigate = useNavigate();

  const onClose = () => {
    navigate(-1)
  }

  return (
    <div className="wrapper">
      <Routes location={backgroundLocation || location}>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/delivery'} element={<Delivery/>}/>
          <Route path={'/user'} element={<User/>}/>
        </Route>
      </Routes>

      {backgroundLocation && (
        <>
        <Routes>
          <Route path={'/products/:id'} element={<Modal onClose={onClose}/>}/>
        </Routes>
        </>
      )};

    </div>


  );
}

export default App;
