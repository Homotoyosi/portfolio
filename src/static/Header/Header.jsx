import "./Header.css"
import { RxHamburgerMenu } from "react-icons/rx";
const Header =()=>{
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
                   <div className="icon">
                    <RxHamburgerMenu />
                </div>
                </div>
               
           </div>
        </div>
    )
}
export default Header