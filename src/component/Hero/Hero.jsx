import "./Hero.css"
import image from "/image.jpg"
import linkedin from "/linkedin-logo.png"
import githubimg from "/github.png"
const Hero =()=>{
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact-section');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };
    
    return(
        <div>
            <div className="herocontainer">
                <div className="textbox">
                    <h1><span>Hi, my name is </span>Raheem Muiz</h1>
                    <p>Software developer and product designer focused on building accessible, user-friendly websites and mobile app for an exceptional user experience.</p>
                    <div className="buttonbox">
                        <button id="btn1" onClick={scrollToContact} >Contact Me</button>
                        <a href="https://www.linkedin.com/in/raheemmuiz/" target="_blank" rel="noopener noreferrer"> <button id="btn2"> <img src={linkedin} alt="" /></button></a>
                        <a href="https://github.com/Homotoyosi" target="_blank" rel="noopener noreferrer"> <button id="btn3"> <img src={githubimg} alt="" /></button></a>
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