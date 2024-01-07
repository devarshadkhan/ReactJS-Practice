// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// const Api = () => {
//     const [data, setData]=useState([])

//     const [uniqueCategories, setUniqueCategories] = useState(new Set());

//    useEffect(() => {
//        fetch("https://fakestoreapiserver.reactbd.com/tech")
//        .then(res=>res.json())
//        .then((response)=>{
//            console.log(response);
//         setData(response)
//        })
//     }, []);
//    // Extract unique categories using a set
//    const categories = new Set(response.map((item) => item.category));
//    setUniqueCategories(categories);

//     return (
//         // / category
//     <div>

// {Array.from(uniqueCategories).map((category, index) => (
//         <div key={index}>{category}</div>
//       ))}
//        {
//         data.map((product)=>{
//             return (
//                 <>
//                 <div>{product.category}</div>

//                 <div>{product.title}</div>
//                 <img src={product.image} alt="" width={"100px"} height={"100px"} />
//                 </>
//             )
//         })
//        }
//     </div>
//   )
// }

// export default Api

import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState(new Set());
  const [selectedCategories, setSelectedCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/tech")
      .then((res) => res.json())
      .then((response) => {
        setData(response);

        // Extract unique categories using a set
        const categories = new Set(response.map((item) => item.category));
        setUniqueCategories(categories);
      });
  }, []);

  /**
   *
   * @param {Chooose a one category and uske according data filter } category
   */
  const handleCategoryChange = (category) => {
    console.log(category);
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  /**
   * All Data Filter By Products
   */
  const filteredProducts = selectedCategories.length
    ? data.filter((product) => selectedCategories.includes(product.category))
    : data;
  return (
    <>
      <div className="containerx">
        <div class="container-fluid mt-2">
          <div class="row">
            <div className="col-12">
              <div>
                {/* {Array.from(uniqueCategories).map((category, index) => (
                  <div key={index} onClick={() => handleClicked(category)}>
                    {category}
                  </div>
                ))} */}
                <div class="form-check d-flex justify-content-between">
                  {Array.from(uniqueCategories).map((category, index) => (
                    <div key={index}>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id={index}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <label class="form-check-label" for={index}>
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {filteredProducts.map((item) => {
              return (
                <>
                  <div className="col-md-3">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src={item.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                        <a href="#" class="btn btn-primary">
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Api;
