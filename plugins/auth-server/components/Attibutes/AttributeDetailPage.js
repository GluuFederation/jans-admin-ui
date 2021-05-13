import React from 'react'
import {
  Container,
  Badge,
  Row,
  Col,
  FormGroup,
  Label,
} from '../../../../app/components'

const AttributeDetailPage = ({ row }) => {
  return (
    <React.Fragment>
      {/* START Content */}
      <Container style={{ backgroundColor: '#F5F5F5' }}>
        <Row>
          <Col sm={6}>
            <FormGroup row>
              <Label for="input" sm={6}>
                Name:
              </Label>
              <Label for="input" sm={6}>
                {row.name}
              </Label>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label for="input" sm={6}>
                Display Name:
              </Label>
              <Label for="input" sm={6}>
                {row.displayName}
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={6}>Description:</Label>
              <Label sm={6}>{row.description}</Label>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup row>
              <Label sm={6}>Status:</Label>

              <Label sm={6}>
                <Badge color="primary">{row.status}</Badge>
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Label sm={12}>Attribute Edit Type:</Label>
          </Col>
          <Col sm={3}>
            {Array.from(row.editType).map((item, index) => (
              <Badge key={index} color="primary">
                {item}
              </Badge>
            ))}
          </Col>
          <Col sm={3}>
            <Label sm={12}>Attribute View Type:</Label>
          </Col>
          <Col sm={3}>
            {Array.from(row.viewType).map((item, index) => (
              <Badge key={index} color="primary">
                {item}
              </Badge>
            ))}
          </Col>
        </Row>
        {/* END Content */}
      </Container>
    </React.Fragment>
  )
}
export default AttributeDetailPage