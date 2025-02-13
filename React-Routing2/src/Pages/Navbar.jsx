import {NavLink} from "react-router-dom"

export const Navbar=() =>{

    
    const link =[
        {path:'/' , title:"Home"},
        {path:'/' , title:"About"},
        {path:'/' , title:"contact"},
        {path:'/' , title:"Login"},
        {path:'/' , title:"Users"}

    ];

    const defaulStyle ={
        color: "white"
    }

    const activeStyle ={
        color :"tomato"
    }

    return(
        <>

        <div className="Navbar-part">
            {
                link.map((data) =>(
                    <NavLink className="nav-part" style={({isActive}) => {
                        console.log("currently is ", isActive);
                        
                        return isActive ? activeStyle : defaulStyle;
                    }}
                    key={data.path}
                    to={data.path}
                    end
                    >

                        {data.title}

                    </NavLink>
                ))
            }
        </div>
        </>
    )
}