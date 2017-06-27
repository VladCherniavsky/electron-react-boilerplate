/**
 * Created by User on 6/1/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const list = [
  {
    label: 'Create Report',
    disabled: true,
    devider: false
  },
  {
    label: 'Create Inventory',
    disabled: false,
    devider: false
  },
  {
    label: 'Insert Results as Comments',
    disabled: true,
    devider: false
  },
  {
    label: 'Remove pdfToolbox Comments...',
    disabled: false,
    devider: true
  },
  {
    label: 'Create Check...',
    disabled: false,
    devider: false
  },
  {
    label: 'Create Process Plan...',
    disabled: true,
    devider: false
  },
  {
    label: 'Edit Check...',
    disabled: false,
    devider: false
  },
  {
    label: 'Duplicate Check...',
    disabled: false,
    devider: false
  },
  {
    label: 'Delete Check...',
    disabled: false,
    devider: false
  },
  {
    label: 'Export Profile...',
    disabled: false,
    devider: false
  },
  {
    label: 'Export Profile...',
    disabled: false,
    devider: false
  },
  {
    label: 'Import Profile...',
    disabled: false,
    devider: false
  },
  {
    label: 'Create Profile Summary...',
    disabled: false,
    devider: true
  },
  {
    label: 'Log Profile Execution...',
    disabled: false,
    devider: true
  },
  {
    label: 'Search Libraries...',
    disabled: false,
    devider: false
  },
  {
    label: 'Manage Libraries...',
    disabled: false,
    devider: false
  },
  {
    label: 'Export Library...',
    disabled: false,
    devider: false
  },
  {
    label: 'Import Library...',
    disabled: false,
    devider: false
  }
];

export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  componentWillReceiveProps(nextProps) {
    this.setState({open: nextProps.open});
  }
  openFileUpload() {
    const fileUploadDom = ReactDOM.findDOMNode(this.refs.fileUpload);
    fileUploadDom.click();
  }
  renderMenuItems() {
    return list.map((item, index) => {
      return (<div key={index}>
        <MenuItem disabled={item.disabled} onClick={::this.openFileUpload}> {item.label}
          <input
            ref="fileUpload"
            type="file"
            style={{"display" : "none"}}/>
        </MenuItem>
        {item.devider && <Divider/>}
      </div>);
    });
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <Drawer openSecondary={true}
                docked={false}
                width="30%"
                onRequestChange={::this.handleToggle}
                open={this.state.open} >
          {::this.renderMenuItems()}


        </Drawer>
      </div>
    );
  }
}

