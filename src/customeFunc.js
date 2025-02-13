export const closeInsideFile = (file) => {
  return file?.map((item) => {
    if (item?.type === "folder") {
      return { ...item, open: false, files: closeInsideFile(item?.files) };
    }
    return item;
  });
};
