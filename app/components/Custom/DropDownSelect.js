import React from 'react';

import styles from './styles.css';

class DropDownSelect extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderSelectOptions = (scripts) => {
    return (
      //<option key={person} value={person}>{person}</option>
      <option key={scripts.name} value={scripts.name}>{scripts.name}</option>
    );
  }

  render() {
    return (
      <select>
        {this.props.scripts.map(this.renderSelectOptions)}
      </select>
    );
  }
}


export default DropDownSelect;
