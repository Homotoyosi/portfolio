import "./Techstack.css"
import Htmlicon from "/iconhtml.png"
import Cssicon from "/iconcss.png"
import Jsicon from "/iconjs.png"
import Reacticon from "/logoreact.png"
import Vscode from "/vscodeicon.png"
import giticon from "/git-icon.png"
import icongit from "/icongithub.png"
import TS from "/TSicon.png"
const Techstack = ()=>{
    return (
        <div>
            <div className="techcontainer">
                <div>
                    <h1>My Tech Stack</h1>
                </div>
                <div className="techicon">
                    <img src={Htmlicon} alt="" />
                    <img src={Cssicon} alt="" />
                    <img src={Jsicon} alt="" />
                    <img src={Reacticon} alt="" />
                    <img src={Vscode} alt="" />
                    <img src={giticon} alt="" />
                    <img src={icongit} alt="" />
                    <img src={TS} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Techstack