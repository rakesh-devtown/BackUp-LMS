import React from 'react';
import { Tree } from 'antd';
import { useNavigate } from 'react-router-dom';
const { DirectoryTree } = Tree;

const DevTree = (  { treeData }) => {
    const transformData = (data, parentIndex = '0') => {
      return data.map((item, index) => {
        const key = JSON.stringify(item);
        if (item.type === 'tree') {
          return {
            title: item.name,
            key,
            children: transformData(item.children, key),
          };
        } else {
          return {
            title: item.name,
            key,
            isLeaf: true,
            

            
          };
        }
      });
    };
    
    const data = transformData(treeData);
    const navigate= useNavigate()
  const onSelect = (keys, info) => {
    const { name , path  , type, url }  =  JSON.parse(keys[0]) ;
    const splitArray = name.split('.');
    const extension = splitArray[splitArray.length-1];
    navigate(`/tree/file?name=${ name }&path=${path}&type=${type}&url=${url}&extension=${extension}` )
    
  };
  const onExpand = (keys, info) => {
  };
  return (
    <DirectoryTree
    style={{backgroundColor: "rgb(30,30,30)", color:"white"}}
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={data}

    />
  );
};
export default DevTree;