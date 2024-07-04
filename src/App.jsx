import logo from './logo.svg';
import './App.scss';
import { Home } from "./pages/Home/Home";
import { FeaturedProducts } from './FeaturedProducts';
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


const Layout = () => {
  return (
    <div className="app">
      <ScrollToTop>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </ScrollToTop>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
    ]
  }
])

function App() {
  return (
    
    <div className="App">
      <RouterProvider router={router} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <FeaturedProducts />
        </a>
      </header>
    </div>
  );
}

export default App;
