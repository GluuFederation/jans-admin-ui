import React from "react";
import { Label } from "./../../../components";

function GluuLabel({ label, required, size, forID = "" }) {
  function getSize() {
    if (size != null) {
      return size;
    }
    return 3;
  }
  return (
    <Label sm={getSize()} for={forID}>
      <h5>
        {label}
        {required && <span style={{ color: "red", fontSize: "22px" }}> *</span>}
        :
      </h5>
    </Label>
  );
}

export default GluuLabel;
