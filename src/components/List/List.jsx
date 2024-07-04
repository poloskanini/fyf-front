import "./List.scss";
import { Card } from "../Card/Card";

export const List = () => {

  const data = [
    {
      id: 1,
      img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinyrgb&w=1600",
      img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinyrgb&w=1600",
      title:"Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinyrgb&w=1600",
      title:"Skirt",
      isNew: false,
      oldPrice: 34,
      price: 24,
    },
    {
      id: 3,
      img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinyrgb&w=1600",
      title:"Coat",
      isNew: false,
      oldPrice: 56,
      price: 43,
    },
    {
      id: 4,
      img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinyrgb&w=1600",
      title:"Pants",
      isNew: false,
      oldPrice: 47,
      price: 37,
    },
  ]

  return (
    <div className="list">
      {data.map(item => (
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}