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
import Dropdown from '../Dropdown';
import Checkbox from 'material-ui/Checkbox';
import TextareaDropdown from '../TextareaDropdown';
import GroupList from '../GroupList';
import HintBlock from '../HintBlock';
import LockIcon from 'material-ui/svg-icons/action/lock';
import TextField from 'material-ui/TextField';
import Group from '../Group';


import MenuItem from 'material-ui/MenuItem';
import FlagIcon from 'material-ui/svg-icons/content/flag';
import IconMenu from 'material-ui/IconMenu';

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
        <div className={style.contentLeft}>
          <label>When check fires, report as:</label>
          <Dropdown options={[
            {
              label: 'Black Text (100% Gray) is smaller than 12 pt',
              key: 1
            },
            {
              label: 'Black Text (100% Gray) is smaller than 12 pt',
              key: 2
            }
            ]}
                    disabled={false}
                    passedClassName={style.dropdown}
          />
          <Checkbox disabled={false}
                    label="When it does not fire, report as"/>
          <br/>
          <label>Explanation for this check:</label>
          <br/>
          <TextareaDropdown/>
          <Checkbox disabled={false}
                    label="Fire if any condition is met"/>


          <label>Apply this check to:</label>
          <Checkbox disabled={false}
                    checked={true}
                    label="Page contents"/>
          <Checkbox disabled={false}
                    label="Appearance of annotations"/>
          <Checkbox disabled={false}
                    label="Appearance of form field"/>
          <Checkbox disabled={false}
                    label="Soft masks"/>
          <Checkbox disabled={false}
                    checked={true}
                    label="Current file"/>
          <Checkbox disabled={false}
                    checked={false}
                    label="Embedded files"/>
          <Checkbox disabled={false}
                    checked={false}
                    label="Ignore objects outside"/>

          <Dropdown options={[1, 2, 3]}
                    style={{
                      color: 'black',
                    }}
                    disabled={true}
          />
          <br/>
        </div>

        <div className={style.contentRight}>
          <div className={style.topBlock}>
            <div className={style.leftBlock}>
              <div className={style.header}>
                <label > Group: </label>
              </div>
              <GroupList/>
            </div>
            <div className={style.rightBlock}>
              <div className={style.header}>
                <label > Property: </label>
                <TextField
                  className={style.findInput}
                  hintText="Find"
                />
              </div>
              <GroupList/>
            </div>
          </div>

          <div className={style.middleBlock}>
            <HintBlock/>
            <Group label="Group, colors: "
                   description="Object uses CMYK only  (no spot colors)">
              <Dropdown options={[{label: 'Is not true', key: 1}]}
                             style={{
                               color: 'black',
                             }}
                             disabled={false}
              />
            </Group>

            <Group label="Group, colors: "
                   description="Number of non-zero CMYK components">
              <div className={style.inputs}>
                <TextField
                  hintText="Hint Text"
                  floatingLabelText="Number"
                />
                <TextField
                  hintText="Hint Text"
                  floatingLabelText="Plus/minus"
                />

              </div>

            </Group>


            <Group label="Group, colors: "
                   description="Object uses CMYK only  (no spot colors)">
              <Dropdown options={[{label: 'Is true', key: 1}]}
                        style={{
                          color: 'black',
                        }}
                        disabled={false}
              />
            </Group>
          </div>
        </div>
      </div>
      <Divider/>

      <div className={style.flexContainer}>
        <div className={style.contentFooter}>
          <LockIcon/> This check is locked
          (all profiles that reference it are locked)
        </div>
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
      {/*<IconMenu iconButtonElement={<IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
        iconStyle={{color: 'white'}}

      >
        <FlagIcon />
      </IconButton>}
                useLayerForClickAway={true}
                touchTapCloseDelay={0}>
        <MenuItem><Checkbox label="Favorite"/></MenuItem>
        <MenuItem><Checkbox label="Workspace"/></MenuItem>
      </IconMenu>*/}

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
