import {useState} from 'react';
import React from 'react'


 function List(){



const [img, setImg]= useState("");
const [name, setName]= useState("");
const [email, setEmail]= useState("");
const [age, setAge]= useState("");
const [location, setLocation]= useState("");

const [allData, setallData]= useState([]);
const SubmitForm=(event)=>{
    event.preventDefault();
    const newData = {img:img,
                name:name,
                email:email,
                age:age, 
                location:location,}
   setallData([...allData, newData]);
   console.log(newData)
}


    return(
        
       <form action='' onSubmit={SubmitForm}>
            
                <div className="row justify-content-center align-items-center">
                <div className="col-md-5">
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_pprxh53t.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
                </div>
                <div className="col-md-5">
                <div className='Add-data'>
                
                <input onChange={(event)=>setImg(event.target.value)}
                    placeholder="Enter a Url" value={img}
                
                />
                 <input onChange={(event)=>setName(event.target.value)}
                    placeholder="Enter a Name" value={name}
                />
                 <input onChange={(event)=>setEmail(event.target.value)}
                    placeholder="Enter a Email"  value={email}
                />
                 <input onChange={(event)=>setAge(event.target.value)}
                    placeholder="Enter a Age" value={age}
                />
                 <input onChange={(event)=>setLocation(event.target.value)}
                    placeholder="Enter a Location" value={location}
                />
                <button type="submit" class="btn btn-secondary btn-lg"
                // onClick={()=>{
                //     const newData={
                //        img:img,
                //         name:name,
                //         email:email,
                //         age:age, 
                //         location:location,
                //     }  
                //     setData([...data,newData])
                // }}
                >
                Login
                </button>
                
                </div>
                
                </div>
            </div>
                
            <div>
{
    allData.map((curData)=>{
        return(
            <div>
                <img className="img" src={curData.img}/>
                <p>{curData.email}</p>
                <p>{curData.age}</p>
                <p>{curData.location}</p>
            </div>
        )
    })
}

         </div>
    </form>
    
     
    );
}

//  function DataBox()  {
//     const styles={
//         height:"60px",
//         width:"300px"
        
//     }
//     return(
//         <div style={styles}>

//         </div>
//     )
//  }   
export default List

