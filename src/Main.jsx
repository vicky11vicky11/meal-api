import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";

function Main() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        // console.log(res.data);
        setitems(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemslist = items.map(({ strCategory, strCategoryThumb, idCategory }) => {
    return (
      <section className="card" key={idCategory}>
        <img src={strCategoryThumb} />
        <section className="content">
          <p>{strCategory}</p>
          <p>#{idCategory}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemslist}</div>;
}

export default Main;
