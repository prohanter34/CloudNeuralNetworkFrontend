import './App.css';
import Main from './Components/main/Main'
import Header from './Components/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Foooter';
import Navigation from './Components/Navigation/Navigation';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header state={props.state.loginState}/>
        <Navigation />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
