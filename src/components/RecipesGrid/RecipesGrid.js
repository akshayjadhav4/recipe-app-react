import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import BaseLayout from "../BaseLayout/BaseLayout";
import "./RecipesGrid.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Filter from "../Filter/Filter";
import { dietCheckboxOptions } from "../Const/DietConstant";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import HealthFilter from "../Filter/HealthFilter";
import { healthCheckboxOptions } from "../Const/HealthFilterConstant";
// import qs from "qs";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    margin: "10px",
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "contain",
  },
  fullHeightCard: {
    height: "100%",
  },
}));

export default function RecipesGrid({ match }) {
  const initialValues = {
    dietFilter: [],
    helthFilter: [],
  };

  const classes = useStyles();
  const history = useHistory();
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const FETCH_URL = `https://api.edamam.com/search?q=${match.params.type}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    async function fetchRecipes() {
      const request = await axios
        .get(FETCH_URL)
        .then((response) => setRecipes(response.data.hits))
        .catch((error) => setError("Problem with Server..."));

      return request;
    }
    fetchRecipes();
  }, [FETCH_URL]);

  const onSubmit = async (values, onSubmitProps) => {
    const searchParams = new URLSearchParams();
    if (values.dietFilter.length > 0) {
      values.dietFilter.map((filter) => {
        searchParams.append("diet", filter);
        console.log(filter);
      });
    }

    if (values.helthFilter.length > 0) {
      values.helthFilter.map((filter) => {
        searchParams.append("health", filter);
        console.log(filter);
      });
    }
    const URL = `https://api.edamam.com/search?q=${
      match.params.type
    }&${searchParams.toString()}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const request = await axios
      .get(URL)
      .then((response) => {
        if (response.data.hits.length > 0) {
          setRecipes(response.data.hits);
          setError("");
        } else {
          setError("No Recipes Found");
          setRecipes([]);
        }
      })
      .catch((error) => {
        setError("Problem while fetching recipes with given filter");
        setRecipes([]);
      });

    return request;
  };
  return (
    <div className={classes.root}>
      <BaseLayout>
        <Typography align="center" variant="h3" className="recipesGrid__title">
          {match.params.type === "time=5-10"
            ? "Last Minute"
            : match.params.type}
        </Typography>
        {error && (
          <Typography align="center" variant="h4">
            {error}
          </Typography>
        )}

        <br />
        <br />
        <div className="recipeGrid__filter">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(formik) => (
              <Form>
                <Filter
                  label="Diet Filters"
                  name="dietFilter"
                  options={dietCheckboxOptions}
                />
                <HealthFilter
                  label="Helth Filters"
                  name="helthFilter"
                  options={healthCheckboxOptions}
                />
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <br />
        <br />
        <Grid container spacing={3}>
          {recipes.map((recipe, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  className={(classes.root, classes.fullHeightCard)}
                  onClick={() => {
                    history.push({
                      pathname: "/viewRecipe",
                      state: recipe,
                    });
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={recipe.recipe.image}
                      title={recipe.recipe.label}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        align="center"
                      >
                        {recipe.recipe.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        By {recipe.recipe.source}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="h6"
                      >
                        Calories : {Math.round(recipe.recipe.calories)} kcal
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="h6"
                      >
                        Number of servings : {recipe.recipe.yield}{" "}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </BaseLayout>
    </div>
  );
}
