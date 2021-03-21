import Work from "./Work";
// import works from "../works.json";

function Works({ works }) {
  return (
    <div className="container">
      <button>my works</button>
      {works.map((work) => (
        <Work key={work.id} work={work} />
      ))}
    </div>
  );
}

export default Works;
