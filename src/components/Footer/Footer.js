import React, { Component } from 'react';
import Moment from 'react-moment';

import FontAwesome from 'react-fontawesome'
import './footer.css';

class Footer extends Component {
  render(){
    return (
  <div className="footer">
    <p className="mt-3 mb-0 text-center"> © <Moment format="YYYY"></Moment> <a target="_blank" href="https://github.com/shantanutyagi67" rel="noopener noreferrer" >Group 26</a> | built and designed by: Group 26</p>
    <p className="mb-3 mt-0 text-center"> <a target="_blank" href="https://github.com/shantanutyagi67" rel="noopener noreferrer" >
      <FontAwesome className="text-center fontawesome_size" name="github"/>
      </a>
      <a target="_blank" href="https://github.com/shantanutyagi67" rel="noopener noreferrer" >
      <FontAwesome className="text-center fontawesome_size" name="codepen"/>
      </a>
    </p>
  </div>
    )
  }
}

export default Footer;
