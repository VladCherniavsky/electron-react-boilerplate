/**
 * Created by User on 6/1/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import LabelIcon from 'material-ui/svg-icons/action/label';
import LabelOutlineIcon from 'material-ui/svg-icons/action/label-outline';
import style from './style.scss';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import FlagIcon from 'material-ui/svg-icons/content/flag';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <FlagIcon />
  </IconButton>
);

const rightIconButton = (
  <span>
    <IconButton tooltip="Edit"
                touch={true}
                tooltipPosition="top-left">
      <EditIcon/>
    </IconButton>

    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Reply</MenuItem>
      <MenuItem>Forward</MenuItem>
      <MenuItem>Delete</MenuItem>
    </IconMenu>

  </span>


);



export default class ListExampleNested extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.items
    };
  }
  handleOnHover = (itemIndex, parentIndex) => {
    return (event) => {
      const list = this.state.listItems;
      list.forEach((item) => {
        if(item.items) {
          item.items.forEach((child) => {
              child.isHovered = false;
          });
        }
      });
      list[parentIndex].items[itemIndex].isHovered = true;
      this.setState({
        ...this.state,
        listItems: list
      });

    };
  };
  handleOnMouseLeave = (itemIndex, parentIndex) => {
    return (event) => {
      const list = this.state.listItems;
      list[parentIndex].items[itemIndex].isHovered = false;
      console.log('list', list);
      this.setState({
        ...this.state,
        listItems: list
      });
    };
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open
    });
  };

  renderNestedItems = (parentIndex) => {
    return (item, index) => (
      <ListItem key={index}
                primaryText={item.label}
                leftIcon={<LabelOutlineIcon />}
                onClick={this.handleOnHover(index, parentIndex)}
                rightIconButton={item.isHovered && rightIconButton}
                //onMouseLeave={this.handleOnMouseLeave(index, parentIndex)}
                 secondaryText={
                   item.isHovered &&
                   <span className={style.secondaryText}>
                     {item.secondaryText}
                   </span>
                 }
                secondaryTextLines={2}/>
    );
  };
  renderItems = (item, index) => {
    return (
      <ListItem primaryText={item.label}
                key={index}
                leftIcon={<LabelIcon />}
                primaryTogglesNestedList={true}
                nestedItems={
                  item.items && item.items.map(this.renderNestedItems(index))
                }/>
    );
  };
  render() {
    return (
      <div>
        <List>
          {this.state.listItems.length > 0
          && this.state.listItems.map(this.renderItems)}
        </List>
      </div>
    );
  }
}
