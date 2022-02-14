import './NavigationList.css'
export const NavigationSection = () => {
    const navigationFields = ["Nav1","Nav2","Nav3","Nav4","Nav5"];
   // const navVals = NavigationFields.map((NavigationFields) => <li>{NavigationFields}</li>);
    const listItems =  navigationFields.map((navigationField)  => <li className="navItems"><a href="#">{navigationField}</a></li>)
    return(
        <>
            {listItems}
        </>
    )
}  