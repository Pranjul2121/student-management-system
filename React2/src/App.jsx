// function App(){
//   return (
//     <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//   )
// }

// export default App;

// import React, {useState} from "react";

// const App=()=>{
//   const[count,setCount]=useState(0);

//   function handleIncrement(){

//   //  count++;  //dom manipulation yeh glt h krna 
//   //  const pTag=document.querySelector("p");
//   //  p.textContent=`Count:${count}`;


//   //now by simple
//   setCount(count+1);

//   }
//   return(
//     <div className="h-screen w-full bg-black text-white">
//       <p className="text-4xl">Count: {count}</p>
//       <button className="border border-b-blue-950 p-4 m-4 cursor-pointer" onClick={handleIncrement}>Increment</button>
//     </div>
    
//   )
// }

// export default App;



import { useEffect } from "react";
import React, {useState} from 'react';
import axios from "axios";

const App=()=>{
  const[limit,setLimit]=useState(0);
  const [productData, setProductData] = useState([]);
  console.log("limit:",limit)
  async function getProduct(){
    const response=await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    console.log("Response:",response.data.products);
    setProductData(response.data.products);
  }
  
  //jsx ke andr javascript likhne ke liye {} ka use krte h
  // getProduct();

  useEffect(()=>{ //manage side effects in functional components   pehele upr wala phir niche wala fir last m yeh useeffect chlegaS
    getProduct();
  },[limit])

  // if(productData.length==0){//early return
  //   return<>
  //   <h1 className="w-400 h-400 bg-red-400 flex justify-center items-center text-4x1">Loading...</h1>
  //   </>
  // }

  return(
    <>
    <h1 className="text-2x1 font-bold text-center mt-12 p-6"> Ecommerce Website</h1>
    <div className="flex flex-col justify-center items-center gape-4">
      <label>Enter product limit No:</label>
      <input type="number" placeholder="Enter Product No" className="border border-b-black p-2" onChange={(e)=>{
        setLimit(e.target.value);
      }}/>
      <p className="text-x1 font-bold">
        Total Number of Product:{productData.length}
      </p>
      </div>
    
    <div className="flex justify-center items-center flex-wrap dap-12 mt-12">
      {productData.map((item)=>{
        return(
          <div key={item.id} className="w-80 flex justify-center items-center flex-col border border-b-black gap-2 p-4">
            <h1>Brand:{item.brand}</h1>
            <img width={200} height={100} src={item.images[0]} alt="product image" />
            <h1>Title:{item.title}</h1>
            <h1>Description:{item.description}</h1>
            <h1 className="font-bold">Category:{item.category}</h1>
            <h1 className="text-red-600 font-bold">Price:{item.price}</h1>
            
          </div>
        )
      })}
        
    </div>
    </>
  )

//for logics
  // return(
  //   <>
  //   {productData.length>0?(
  //   <div>
  //     {productData.map((item)=>{
  //       return(
  //         <div>
  //           <h1>Brand:{item.brand}</h1>
  //           <img src={item.images[0]} alt="product image" />
  //         </div>
  //       )
  //     })}
        
  //   </div>
  // ):(
  //   <h1 className="w-400 h-400 bg-red-400 flex justify-center items-center text-4x1">Loading...</h1>
  // )}
  // </>
  // )


}

export default App;