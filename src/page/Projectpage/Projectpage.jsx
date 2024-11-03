import Project from "../../component/Project/Project"
import Secondproject from "../../component/secondproject/Secondproject"
import "./Projectpage.css"
import Furniro from "/funiro.png"
import Nexcent from "/nexcent.png"
import Worldatlas from "/worldatlas.png"
const Projectpage = ()=>{
    return(
        <div>
            <div className="container">
                <h1 id="h1">My Projects</h1>
                 <div className="projectbox">
                <Project image={Furniro} text= "Furniro" word="the ultimate destination for stylish, affordable furniture!" p="Developed Furniro, a sleek landing page showcasing a wide selection of home furniture for dining rooms, bedrooms, living rooms, and more. The page features various styles and prices, offering a seamless browsing experience for every room in the home." color="card1" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/Furniro" input2="Live Preview >" link2="https://homotoyosi.github.io/Furniro/" />
        
                <Project image={Nexcent} text= "Nexcent" word="the ultimate platform to elevate your photography business!" p="
                Created Nexcent, a dynamic platform for photographers to expand their business, providing clear insights into the benefits of a website versus social media presence. By offering essential tools and strategies. 
                Nexcent helps photographers choose the best path for their growth.." color="card2" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/nexcent" input2="Live Preview >" link2="https://homotoyosi.github.io/nexcent/" />

                <Project image={Worldatlas} text=  "World Atlas" word="Perfect guide to discovering countries around the world!" p="Developed World atlas, a platform that showcases various countries, represented by a card displaying the country's flag, name, population, region, and capital. Users can search for countries and also filter by region." color="card3" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/countries" input2="Live Preview >" link2="https://homotoyosi.github.io/countries/" />                
                </div>
                <div className="Secondprojectbox">
                <Secondproject image={Furniro} text= "Furniro" word="the ultimate destination for stylish, affordable furniture!" p="Developed Furniro, a sleek landing page showcasing a wide selection of home furniture for dining rooms, bedrooms, living rooms, and more. The page features various styles and prices, offering a seamless browsing experience for every room in the home." color="card1" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/Furniro" input2="Live Preview >" link2="https://homotoyosi.github.io/Furniro/" />
        
                <Secondproject image={Nexcent} text= "Nexcent" word="the ultimate platform to elevate your photography business!" p="
                Created Nexcent, a dynamic platform for photographers to expand their  business, providing clear insights into the benefits of a website versus social media presence. By offering essential tools and strategies. 
                Nexcent helps photographers choose the best path for their growth.." color="card2" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/nexcent" input2="Live Preview >" link2="https://homotoyosi.github.io/nexcent/" />

                <Secondproject image={Worldatlas} text=  "World Atlas" word="Perfect guide to discovering countries around the world!" p="Developed World atlas, a platform that showcases various countries, represented by a card displaying the country's flag, name, population, region, and capital. Users can search for countries and also filter by region." color="card3" input1="Git Hub Link >" link1="https://github.com/Homotoyosi/countries" input2="Live Preview >" link2="https://homotoyosi.github.io/countries/" />                
             </div>
             </div>
             <div className="content">

            </div>
         </div>

    )
}
export default Projectpage