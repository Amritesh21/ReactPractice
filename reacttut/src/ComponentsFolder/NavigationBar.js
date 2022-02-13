import { NavBarComp } from "./NavBarListItemsCom"
export const NavBar = () => {
    const myStyle = {
        margin: "0px",
        border: "0px",
        color: "Red",
        backgroundColor : "Black", 
        height : "50px"
    }
    const listStyleType = {
        listStyle: "none",
        float: "left"
    } 
    return(
        <div style={myStyle} className="NavigationBar">
            <ul className="NavigationList" style={listStyleType}>
                <NavBarComp/>
            </ul>
        </div>
    )
}