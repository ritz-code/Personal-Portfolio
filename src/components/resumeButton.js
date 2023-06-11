import React from "react";
import { saveAs } from "file-saver";
import fileDownload from 'js-file-download'

function ResumeButton() {

  const saveFile = () => {
    saveAs(
      "../public/resume/Ritu_Rawat_resume.pdf",
      "Ritu_Rawat_resume.pdf"
    );
  };
  return (
    <>
      <button className="resumeBtn button" onClick={saveFile}>DOWNLOAD RESUME!</button>
    </>
  ); 
}

export default ResumeButton;