import Hero from "../../component/Hero/Hero"
import Techstack from "../../component/Techstack/Techstack"
import Projectpage from "../Projectpage/Projectpage"
import "./Home.css"
const Home =()=>{
    return(
        <div>
            <Hero />
            <Techstack />
           <Projectpage/>
        </div>
    )
}
export default Home