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
import { No_sdr } from "./components/no_sdr";
import { With_sdr } from "./components/with_sdr";
import { Credentials_form } from "./components/credentials_form";

function App() {
  return (<div className={styles.main}>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Options/>}/>
          <Route path="/credentials_form" element={<Credentials_form/>}/>
          <Route path="/no_sdr" element={<No_sdr/>}/>
          <Route path="/with_sdr" element={<With_sdr/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
      
    </div>
  );
}

export default App;
