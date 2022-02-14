import { UserDetailsDiv } from './UserDetailsDiv'
import UserIcon from './user_icon.png'
export const UserSectionNav = (props) => {

    const mouseOverMethod = (e) => {
        console.log("mouse over")
        props.userDisplay(true);
    }

    const mouseDownMethod = (e) => {
        console.log("mouse down");
        props.userDisplay(false);
    }

    return(
        <span><img src={UserIcon} className="userIcon" onMouseOver={(e) => mouseOverMethod(e)} onClick={(e) => mouseDownMethod(e)}/></span>
    )
}