/**
 * Created by User on 5/31/2017.
 */
import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styleObj = {
  color: 'white'
};

export default class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value}
                    onChange={this.handleChange}
                    labelStyle={styleObj}>
        {this.props.options && this.props.options.map((item, index) => {
          return <MenuItem value={item.key ? item.key : item}
                           primaryText={item.label ? item.label : item}
                           key={item.key ? item.key : index}/>;
        })}
      </DropDownMenu>
    );
  }
}
