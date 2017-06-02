/**
 * Created by User on 5/30/2017.
 */
import IconButton from 'material-ui/IconButton';
import IconLeft from 'material-ui/svg-icons/image/navigate-before';
import IconRight from 'material-ui/svg-icons/image/navigate-next';
import MenuIcon from 'material-ui/svg-icons/action/view-headline';
import React from 'react';
import style from './style.scss';
import Dropdown from '../Dropdown';
import Drawer from '../Drawer';


const styleObj = {
  btn: {
    color: 'white',
    width: 36,
    height: 36,
  },
  medium: {
    width: 72,
    height: 72,
  },
  mediumRight: {
    width: 72,
    height: 72,
    padding: 0
  }
};

const options = [
  {key: 1, label: 'DeviceLink (require Add-on)'},
  {key: 2, label: 'Essentials'},
  {key: 3, label: 'New in 9.2'}
];

export default class DrawerOpenRightExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
  }
  handleToggleDrawer() {
    this.setState({isDrawerOpen: true});
  }
  render() {
    return (
      <div className={style.wrapper}>
        <Drawer open={this.state.isDrawerOpen}/>
        <div className={style.navBtns}>
          <IconButton
            disabled
            iconStyle={styleObj.btn}
            style={styleObj.medium}
          >
            <IconLeft />
          </IconButton>

          <IconButton
            iconStyle={styleObj.btn}
            style={styleObj.mediumRight}
          >
            <IconRight />
          </IconButton>
        </div>

        <div className={style.dropdown}>
          <span className={style.title}>Checks</span>
          <br/>
          <Dropdown options={options}></Dropdown>
        </div>


        <div className={style.right}>
          <IconButton
            onClick={::this.handleToggleDrawer}
            className={style.right}
            iconStyle={styleObj.btn}
            style={styleObj.mediumRight}
          >
            <MenuIcon />
          </IconButton>
        </div>


      </div>
    );
  }
}
