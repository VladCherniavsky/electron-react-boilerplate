/**
 * Created by User on 6/7/2017.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import style from './style.scss';
import {exec} from 'child_process';
import {remote} from 'electron';

const customContentStyle = {
  width: '90%',
  maxWidth: '100%'
};

/**
 * The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 */
export default class DialogExampleCustomWidth extends React.Component {
  state = {
    open: false,
  };

  handleOpen = (component) => {
    this.setState({
      open: true,
      component: component ? component : null
    });
  };

  handleClose() {
    this.setState({
      ...this.state,
      open: false
    });
  }

  handleUsega() {
    const BrowserWindow = remote.BrowserWindow;
    const win = new BrowserWindow({width: 800, height: 600});
    const html = [
      "<body>",
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
      "</body>",
    ].join('');

    win.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
    win.webContents.on('did-finish-load', ()=>{
      win.show();
      win.focus();
    });
    win.loadURL('google.com');
    const proccess = exec('ping google.com');

    proccess.stdout.on('data', function(data) {
      console.log('data', data);
    });
  }


  render() {
    const actions = [
      <FlatButton
        label="Usage"
        style={{float: 'left'}}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleUsega}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={::this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={::this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          autoScrollBodyContent={true}
          title={this.props.title}
          actions={actions}
          onRequestClose={::this.handleClose}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          {this.state.component}
        </Dialog>
      </div>
    );
  }
}
