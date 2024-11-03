import "./Project.css"
const Project = (props)=>{
    return(
        <div>
            <div className={`projectcontent ${props.color}`}>
                <img src={props.image} alt="" />
                <h1>{props.text}</h1>
                <h4>{props.word}</h4>
                <p>{props.p}</p>
                <div className="links">
                    <a href={props.link1} target="_blank"> <h5>{props.input1}</h5></a>
                    <a href={props.link2} target="_blank"> <h5>{props.input2}</h5></a>
                </div>


            </div>
        </div>
    )
}
export default Project