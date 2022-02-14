export const NavBarComp = () => {
    const navBarContent = ["Home", "Price", "About Us", "Contact Us"];
    const styleListItem = {
        padding: "10px",
        display: "inline-block",
        padding: "0px 20px"
    }

    const listItems =  navBarContent.map((navBarContent)  => <li style= {styleListItem}>{navBarContent}</li>)

    return(
        <>
            {listItems}
        </>
    )
}