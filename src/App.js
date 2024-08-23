import { useEffect, useState } from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from "./payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER is >>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
    },
    {
      path: "/checkout",
      element: (
        <>
          <Header />
          <Checkout />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/payment",
      element: (
        <>
          <Header />
          <Payment />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
