function Work({ work }) {
  return (
    <div className="work">
      <div className="headline">
        <img className="image" alt={work.title} src={work.image} />
        <div className="text-headline">
          <p>{work.extras}</p>
          <p className="bold">{work.title}</p>
          <p>{work.timeline}</p>
        </div>
      </div>
      <p className="work-description">{work.description}</p>
    </div>
  );
}

export default Work;
