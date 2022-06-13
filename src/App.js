import logo from './logo.svg';
import './App.scss';
import Homepage from "./components/HomePage"
import Login from "./components/Login";
import CreateCard from "./components/CreateCard";
import {AuthProvider, useAuth} from "./hooks";

import AppRoutes from "./components/AppRoutes";
function App() {
  return (
      <AuthProvider>
          <AppRoutes/>
      </AuthProvider>
  );
}

export default App;
