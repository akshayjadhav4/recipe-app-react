import React from "react";
import { Link, withRouter } from "react-router-dom";

function CategoryMenu() {
  return (
    <div className="categoryMenu">
      <ul>
        <li>
          <Link to="/mealType">Meal Type</Link>
        </li>
      </ul>
    </div>
  );
}

export default CategoryMenu;
