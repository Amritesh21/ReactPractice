export const UserDetailsDiv = (props) => {
    const userDetailStyle = {
        height: "300px",
        width: "20%",
        position:"fixed",
         backgroundColor: "red",
         left:"80%"

    }

    const mouseDownMethod = (e) => {
        console.log("mouse down");
        props.userDisplay(false);
    }

    return(
        <div style={userDetailStyle} onMouseLeave={(e) => mouseDownMethod(e)}>
            <h1>Hello World</h1>
        </div>
    )
}