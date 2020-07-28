import React from "react";
import BaseLayout from "../BaseLayout/BaseLayout";
import { categories } from "../Const/CategoriesConst";
import { Typography, Card } from "@material-ui/core";
import "./Home.css";
function Home() {
  const data = categories
    .filter((category) => category.key === "mealtype")
    .map((category) => (
      <>
        <Typography align="center" variant="h4" className="home__categoryTitle">
          {category.title}
        </Typography>
        <div className="home__category" key={category.key}>
          {category.items.map((a) => {
            // console.log(a);
            return (
              <Card className="home_categoryCard">
                <img src={a.image} alt={a.category} />
                <h2>{a.category}</h2>
              </Card>
            );
          })}
        </div>
      </>
    ));

  return (
    <div className="home">
      <BaseLayout>{data}</BaseLayout>
    </div>
  );
}

export default Home;
