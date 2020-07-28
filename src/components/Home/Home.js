import React, { useState } from "react";
import BaseLayout from "../BaseLayout/BaseLayout";
import { categories } from "../Const/CategoriesConst";
import { Typography, Container, Paper } from "@material-ui/core";
import "./Home.css";
function Home() {
  const [type, setType] = useState("mealtype");
  const data = categories
    .filter((category) => category.key === type)
    .map((category) => (
      <>
        <Typography align="center" variant="h4" className="home__categoryTitle">
          {category.title}
        </Typography>
        <div className="home__category" key={category.key}>
          {category.items.map((a, index) => {
            // console.log(a);
            return (
              <Paper className="home_categoryCard">
                <img src={a.image} alt={a.category} />
                <h2>{a.category}</h2>
                {a.description && <p>{a.description}</p>}
              </Paper>
            );
          })}
        </div>
      </>
    ));

  return (
    <div className="home">
      <BaseLayout>
        <Container>
          <div className="home__categoryMenu">
            <button
              onClick={(e) => setType("mealtype")}
              className={` home__categoryMenuButton ${
                type === "mealtype" && "home__categoryMenuButton--selected"
              }`}
            >
              Meals for Day
            </button>
            <button
              onClick={(e) => setType("healthLabels")}
              className={` home__categoryMenuButton ${
                type === "healthLabels" && "home__categoryMenuButton--selected"
              }`}
            >
              Health Based
            </button>
          </div>
          {data}
        </Container>
      </BaseLayout>
    </div>
  );
}

export default Home;
