const categoryBreakfast = {
  data: "breakfast",
  image:
    "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg",
  category: "Breakfast",
};

const categoryLunch = {
  data: "lunch",
  image:
    "https://cdn.pixabay.com/photo/2017/03/27/13/54/bread-2178874_960_720.jpg",
  category: "Lunch",
};

const categoryDinner = {
  data: "dinner",
  image:
    "https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg",
  category: "Dinner",
};

const categoryDesserts = {
  data: "desserts",
  image:
    "https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040_960_720.jpg",
  category: "Desserts",
};

export const categories = [
  {
    title: "Meals for the day",
    key: "mealtype",
    items: [categoryBreakfast, categoryLunch, categoryDinner, categoryDesserts],
  },
  // {
  //   title: "Healthy meals",
  //   key: "healthLabels",
  //   items: [
  //     "categoryVegan",
  //     " categoryVegeterian",
  //     "categoryLowSugar",
  //     "categoryNutsFre",
  //   ],
  // },
  // {
  //   title: "Diet meals",
  //   key: "dietLabels",
  //   items: [
  //     "categoryBalanced",
  //     " categoryHighProtein",
  //     "categoryLowCarb",
  //     "categoryLowFat",
  //   ],
  // },
];
