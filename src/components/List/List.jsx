import "./List.scss";
import { Card } from "../Card/Card";
import useFetch from "../../hooks/useFetch";

export const List = ({ catId, maxPrice, sort, subCats }) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      item =>`&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  //TODO:     &sort=price:${sort     à ajouter pour filter par prix du - au + cher}

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}