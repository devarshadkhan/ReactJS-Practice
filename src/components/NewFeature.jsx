// import React, { useState } from 'react'
// import { useEffect } from 'react'

// const NewFeature = () => {

//     const[data,setData]=useState([])
    
// useEffect(()=>{
//     fetch("https://fakestoreapiserver.reactbd.com/tech")
//           .then((res) => res.json())
//           .then((response) => {
//             setData(response);
//             // const duplicate_Categories = new Set(res.map((item) => item.category));
//         });
//         },[])

//         const filterResult=(cartItem)=>{
//           console.log("CARTITEM",cartItem);

//           const updateItem  = data.filter((item)=>{
//             return item.category === cartItem
//           })
//           setData(updateItem)
//         }
    
//   return (
//     <div>
//         <h1>Ftlter Product </h1>

//         {
//           data.map((e)=>{
        
//            const datas = new Set(e.category)
//            console.log(datas)
            
//          if(datas){
//           return(
//               <>
             
//                 <button onClick={()=>filterResult(e.category)}>{datas}</button>
//               </>
//             )
//          }
//           })
//         }
//         {/* <button onClick={()=>filterResult('Headphones')}>Headphones Wireless</button>
//         <button onClick={()=>filterResult("Mobile Tablets")}>Mobile Tablets</button>
//         <button onClick={()=>filterResult("Smart Watch")}>Smart Watch</button>
//         <button onClick={()=>filterResult("Bluetooth")}>Bluetooth</button>
//         <button onClick={()=>filterResult("Shoes")}>Shoes</button>
//         <button onClick={()=>filterResult("Discover Skincare")}>Discover Skincare</button>
//         <button onClick={()=>filterResult("Shoes")}>Shoes</button>
//         <button onClick={()=>filterResult("Shoes")}>Shoes</button>
//         <button onClick={()=>filterResult("Shoes")}>Shoes</button>
//         <button onClick={()=>filterResult("Shoes")}>Shoes</button> */}
      
//         {
//           data.map((item)=>{
//             return(
//               <>
//               <div className="col-md-4">
//                     <div className="card" style={{ width: "18rem" }}>
//                       <img src={item.image} class="card-img-top" alt="..." />
//                       <div className="card-body col-md-12">
//                         <h5 className="card-title">{item.title}</h5>
//                         <p className="card-text">{item.description}</p>
//                         <a href="#" className="btn btn-primary">
//                           Add To Cart
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//               </>
//             )
//           })
//         }

//         </div>
//   )
// }


// export default NewFeature


// import React, { useState, useEffect } from 'react';

// const NewFeature = () => {
//   const [data, setData] = useState([]);
//   const [categories, setCategories] = useState(new Set());

//   useEffect(() => {
//     fetch("https://fakestoreapiserver.reactbd.com/tech")
//       .then((res) => res.json())
//       .then((response) => {
//         setData(response);

//         // Extract unique categories and set them in state
//         const uniqueCategories = new Set(response.map((item) => item.category));
//         setCategories(uniqueCategories);
//       });
//   }, []);

//   const filterResult = (selectedCategory) => {
//     // Filter data based on the selected category
//    if(categories.includes(selectedCategory)){
//     setCategories(data.filter((item) => item !== selectedCategory))
//    }
//    else{
//     selectedCategory([...categories, selectedCategory])
//    }
//   };
//   const filteredProducts = categories.length
//   ? data.filter((product) => categories.includes(product.category))
//   : data;
//   return (
//     <div>
//       <h1>Filter Product </h1>

//       {/* Render buttons for unique categories */}
//       {Array.from(categories).map((category) => (
//         <button key={category} onClick={() => filterResult()}>
//           {category}
//         </button>
//       ))}

//       {/* Render filtered products */}
//       {filteredProducts.map((item) => (
//        <>
       
//         <div key={item.id} className="col-md-4">
//           <div className="card" style={{ width: "18rem" }}>
//             <img src={item.image} className="card-img-top" alt="..." />
//             <div className="card-body col-md-12">
//               <h5 className="card-title">{item.title}</h5>
//               <p className="card-text">{item.description}</p>
//               <a href="#" className="btn btn-primary">
//                 Add To Cart
//               </a>
//             </div>
//           </div>
//         </div>
//        </>
//       ))}
//     </div>
//   );
// };

// export default NewFeature;


import React, { useEffect, useState } from "react";

const NewFeature = () => {
  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState(new Set());
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/tech")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        const categories = new Set(response.map((item) => item.category));
        setUniqueCategories(categories);
      });
  }, []);

  // const handleCategoryChange = (category) => {
  //   setSelectedCategories((prevCategories) => {
  //     if (prevCategories.includes(category)) {
  //       return prevCategories.filter((c) => c !== category);
  //     } else {
  //       return [...prevCategories, category];
  //     }
  //   });
  // };


  const handleClick = (param)=>{
    console.log(param);
    const u = data.filter((its)=> {
      return its.category === param  
    })
    console.log(u);
    setData(u)
  }

// const handleClickAll = (param)=>{
//   console.log(data);
//   setData(data)
// }
  // const filteredProducts = selectedCategories.length
  //   ? data.filter((product) => selectedCategories.includes(product.category))
  //   : data;

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-12">
          <div className="form-check d-flex justify-content-between">
          {/* <button className="btn btn-primary"   onClick={ handleClickAll}
                  >
                 All
                </button> */}
            {Array.from(uniqueCategories).map((category, index) => (
              <div key={index} className="form-check form-check-inline">
              
                <button className="btn btn-primary"   onClick={() => handleClick(category)}
                  >
                  {category}
                </button>
              </div>
            ))}
          </div>
        </div>

        {data.map((item) => (
          <div key={item.id} className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary">
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewFeature;
