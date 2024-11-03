import "./About.css"
const About =(props)=>{
    return (
        <div>
            <div className={`Aboutcontent ${props.color}`}>
                <h1>{props.text}</h1>
                <h4>{props.word}</h4>
                <h4>{props.p}</h4>
            </div>


        </div>
    )
}
export default About