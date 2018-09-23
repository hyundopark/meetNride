import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class TestSelect extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    const selectedOptionValue = selectedOption.map(option=>option.value)
    this.props.sendDataKeyWordSelect(selectedOptionValue)
  }

  //change the array to simple {key: value} for select
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
      />
    );
  }
}

export default TestSelect;