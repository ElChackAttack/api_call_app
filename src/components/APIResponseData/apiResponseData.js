import React, { useState, useEffect } from "react";
import axios from "axios";

const APIResponseData = (props) => {
  const { APIMethodName } = props;
  const [APIData, setAPIData] = useState([]);
  const [showAPIData, setShowAPIData] = useState(false);
  const [APIMethod, setAPIMethod] = useState();
  const handleShow = () => {
    setShowAPIData(!showAPIData);
  };
  // Use fetch
  useEffect(() => {
    switch (APIMethodName) {
      case "fetchMethod":
        const GetAPIDataFetch = () => {
          fetch("https://www.dnd5eapi.co/api/monsters/adult-black-dragon")
            .then((res) => res.json())
            .then((data) => setAPIData(JSON.stringify(data)))
            .catch((err) => console.error(err));
        };
        setAPIMethod(GetAPIDataFetch);
        break;
      case "axiosMethod":
        const GetAPIDataAxios = () => {
          axios
            .get("https://www.dnd5eapi.co/api/monsters/adult-black-dragon")
            .then((res) => setAPIData(JSON.stringify(res.data)))
            .catch((error) => console.log(error));
        };
        setAPIMethod(GetAPIDataAxios);
        break;
      case "XMLHttpRequestMethod":
        const GetAPIDataXMLH = () => {
          let request = new XMLHttpRequest();
          request.open(
            "GET",
            "https://www.dnd5eapi.co/api/monsters/adult-black-dragon"
          );
          request.send();
          request.onload = () => {
            if (request.status === 200) {
              //   console.log(JSON.parse(request.response));
              setAPIData(request.response);
            } else {
              console.log("Page not found"); // if link is broken, output will be page not found
            }
          };
        };
        setAPIMethod(GetAPIDataXMLH);
        break;
      default:
        const GetAPIDataDefault = () => {
          return "No default Method called";
        };
    }
  }, []);
  return (
    <div>
      <div>
        <h2>API Method: {APIMethodName}</h2>
        <button onClick={handleShow}>Show Data</button>
      </div>
      {showAPIData && <span>API Data: {APIData}</span>}
    </div>
  );
};

export default APIResponseData;
