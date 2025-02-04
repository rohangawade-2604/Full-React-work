export const Contact = ({ user , active , onChange}) => {
    console.log(onchange , "contact page occures");
    console.log(user);
    console.log(active);
    
    return(
        <>
        {user.length > 0 && user.map((el) => (
            <div
            key={el.id}
            style={{background : active === el ? "tomato" : null}}
            onClick={() => onChange(el)}
            >

                {el.name}

            </div>
        ))}
        </>
    )
    
}