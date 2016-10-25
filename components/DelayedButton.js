const React = require('react')

class DelayedButton extends React.Component {
  constructor() {
  super();

  this.handleClick = this.handleClick.bind(this)
  }

  handleClick(el) {
    el.persist();
    setTimeout(() => {
      this.props.onDelayedClick(el);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delay Button</button>
    )
  }

}

module.exports = DelayedButton

