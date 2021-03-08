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


function ScopeForm({ item, handleSubmit }) {

	const [init, setInit] = useState(false);
	
	  function toogle() {
		    if (!init) {
		      setInit(true);
		    }
	  }
	    
	    const formik = useFormik({
	        initialValues: {
	        	id: item.id,
	        	displayName: item.displayName,
	        	description: item.description,
	        	scopeType: item.scopeType
	        },
	        validationSchema: Yup.object({
	          id: Yup.string()
	            .min(2, "ID 2 characters")
	            .required("Required!"),
	            scopeType: Yup.string()
	            .min(2, "Please select scopeType")
	            .required("Required!") 
	        }),
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
	    	          <Label for="inum" sm={3} >
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
	    	        <GluuLabel label="Id" required />
	    	        <Col sm={9}>
	    	          <Input
	    	            placeholder="Enter the scope Id"
	    	            id="id"
	    	            valid={!formik.errors.id && !formik.touched.id && init}
	    	            name="id"
	    	            defaultValue={item.id}
	    	            onKeyUp={toogle}
	    	            onChange={formik.handleChange}
	    	          />
	    	        </Col>
	    	      </FormGroup>
	    	      
	    	      <FormGroup row>
	    	        <GluuLabel label="displayName"  />
	    	        <Col sm={9}>
	    	          <Input
	    	            placeholder="Enter the displayName"
	    	            id="displayName"
	    	            valid={!formik.errors.displayName && !formik.touched.displayName && init}
	    	            name="displayName"
	    	            defaultValue={item.displayName}
	    	            onKeyUp={toogle}
	    	            onChange={formik.handleChange}
	    	          />
	    	        </Col>
	    	      </FormGroup>
	    	      
	    	      <FormGroup row>
	    	        <GluuLabel label="IconUrl"  />
	    	        <Col sm={9}>
	    	          <Input
	    	            placeholder="Enter the IconUrl"
	    	            id="iconUrl"
	    	            valid={!formik.errors.iconUrl && !formik.touched.iconUrl && init}
	    	            name="iconUrl"
	    	            defaultValue={item.iconUrl}
	    	            onKeyUp={toogle}
	    	            onChange={formik.handleChange}
	    	          />
	    	        </Col>
	    	      </FormGroup>
	    	      
	    	      <FormGroup row>
	    	        <GluuLabel label="scope Type" required />
	    	        <Col sm={9}>
	    	          <InputGroup>
	    	            <CustomInput
	    	              type="select"
	    	              id="scopeType"
	    	              name="scopeType"
	    	              defaultValue={item.programmingLanguage}
	    	              onChange={formik.handleChange}
	    	            >
	    	              <option value="">Choose...</option>
	    	              <option value="openid">OpenID</option>
	    	              <option value="uma">UMA</option>
	    	              <option value="oauth">OAuth</option>
	    	            </CustomInput>
	    	          </InputGroup>
	    	        </Col>
	    	      </FormGroup>
	    	      
	    	      <FormGroup row>
	    	        <GluuLabel label="Authorization Policy"  />
	    	        <Col sm={9}>
	    	          <InputGroup>
	    	            <CustomInput 
	    	              type="select"
	    	             multiple="true"
	    	              id="umaAuthorizationPolicies"
	    	              name="scopeType"
	    	              defaultValue={item.umaAuthorizationPolicies}
	    	              onChange={formik.handleChange}
	    	            >
	    	              <option value="">Choose...</option>
	    	              <option value="openid">OpenID</option>
	    	              <option value="uma">UMA</option>
	    	              <option value="oauth">OAuth</option>
	    	            </CustomInput>
	    	          </InputGroup>
	    	        </Col>
	    	      </FormGroup>
	    	      
	    	      
	    	      <FormGroup row></FormGroup>
	    	      <GluuFooter />
	    	    </Form>
	    	  );
	    	
	  }
export default ScopeForm;

