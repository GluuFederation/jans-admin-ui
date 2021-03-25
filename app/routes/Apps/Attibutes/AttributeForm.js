import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Col,
  InputGroup,
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
} from './../../../components'
import GluuFooter from '../Gluu/GluuFooter'
import GluuLabel from '../Gluu/GluuLabel'

function AttributeForm({ item, handleSubmit }) {
  const [init, setInit] = useState(false)
  function toogle() {
    if (!init) {
      setInit(true)
    }
  }
  const formik = useFormik({
    initialValues: {
      name: item.name,
      displayName: item.displayName,
      description: item.displayName,
      status: item.status,
      jansHideOnDiscovery: item.jansHideOnDiscovery,
      oxMultiValuedAttribute: item.oxMultiValuedAttribute,
      scimCustomAttr: item.scimCustomAttr,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Mininum 2 characters').required('Required!'),
      displayName: Yup.string()
        .min(2, 'Mininum 2 characters')
        .required('Required!'),
      description: Yup.string(),
      status: Yup.string()
        .min(3, 'This value is required')
        .required('Required!'),
    }),
    onSubmit: (values) => {
      const result = Object.assign(item, values)
      handleSubmit(JSON.stringify(result))
    },
  })
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
              style={{ backgroundColor: '#F5F5F5' }}
              placeholder="Enter the attribute inum"
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
            placeholder="Enter the attribute name"
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
        <GluuLabel label="Display Name" required />
        <Col sm={9}>
          <InputGroup>
            <Input
              placeholder="Enter the attribute display name"
              valid={
                !formik.errors.displayName &&
                !formik.touched.displayName &&
                init
              }
              id="displayName"
              defaultValue={item.displayName}
              onChange={formik.handleChange}
            />
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Description" />
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
        <GluuLabel label="Status" />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="select"
              id="status"
              name="status"
              defaultValue={item.status}
              onChange={formik.handleChange}
            >
              <option value="">Choose...</option>
              <option>ACTIVE</option>
              <option>INACTIVE</option>
            </CustomInput>
          </InputGroup>
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Data Type" />
        <Col sm={9}>
          <InputGroup>
            <CustomInput
              type="select"
              id="dataType"
              name="dataType"
              defaultValue={item.dataType}
              onChange={formik.handleChange}
            >
              <option value="">Choose...</option>
              <option>STRING</option>
              <option>JSON</option>
              <option>NUMERIC</option>
              <option>BINARY</option>
              <option>CERTIFICATE</option>
              <option>DATE</option>
              <option>BOOLEAN</option>
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
            defaultValue={item.editType}
            multiple
            onChange={formik.handleChange}
          >
            <option>ADMIN</option>
            <option>USER</option>
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
            defaultValue={item.viewType}
            multiple
            onChange={formik.handleChange}
          >
            <option>ADMIN</option>
            <option>USER</option>
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
            defaultValue={item.usageType}
            multiple
            onChange={formik.handleChange}
          >
            <option>Not Defined</option>
            <option>OPENID</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="oxAuth claim name" />
        <Col sm={9}>
          <Input
            name="claimName"
            id="claimName"
            defaultValue={item.claimName}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Multivalued?" size={3} />
        <Col sm={1}>
          <Input
            id="oxMultiValuedAttribute"
            name="oxMultiValuedAttribute"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked={item.oxMultiValuedAttribute}
          />
        </Col>
        <GluuLabel label="Hide On Discovery?" size={3} />
        <Col sm={1}>
          <Input
            id="jansHideOnDiscovery"
            name="jansHideOnDiscovery"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked={item.jansHideOnDiscovery}
          />
        </Col>
        <GluuLabel label="Include In SCIM Extension?" size={3} />
        <Col sm={1}>
          <Input
            id="scimCustomAttr"
            name="scimCustomAttr"
            onChange={formik.handleChange}
            type="checkbox"
            defaultChecked={item.scimCustomAttr}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Regular expression" />
        <Col sm={9}>
          <Input
            name="regexp"
            id="regexp"
            defaultValue={item.regexp}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Saml1 Uri" />
        <Col sm={9}>
          <Input
            placeholder="Enter the saml1 Uri"
            id="saml1Uri"
            name="saml1Uri"
            defaultValue={item.saml1Uri}
            onKeyUp={toogle}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <GluuLabel label="Saml2 Uri" />
        <Col sm={9}>
          <Input
            placeholder="Enter the saml2 Uri"
            id="saml2Uri"
            name="saml2Uri"
            defaultValue={item.saml2Uri}
            onKeyUp={toogle}
            onChange={formik.handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row></FormGroup>
      <GluuFooter />
    </Form>
  )
}

export default AttributeForm
