import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Stack, Typography } from "@mui/material";
import React from "react";

const File = ({ label }) => {
  return (
    <Stack direction="row" gap={2}>
      <InsertDriveFileIcon />
      <Typography>{label}</Typography>
    </Stack>
  );
};

export default File;
