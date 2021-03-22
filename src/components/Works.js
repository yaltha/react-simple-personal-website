import Work from "./Work";
// import works from "../works.json";

function Works() {
  const works = [
    {
      id: 1,
      image: "/img/crop-pp.jpg",
      extras: "HTML",
      title: "Project HTML at ABC client.",
      timeline: "2020-2021",
      description:
        "Do consectetur qui reprehenderit in id incididunt voluptate deserunt sit laborum. Veniam voluptate et duis laborum labore occaecat consectetur eu adipisicing.Magna proident ut incididunt ipsum ut laborum. Nulla adipisicing nostrud in consequat consequ",
    },
    {
      id: 2,
      image: "/img/crop-pp.jpg",
      extras: "JavaScript",
      title: "Project JS at DEF client.",
      timeline: "2020-2021",
      description:
        "Do consectetur qui reprehenderit in id incididunt voluptate deserunt sit laborum. Veniam voluptate et duis laborum labore occaecat consectetur eu adipisicing. Magna proident ut incididunt ipsum ut laborum. Nulla adipisicing nostrud in consequat consequat.",
    },
    {
      id: 3,
      image: "/img/crop-pp.jpg",
      extras: "CSS",
      title: "Project CSS at XYZ client.",
      timeline: "2020-2021",
      description:
        "Do consectetur qui reprehenderit in id incididunt voluptate deserunt sit laborum. Veniam voluptate et duis laborum labore occaecat consectetur eu adipisicing. Magna proident ut incididunt ipsum ut laborum. Nulla adipisicing nostrud in consequat consequat.",
    },
    {
      id: 4,
      image: "/img/crop-pp.jpg",
      extras: "Mobile Application",
      title: "Mobile App of QWERTY for ZYX company.",
      timeline: "2020-2021",
      description:
        "Do consectetur qui reprehenderit in id incididunt voluptate deserunt sit laborum. Veniam voluptate et duis laborum labore occaecat consectetur eu adipisicing. Magna proident ut incididunt ipsum ut laborum. Nulla adipisicing nostrud in consequat consequat.",
    },
  ];
  
  return (
    <div className="works">
      <button>my works</button>
      {works &&
        works.length > 0 &&
        works.map((work) => <Work key={work.id} work={work} />)}
    </div>
  );
}

export default Works;
