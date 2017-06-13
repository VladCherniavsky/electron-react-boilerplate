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
import ErrorOutlineIcon from 'material-ui/svg-icons/alert/error-outline.js';
import CameraIcon from 'material-ui/svg-icons/image/camera';
import RemoveIcon from 'material-ui/svg-icons/navigation/cancel';
import LockIcon from 'material-ui/svg-icons/action/lock';
import TextField from 'material-ui/TextField';


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
          <br/>
          <label>When check fires, report as:</label>
          <Dropdown options={[1, 2, 3]}
                    style={{
                      color: 'black',
                    }}
                    disabled={false}
          />
          <br/>
          <br/>
          <Checkbox disabled={false}
                    label="When it does not fire, report as"/>
          <br/>

          <label>Explanation for this check:</label>
          <TextareaDropdown/>
          <br/>
          <Checkbox disabled={false}
                    label="Fire if any condition is met"/>
          <br/>

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
              <GroupList/>
            </div>
            <div className={style.rightBlock}>
              <GroupList/>
            </div>
          </div>

          <div className={style.middleBlock}>
            <div className={style.notificationMessage}>
              <span>
                <ErrorOutlineIcon/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the

              </span>
            </div>
            <label>Group, colors:</label>
            <br/>
            <br/>
            <div>
              <CameraIcon/> <label> Is DeviceCMYK</label>
              <IconButton className={style.removeBtn}> <RemoveIcon/></IconButton>
              <span className={style.clearfix}> </span>
            </div>



            <br />
            <div className={style.dropdownWrapper}>
              <Dropdown options={[{label: 'Is not true', key: 1}]}
                        style={{
                          color: 'black',
                        }}
                        disabled={true}
              />

            </div>
            <Divider/>

            <br/>
            <br/>

            <label>Group, colors:</label>
            <br/>
            <br/>

            <div>
              <CameraIcon/> <label> Number of non-zero CMYK components</label>
              <IconButton className={style.removeBtn}> <RemoveIcon/></IconButton>
              <span className={style.clearfix}> </span>
            </div>

            <TextField
              hintText="Hint Text"
              floatingLabelText="Number"
            /><br />
            <TextField
              hintText="Hint Text"
              floatingLabelText="Plus/minus"
            /><br />


            <Divider/>
            <br/>
            <label>Group, colors:</label>
            <br/>
            <br/>
            <div>
              <CameraIcon/> <label> Object uses CMYK only  (no spot colors)</label>
              <IconButton className={style.removeBtn}> <RemoveIcon/></IconButton>
              <span className={style.clearfix}> </span>
            </div>
            <div className={style.dropdownWrapper}>
              <Dropdown options={[{label: 'Is true', key: 1}]}
                        style={{
                          color: 'black',
                        }}
                        disabled={true}
              />

            </div>
            <br /> <br />


          </div>


        </div>
      </div>
      <Divider/>

      <div className={style.flexContainer}>
        <div className={style.contentFooter}>
          <LockIcon/> This check is locked (all profiles that reference it are locked)
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
