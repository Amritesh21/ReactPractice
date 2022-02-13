import TestRun from './ComponentsFolder/testrun';
import MapPractice from './ComponentsFolder/mapPractice';
import UseStComp from './ComponentsFolder/usestateComp';
import FormCreation from './ComponentsFolder/FormCreate';
import SelectFormpract from './ComponentsFolder/SelectFormpract';
import {PropsTut} from './ComponentsFolder/Propstut';
import { useEffect, useState } from 'react';
import {FormsCss} from './ComponentsFolder/FormsAndCssReact'
import {NavBar} from './ComponentsFolder/NavigationBar'
function App() {
  const [isVoterV,setIsVoter] = useState("");


  useEffect(() => {
    //console.log("in App.js")
    console.log("in App.js: " +isVoterV);
  },[isVoterV])

  return (
    <div className="App">
      {/*<TestRun/>
      <MapPractice/>
      <UseStComp/>
      <FormCreation/>
      <SelectFormpract/>*/}
      <NavBar/>
      <FormsCss/>
      <PropsTut name="Amrit" age="18" data1={setIsVoter}/>
    </div>
  );
}

export default App;
