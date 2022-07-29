import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import styles from './App.module.css'
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Options } from "./components/options";
import { Sdr } from "./components/sdr";
import { Credentials_form } from "./components/credentials_form";

function App() {
  return (<div className={styles.main}>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Options/>}/>
          <Route path="/automatic_sdr" element={<Sdr/>}/>
          <Route path="/credentials_form" element={<Credentials_form/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
      
    </div>
  );
}

export default App;
