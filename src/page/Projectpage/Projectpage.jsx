import Project from "../../component/Project/Project"
import Secondproject from "../../component/secondproject/Secondproject"
import "./Projectpage.css"
import Furniro from "/funiro.png"
import Nexcent from "/nexcent.png"
import Snap from  "/Snap.png"
import Dessert from "/dessert.png"
import Blogpost from "/Blogpost.png"
import World from "/worldatlas.png"
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
             </div>
             <div className="content">

            </div>
         </div>

    )
}
export default Projectpage