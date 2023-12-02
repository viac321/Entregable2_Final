import axios from "axios";
import { useState, useEffect } from "react";
const WeatherSearch = () => {
    const [search, setSearch] = useState(null)


  const handleSubmit = (e) =>{
   e.preventDefault();
   const rName = e.target.placeName.value;
   
   axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${rName}&limit=5&appid=8d5ebef1ba7e9899515a707fe20507cd
   `)
   .then((data1)=>{setSearch(data1)})
   .catch((err)=>{
    console.log(err);
    alert("Place not found")
})

   

  }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
             name="placeName"
             placeholder="Place you want to consult weather"
             autoComplete="off" />
            <button type="submit">Search</button>

        </form>
        { handleSubmit ?(
          <div> </div>
        ):
        ( <div> </div>)
        }
         
        
         
        
             
      
    </div>
  )
}
export default WeatherSearch