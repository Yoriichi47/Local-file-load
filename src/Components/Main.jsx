import React from "react";
import { useState } from "react";

const Main = () => {
  const downloadLink = (e) => {
    e.preventDefault();
    const inputValue = e.currentTarget.value;
    fetchFile(inputValue);
    setinputValue("");
  };

  const fetchFile = (url) =>{
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file)
        let ranTag = document.createElement("a")
        ranTag.href = tempUrl
        ranTag.download = url.replace(/^.*[\\\/]/, '')
        document.body.appendChild(ranTag)
        ranTag.click()
        ranTag.remove()
        URL.revokeObjectURL(tempUrl)
    })
  }

  const handleInputChange = (e) => {
    setinputValue(e.target.value)
  }

  const [inputValue, setinputValue] = useState("");

  return (
    <div className="flex justify-center items-center min-h-[91vh] bg-[#131842] ">
      <div className="flex flex-col main-container border shadow-2xl shadow-[#ECCEAE] bg-[#ECCEAE] w-[50vw] h-[30vh] justify-between rounded-3xl p-5">
        <div className="flex gap-4 p-2 items-center justify-center h-full">
          <h1 className="font-medium">Enter the URL: </h1>
          <form action="#">
            <input
              type="url"
              placeholder="..."
              className="bg-gray-200 rounded-lg px-3 py-1 w-[300px]"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
        </div>
        <button
          onClick={downloadLink}
          value={inputValue}
          className="p-2 bg-[#E68369] px-3 border-2 w-full rounded-2xl  border-[#E68369] hover:border-[#ECCEAE] transition-all text-sm "
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Main;
