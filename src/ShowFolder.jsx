import React from "react";
import File from "./File";
import Folder from "./Folder";

const ShowFolder = ({ folder, setFolderStructure }) => {
  return (
    <>
      {folder.map((item, index) => {
        if (item?.type === "folder") {
          return (
            <Folder
              {...item}
              key={index}
              index={index}
              setFolderStructure={setFolderStructure}
            />
          );
        }
        return <File {...item} key={index} />;
      })}
    </>
  );
};

export default ShowFolder;
