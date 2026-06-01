// import { useState } from "react";
// const App=()=>{
//     const [color, setcolor]=useState("red");
//     return(
//         <>
//         <h1>function for chnage color name:{color}</h1>
//         <button onClick={()=>setcolor("blue")}>change color</button>

        
//         </>
//     )
// }
// export default App;
// import { useState } from "react";
// const App=()=>{
//     const[city, setcity] = useState("mumbai");
//     return(
//         <>
//         <h1>function for change city name:{city}</h1>
//         <button onClick={()=>{setcity("delhi")}}>change city</button>
//         </>
//     )
// }
// export default App;
// import { useState } from "react";
// const App=()=>{
//     const [color, setcolor] = useState("red");
//     return(
//         <>
//         <h1 style={{color:color}}>this is{color}color!</h1>
//         <button onClick={()=>{setcolor("black")}}>Black</button>
//          <button onClick={()=>{setcolor("green")}}>Green</button>
//           <button onClick={()=>{setcolor("yellow")}}>Yellow</button>
//            <button onClick={()=>{setcolor("orange")}}>Orange</button>
        
        
//         </>
//     )
// }
// export default App;
// import { useState } from "react";
// const App=()=>{
//     const [count, setcount] = useState(0);
    
//         return(
//             <>
//             <h1>my counter App</h1>
           
//             <button onClick={()=>{setcount(count+1)}}>increase</button>
//              <h1>{count}</h1>
//             <button onClick={()=>{setcount(count-1)}}>decrease</button>
//             </>

//     )
// }
// export default App;
// import { useState } from "react";
// const App=()=>{
//     const [count, setcount] = useState(0);
//     const inc=()=>{
//         if(count<=0){
//             alert("count is less than 0 !")
//         }
//         else{            
//             setcount(count-1)
//         }
//     }
//     return(
//         <>
//         <h1>my first react app</h1>
//         <button onClick={()=>{setcount(count+1)}}>increase</button>
//         <h1>{count}</h1>
       
//          <button onClick={inc}>decrease</button>
//         </>
//     )
// }
// export default App;
// import Childto from "./childto";
// const App=()=>{
//     return(
//         <>
//          <h1>my first react app</h1>
//             <Childto name="ankur" age={22} cgpa={8.0}/>
//         </>
//     )
// }
// export default App;
import Child1 from "./child1";
import Count from "./count";
import Count1 from "./count1";
const App=()=>{
    let person={
       name : "vishwajeet",
        age : 22,
        marks : 700

    }
    const student ={
       name : "drishti",
       class : "fifth" ,
       hobby : "palying"
    }

    return(
        <>
        <h1>this is my App page</h1>
        <Count data= {student}/>
        <Count1 data ={person}/>
        <Child1/>
        </>
    ) 
}
export default App;