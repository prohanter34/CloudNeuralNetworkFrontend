import './App.css';
import Root from './Components/Root';


function App(props) {

  return (

    <div className="App">
      <Root state={props.state} dispatch={props.dispatch} />
    </div>

  );
}

export default App;
