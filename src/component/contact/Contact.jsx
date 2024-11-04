import "./Contact.css"
import linkedin from "/linkedin-logo.png"
import githubimg from "/github.png"
const Contact =()=>{
    return (
        <div className="contactbox">
            <div className="text">
                <div>
                <h1>Contact Me</h1>
                <h4>Connect with me <a href="mailto:raheemmuiz613@gmail.com" className="email-link">raheemmuiz613@gmail.com</a></h4>
                <p>For more info, here is my resume <a href="your-resume-link.pdf" target="_blank" className="resume">Resume</a></p>
                </div>
                <div className="btn">
                <button id="btn2"> <img src={linkedin} alt="" /></button>
                <button id="btn3"> <img src={githubimg} alt="" /></button>
                </div>
            </div>
            <div className="formbox">
                <form action="" className="form">
                    <div>
                          <label >Name</label>
                    <input type="text" /> 
                    </div>
                    <div>
                      <label>E-mail</label>
                      <input type="email" />
                    </div>
                    <div>
                      <label>Subject</label>
                      <input type="text"/>
                    </div>
                    <div>
                      <label>Message</label>
                      <input id="message" type="message" />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact