import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
import SimpleCustomProperty from "./../../../components"
function CustomScriptForm({ item, handleSubmit }) {
  const [init, setInit] = useState(false);
  function toogle() {
    if (!init) {
      setInit(true);
    }
  }


    function handleAddProperty(data) {
            console.log(" CustomScriptForm() - handleAddProperty() ");
        ReactDOM.render(<SimpleCustomPropertyp />, document.getElementById('container'));
    }

  //initial Values
  //scriptType
  var scpType = item.scriptType;
  //console.log("CustomScriptForm - scpType = "+scpType);

  //programmingLanguage
  var progLanguage = item.programmingLanguage;
  //console.log("CustomScriptForm - progLanguage = "+progLanguage);

  //level
  var lev = item.level;
  if (lev == null || lev == "") {
    lev = 0;
  }
  //console.log("CustomScriptForm - lev = "+lev);

  const formik = useFormik({
    initialValues: {
      name: item.name,
      description: item.description,
      script: item.script,
      scriptType: item.scriptType,
      programmingLanguage: item.programmingLanguage,
      level: item.level
    },
    /*validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      description: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      script: Yup.string()
      .min(2, "Mininum 2 characters")
      .required("Required!"),
      scriptType: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Required!"),
      programmingLanguage: Yup.string()
        .min(3, "This value is required")
        .required("Required!"),
      level: Yup.string()
        .min(1, "This value is required")
        .required("Required!")
    }),*/
    onSubmit: values => {
      const result = Object.assign(item, values);
      handleSubmit(JSON.stringify(result));
    }
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      {/* START Input */}
      {item.inum && (
        <FormGroup row>
          <Label for="name" sm={3}>
            Inum
          </Label>
          <Col sm={9}>
            <Input
              style={{ backgroundColor: "#F5F5F5" }}
              placeholder="Enter the script inum"
              id="inum"
              name="inum"
              disabled
              value={item.inum}
            />
          </Col>
        </FormGroup>
      )}
      <FormGroup row>
        <GluuLabel label="Name" required />
        <Col sm={9}>
          <Input
            placeholder="Enter the script name"
            id="name"
            valid={!formik.errors.name && !formik.touched.name && init}
            name="name"
            defaultValue={item.name}
            onKeyUp={toogle}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Description" />
        <Col sm={9}>
          <InputGroup>
            <Input
              placeholder="Enter script description"
              valid={
                !formik.errors.description &&
                !formik.touched.description &&
                init
              }
              id="description"
              defaultValue={item.description}
              onChange={formik.handleChange}
            />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Script Type" required />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              placeholder="Please select script type"
              type="select"
              id="scriptType"
              name="scriptType"
              defaultValue={scpType}
              onChange={formik.handleChange}
            >
              <option value="">Choose...</option>
              <option>PERSON_AUTHENTICATION</option>
              <option>INTROSPECTION</option>
              <option>RESOURCE_OWNER_PASSWORD_CREDENTIALS</option>
              <option>APPLICATION_SESSION</option>
              <option>CACHE_REFRESH</option>
              <option>UPDATE_USER</option>
              <option>USER_REGISTRATION</option>
              <option>CLIENT_REGISTRATION</option>
              <option>ID_GENERATOR</option>
              <option>UMA_RPT_POLICY</option>
              <option>UMA_RPT_CLAIMS</option>
              <option>UMA_CLAIMS_GATHERING</option>
              <option>CONSENT_GATHERING</option>
              <option>DYNAMIC_SCOPE</option>
              <option>SPONTANEOUS_SCOPE</option>
              <option>END_SESSION</option>
              <option>POST_AUTHN</option>
              <option>SCIM</option>
              <option>CIBA_END_USER_NOTIFICATION</option>
              <option>PERSISTENCE_EXTENSION</option>
              <option>IDP</option>
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Programming Language" required />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="select"
              id="programmingLanguage"
              name="programmingLanguage"
              placeholder="Please select script programming language"
              defaultValue={progLanguage}
              onChange={formik.handleChange}
            >
              <option value="">Choose...</option>
              <option>PYTHON</option>
              <option>JAVASCRIPT</option>
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Script" required />
        <Col sm={9}>
          <Input
            type="textarea"
            name="script"
            id="script"
            placeholder="Please enter script..."
            defaultValue={item.script}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Level" required />
        <Col sm={9}>
          <Input
            name="level"
            id="level"
            placeholder="Please enter script level"
            defaultValue={lev}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <GluuLabel label="Revision" />
        <Col sm={9}>
          <Input
            name="revision"
            id="revision"
            placeholder="Please enter script revision"
            defaultValue={item.revision}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
              <GluuLabel label="Module property (key/value)" size={3} />
              <Col sm={1}>
                  <Button color="primary" type="add" onSubmit="handleAddProperty()"> Add new property </Button>
        </Col>
      </FormGroup>

          <div id="container">
              //This element's contents will be replaced with your component.
</div>

      <FormGroup row>
        <GluuLabel label="Enabled" size={3} />
        <Col sm={1}>
          <Input
            id="enabled"
            name="enabled"
            placeholder="Select checkbox to enable the script"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked={item.enabled}
          />
        </Col>
      </FormGroup>

      <FormGroup row />
      <GluuFooter />
    </Form>
  );
}

export default CustomScriptForm;
