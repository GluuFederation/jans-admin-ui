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
import UncontrolledModal from "./../../../components/UncontrolledModal";
import * as Yup from "yup";
import {
    consoleLog,
    randomString
} from "./../../../utils/Util";
import SimpleCustomProperty from "jans_config_api/dist/model/SimpleCustomProperty";


function generateSecret() {
    var generatedSecret = randomString(40, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    consoleLog("ClientForm.js", "generateSecret()", "generatedSecret = " + generatedSecret);
    document.getElementById("clientSecret").value = generatedSecret;
}

function lockSecret() {
    var generatedSecret = randomString(40, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    consoleLog("ClientForm.js", "lockSecret()  - document.getElementById(clientSecret).readOnly.length == 0 " + document.getElementById("clientSecret").readOnly.length == 0);
    consoleLog("ClientForm.js", "lockSecret()  - document.getElementById(clientSecret).readOnly ==true " + document.getElementById("clientSecret").readOnly == true);
    if (document.getElementById("clientSecret").readOnly != undefined || document.getElementById("clientSecret").readOnly == true){
        document.getElementById("clientSecret").readOnly = false;
    }
    else {
        document.getElementById("clientSecret").readOnly = true;
    }
}

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
            <GluuLabel label="Client ID:" size={3} />
             <Col sm={6} lg={6}>
            <Input
            style={{ backgroundColor: "#F5F5F5" }}
            placeholder="Enter the client inum"
            id="inum"
            name="inum"
            disabled
            value={(item.inum == null || item.inum == '') ?  "Will be generated after adding the new client." : item.inum }
            />
            </Col>
      
            <GluuLabel label="Disabled:" size={3} />
            <Col sm={6} lg={6}>                  
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
        )}

        <FormGroup row>              
            <GluuLabel label="Client Secret:" required />
            <Col sm={6} lg={6}>      
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
                    maxlength="60"
                    onKeyUp={toogle}
                    onChange={formik.handleChange}
                    defaultValue={item.clientSecret}
            />  
                  
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
                    src={require("./../../../images/png/eye.png")}
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
            src={require("./../../../images/png/eye-hidden.png")}
            />
            </Col>
            <input type='button' value='Generate Client Secret' onClick={this.generateSecret()} />
            <input type='button' value='Lock Secret Field' onClick={this.lockSecret()} />
              
        </FormGroup>

        <FormGroup row>
            <GluuLabel label="Client Name:" required />
            <Col sm={6}>
            <Input
            placeholder="Enter the attribute display name"
            valid={
            !formik.errors.clientName && !formik.touched.clientName && init
            }
            id="clientName"
            onChange={formik.handleChange}
            defaultValue={item.clientName}
            /> 
            </Col>

            <GluuLabel label="Pre-Authorization:" size={3} required />
            <Col sm={6}>     
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
            <GluuLabel label="Client Description:" />
            <Col sm={6}>
            <Input
            type="textarea"
            placeholder="Enter the attribute description"
            id="description"
            maxlength="250"
            defaultValue={item.description}
            onChange={formik.handleChange}
            />   
           </Col>

           <Col sm={6}>  
            <FormGroup row>
                <GluuLabel label="Persist Client Authorizations:" size={3} />
                <Col sm={3}>           
                <Input
                id="persistClientAuthorizations"
                name="persistClientAuthorizations"
                placeholder="Select checkbox to persist client authorizations"
                onChange={formik.handleChange}
                type="checkbox"
                defaultChecked={item.persistClientAuthorizations}
                />
                </Col>

                <GluuLabel label="Application Type:" required />
                <Col sm={3}>  
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
                </Col>
             </FormGroup>
            </Col>
        </FormGroup>

      <FormGroup row>
            <GluuLabel label="Sector URI:" />
            <Col sm={6}>
            <Input
            id="sectorIdentifierUri"
            name="sectorIdentifierUri"
            placeholder="Enter Sector Identifier Uri"
            onChange={formik.handleChange}
            defaultValue={item.sectorIdentifierUri}
            />
            </Col>

            <GluuLabel label="Subject Type:" required />
            <Col sm={6}>
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
            </Col>
          </FormGroup>

          <FormGroup row>
              <GluuLabel label="Redirect Login URIs:" />
              <Col sm={6}>
                  <SimpleCustomProperty />
              </Col>

                <Col sm={6}>
                    <FormGroup row>
                    <GluuLabel label="Authentication method for the Token Endpoint:" />
                    <Col sm={3}>
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
                      </Col>


                    <GluuLabel label="Expirable client:" size={3} />
                    <Col sm={3}>
                    <Input
                    id="deletable"
                    name="deletable"
                    placeholder="Select checkbox to specify if client is deletable"
                    onChange={formik.handleChange}
                    type="checkbox"
                    defaultChecked={item.disabled}
                    />
                    </Col>
                  </FormGroup>
              </Col>
          </FormGroup>

          <FormGroup row>
              <GluuLabel label="Scopes:" />
              <Col sm={6}>
                  <UncontrolledModal />
              </Col>

              <GluuLabel label="Grant Types:" />
              <Col sm={6}>
                  <UncontrolledModal />
              </Col>
          </FormGroup>

          <FormGroup row>
              <GluuLabel label="Response Types:" />
              <Col sm={6}>
                  <UncontrolledModal />
              </Col>

              <GluuLabel label="Redirect Logout URIs:" />
              <Col sm={6}>
                  <UncontrolledModal />
              </Col>
          </FormGroup>

        <FormGroup row>
            <GluuLabel label="Logo URI:" size={3} />
            <Col sm={6}>
            <Input
            type="text"
            id="logoUri"
            name="logoUri"
            placeholder="Enter logo Uri"
            onChange={formik.handleChange}

            defaultChecked={item.logoUri}
            />
            </Col>

            <GluuLabel label="Policy URI:" size={3} />
            <Col sm={6}>
            <Input
            type="text"
            id="policyUri"
            name="policyUri"
            placeholder="Enter policy Uri"
            onChange={formik.handleChange}

            defaultChecked={item.policyUri}
            />
            </Col>
        </FormGroup>

          

      <FormGroup row />
      <GluuFooter />
    </Form>
  );
}

export default ClientForm;
