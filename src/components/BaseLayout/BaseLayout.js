import React from "react";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
function BaseLayout({ children }) {
  return (
    <div className="baseLayout">
      <Header />
      <SearchBox />
      {children}
    </div>
  );
}

export default BaseLayout;
