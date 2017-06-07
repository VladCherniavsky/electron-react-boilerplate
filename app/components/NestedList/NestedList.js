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
import FlagIconMenu from '../FlagIconMenu';
import Dialog from '../Dialog';
import Divider from 'material-ui/Divider';


export default class ListExampleNested extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.items
    };
    console.log('this', this);
  }
  handleOnClick = (itemIndex, parentIndex) => {
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

  dialogContent = (
    <div className={style.contentWrapper}>

      <div className={style.flexContainer}>
        <div className={style.contentLeft}></div>
        <div className={style.contentRight}></div>
      </div>
      <Divider/>

      <div className={style.flexContainer}>
        <div className={style.contentFooter}></div>
      </div>




    </div>
  );

  handleOpenDialog() {
    console.log('this.refs.dialog.handleOpen', this.refs);
    this.refs.dialog.handleOpen(this.dialogContent);
  }

  rightClickButtons = (
    <div className={style.listItemRightButtons}>
      <IconButton tooltip="Edit"
                  touch={true}
                  tooltipPosition="top-left"
                  onTouchTap={::this.handleOpenDialog}
      >
        <EditIcon/>
      </IconButton>
      <FlagIconMenu/>

    </div>
  );

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
                onClick={this.handleOnClick(index, parentIndex)}
                 secondaryText={
                   item.isHovered &&
                   <span className={style.secondaryText}>
                     {item.secondaryText}
                   </span>
                 }
                secondaryTextLines={2}>
        {item.isHovered && this.rightClickButtons}
      </ListItem>
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
        <Dialog ref="dialog" title="callas pdf Toolbox: Edit Check"/>
      </div>
    );
  }
}
