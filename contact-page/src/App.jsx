import MainLayout from "./layout/MainLayout";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<ContactUs/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
