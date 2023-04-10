import React from "react";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // стейт для категорий
  const [categoryId, setCategoryId] = React.useState(0);
  // стейт для сортировки, изначально выбриаем популярные пиццы (по убыванию)
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setIsLoading(true);

    // если есть минус, то сортируем по возрастанию, иначе по убыванию
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    // тут просто убираем минус из запроса, поскольу с минусом запрос будет работать некорректно
    const sortBy = sortType.sortProperty.replace("-", "");

    fetch(
      `https://64295b91ebb1476fcc479b12.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });

    // скроллим наверх
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onChangeCategory={(categoryIndex) => setCategoryId(categoryIndex)}
          />
          <Sort
            value={sortType}
            onChangeSort={(sortIndex) => setSortType(sortIndex)}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items &&
              items.map((item) => <PizzaBlock key={item.title} {...item} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
