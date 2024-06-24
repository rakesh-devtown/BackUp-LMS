import ModuleCardHeader from "../../components/ModuleTree2/ModuleCardHeader";
import TopicCard from "../../components/ModuleTree2/TopicCard";

export const treeData1 = [
  {
    title: (
      <ModuleCardHeader
        title={"Data Structures and Algorithms"}
        topic1={"Introduction to Web Development"}
        topic2={"Basic of Web Development"}
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
        topic1={"Introduction to Web Development"}
        topic2={"Basic of Web Development"}
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
        topic1={"Introduction to Web Development"}
        topic2={"Basic of Web Development"}
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
        topic1={"Introduction to Web Development"}
        topic2={"Basic of Web Development"}
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
];

export const treeData2 = [
  {
    title: (
      <ModuleCardHeader
        title={"Front End Development with React"}
        topic1={"Introduction to Web Development"}
        topic2={"Basic of Web Development"}
        onGoing={false}
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
];

export const treeData3 = [
  {
    title: (
      <ModuleCardHeader
        title={"Data Structures and Algorithms"}
        topic1={"Introduction to Web Development"}
        topic2={"Basic of Web Development"}
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
        topic1={"Introduction to Web Development"}
        topic2={"Basic of Web Development"}
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
];
