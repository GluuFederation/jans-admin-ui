import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Typography
} from "@material-ui/core";

import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default class CreateUserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  handleChange = panel => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? true : false });
  };

  checklist = () => {
    const { scopesList } = this.props;
    return scopesList.map((scope, i) => {
      let createChecked = true;
      let readChecked = true;
      let updateChecked = true;
      let deleteChecked = true;
      return (
        <Grid item xs={12} sm={12} xl={6} md={6} key={i}>
          <FormControl component="fieldset" fullWidth margin={"dense"}>
            <FormLabel component="label">
              <Typography>{scope}</Typography>
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color={"primary"}
                    checked={createChecked}
                    onChange={evt => this.onChangeScope(scope, "create", evt)}
                  />
                }
                label="Create"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color={"primary"}
                    checked={readChecked}
                    onChange={evt => this.onChangeScope(scope, "read", evt)}
                  />
                }
                label="Read"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color={"primary"}
                    checked={updateChecked}
                    onChange={evt => this.onChangeScope(scope, "update", evt)}
                  />
                }
                label="Update"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color={"primary"}
                    checked={deleteChecked}
                    onChange={evt => this.onChangeScope(scope, "delete", evt)}
                  />
                }
                label="Delete"
              />
            </FormGroup>
          </FormControl>
          <Divider />
        </Grid>
      );
    });
  };

  render() {
    const { expanded } = this.state;
    const { show, onHide } = this.props;

    return (
      <Modal
        show={show}
        onHide={onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            Add New
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpansionPanel
            expanded={expanded === true}
            onChange={this.handleChange("panel")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>Scopes</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{this.checklist()}</ExpansionPanelDetails>
          </ExpansionPanel>
        </Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    );
  }
}