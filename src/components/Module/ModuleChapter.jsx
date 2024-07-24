import styled from "styled-components";
import { useState } from "react";
import { Tree } from "antd";
import useWindowSize from "../../hooks/useWindowSize";
import useBatchStore from "../../store/batchStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CheckOutlined } from "@ant-design/icons";
import ModuleCardHeader from "../ModuleTree2/ModuleCardHeader";
import TopicCard from "../ModuleTree2/TopicCard";

const ModuleChapter = ({ section, index, lastModule }) => {
  const [selectedKey, setSelectedKey] = useState([]);
  const navigate = useNavigate();

  //function for tree nodes
  const onSelect = (selectedKeys, info) => {
    // navigate("/video");
    console.log("selected ok", selectedKeys, info);
    setSelectedKey(selectedKeys);
  };
  const onCheck = (checkedKeys, info) => {
    //console.log("onCheck", checkedKeys, info);
  };

  const [treeData, setTreeData] = useState([]);

  const calculateProgress = (data) => {
    if (!data) return false;
    try {
      const sectionItemLength = data?.sectionItems?.length;
      let sectionProgressLength = 0;
      data?.sectionItems?.map((item) => {
        if (item?.sectionProgress?.length > 0) {
          sectionProgressLength += 1;
        }
      });
      return sectionItemLength === sectionProgressLength;
    } catch (err) {
      return false;
    }
  };

  const transformData = (data) => {
    if (!data) return [];
    //console.log("data",data)
    const completed = calculateProgress(data);
    console.log(data.name, completed);
    return {
      title: (
        <TimelineElement
          completed={completed}
          icon={completed && <CheckOutlined style={{ fontSize: "15px" }} />}
          iconStyle={{
            background: completed ? "#008022" : "white",
            color: completed ? "white" : "#008022",
            zIndex: 6,
            left: completed ? 0 : "2px",
            // display: completed ? null : "none",
          }}
        >
          <ModuleCardHeader
            title={data.name}
            topic1={
              data?.sectionItems?.length > 0
                ? `Day ${data?.sectionItems[0]?.orderNumber}: ${data?.sectionItems[0]?.title}`
                : ""
            }
            topic2={
              data?.sectionItems?.length > 1
                ? `Day ${data?.sectionItems[1]?.orderNumber}: ${data?.sectionItems[1]?.title}`
                : ""
            }
          />
        </TimelineElement>
      ),
      key: data.id,
      children: data?.sectionItems?.map((item, index) => {
        const completedTopic = item?.sectionProgress[0]?.isCompleted;
        // console.log("completed", completedTopic);
        return {
          title: (
            <StyledTimeline
              layout="1-column-left"
              lineColor="#008022"
              lastElement={index === data.sectionItems.length - 1}
            >
              <TimelineElement
                icon={completedTopic && <CheckOutlined style={{ fontSize: "13px" }} />}
                iconStyle={{
                  background: completedTopic ? "#008022" : "white",
                  color: completedTopic ? "white" : "#008022",
                  zIndex: 6,
                  left: completedTopic ? "3px" : "6px",
                }}
                completed={completedTopic}
              >
                <TopicCard data={item} />
              </TimelineElement>
            </StyledTimeline>
          ),
          key: item.id,
          className: index === data?.sectionItems?.length - 1 ? "animate-bounce" : "",
        };
      }),
    };
  };

  useEffect(() => {
    console.log("section", section);
    let data = [];
    if (section?.subsections?.length > 0) {
      data = section?.subsections.map((subSection, subIndex) => transformData(subSection));
    } else if (section?.sectionItems?.length > 0) {
      data = [transformData(section)];
    }
    setTreeData(data);
  }, [section]);

  return (
    <ChapterContainer>
      {section?.subsections?.length > 0 && <h5 className="chapter-name">{section?.name}</h5>}
      {!selectedKey?.length > 0 && (
        <StyledTimeline layout="1-column-left" lineColor="#008022" lastElement={lastModule}>
          <Tree
            multiple
            expandedKeys={selectedKey}
            blockNode
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
            switcherIcon={false}
            onExpand={(e) => console.log(e)}
          />
        </StyledTimeline>
      )}
      {selectedKey?.length > 0 && (
        <Tree
          multiple
          expandedKeys={selectedKey}
          selectedKeys={selectedKey}
          blockNode
          onSelect={onSelect}
          onCheck={onCheck}
          treeData={treeData}
          switcherIcon={false}
          onExpand={(e) => console.log(e)}
        />
      )}
    </ChapterContainer>
  );
};

const StyledTimeline = styled(VerticalTimeline)`
  margin: 0 !important ;
  padding: 0 !important;
  max-width: none;
  width: unset;
  /* overflow: hidden; */
  &::before {
    display: ${(props) => (props.lastElement ? "none" : null)};
    top: 37px;
    left: 17px !important;
    z-index: 5;
    width: 3px;
  }
`;

const TimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-icon {
    display: grid;
    place-items: center;
    top: 24px;
    height: 30px;
    width: 30px;
    box-shadow: ${(props) =>
      `0 0 0 4px ${props.completed ? "fff" : "#5E5E5E"},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`};
    height: ${(props) => (props.completed ? null : "25px")};
    width: ${(props) => (props.completed ? null : "25px")};
    span {
      display: grid;
      place-items: center;
    }
  }
  .vertical-timeline-element-content {
    margin-left: 30px;
    padding: 0;
    background: transparent;
  }
  .vertical-timeline-element-date {
    display: none;
  }
  .vertical-timeline-element {
    background: transparent;
  }
`;

const ChapterContainer = styled.div`
  .chapter-name {
    color: #d7984d;
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 34px;
    padding: 4px 20px;
    background: #fff5e5;
    width: fit-content;
    margin: 20px 0 5px 0;
  }

  .ant-tree-switcher {
    width: 0;
  }
  .ant-tree-indent {
    width: 0;
  }
  .ant-tree-treenode {
    padding: 0;
  }
  .ant-tree-node-selected {
    .ant-tree-title > div {
      border-bottom: none;
    }
    .closed {
      display: none;
    }
    .open {
      display: grid;
    }
    .box-bottom {
      display: none;
    }
  }
`;

export default ModuleChapter;
