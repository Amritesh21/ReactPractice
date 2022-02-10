import logo from './logo.svg';
import './App.css';
import TestRun from './ComponentsFolder/testrun';
import MapPractice from './ComponentsFolder/mapPractice';
import UseStComp from './ComponentsFolder/usestateComp';
import FormCreation from './ComponentsFolder/FormCreate';
import SelectFormpract from './ComponentsFolder/SelectFormpract';
function App() {
  return (
    <div className="App">
      <TestRun/>
      <MapPractice/>
      <UseStComp/>
      <FormCreation/>
      <SelectFormpract/>
    </div>
  );
}

export default App;
