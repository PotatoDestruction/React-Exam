import { Routes, Route } from 'react-router-dom'
import Main from './components/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>Register</div>} />
      <Route path='/login' element={<div>Login</div>} />
      <Route path='/main' element={<Main />} />
      <Route path='/add' element={<div>add logged in</div>} />
      <Route path='*' element={<div>No page</div>} />
    </Routes>
  );
}

export default App;
