import ReactMarkdown from "react-markdown";

const Recipe = ({ recipe }) => {
  return (
    <section className="mx-10 text-lg font-normal leading-6 text-black list-disc recipe-cont">
      <h2 className="mb-4 text-3xl">Chef AI Recommends :</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
};
export default Recipe;
