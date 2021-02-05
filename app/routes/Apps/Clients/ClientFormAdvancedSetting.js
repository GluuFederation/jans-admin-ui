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


function
function takeFocus(x) {
    x.focus();
}

function ClientFormAdvancedSetting({ data }) {
    const [init, setInit] = useState(false);
    function toogle() {
        if (!init) {
            setInit(true);
        }
    }
    const formik = useFormik({
        initialValues: { name: "", displayName: "", description: "" },
        /*validationSchema: Yup.object({
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
        }),*/
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            {/* START Input */}

            <FormGroup row>
                <GluuLabel label="Access Token as JWT:" size={3} />
                <Col sm={6} lg={6}>
                    <Input
                        id="accessTokenAsJwt"
                        name="accessTokenAsJwt"
                        placeholder="Select checkbox for AccessToken as Jwt"
                        onChange={formik.handleChange}
                        type="checkbox"
                        defaultChecked={item.accessTokenAsJwt}
                    />
                </Col>

                <GluuLabel label="Require Auth Time:" size={3} />
                <Col sm={6} lg={6}>
                    <Input
                        id="requireAuthTime"
                        name="requireAuthTime"
                        placeholder="Select checkbox to set requireAuthTime"
                        onChange={formik.handleChange}
                        type="checkbox"
                        defaultChecked={item.requireAuthTime}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <GluuLabel label="RPT as JWT:" size={3} />
                <Col sm={6} lg={6}>
                    <Input
                        id="rptAsJwt"
                        name="rptAsJwt"
                        placeholder="Select checkbox for rptAsJwt"
                        onChange={formik.handleChange}
                        type="checkbox"
                        defaultChecked={item.rptAsJwt}
                    />
                </Col>

                <GluuLabel label="Include Claims In Id Token:" size={3} />
                <Col sm={6} lg={6}>
                    <Input
                        id="includeClaimsInIdToken"
                        name="includeClaimsInIdToken"
                        placeholder="Select checkbox to include claims in IdToken"
                        onChange={formik.handleChange}
                        type="checkbox"
                        defaultChecked={item.includeClaimsInIdToken}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <GluuLabel label="Logout Session Required:" size={3} />
                <Col sm={6} lg={6}>
                    <Input
                        id="frontChannelLogoutSessionRequired"
                        name="frontChannelLogoutSessionRequired"
                        placeholder="Select checkbox for rptAsJwt"
                        onChange={formik.handleChange}
                        type="checkbox"
                        defaultChecked={item.frontChannelLogoutSessionRequired}
                    />
                </Col>

               
            </FormGroup>



            <FormGroup row>
                <GluuLabel label="Client URI:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter the Client URI"
                        valid={ }
                        id="clientUri"
                        name="clientUri"
                        onChange={formik.handleChange}
                        defaultValue={item.clientUri}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <GluuLabel label="Enter Terms of Service URI:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Terms of Service URI"
                        valid={ }
                        id="tosUri"
                        name="tosUri"
                        onChange={formik.handleChange}
                        defaultValue={item.tosUri}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <GluuLabel label="ID Token Binding Confirmation Method:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter ID Token Binding Confirmation MethodTerms of Service URI"
                        valid={ }
                        id="idTokenTokenBindingCnf"
                        name="idTokenTokenBindingCnf"
                        onChange={formik.handleChange}
                        defaultValue={item.idTokenTokenBindingCnf}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <GluuLabel label="Initiate Login URI:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter Initiate Login URI"
                        valid={ }
                        id="initiateLoginUri"
                        name="initiateLoginUri"
                        onChange={formik.handleChange}
                        defaultValue={item.initiateLoginUri}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <GluuLabel label="Refresh Token Lifetime:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter Refresh Token Lifetime"
                        valid={ }
                        id="refreshTokenLifetime"
                        name="refreshTokenLifetime"
                        onChange={formik.handleChange}
                        defaultValue={item.refreshTokenLifetime}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <GluuLabel label="Default Maximum Authentication Age:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter Default Maximum Authentication Age"
                        valid={ }
                        id="defaultMaxAge"
                        name="defaultMaxAge"
                        onChange={formik.handleChange}
                        defaultValue={item.defaultMaxAge}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <GluuLabel label="Access Token Lifetime:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter Access Token Lifetime"
                        valid={ }
                        id="accessTokenLifetime"
                        name="accessTokenLifetime"
                        onChange={formik.handleChange}
                        defaultValue={item.accessTokenLifetime}
                    />
                </Col>
            </FormGroup>


            <FormGroup row>
                <GluuLabel label="Software Identifier:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter Software Identifier"
                        valid={ }
                        id="softwareId"
                        name="softwareId"
                        onChange={formik.handleChange}
                        defaultValue={item.softwareId}
                    />
                </Col>
            </FormGroup>


            <FormGroup row>
                <GluuLabel label="Software Version:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter Software Version"
                        valid={ }
                        id="softwareVersion"
                        name="softwareVersion"
                        onChange={formik.handleChange}
                        defaultValue={item.softwareVersion}
                    />
                </Col>
            </FormGroup>


            <FormGroup row>
                <GluuLabel label="Software Statement:" />
                <Col sm={6}>
                    <Input
                        type="textarea"
                        placeholder="Enter Software Statement"
                        valid={ }
                        id="softwareStatement"
                        name="softwareStatement"
                        maxlength="4000"
                        onChange={formik.handleChange}
                        defaultValue={item.softwareStatement}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <GluuLabel label="CIBA Token Delivery Mode:" />
                <Col sm={6}>
                    <CustomInput
                        type="select"
                        id="backchannelTokenDeliveryMode"
                        name="backchannelTokenDeliveryMode"
                        placeholder="Please select subject type"
                        defaultValue={item.backchannelTokenDeliveryMode}
                        onChange={formik.handleChange}
                    >
                        <option></option>
                        <option>poll</option>
                        <option>ping</option>
                        <option>push</option>
                    </CustomInput>
                </Col>
            </FormGroup>

            <FormGroup row>
                <GluuLabel label="CIBA Client Notification Endpoint:" />
                <Col sm={6}>
                    <Input
                        type="text"
                        placeholder="Enter CIBA Client Notification Endpoint"
                        valid={ }
                        id="backchannelClientNotificationEndpoint"
                        name="backchannelClientNotificationEndpoint"
                        onChange={formik.handleChange}
                        defaultValue={item.backchannelClientNotificationEndpoint}
                    />
                </Col>
            </FormGroup>

            <FormGroup row>
                <GluuLabel label="CIBA User Code Parameter:" size={3} />
                <Col sm={3}>
                    <Input
                        id="backchannelUserCodeParameter"
                        name="backchannelUserCodeParameter"
                        placeholder="Select checkbox to enable CIBA User Code Parameter"
                        onChange={formik.handleChange}
                        type="checkbox"
                        defaultChecked={item.backchannelUserCodeParameter}
                    />
                </Col>
            </FormGroup>

            <FormGroup row label="Claim Redirect Uri">
                <Col sm={6}>
                    <UncontrolledModal name={items.claimRedirectUris} displayName="Claim Redirect Uri" />
                </Col>
            </FormGroup>

            <FormGroup row label="Contacts">
                <Col sm={6}>
                    <UncontrolledModal name={items.claimRedirectUris} displayName="Contacts" />
                </Col>
            </FormGroup>

           
            <FormGroup row />
            <GluuFooter />
        </Form>
    );
}

export default ClientFormAdvancedSetting;
