import { useState } from "react";
import { GifGrid, AddCategory } from "./Components";
/* import { AddCategory } from "./Components/addCategory"; */

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
