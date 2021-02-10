import React from "react";
import { Container } from "./../../../components";
import ClientWizardForm from "./ClientWizardForm";
function ClientAddPage() {
  return (
    <React.Fragment>
      <ClientWizardForm />
    </React.Fragment>
  );
}
const mapStateToProps = state => {
    return {
        loading: state.attributeReducer.loading,
        hasApiError: state.attributeReducer.hasApiError
    };
};
export default connect(mapStateToProps)(AttributeAddPage);
