import { NavigationSection } from "./NavigationSection"
import './NavigationBar.css';
import { UserSectionNav } from "./UserSectionNav";
import { useState } from "react";

export const NavigationBar1 = (props) => {

    return(
        <div className = "NavigationBar1">
            <span>Logo</span>
            <ul className = "NavigationClassName">
                <NavigationSection/>
            </ul>
            <UserSectionNav userDisplay={props.userDetailsDiv}/>
        </div>
    )
}