import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Search from "./Search";
import Favorites from "./Favorites";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/search"
          element={
            <PrivateRoute user={user}>
              <Search user={user} />
            </PrivateRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute user={user}>
              <Favorites user={user} />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/search" />} />
      </Routes>
    </Router>
  );
}

export default App;
