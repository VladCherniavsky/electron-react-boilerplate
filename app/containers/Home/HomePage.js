// @flow
import React, {Component} from 'react';
import style from './style.scss';
import Header from '../../components/Header';
import Dropdown from '../../components/Dropdown';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import CameraIcon from 'material-ui/svg-icons/image/camera';
import FilterVintage from 'material-ui/svg-icons/image/filter-vintage';
import Transform from 'material-ui/svg-icons/image/transform';
import NestedList from '../../components/NestedList';
import list from './contentList';
import * as speechService from '../../services/speechService';

const options = [
  {key: 1, label: 'Favorites'},
  {key: 2, label: 'WorkSpace'},
  {key: 3, label: 'Most Recently used'},
  {key: 4, label: 'Most frequently used'},
  {key: 5, label: 'Show all'}
];


const styleObj = {
  btn: {
    color: 'white'
  },
  hintStyle: {
    color: 'white'
  },
  underlineStyle: {
    borderColor: 'gray'
  },
  underlineFocusStyle: {
    borderColor: 'white'
  },
  floatingLabelFocusStyle: {
    color: 'white'

  },
  inputStyle: {
    color: 'white'
  }

};

export default class HomePage extends Component {
  state: {
    list: []
  };
  constructor(props: {}) {
    super(props);
    this.state = {list: list};
  }

  expand(item: [], index: number) {
    return (event: Event) => {
      const list = [...this.state.list];
      list[index].isExpanded = !list[index].isExpanded;
      this.setState({list: list});
    };
  }


  render() {
    return (

      <div className={style.wrapper}>
        <Header></Header>
        <div className={style.content}>
          <div className={style.controls}>
            <div className={style.dropdown}
                 onMouseEnter={speechService.onHover({type: 'drodown'})}>

              <Dropdown options={options} />

            </div>

            <div className={style.centeredBtns}>
              <IconButton iconStyle={styleObj.btn}
                          name="hello"
                          onMouseEnter={speechService.onHover}>
                <CameraIcon />
              </IconButton>

              <IconButton iconStyle={styleObj.btn}>
                <FilterVintage />
              </IconButton>

              <IconButton iconStyle={styleObj.btn}>
                <Transform />
              </IconButton>

            </div>

            <div className={style.input}
                 onMouseEnter={speechService.onHover({type: 'input'})}>
              <TextField floatingLabelText="Find"
                         floatingLabelStyle={styleObj.hintStyle}
                         hintStyle={styleObj.hintStyle}
                         underlineStyle={styleObj.underlineStyle}
                         underlineFocusStyle={styleObj.underlineFocusStyle}
                         inputStyle={styleObj.inputStyle}
                         floatingLabelFocusStyle={
                           styleObj.floatingLabelFocusStyle
                         }
              />
            </div>
            <br className={style.clearFix}/>

          </div>

          <br/>

          <div className={style.list}>
            <NestedList items = {list} />

          </div>
        </div>
      </div>
    );
  }
}
