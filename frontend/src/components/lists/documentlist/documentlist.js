import React, { useContext } from "react";
import axios from "axios";

import HorizontalCard from "../../horizontalcard/horizontalcard";
import Button from "../../button/button";

import PathContext from "../../../contexts/PathContext";

import "../cardlist.css";
import "./documentlist.css";

function DocumentList({ className, documents, small }) {
  const classes = small
    ? `small-card-list ${className}`
    : `card-list ${className}`;
  const n = small ? 3 : documents.length;

  const forceDownload = (response, name) => {
    console.log(response);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", name + ".pdf");
    document.body.appendChild(link);
    link.click();
  };

  const dowloadWithAxios = (url, name) => {
    axios({
      method: "get",
      url,
      responseType: "arraybuffer",
    })
      .then((response) => {
        forceDownload(response, name);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes}>
      {documents.map((obj, i) => {
        while (i < n) {
          return (
            <div className="document-list">
              <HorizontalCard
                className="doclist"
                title={obj.name}
                body={obj.file}
                iconType="file"
                key={i}
              />
              <Button
                className="black very-small"
                text="Download"
                onClick={() =>
                  dowloadWithAxios(`http://127.0.0.1:8000${obj.file}`, obj.name)
                }
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default DocumentList;
