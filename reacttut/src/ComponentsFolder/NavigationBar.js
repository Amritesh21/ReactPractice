import { NavBarComp } from "./NavBarListItemsCom"
export const NavBar = () => {
    const myStyle = {
        color: "Red",
        backgroundColor : "Black", 
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        padding: "10px 10%"
    }
    const listStyleType = {
        listStyle: "none"
    } 
    return(
        <div style={myStyle} className="NavigationBar">
            <span>Logo</span>
            <ul className="NavigationList" style={listStyleType}>
                <NavBarComp/>
            </ul>
            <span>User</span>
        </div>
    )
}