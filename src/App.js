import Header from './components/Header';
import Body from './components/Body';
import './App.css';

function App() {
  function passfn(data){
    console.log(data)
  }
  return (
    <div className="App">
<Header/>
<Body senddata = {passfn}/>
    </div>
  );
}

export default App;
