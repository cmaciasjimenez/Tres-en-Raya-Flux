import { Button } from 'react-bootstrap';

var React = require('react');
var ReactDOM = require('react-dom');

var TresEnRayaActions = require('../actions/TresEnRayaActions.js');

var ButtonReset = React.createClass({
  reinicioClick: function(){
      TresEnRayaActions.reiniciar();
  },
  render: function(){
    return (
      <Button bsStyle="info" bsSize="large" onClick={this.reinicioClick}>
      {this.props.texto}
      </Button>
    )
  }
});
module.exports = ButtonReset;
