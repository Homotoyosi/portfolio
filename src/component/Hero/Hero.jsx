import "./Hero.css"
import image from "/image.jpg"
const Hero =()=>{
    return(
        <div>
            <div className="herocontainer">
                <div className="textbox">
                    <h1><span>Hi, my name is </span>Raheem Muiz.</h1>
                    <p>A front-end developer with a strong passion for creating accessible, user-friendly websites that provide an exceptional experience for all users.</p>
                    <div>
                        <button>Contact Me</button>
                        <button> <img src="" alt="" /></button>
                        <button> <img src="" alt="" /></button>
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