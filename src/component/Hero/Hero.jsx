import "./Hero.css"
import image from "/image.jpg"
import linkedin from "/linkedin-logo.png"
import githubimg from "/github.png"
const Hero =()=>{
    return(
        <div>
            <div className="herocontainer">
                <div className="textbox">
                    <h1><span>Hi, my name is </span>Raheem Muiz</h1>
                    <p>Software developer and product designer focused on building accessible, user-friendly websites and mobile app for an exceptional user experience.</p>
                    <div className="buttonbox">
                        <button id="btn1">Contact Me</button>
                        <button id="btn2"> <img src={linkedin} alt="" /></button>
                        <button id="btn3"> <img src={githubimg} alt="" /></button>
                    </div>
                </div>
                <div className="imagebox">
                    <img src={image} alt="" />

                </div>
            </div>
        </div>
    )
}
export default Hero