import React from 'react';
import PropTypes from 'prop-types';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
    };
    
function onChange(event) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    this.setState({ [name]: value });
};

 function onSubmit (event) {
    event.preventDefault();
    const { name, number } = this.state;
    const contactForAdd = { name, number };
    this.props.onSubmit(contactForAdd);
    this.reset();
};

const reset = () => {
    this.setState({ name: '', number: '' });
  };





render() {
    return (
        <>
            <h1>Phonebook</h1>
            <div>
                <form type="submit" onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <button>Add contact</button>
                </form>
            </div>
        </>
    )
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Phonebook;
