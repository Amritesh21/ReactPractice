
import { Link } from 'react-router-dom';
import './NavigationList.css'
export const NavigationSection = () => {
    const navigationFields = ["Nav1","Nav2","Nav3","Nav4","Nav5"];
    const navigationLink = ["/","/form","/about","Nav4","Nav5"];
    const navigationData = [
        {
            field : "Home",
            link : "/"
        },
        {
            field: "Register",
            link : "/form"
        },
        {
            field: "About",
            link : "/about"
        }
    ]
   // const navVals = NavigationFields.map((NavigationFields) => <li>{NavigationFields}</li>);
    const listItems =  navigationData.map((navigationField)  => <li className="navItems"><Link to={navigationField.link}>{navigationField.field}</Link></li>)
    return(
        <>
            {listItems}
        </>
    )
}  