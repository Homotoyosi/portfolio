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
                <p>For more info, here is my resume <a href="https://drive.google.com/file/d/1VaCIwlFvQqDCtmcuXyB0FmgVC-T_NhYq/view?usp=sharing" target="_blank" className="resume">Resume</a></p>
                </div>
                <div className="btn">
                <a href="https://www.linkedin.com/in/raheemmuiz/" target="_blank" rel="noopener noreferrer"><button id="btn2"> <img src={linkedin} alt="" /></button></a>
                <a href="https://github.com/Homotoyosi" target="_blank" rel="noopener noreferrer"><button id="btn3"> <img src={githubimg} alt="" /></button></a>
                </div>
            </div>
            <div id="contact-section" className="formbox">
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