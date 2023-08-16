import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import PostsPage from './pages/PostsPage'
import NotFoundPage from './pages/NotFoundPage'
import FormPage from './pages/FormPage'
import Layout from './components/Layout'

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={ <MainPage/>} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/form' element={<FormPage />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
    </Routes>
    </>
  )
}

