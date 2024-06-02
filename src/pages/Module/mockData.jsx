import ModuleCardHeader from "../../components/ModuleTree2/ModuleCardHeader";
import TopicCard from "../../components/ModuleTree2/TopicCard";

export const treeData = [
  {
    title: (
      <ModuleCardHeader
        title={"Data Structures and Algorithms"}
        topic1={"Module 1 : Introduction to Web Development"}
        topic2={"Module 2 : Basic of Web Development"}
        onGoing={true}
      />
    ),
    key: "0",
    children: [
      {
        title: <TopicCard />,
        key: "0-0",
      },
      {
        title: <TopicCard />,
        key: "0-1",
      },
      {
        title: <TopicCard />,
        key: "0-2",
        className: "animate-bounce",
      },
    ],
  },
  {
    title: (
      <ModuleCardHeader
        title={"Web Development fundamentals"}
        topic1={"Module 1 : Introduction to Web Development"}
        topic2={"Module 2 : Basic of Web Development"}
        onGoing={false}
      />
    ),
    key: "1",
    children: [
      {
        title: <TopicCard />,
        key: "1-0",
      },
      {
        title: <TopicCard />,
        key: "1-1",
      },
      {
        title: <TopicCard />,
        key: "1-2",
        className: "animate-bounce",
      },
    ],
  },
  {
    title: (
      <ModuleCardHeader
        title={"Front End Development with React"}
        topic1={"Module 1 : Introduction to Web Development"}
        topic2={"Module 2 : Basic of Web Development"}
        onGoing={false}
      />
    ),
    key: "2",
    children: [
      {
        title: <TopicCard />,
        key: "2-0",
      },
      {
        title: <TopicCard />,
        key: "2-1",
      },
      {
        title: <TopicCard />,
        key: "2-2",
        className: "animate-bounce",
      },
    ],
  },
  {
    title: (
      <ModuleCardHeader
        title={"Web Development fundamentals"}
        topic1={"Module 1 : Introduction to Web Development"}
        topic2={"Module 2 : Basic of Web Development"}
        onGoing={false}
      />
    ),
    key: "3",
    children: [
      {
        title: <TopicCard />,
        key: "3-0",
      },
      {
        title: <TopicCard />,
        key: "3-1",
      },
      {
        title: <TopicCard />,
        key: "3-2",
        className: "animate-bounce",
      },
    ],
  },
  {
    title: (
      <ModuleCardHeader
        title={"Front End Development with React"}
        topic1={"Module 1 : Introduction to Web Development"}
        topic2={"Module 2 : Basic of Web Development"}
        onGoing={false}
      />
    ),
    key: "4",
    children: [
      {
        title: <TopicCard />,
        key: "4-0",
      },
      {
        title: <TopicCard />,
        key: "4-1",
      },
      {
        title: <TopicCard />,
        key: "4-2",
        className: "animate-bounce",
      },
    ],
  },
];
