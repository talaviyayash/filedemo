import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ShowFolder from "./ShowFolder";
import { closeInsideFile } from "./customeFunc";

const Folder = ({ label, files, index, open, setFolderStructure }) => {
  const indexToSet = index;
  return (
    <>
      <Stack direction="row" gap={2} alignItems="center">
        <FolderOpenIcon />
        <Typography>{label}</Typography>
        <IconButton
          onClick={() => {
            setFolderStructure({
              index,
              itemToSet: {
                type: "folder",
                label,
                files: open ? closeInsideFile(files) : files,
                open: !open,
              },
            });
          }}
        >
          {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        </IconButton>
      </Stack>
      {open && (
        <Box sx={{ paddingLeft: 2 }}>
          <ShowFolder
            folder={files}
            setFolderStructure={({ index, itemToSet }) => {
              const modified = files?.map((item, ind) => {
                if (ind === index) {
                  return itemToSet;
                }
                return item;
              });
              console.log("modified", modified);

              setFolderStructure({
                index: indexToSet,
                itemToSet: {
                  type: "folder",
                  label,
                  files: files?.map((item, ind) => {
                    if (ind === index) {
                      return itemToSet;
                    }
                    return item;
                  }),
                  open: open,
                },
              });
            }}
          />
        </Box>
      )}
    </>
  );
};

export default Folder;
