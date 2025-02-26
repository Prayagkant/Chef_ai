import React from "react";

const IngredientList = ({ ingredientList, setIngredientList, getRecipe }) => {
  return (
    <section className="my-10">
      <h2 className="mb-5 text-3xl font-bold">Ingredients on hand :</h2>
      <ul className="ml-5 text-xl list-disc">
        {ingredientList.map((e, i) => (
          <div className="flex items-center justify-between w-48 my-3" key={i}>
            <li>{e}</li>
            <button
              className="bg-[#90a955] border-none rounded-md text-black py-1 px-8 text-sm font-bold"
              title="remove item"
              onClick={() => {
                const arr = ingredientList.filter((items) => items != e);
                setIngredientList((prev) => arr);
              }}
            >
              X
            </button>
          </div>
        ))}
      </ul>

      {ingredientList.length > 2 && (
        <div className="flex items-center justify-between rounded-md bg-[#cad2c5] py-3 px-7 mt-10 mx-3">
          <div>
            <h3 className="text-lg font-medium">Ready for a recipe ?</h3>
            <p className="text-[#555d6c]leading-6">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            className="border-none rounded-md bg-[#90a955] text-[#000] py-2 px-4 text-sm cursor-pointer w-[150px]"
            onClick={getRecipe}
            title="generate your recipe"
          >
            Get a recipe
          </button>
        </div>
      )}
    </section>
  );
};

export default IngredientList;
