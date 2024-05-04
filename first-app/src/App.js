import logo from './logo.svg';
import './App.css';
import MyClassComponent from './MyClassComponent';
import MyFunctionComponent from './MyFunctionComponent';

function App() {
  return (
    <div className="App">
      <MyClassComponent name={"Class Props"} age={22}></MyClassComponent>
      <MyFunctionComponent name={"Functional Props"} age={22}></MyFunctionComponent>
    </div>
  );
}

export default App;
