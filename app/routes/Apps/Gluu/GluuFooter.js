import React from "react";
import { Col, Button, FormGroup } from "./../../../components";
function GluuFooter() {
  return (
    <FormGroup row>
      <Col>
        <div className="d-flex flex-row align-items-center justify-content-end">
          <Button color="primary" type="submit" className="mr-2">
            Save
          </Button>
          <Button color="secondary" type="reset">
            Cancel
          </Button>
        </div>
      </Col>
    </FormGroup>
  );
}

export default GluuFooter;
