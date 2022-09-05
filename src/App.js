import { Routes, Route, Redirect } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import './App.css'
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Add from './components/Add/Add';

const token =  localStorage.getItem("tokenR");
{token && console.log('online')}


function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Layout
          pages={['login', 'register']}
          
        >
          <Register />
        </Layout>} />

        <Route path='/register' element={
        <Layout
          pages={['login', 'register']}
        >
          <Register />
        </Layout>} />

      <Route path='/login' element={
        <Layout
          pages={['login', 'register']}
        >
          <Login />
        </Layout>} />

       <Route path={'/home'} element={
        <Layout pages={['home', 'add']} >
          <Home />
        </Layout>} />

      <Route path='/add' element={
        <Layout
          pages={['home', 'add']}>
          <Add />
        </Layout>} />

      <Route path='*' element={<Layout><div>Page Does not exist</div></Layout>} />
    </Routes>
  );
}

export default App;
