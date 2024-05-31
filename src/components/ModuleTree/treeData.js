import MainTopic from "./MainTopic"
import ModuleCard from "./ModuleCard"
import TopicCard from "./TopicCard"
import CreateUiEmployeeId from "./CreateUiEmployeeId"
import WhatIsDevtown from "./WhatIsDevtown"

export const checkedKeys = ["1-1-1", "1-1-2", "1-1-3"]

export const treeData = [
    {
        // title: 'FrontEnd Development',
        title: <MainTopic topicName={"FrontEnd Development"} />,
        key: "1",
        checkable: false,
        selectable: false,
        className: "level-1",
        children: [
            {
                title: <ModuleCard title={"Module 1: Introduction to HTML"} />,
                key: "1-1",
                checkable: false,
                selectable: false,
                className: "level-2",
                children: [
                    {
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={true} lock={false} />,
                        key: "1-1-1",
                        className: "level-3",
                    },
                    {
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={true} lock={false} />,
                        key: "1-1-2",
                        className: "level-3",
                    },
                    {
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={true} lock={false} />,
                        key: "1-1-3",
                        className: "level-3",
                    },
                    {
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={false} lock={false} />,
                        key: "1-1-4",
                        className: "level-3",
                    },
                    {
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={false} lock={false} />,
                        key: "1-1-5",
                        className: "level-3",
                    },
                    {
                        title: <CreateUiEmployeeId />,
                        key: '1-1-6',
                        className: "level-3 hover-none",
                        selectable: false,
                        checkable: false,
                    },
                    {
                        title: <WhatIsDevtown />,
                        key: '1-1-7',
                        className: "level-3",
                        checkable: false,
                        selectable: false,
                    }

                ]
            },
            {
                title: <ModuleCard title={"Module 2: Advance HTML"} />,
                key: "1-2",
                checkable: false,
                selectable: false,
                className: "level-2",
                children: [

                    {
                        checkable: false,
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={false} lock={true} />,
                        key: "1-2-1",
                        className: "level-3",
                    },
                    {
                        checkable: false,
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={false} lock={true} />,
                        key: "1-2-2",
                        className: "level-3",
                    },
                    {
                        checkable: false,
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={false} lock={true} />,
                        key: "1-2-3",
                        className: "level-3",
                    },
                    {
                        checkable: false,
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={false} lock={true} />,
                        key: "1-2-4",
                        className: "level-3",
                    },
                    {
                        checkable: false,
                        title: <TopicCard time={"07:31"} topic={"Topic 1"} checked={false} lock={true} />,
                        key: "1-2-5",
                        className: "level-3",
                    },

                ]
            },
            {
                title: <ModuleCard title={"Module 3: Introduction to CSS"} />,
                key: "1-3",
                checkable: false,
                selectable: false,
                className: "level-2",
                children: [

                    {
                        title: "Topic 1",
                        key: "1-3-1",
                        className: "level-3",
                    },
                    {
                        title: "Topic 1",
                        key: "1-3-2",
                        className: "level-3",
                    },
                    {
                        title: "Topic 1",
                        key: "1-3-3",
                        className: "level-3",
                    },
                    {
                        title: "Topic 1",
                        key: "1-3-4",
                        className: "level-3",
                    },
                    {
                        title: "Topic 1",
                        key: "1-3-5",
                        className: "level-3",
                    },

                ]
            }
        ]
    },
    {
        title: <MainTopic topicName={"BackEnd Development"} />,
        key: "2",
        checkable: false,
        className: "level-1",
        selectable: false,
        children: [
            {
                title: <ModuleCard title={"Module 1: Introduction to HTML"} locked={true} />,
                key: "2-1",
                checkable: false,
                selectable: false,
                className: "level-2",
                children: [
                    {
                        title: "Topic 1",
                        key: "2-1-1",
                        className: "level-3",
                    },
                    {
                        title: "Topic 1",
                        key: "2-1-2",
                        className: "level-3",
                    },
                    {
                        title: "Topic 1",
                        key: "2-1-3",
                        className: "level-3",
                    },
                    {
                        title: "Topic 1",
                        key: "2-1-4",
                        className: "level-3",
                    },
                    {
                        title: "Topic 1",
                        key: "2-1-5",
                        className: "level-3",
                    },

                ]
            },
            {
                title: <ModuleCard title={"Module 2: Introduction to HTML"} locked={true} />,
                key: "2-2",
                checkable: false,
                selectable: false,
                className: "level-2",
                children: [

                    {
                        title: "Topic 1",
                        key: "2-2-1"
                    },
                    {
                        title: "Topic 1",
                        key: "2-2-2"
                    },
                    {
                        title: "Topic 1",
                        key: "2-2-3"
                    },
                    {
                        title: "Topic 1",
                        key: "2-2-4"
                    },
                    {
                        title: "Topic 1",
                        key: "2-2-5"
                    },

                ]
            },
            {
                title: <ModuleCard title={"Module 3: Introduction to HTML"} locked={true} />,
                key: "2-3",
                checkable: false,
                // selectable: false,
                className: "level-2",
                children: [

                    {
                        title: "Topic 1",
                        key: "2-3-1"
                    },
                    {
                        title: "Topic 1",
                        key: "2-3-2"
                    },
                    {
                        title: "Topic 1",
                        key: "2-3-3"
                    },
                    {
                        title: "Topic 1",
                        key: "2-3-4"
                    },
                    {
                        title: "Topic 1",
                        key: "2-3-5"
                    },

                ]
            }
        ]
    }, {
        title: <MainTopic topicName={"DSA"} />,
        key: "3",
        checkable: false,
        selectable: false,
        className: "level-1",
        children: [
            {
                title: 'Topic 1',
                key: "3-1",
            }
        ]
    },
    {
        title: <MainTopic topicName={"GitHub"} />,
        key: "4",
        checkable: false,
        selectable: false,
        className: "level-1",
        children: [
            {
                title: 'Topic 1',
                key: "4-1",
            }
        ]
    },
    {
        title: <MainTopic topicName={"Project"} />,
        key: "5",
        checkable: false,
        selectable: false,
        className: "level-1",
        children: [
            {
                title: 'Topic 1',
                key: "5-1",
            }
        ]
    }
]

