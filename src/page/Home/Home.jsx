import Hero from "../../component/Hero/Hero"
import Techstack from "../../component/Techstack/Techstack"
import Aboutpage from "../About/Aboutpage"
import Projectpage from "../Projectpage/Projectpage"
import "./Home.css"
const Home =()=>{
    return(
        <div>
            <Hero />
            <Techstack />
           <Projectpage/>
           <Aboutpage />
        </div>
    )
}
export default Home