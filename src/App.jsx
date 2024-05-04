/* eslint-disable no-unused-vars */

import './App.css'
import React from 'react';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";


import Layout from './Layout';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { BookTable } from './pages/BookTable';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
         <Route path="/registration" element={<Registration />}></Route>
         <Route path="/login" element={<Login />}></Route>
      <Route path="/"element={<Layout />}>
         <Route index element={<Home />}></Route>
         <Route path="/pages" element={<Pages />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
         <Route path="/blog" element={<Blog />}></Route>
         <Route path="/landing" element={<Landing />}></Route>
         <Route path="/booktable" element={<BookTable />}></Route>
      </Route>
      </Route>
    )
  );
  
  return <RouterProvider router={router} />
};

export default App;
