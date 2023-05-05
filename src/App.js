import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import './App.css';

// Pages/Screens
import CountryContainer from './screens/CountryContainer'
import LoginScreen from './screens/LoginScreen';
import ProtectedRoute from './utils/ProtectedRoute';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <Header />
    <main className='container content'>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<CountryContainer />} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </main>
  </Router>
  );
}

export default App;
