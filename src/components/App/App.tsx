// import { useState } from 'react'

import { lazy } from "react";

import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Layout>
    </>
  )
}

export default App
