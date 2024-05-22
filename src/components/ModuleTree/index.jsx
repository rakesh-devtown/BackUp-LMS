import { Tree } from 'antd';
import { checkedKeys, treeData } from './treeData';
import styled from 'styled-components';
import { useState } from 'react';
import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import MainHeader from './MainHeader';
import useWindowSize from '../../hooks/useWindowSize';

const ModuleTree = () => {

    const [selectedKeys, setSelectedKeys] = useState([])
    // const [checkedKeys, setCheckedKeys] = useState([])
    const { width } = useWindowSize();


    const onSelect = (selectedKeys, info) => {
        console.log(selectedKeys);
    };
    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    return (
        <StyledTree width={width}>
            {width < 992 && <MainHeader />}
            <Tree
                showIcon
                checkable
                onSelect={onSelect}
                onCheck={onCheck}
                treeData={treeData}
                switcherIcon={<DownOutlined />}
                // switcherIcon={<DownOutlined style={{ fontSize: "1.5rem" }} />}
                blockNode={true}
                style={{ background: "transparent", zIndex: 100 }}
            />
        </StyledTree>
    )
}

const StyledTree = styled.div`
//removing all indent spaces.......
    .ant-tree-indent{
        width: 0;
    }
    .ant-tree-node-content-wrapper{
        padding:0;
    }
    .ant-tree{
        background: transparent;
        .ant-tree-treenode{
            background: var(--Color-White-100, #FFF);
        }
    }

   
    //styling for switcher button
    .level-1{
        padding: 0;
        position: relative;
border-bottom: 2px solid #EFEFEF;

        &>.ant-tree-switcher{
            position: absolute;
            top: 37%;
            right: 15%;
            z-index: 5;
            svg{
                width: 2em;
                height: 2em;
                fill: white;
            }
        }
    }

    .level-1:first-child{
        border-top-right-radius: ${(props) => props.width > 992 ? "20px" : ""};
        border-top-left-radius: ${(props) => props.width > 992 ? "20px" : ""};
        overflow: hidden;
    }
    .level-1:last-child{
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
        border:none;
    }

    //styling for hover and selected effects of tree nodes
    .level-3{
        padding: 12px 20px 12px 0;

        &:hover{
            background-color: rgb(161 212 251 / 80%);
            i,p{
                color: #1D2026;
            }
        }
        .ant-tree-node-content-wrapper {
            background-color: unset !important;
        }
        
        &~.ant-tree-treenode-selected{
            background-color: #294169;
            .ant-tree-node-selected {
                background-color: #294169 !important;
        i,p{
         color: white;
        }
        }
        }
    }

    .level-2{
        padding: 20px 14px;
        border-bottom: 1px solid #D6D6D6;
    }

    //removing hover effect
    .hover-none:hover{
        background-color: unset;
        i,p{
            color: unset;
        }
    }

    //changing topic checkbox color
    .ant-tree-checkbox-checked .ant-tree-checkbox-inner{
        background-color: var(--secondaryColor) !important;
        border-color: var(--secondaryColor) !important ;
    }
`
export default ModuleTree;
