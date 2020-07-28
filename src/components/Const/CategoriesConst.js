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

const categoryVegan = {
  data: "vegan",
  image:
    "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg",
  category: "Vegan",
  description: "No meat, poultry, fish, dairy, eggs or honey",
};

const categoryVegeterian = {
  data: "vegeterian",
  image:
    "https://cdn.pixabay.com/photo/2016/06/18/22/52/salad-1465818_960_720.jpg",
  category: "Vegeterian",
  description: "No meat, poultry, or fish",
};

const categorySugarConscious = {
  data: "lowSugar",
  image:
    "https://cdn.pixabay.com/photo/2017/11/11/20/59/food-2940463_960_720.jpg",
  category: "Sugar-conscious",
  description: "Less than 4g of sugar per serving",
};

const categoryAlcoholFree = {
  data: "alcohol-free",
  image:
    "https://cdn.pixabay.com/photo/2019/09/03/18/57/photography-4450049_960_720.jpg",
  category: "Alcohol Free",
  description: "No alcohol used or contained",
};

const categoryDairyFree = {
  data: "dairy-free",
  image:
    "https://cdn.pixabay.com/photo/2020/04/28/11/25/milk-5104022_960_720.jpg",
  category: "Dairy Free",
  description: "No dairy; No lactose",
};

const categoryKeto = {
  data: "keto",
  image:
    "https://cdn.pixabay.com/photo/2017/05/24/16/54/zucchini-2340977_960_720.jpg",
  category: "Keto",
  description: "Maximum 7 grams of net carbs per serving",
};
const categoryNoOilAdded = {
  data: "no-oil-added",
  image:
    "https://cdn.pixabay.com/photo/2017/09/22/16/25/pizza-2776208_960_720.jpg",
  category: "No oil added",
  description: "No oil added except  the basic ingredients",
};

const categoryRedMeatFree = {
  data: "red-meat-free",
  image:
    "https://cdn.pixabay.com/photo/2018/02/08/15/01/meat-3139640_960_720.jpg",
  category: "Red meat-free",
  description: "Does not contain beef, lamb, pork, duck meat",
};
const categoryWheatFree = {
  data: "wheat-free",
  image:
    "https://cdn.pixabay.com/photo/2016/04/10/09/52/bread-1319583_960_720.jpg",
  category: "Wheat-free",
  description: "No wheat, can have gluten though",
};
export const categories = [
  {
    title: "Meals for the day",
    key: "mealtype",
    items: [categoryBreakfast, categoryLunch, categoryDinner, categoryDesserts],
  },
  {
    title: "Health Based",
    key: "healthLabels",
    items: [
      categoryVegan,
      categoryVegeterian,
      categorySugarConscious,
      categoryAlcoholFree,
      categoryDairyFree,
      categoryKeto,
      categoryNoOilAdded,
      categoryRedMeatFree,
      categoryWheatFree,
    ],
  },
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
