import { Routes, Route, Redirect } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Main from './components/Main';
import './App.css'
import Register from './components/Register';
import Login from './components/Login';
import Add from './components/Add';

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
          <Main />
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
