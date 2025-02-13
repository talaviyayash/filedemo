import React, { useState } from "react";
import ShowFolder from "./ShowFolder";

const allFolder = [
  {
    type: "folder",
    label: "dvsdsv",
    files: [
      {
        type: "folder",
        label: "dvsdsv",
        files: [
          {
            type: "folder",
            label: "dvsdsv",
            files: [
              {
                type: "folder",
                label: "dvsdsv",
                files: [],
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
    type: "file",
    label: "dvsdsv",
  },
  {
    type: "folder",
    label: "dvsdsv",
    files: [],
    open: false,
  },
];

const Container = () => {
  const [folderStructure, setFolderStructure] = useState(allFolder);
  return (
    <>
      <ShowFolder
        folder={folderStructure}
        setFolderStructure={setFolderStructure}
      />
    </>
  );
};

export default Container;
