/**
 * Created by User on 6/1/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import LabelIcon from 'material-ui/svg-icons/action/label';
import LabelOutlineIcon from 'material-ui/svg-icons/action/label-outline';

export default class ListExampleNested extends React.Component {

  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open
    });
  };

  renderNestedItems = (item, index) => {
    return (
      <ListItem key={index}
                primaryText={item.label}
                leftIcon={<LabelOutlineIcon />}/>
    );
  };
  renderItems = (item, index) => {
    return (
      <ListItem primaryText={item.label}
                key={index}
                leftIcon={<LabelIcon />}
                primaryTogglesNestedList={true}

                nestedItems={
                item.items && item.items.map(this.renderNestedItems)}/>
    );
  };
  render() {
    const items = this.props.items;
    return (
      <div>
        <List>
          {items.length > 0 && items.map(this.renderItems)}
        </List>
      </div>
    );
  }
}
