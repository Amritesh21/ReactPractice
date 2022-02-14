export const UncontrolledForm = (props) => {
    return(
        <>
            <label>{props.name}</label>
            <input type={props.type} ref={props.reference}/>
        </>
    )
}