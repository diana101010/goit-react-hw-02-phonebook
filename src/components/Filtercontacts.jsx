import React from 'react';
import PropTypes from 'prop-types';

class FilterContacts extends Component {
  setFilterValue = event => {
    const value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };
}


  render() {
    return (
      <>
      <h1>Contacts</h1>
      <div>
        <h4 >Find contacts by name</h4>
        <input onChange={this.setFilterValue}></input>
      </div>
      </>
    );
  }

  FilterContacts.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
export default FilterContacts;
