import { icons } from "antd/es/image/PreviewGroup";
import TopicNode from "./TopicNode";
import { DownOutlined, PlayCircleOutlined } from "@ant-design/icons";
import AssignmentNode from "./AssignmentNode";

export const treeData = [
  {
    title: "Introduction to HTML",
    key: "0",
    className: "level-1",
    selectable: false,
    children: [
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} checked={true} />,
        key: "0-1",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} checked={true} />,
        key: "0-2",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-3",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-4",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-5",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-6",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-7",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-8",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-9",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-10",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-11",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-12",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-13",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic 1"} />,
        key: "0-14",
      },
      {
        title: <TopicNode time={"08:45"} topic={"Topic last"} />,
        key: "0-15",
      },
    ],
  },
  // {
  //   title: "Assignments",
  //   key: "1",
  //   className: "level-1",
  //   children: [
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-0",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-2",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"hard"} />,
  //       key: "1-3",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"medium"} />,
  //       key: "1-4",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-5",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-6",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-7",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-8",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-9",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-10",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-11",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-12",
  //     },
  //     {
  //       title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
  //       key: "1-13",
  //     },
  //   ],
  // },
];
