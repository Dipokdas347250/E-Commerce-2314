import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Product from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"
import About from "./pages/About"
import Contacts from "./pages/Contacts"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/Product" element={<Product/>}></Route>
    <Route path="/Product/:id" element={<ProductDetails/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contacts" element={<Contacts/>}></Route>
  </Route>
))

function App() {
 

  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
