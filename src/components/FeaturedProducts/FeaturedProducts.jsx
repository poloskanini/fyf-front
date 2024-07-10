import "./FeaturedProducts.scss";
import { Card } from "../Card/Card";
import useFetch from "../../hooks/useFetch";


export const FeaturedProducts = ({ type }) => {

const {data,loading,error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

//   axios.get(process.env.REACT_APP_API_URL+"/products").then(response => {
//   console.log("Response Axios : ",response);
// });

// TO GET MY FEATURED PRODUCTS FROM MY STRAPI API (backend)
  

  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, vel facere odio fugiat dolores minus inventore laboriosam, quo nisi eos voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dignissimos. </p>
      </div>
      <div className="bottom">
        {error
        ? "Something went wrong while fetching products..."
        : loading
        ? "loading"
        : data?.map(item => (
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}