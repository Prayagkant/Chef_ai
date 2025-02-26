import React, { useState } from "react";
import ASCIIText from "../reactcomponent/ASCIIText";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai";
import Recipe from "./Recipe";

const Main = () => {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  async function getRecipe() {
    // console.log(ingredientList);
    // setRecipe("some thing added");
    // console.log(recipe);
    setLoading(true);
    const generateRecipeMarkdown = await getRecipeFromMistral(ingredientList);
    setRecipe(generateRecipeMarkdown);
    setLoading(false);
  }
  function handleForm(formData) {
    const ingredient = formData.get("ingredient");
    setIngredientList((prevList) => [...prevList, ingredient]);
  }
  return (
    <main className="px-8 pt-8 pb-3 mt-10">
      <form
        action={handleForm}
        className="flex flex-col justify-center gap-3 sm:h-10 sm:flex-row"
      >
        <input
          type="text"
          aria-label="add ingredient"
          placeholder="e.g. Banana"
          name="ingredient"
          title="add your ingredients"
          className="flex-grow border border-black border-solid rounded-md min-w-[150px] max-w-[400px] px-5"
        />
        <button className="rounded-md bg-[#141413] text-[#fafaf8] border-none font-medium w-[150px] text-sm">
          + Add Ingredient
        </button>
        <button
          className="rounded-md bg-[#90a955] text-[#fafaf8] border-none font-medium w-[150px] text-sm"
          type="button"
          title="clear all ingredients"
          onClick={() => {
            setIngredientList([]);
            setRecipe("");
          }}
        >
          Clear
        </button>
      </form>
      {!ingredientList.length ? (
        <ASCIIText
          text="Hey!"
          enableWaves={true}
          asciiFontSize={5}
          textColor="#fdf9f3"
          textFontSize={200}
        />
      ) : (
        <IngredientList
          ingredientList={ingredientList}
          setIngredientList={setIngredientList}
          getRecipe={getRecipe}
        />
      )}
      {loading ? "Getting Your Recipe ....." : null}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
};

export default Main;
