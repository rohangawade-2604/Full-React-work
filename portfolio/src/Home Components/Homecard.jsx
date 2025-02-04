import './Home.css'
const HomeCard = (props) =>{
    return(
        <div className="para" data-aos="zoom-in-down">
            <h1>{props.name}</h1>
            <p className='para1'>{props.desc}</p>
        </div>
    )
}

export default HomeCard