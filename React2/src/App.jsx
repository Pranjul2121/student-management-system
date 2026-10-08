// function App(){
//   return (
//     <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//   )
// }

// export default App;

import React, {useState} from "react";

const App=()=>{
  const[count,setCount]=useState(0);

  function handleIncrement(){

  //  count++;  //dom manipulation yeh glt h krna 
  //  const pTag=document.querySelector("p");
  //  p.textContent=`Count:${count}`;


  //now by simple
  setCount(count+1);

  }
  return(
    <div className="h-screen w-full bg-black text-white">
      <p className="text-4xl">Count: {count}</p>
      <button className="border border-b-blue-950 p-4 m-4 cursor-pointer" onClick={handleIncrement}>Increment</button>
    </div>
    
  )
}

export default App;