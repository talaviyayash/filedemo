import React from "react";
import File from "./File";
import Folder from "./Folder";

const ShowFolder = ({ folder }) => {
  return (
    <>
      {folder.map((item) => {
        if (item?.type === "folder") {
          return <Folder {...item} />;
        }
        return <File {...item} />;
      })}
    </>
  );
};

export default ShowFolder;
