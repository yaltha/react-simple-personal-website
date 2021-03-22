function Work({ work }) {
  return (
    <div className="work">
      <div>
        <image src={work.image} />
        <div>
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
