"use client";

import { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { Dialog } from "@progress/kendo-react-dialogs";

const ExportData = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleDialog = () => setVisible(!visible);

  return (
    <div className="container">
      <h1 className="title">Export Data</h1>
      <Button onClick={toggleDialog}>Export Data</Button>
      {visible && (
        <Dialog title="Export Data" onClose={toggleDialog}>
          <p>Choose a format to export your data:</p>
          <Button>CSV</Button>
          <Button>Excel</Button>
        </Dialog>
      )}
    </div>
  );
};

export default ExportData;
