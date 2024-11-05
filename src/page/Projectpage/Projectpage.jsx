import Project from "../../component/Project/Project"
import Secondproject from "../../component/secondproject/Secondproject"
import "./Projectpage.css"
import Furniro from "/funiro.png"
import Nexcent from "/nexcent.png"
import Snap from  "/Snap.png"
import Dessert from "/dessert.png"
import Blogpost from "/Blogpost.png"
import World from "/worldatlas.png"
import fresh from "/fresh.png"
import TimTim from "/TimTim.png"
import Demo from "/Demo.png"
const Projectpage = ()=>{
    return(
        <div>
             <h1 id="h1">My Projects</h1>
            <div className="container">
                 <div className="projectbox">
                <Project image={Furniro} text= "Furniro" word="the ultimate destination for stylish, affordable furniture!" p="Developed Furniro, a sleek landing page showcasing a wide selection of home furniture for dining rooms, bedrooms, living rooms, and more. The page features various styles and prices, offering a seamless browsing experience for every room in the home." color="card1" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/Furniro" input2="Live Preview >" link2="https://homotoyosi.github.io/Furniro/" />
        
                <Project image={Nexcent} text= "Nexcent" word="the ultimate platform to elevate your photography business!" p="
                Created Nexcent, a dynamic platform for photographers to expand their business, providing clear insights into the benefits of a website versus social media presence. By offering essential tools and strategies."
                color="card2" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/nexcent" input2="Live Preview >" link2="https://homotoyosi.github.io/nexcent/" />

                <Project image={Blogpost} text=  "Blog post" word="The perfect place to explore and share captivating blog stories!" p="Blog Post is a user-friendly platform designed to present blogs in a clean, organized format. Each blog entry is displayed on a separate card, highlighting the blog name, title, content, and date, making it easy to browse and read through various posts." color="card3" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/Blog-post" input2="Live Preview >" link2="https://blog-post-opal-five.vercel.app/" />                
                </div>
                <div className="Secondprojectbox">
                <Secondproject image={Snap} text= "Snap" word="The perfect tool for seamless team collaboration and productivity" p="Snap is a fully responsive web platform designed to keep your connected and productive, no matter where they are. It streamlines workflows,facilitates effective communication, establishes team routines, and boosts overall productivity" color="card4" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/react-assg" input2="Live Preview >" link2="https://react-assg-1qws.vercel.app/" />
        
                <Secondproject image={World} text= "World atlas" word="The perfect guide to discovering countries around the world" p="Developed world atlas, a fully responsive design showcasing various countries, displaying the country's flag, name, population, region, and capital. Users can search for countries by name and filter by region." color="card5" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/countries" input2="Live Preview >" link2="https://homotoyosi.github.io/countries/" />

                <Secondproject image={Dessert} text=  "Dessert" word="The ideal place to explore and savor delicious desserts!" p="Dessert is a responsive design that lets you explore a variety of dessert meals with prices, and an option to add items to the cart. As items are added, the cart count updates, showing a detailed list with quantities and prices, and displays the total amount for all items." color="card6" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/dessert" input2="Live Preview >" link2="https://homotoyosi.github.io/dessert/" />                
             </div>
             <div className="Secondprojectbox">
                <Secondproject image={fresh} text= "Freshly Dropped" word="The ultimate platform for effortless meal preparation" p="Freshly Dropped is food service that delivers freshly picked meal boxes for you to prepare at home, the recipes and items are carefully selected to the customer's wishes and needs and delivered to their doorstep." color="card7" input1="Instagram" link1="https://www.instagram.com/homotoyosi099/" input2="Twitter" link2="https://x.com/homotoyosi99"/>
        
                <Secondproject image={TimTim} text= "TimTim" word="our one-stop destination for everything electronice you need" p="A large big-box store, that sell electronices. TimTim temporarily close down and fire some of there workers, now they are about to re-open, they asked to design a 'refer a friend form' to employee some workers from there existing employees" color="card8" input1="Instagram" link1="https://www.instagram.com/homotoyosi099/" input2="Twitter" link2="https://x.com/homotoyosi99"/>

                <Secondproject image={Demo} text= "Finance Management" word="Your essential tool for managing and mastering finances." p="Recreate a finance management mobile app design on dribble by Conceptzilla that manage finances effortlessly, track expenses to setting budgets and monitoring savings goals, and provides the users tools that they need to stay in control of their money." color="card9" input1="Instagram" link1="https://www.instagram.com/homotoyosi099/" input2="Twitter" link2="https://x.com/homotoyosi99" />
             </div>
             </div>
         </div>

    )
}
export default Projectpage