import React from "react";
import { saveAs } from "file-saver";

function ResumeButton() {
  const saveFile = () => {
    saveAs(
      "../../public/resume/Ritu_Rawat_resume.pdf",
      "RituRResume.pdf"
    );
  };
  return (
    <>
      <button className="resumeBtn button" onClick={saveFile}>DOWNLOAD RESUME!</button>
    </>
  );
}

export default ResumeButton;