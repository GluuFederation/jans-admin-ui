import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Col,
  InputGroup,
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input
} from "./../../../components";
import GluuFooter from "../Gluu/GluuFooter";
import GluuLabel from "../Gluu/GluuLabel";
import * as Yup from "yup";

function showClientSecret() {
  var secretField = document.getElementById("clientSecret");
  secretField.setAttribute("type", "text");
  document.getElementById("hidePassword").style.display = "block";
  document.getElementById("viewPassword").style.display = "none";
}

function hideClientSecret() {
  var secretField = document.getElementById("clientSecret");
  secretField.setAttribute("type", "password");
  document.getElementById("hidePassword").style.display = "none";
  document.getElementById("viewPassword").style.display = "block";
}

function takeFocus(x) {
  x.focus();
}

function ClientForm({ data }) {
  const [init, setInit] = useState(false);
  function toogle() {
    if (!init) {
      setInit(true);
    }
  }
  const formik = useFormik({
    initialValues: { name: "", displayName: "", description: "" },
    validationSchema: Yup.object({
      clientName: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      displayName: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      description: Yup.string(),
      status: Yup.string()
        .min(3, "This value is required")
        .required("Required!")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* START Input */}
      {data && (
        <FormGroup row>
          <Label for="Client ID:" sm={3}>
            Inum
          </Label>
          <Col sm={9}>
            <Input
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="Enter the client inum"
              id="inum"
              name="inum"
              disabled
              value={item.inum}
            />
          </Col>
        </FormGroup>
      )}
      <FormGroup row>
        <GluuLabel label="Client Secret:" required />
        <Col sm={9}>
          <Input
            type="clientSecret"
            placeholder="Enter the client secret"
            id="clientSecret"
            valid={
              !formik.errors.clientSecret &&
              !formik.touched.clientSecret &&
              init
            }
            name="clientSecret"
            onKeyUp={toogle}
            onChange={formik.handleChange}
            defaultValue={item.clientSecret}
          />
        </Col>
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginTop: "auto",
            marginRight: "auto",
            width: "100%",
            height: "100%",
            float: right
          }}
          id="viewPassword"
          onMouseOver="takeFocus(this);"
          onClick="showClientSecret(); return false;"
          src={require("../images/png/eye.png")}
        />
        <img
          style={{
            display: "block",
            marginLeft: "auto",
            marginTop: "auto",
            marginRight: "auto",
            width: "100%",
            height: "100%",
            float: right,
            display: none
          }}
          id="hidePassword"
          onMouseOver="takeFocus(this);"
          onClick="hideClientSecret(); return false;"
          src={require("../images/png/eye-hidden.png")}
        />
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Client Name:" required />
        <Col sm={9}>
          <InputGroup>
            <Input
              placeholder="Enter the attribute display name"
              valid={
                !formik.errors.clientName && !formik.touched.clientName && init
              }
              id="clientName"
              onChange={formik.handleChange}
              defaultValue={item.clientName}
            />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Client Description:" />
        <Col sm={9}>
          <InputGroup>
            <Input
              placeholder="Enter the attribute description"
              id="description"
              defaultValue={item.description}
              onChange={formik.handleChange}
            />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Sector URI:" />
        <Col sm={9}>
          <Input
            id="sectorIdentifierUri"
            name="sectorIdentifierUri"
            placeholder="Enter Sector Identifier Uri"
            onChange={formik.handleChange}
            defaultValue={item.disabled}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Disabled:" size={3} />
        <Col sm={1}>
          <Input
            id="disabled"
            name="disabled"
            placeholder="Select checkbox to disable client"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked={item.disabled}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Pre-Authorization:" size={3} required />
        <Col sm={1}>
          <Input
            id="trustedClient"
            name="trustedClient"
            placeholder="Select checkbox to make client as trusted"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked={item.trustedClient}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Persist Client Authorizations:" size={3} />
        <Col sm={1}>
          <Input
            id="persistClientAuthorizations"
            name="persistClientAuthorizations"
            placeholder="Select checkbox to persist client authorizations"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked={item.persistClientAuthorizations}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Application Type:" required />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="select"
              id="applicationType"
              name="applicationType"
              placeholder="Please select application type"
              defaultValue={item.applicationType}
              onChange={formik.handleChange}
            >
              <option>WEB</option>
              <option>NATIVE</option>
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Subject Type:" required />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="select"
              id="subjectType"
              name="subjectType"
              placeholder="Please select subject type"
              defaultValue={item.subjectType}
              onChange={formik.handleChange}
            >
              <option>WEB</option>
              <option>NATIVE</option>
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Authentication method for the Token Endpoint:" />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="select"
              id="subjectType"
              name="subjectType"
              placeholder="Please select subject type"
              defaultValue={item.subjectType}
              onChange={formik.handleChange}
            >
              <option>CLIENT_SECRET_BASIC</option>
              <option>CLIENT_SECRET_POST</option>
              <option>CLIENT_SECRET_JWT</option>
              <option>PRIVATE_KEY_JWT</option>
              <option>ACCESS_TOKEN</option>
              <option>TLS_CLIENT_AUTH</option>
              <option>SELF_SIGNED_TLS_CLIENT_AUTH</option>
              <option>NONE</option>
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Grant Types:" />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="multiple"
              id="grantTypes"
              name="grantTypes"
              placeholder="Please select applicable grant types"
              defaultValue={item.grantTypes}
              onChange={formik.handleChange}
            >
              <option>NONE</option>
              <option>AUTHORIZATION_CODE</option>
              <option>IMPLICIT</option>
              <option>RESOURCE_OWNER_PASSWORD_CREDENTIALS</option>
              <option>CLIENT_CREDENTIALS</option>
              <option>TLS_CLIENT_AUTH</option>
              <option>REFRESH_TOKEN</option>
              <option>OXAUTH_UMA_TICKET</option>
              <option>CIBA</option>
              <option>DEVICE_CODE</option>
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Edit Type" />
        <Col sm={9}>
          <Input
            type="select"
            name="editType"
            id="editType"
            multiple
            onChange={formik.handleChange}
          >
            <option>Admin</option>
            <option>User</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="View Type" />
        <Col sm={9}>
          <Input
            type="select"
            name="viewType"
            id="viewType"
            multiple
            onChange={formik.handleChange}
          >
            <option>Admin</option>
            <option>User</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Usage Type" />
        <Col sm={9}>
          <Input
            type="select"
            name="usageType"
            id="usageType"
            multiple
            onChange={formik.handleChange}
          >
            <option>Not Defined</option>
            <option>OpenID</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="oxAuth claim name" />
        <Col sm={9}>
          <Input
            name="claimName"
            id="claimName"
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Multivalued" size={3} />
        <Col sm={1}>
          <Input
            id="oxMultiValuedAttribute"
            name="oxMultiValuedAttribute"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked
          />
        </Col>
        <GluuLabel label="Include in SCIM extension" size={3} />
        <Col sm={1}>
          <Input
            id="oxMultiValuedAttribute"
            name="oxMultiValuedAttribute"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked
          />
        </Col>
        <GluuLabel label="Multivalued" size={3} />
        <Col sm={1}>
          <Input
            id="oxMultiValuedAttribute"
            onChange={formik.handleChange}
            name="oxMultiValuedAttribute"
            type="checkbox"
            defaultChecked
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Regular expression" />
        <Col sm={9}>
          <Input name="regex" id="regex" onChange={formik.handleChange} />
        </Col>
      </FormGroup>

      <FormGroup row />
      <GluuFooter />
    </Form>
  );
}

export default ClientForm;
