import "./Header.css"
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react";

const Header =()=>{
    const [mobileNavVisible, setmobileNavVisible] = useState(false);
    const toggleMobileNav = () =>{
        setmobileNavVisible (!mobileNavVisible);
    }
    return(
        <div>
           <div className="headercontainer">
                <div className="logo">
                    <h1>Raheem Muiz</h1>
                </div>
                <div className="navbar">
                   <div className="nav">
                   <nav>About Me</nav>
                    <nav>Tech stacks</nav>
                    <nav>Projects</nav>
                    <nav>Contact</nav>
                   </div>
                   <div className="icon" onClick={toggleMobileNav}>
                    {<RxHamburgerMenu />}
                </div>
                {mobileNavVisible && (
                    <div className="mobilenav" onClick={toggleMobileNav}>
                    <nav>About Me</nav>
                     <nav>Tech stacks</nav>
                     <nav>Projects</nav>
                     <nav>Contact</nav>
                    </div>
                )}
                </div>
               
           </div>
        </div>
    )
}
export default Header