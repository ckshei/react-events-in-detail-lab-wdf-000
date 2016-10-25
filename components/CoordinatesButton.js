const React = require('react')

class CoordinatesButton extends React.Component {
  constructor() {
    super();
    this.createArray = this.createArray.bind(this);

  }
  
    createArray(event) {
     var xPosition = event.clientX;
     var yPosition = event.clientY;
     this.props.onReceiveCoordinates([xPosition, yPosition])
    }

  render() {
  return (
    <button onClick={this.createArray}>Send me the coordinates!</button>
  );
  }
}

module.exports = CoordinatesButton
