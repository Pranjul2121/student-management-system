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

  const[searchProduct,setSearchProduct]=useState("");

  const[filteredProductData,setFilteredProductData]=useState([]);
  
  const [productData, setProductData] = useState([]);
  
  
  console.log("limit:",limit)


  async function getProduct(){
    const response=await axios.get(`https://dummyjson.com/products?limit=${limit}`);
    
    setProductData(response.data.products);
    setFilteredProductData(response.data.products);
  }
  
  //jsx ke andr javascript likhne ke liye {} ka use krte h
  // getProduct();



  useEffect(()=>{ //manage side effects in functional components   pehele upr wala phir niche wala fir last m yeh useeffect chlegaS
    getProduct();
  },[limit])

 function handleAddToCart(product) {
    console.log("product:", product);
  }

function handleProductSearch(){
  const filteredProductDataResponse=productData.filter((eachProductItem)=>{
    return(eachProductItem.title.toLowerCase().includes(searchProduct.toLowerCase()) 
    ||
     eachProductItem.category.toLowerCase().includes(searchProduct.toLowerCase())
    ||
    eachProductItem.tags.some((item)=>item.toLowerCase().includes(searchProduct.toLowerCase()),
  )|| (eachProductItem.brand || "").includes(searchProduct.toLowerCase())
);
  },);
  setFilteredProductData(filteredProductDataResponse);
}

  // if(productData.length==0){//early return
  //   return<>
  //   <h1 className="w-400 h-400 bg-red-400 flex justify-center items-center text-4x1">Loading...</h1>
  //   </>
  // }

  return(
    <>
    <h1 className="text-2x1 font-bold text-center mt-12 p-6"> Ecommerce Website</h1>
    
    <div className="flex justify-between items-center gap-4 p-4">
      <div className="flex flex-col">
      <label>Enter product limit No:</label>
      <input type="number" placeholder="Enter Product No" className="border border-b-black p-2" onChange={(e)=>{
        setLimit(e.target.value);
      }}/>

      <p className="text-x1 font-bold">
        Total Number of Product:{filteredProductData.length}
      </p>

      </div>
    


      <div className="flex justify-center items-center gap-4 p-2">
          <div className="flex flex-col">
            <label htmlFor="">Search your product</label>
            <input
              onChange={(e) => {
                setSearchProduct(e.target.value);
              }}
              value={searchProduct}
              className="border border-b-black p-2"
              type="text"
              placeholder="Enter search Item"
            />
          </div>

          <button
            onClick={handleProductSearch}
            className="p-2 mt-7 border border-red-600 bg-yellow-400 hover:bg-white cursor-pointer"
          >
            🔎 Search
          </button>
        </div>
        </div>
      

    <div className="flex justify-center items-center flex-wrap gap-12 mt-12">

      {filteredProductData.map((item)=>{
        
        return(
          <div className="w-80 flex justify-center items-center flex-col border border-b-black gap-2 p-4">
            <h1>Brand:{item.brand}</h1>
            <img width={200} height={100} src={item.images[0]} alt="product image" />
            <h1>Title:{item.title}</h1>
            <h1>Description:{item.description}</h1>
            <h1 className="font-bold">Category:{item.category}</h1>
            <h1 className="text-red-600 font-bold">Price:{item.price}</h1>
            <button onClick={()=>{
              handleAddToCart(item);
            }}
            className="text-[16px] border border-red-600 bg-amber-300 rounded-x1 p-2 hover:bg-zinc-200 cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        )
      })}
        
    </div>
    </>
  )

}

export default App;




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
