import styles from './App.module.css'
import { Navbar } from './components/navbar';
import { Options } from './components/options';
import { Footer } from './components/footer';

function App() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Options/>
      <Footer/>
    </div>
  );
}

export default App;
