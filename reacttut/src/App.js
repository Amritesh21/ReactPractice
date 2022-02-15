import TestRun from './ComponentsFolder/testrun';
import MapPractice from './ComponentsFolder/mapPractice';
import UseStComp from './ComponentsFolder/usestateComp';
import FormCreation from './ComponentsFolder/FormCreate';
import SelectFormpract from './ComponentsFolder/SelectFormpract';
import {PropsTut} from './ComponentsFolder/Propstut';
import { useEffect, useState } from 'react';
import {FormsCss} from './ComponentsFolder/FormsAndCssReact'
import {NavBar} from './ComponentsFolder/NavigationBar'
import Link from './ComponentsFolder/TestingTut/Link';
import { NavigationBar1 } from './NavigationComponents/NavigationBar1';
import { UserDetailsDiv } from './NavigationComponents/UserDetailsDiv';
import { BodyComponent } from './BodyContent/BodyComponent';
import { Route, Routes } from 'react-router-dom';
import { HomeComponent } from './ComponentsFolder/HomeComponent';
function App() {
  const [isVoterV,setIsVoter] = useState("");


  useEffect(() => {
    //console.log("in App.js")
    console.log("in App.js: " +isVoterV);
  },[isVoterV])


  const [displayUserDetails, setUserDetails] = useState("");

    const displayUserDetailsMethod = () => {
        if(displayUserDetails){
            return <UserDetailsDiv userDisplay={setUserDetails}/>
        }
        else{
            return null;
        }
    } 

  return (
    <div className="App">
      {/*<TestRun/>
      <MapPractice/>
      <UseStComp/>
      <FormCreation/>
      <SelectFormpract/>
      <NavBar/>*/}
      <NavigationBar1 userDetailsDiv={setUserDetails}/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/form" element={<FormCreation/>}></Route>
      </Routes>
      <div>
      {displayUserDetailsMethod()}
      </div>
      {/*<FormsCss/>
      <PropsTut name="Amrit" age="18" data1={setIsVoter}/>
      <Link page="http://www.facebook.com">Facebook</Link>*/}
    </div>
  );
}

export default App;
