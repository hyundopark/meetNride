import React from "react";
import Test from "./HomeCarousel";
import { Grid, Row, Col } from "react-bootstrap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Row className="testing">
          <Col>
            <Test/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
