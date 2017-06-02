/**
 * Created by User on 6/1/2017.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.open});
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <Drawer openSecondary={true}
                docked={false}
                onRequestChange={::this.handleToggle}
                open={this.state.open} >
          <MenuItem> Create Report</MenuItem>
          <MenuItem> Create Inventory</MenuItem>
          <MenuItem> Insert Results as Comments</MenuItem>
          <MenuItem> Remove pdfToolbox Comments...</MenuItem>
          <MenuItem> CreateReport</MenuItem>
        </Drawer>
      </div>
    );
  }
}
