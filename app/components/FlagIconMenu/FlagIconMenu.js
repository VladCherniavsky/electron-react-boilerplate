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

  render() {
    return (
      <span>
        hi
      </span>
      /*<IconMenu iconButtonElement={<IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
        iconStyle={{color: 'red'}}

      >
        <FlagIcon />
      </IconButton>}
                useLayerForClickAway={true}
                      touchTapCloseDelay={0}>
      <MenuItem><Checkbox label="Favorite"/></MenuItem>
      <MenuItem><Checkbox label="Workspace"/></MenuItem>
    </IconMenu>*/);
  }
}
