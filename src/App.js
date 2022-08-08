import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { authenticate } from './config/firebase.js';
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app componenet loads...
    authenticate.onAuthStateChanged((authUser) => {
      console.log('USER IS >>>>>>>', authUser);

      if (authUser) {
        //user just logged in or user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //user is logged out.
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/auth"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
