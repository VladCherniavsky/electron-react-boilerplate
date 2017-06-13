/**
 * Created by User on 6/9/2017.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import TextFieldsIcon from 'material-ui/svg-icons/editor/text-fields';
import FormatSizeIcon from 'material-ui/svg-icons/editor/format-size';
import PhotoIcon from 'material-ui/svg-icons/image/photo';
import StyleIcon from 'material-ui/svg-icons/image/style';
import PaletteIcon from 'material-ui/svg-icons/image/palette';


const GroupList = () => (
  <List>
    <ListItem primaryText="All" leftIcon={<span>...</span>}/>
    <ListItem primaryText="Text" leftIcon={<TextFieldsIcon/>}/>
    <ListItem primaryText="Font" leftIcon={<FormatSizeIcon/>}/>
    <ListItem primaryText="Image" leftIcon={<PhotoIcon/>}/>
    <ListItem primaryText="Colors" leftIcon={<StyleIcon/>}/>
    <ListItem primaryText="ICC colors spaces" leftIcon={<PaletteIcon/>}/>
  </List>
);

export default GroupList;
