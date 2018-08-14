import React from "react";
import PlayerTest from "./PlayerTest";
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
            <PlayerTest/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
