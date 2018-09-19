import React from "react";
import ReactPlayer from 'react-player'

class PlayerTest extends React.Component {

  render() {
    return (
      <ReactPlayer url="https://www.youtube.com/watch?v=HgZysv0LV7o" playing />
    );
  }
}
export default PlayerTest;