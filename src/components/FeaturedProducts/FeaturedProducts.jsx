import "./FeaturedProducts.scss";
import { Card } from "../Card/Card";
import { useState, useEffect } from "react";
import axios from 'axios';



export const FeaturedProducts = ({type}) => {

  const [data, setData] = useState([]);

//   axios.get(process.env.REACT_APP_API_URL+"/products").then(response => {
//   console.log("Response Axios : ",response);
// });

// TO GET MY FEATURED PRODUCTS FROM MY STRAPI API (backend)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*",
        {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
          },
        }
      );
      setData(res.data.data)
      } catch(err) {
        console.log(err)
      }
    };
    fetchData();
  }, [])

  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, vel facere odio fugiat dolores minus inventore laboriosam, quo nisi eos voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dignissimos. </p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}