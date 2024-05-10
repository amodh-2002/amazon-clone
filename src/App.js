import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./CheckoutProduct";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads..
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is auth user ", authUser);
      if (authUser) {
        // the user just logged in/the user was logged in
        dispatch({
          type: "SET-USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        // the user is logged out
      }
    });
    // the above code acts as a listerner
  }, []);

  return (
    <Router>
      <div className="app">
        {/* header will be shown in every page  */}
        <Switch>
          <Router exact path="/login">
            <Login />
          </Router>
          <Router exact path="/checkout">
            <Header />
            <Checkout />
          </Router>

          <Router exact path="/">
            <Header />
            <Home />
          </Router>
        </Switch>
        {/* home comment is equal to what is below the header  */}
      </div>
    </Router>

    // header component
    // home component
  );
}

export default App;
