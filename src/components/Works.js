import Work from "./Work";
// import works from "../works.json";

function Works() {
  const works = [
    {
      id: 1,
      image: "/img/image01.jpg",
      extras: "HTML",
      title: "Project HTML at ABC client.",
      timeline: "2020-2021",
      description:
        "Do consectetur qui reprehenderit in id incididunt voluptate deserunt sit laborum. Veniam voluptate et duis laborum labore occaecat consectetur eu adipisicing.Magna proident ut incididunt ipsum ut laborum. Nulla adipisicing nostrud in consequat consequ",
    },
    {
      id: 2,
      image: "/img/image02.jpg",
      extras: "JavaScript",
      title: "Project JS at DEF client.",
      timeline: "2020-2021",
      description:
        "Do consectetur qui reprehenderit in id incididunt voluptate deserunt sit laborum. Veniam voluptate et duis laborum labore occaecat consectetur eu adipisicing. Magna proident ut incididunt ipsum ut laborum. Nulla adipisicing nostrud in consequat consequat.",
    },
    {
      id: 3,
      image: "/img/image03.jpg",
      extras: "CSS",
      title: "Project CSS at XYZ client.",
      timeline: "2020-2021",
      description:
        "Do consectetur qui reprehenderit in id incididunt voluptate deserunt sit laborum. Veniam voluptate et duis laborum labore occaecat consectetur eu adipisicing. Magna proident ut incididunt ipsum ut laborum. Nulla adipisicing nostrud in consequat consequat.",
    },
    {
      id: 4,
      image: "/img/image04.jpg",
      extras: "Mobile Application",
      title: "Mobile App of QWERTY for ZYX company.",
      timeline: "2020-2021",
      description:
        "Do consectetur qui reprehenderit in id incididunt voluptate deserunt sit laborum. Veniam voluptate et duis laborum labore occaecat consectetur eu adipisicing. Magna proident ut incididunt ipsum ut laborum. Nulla adipisicing nostrud in consequat consequat.",
    },
  ];

  return (
    <div className="works">
      <button>
        <span>
          <i class="fas fa-briefcase"></i>
        </span>{" "}
        my works
      </button>
      <div className="works-container">
        {works &&
          works.length > 0 &&
          works.map((work) => <Work key={work.id} work={work} />)}
      </div>
    </div>
  );
}

export default Works;
