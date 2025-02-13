import React, { useState } from "react";
import ShowFolder from "./ShowFolder";

const allFolder = [
  {
    type: "folder",
    label: "Outter Folder",
    files: [
      {
        type: "folder",
        label: "Inner Folder",
        files: [
          {
            type: "folder",
            label: "Most Inner Folder",
            files: [],
            open: false,
          },
        ],
        open: false,
      },
      {
        type: "file",
        label: "dvsdsv",
      },
      {
        type: "folder",
        label: "dvsdsv",
        files: [],
        open: false,
      },
    ],
    open: false,
  },
  {
    type: "folder",
    label: "Outter Folder",
    files: [
      {
        type: "folder",
        label: "Inner Folder",
        files: [
          {
            type: "folder",
            label: "Most Inner Folder",
            files: [],
            open: false,
          },
        ],
        open: false,
      },
      {
        type: "file",
        label: "dvsdsv",
      },
      {
        type: "folder",
        label: "dvsdsv",
        files: [],
        open: false,
      },
    ],
    open: false,
  },
  {
    type: "folder",
    label: "Outter Folder",
    files: [
      {
        type: "folder",
        label: "Inner Folder",
        files: [
          {
            type: "folder",
            label: "Most Inner Folder",
            files: [],
            open: false,
          },
        ],
        open: false,
      },
      {
        type: "file",
        label: "dvsdsv",
      },
      {
        type: "folder",
        label: "dvsdsv",
        files: [],
        open: false,
      },
    ],
    open: false,
  },
];

const Container = () => {
  const [folderStructure, setFolderStructure] = useState(allFolder);
  console.log("folderStructure", folderStructure);
  return (
    <>
      <ShowFolder
        folder={folderStructure}
        setFolderStructure={({ index, itemToSet }) =>
          setFolderStructure((prev) => {
            const modifiedState = prev?.map((item, ind) => {
              if (ind === index) {
                return itemToSet;
              }
              return item;
            });
            return modifiedState;
          })
        }
      />
    </>
  );
};

export default Container;
