import React from "react";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
function BaseLayout({ children }) {
  return (
    <div className="baseLayout">
      <Header />
      <SearchBox />
      <CategoryMenu />
      {children}
    </div>
  );
}

export default BaseLayout;
