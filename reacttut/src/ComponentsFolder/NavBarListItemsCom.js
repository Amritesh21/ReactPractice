export const NavBarComp = () => {
    const navBarContent = ["Home", "Price", "About Us", "Contact Us"];
    const styleListItem = {
        float: "left",
        padding: "10px"
    }

    const listItems =  navBarContent.map((navBarContent)  => <li style= {styleListItem}>{navBarContent}</li>)

    return(
        <>
            {listItems}
        </>
    )
}