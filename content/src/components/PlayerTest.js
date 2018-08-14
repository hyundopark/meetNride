import React from "react";
import ReactPlayer from 'react-player'

class PlayerTest extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" playing />
    );
  }
}
export default PlayerTest;