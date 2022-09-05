import { Routes, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout/Layout';
import Main from './components/Main';
import './App.css'
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Layout pages={['login', 'register']}><Register /></Layout>} />
      <Route path='/login' element={<Layout pages={['login', 'register']} ><Login /></Layout>} />
      <Route path='/main' element={<Layout><Main /></Layout>} />
      <Route path='/add' element={<Layout><div>add logged in</div></Layout>} />
      <Route path='*' element={<Layout><div>No page</div></Layout>} />
    </Routes>
  );
}

export default App;
