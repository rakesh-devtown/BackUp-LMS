import underStandingIcon from "../../assets/images/understandingIcon.png";
import troubleShootingIcon from "../../assets/images/troubleshootingIcon.png";
import otherIcon from "../../assets/images/otherIcon.png";

export const mockData = [
    {
      key: "0",
      icon: underStandingIcon,
      title: "Understanding approach",
      data: [
        {
          key: "0-0",
          title: "Did not understand question",
        },
        {
          key: "0-1",
          title: "Facing issue with code logic",
        },
        {
          key: "0-2",
          title: "Unable to make code logic",
        },
      ],
    },
    {
      key: "1",
      icon: troubleShootingIcon,
      title: "Troubleshooting Code",
      data: [
        {
          key: "1-0",
          title: "Compilation error",
        },
        {
          key: '1-1',
          title: "Runtime error",
        },
        {
          key: '1-2',
          title: "Wrong answer/Test cases failing",
        },
        {
          key: '1-3',
          title: "Language/Syntax help",
        },
      ],
    },
    {
      key: '2',
      icon: otherIcon,
      title: "Other",
      data: [
        {
          key: '2-0',
          title: "Need a different approach",
        },
        {
          key: '2-1',
          title: "Solution not clear",
        },
      ],
    },
  ];