/**
 * Created by User on 6/6/2017.
 */
import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import FlagIcon from 'material-ui/svg-icons/content/flag';
import IconMenu from 'material-ui/IconMenu';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';

export default class FlagIconMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFavorite: true};
  }
  onCheckClick() {
    console.log('this.state', this.state);
    this.setState({
      ...this.state,
      isFavorite: !this.state.isFavorite
    });
    console.log('this.state', this.state);
  }

  render() {
    return (
      <IconMenu iconButtonElement={<IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
        iconStyle={{color: this.state.isFavorite ? 'red' : 'white'}}

      >
        <FlagIcon />
      </IconButton>}
                useLayerForClickAway={true}
                      touchTapCloseDelay={0}>
      <MenuItem>
        <Checkbox label="Favorite"
                  checked={this.state.isFavorite} onCheck={::this.onCheckClick}/>
      </MenuItem>
      <MenuItem><Checkbox label="Workspace"/></MenuItem>
    </IconMenu>);
  }
}
