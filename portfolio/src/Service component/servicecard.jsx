
const Servicecard = (props) => {
  return (
    <div className="serv-card" style={{color: 'white'} }>
        <h2>{props.head}</h2><br />
        <p>{props.p1}</p><br />
        <p>{props.p2}</p><br />
        <p>{props.p3}</p><br />
        <p>{props.p4}</p>
    </div>
  )
}

export default Servicecard;
