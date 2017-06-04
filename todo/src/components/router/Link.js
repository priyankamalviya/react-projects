import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
/*global event*/
/*eslint no-restricted-globals: ["error", "event","history"]*/

var history ='';

export class Link extends Component{
  handleClick = (event) => {
    event.preventDefault()
    history.pushState(null, '', this.props.to)
  }
  render(){
    return <a href='#' onClick={this.handleClick}>{this.props.children}</a>
  }
}

Link.propTypes ={
  to:PropTypes.string.isRequired
}
