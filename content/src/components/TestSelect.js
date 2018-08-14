import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class TestSelect extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // debugger
    // console.log(`Selected: ${selectedOption[selectedOption.length].value}`);
  }
  render() {
  	const { selectedOption } = this.state;

    return (
      <Select
        name="form-field-name"
        multi={true}
        value={selectedOption}
        onChange={this.handleChange}
        options={[
          { value: 'Track', label: 'Track' },
          { value: 'Canyon', label: 'Canyon' },
          { value: 'Touring', label: 'Touring' },
          { value: 'Social', label: 'Social' }
        ]}
        // joinValues={true}
      />
    );
  }
}

export default TestSelect;