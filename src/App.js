
import './App.css';
import FormComponent from './Components/FormComponent';
import Navbar from './Components/Navbar';
import LoginComponent from './Components/LoginComponent';
import MainView from './Components/MainView';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
       <FormComponent />
      </div>
      <div classname="App">
        <LoginComponent />
      </div>
      <div>
       <MainView />
      </div>
      
    </div>
  );
}

export default App;
