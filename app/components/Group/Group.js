/**
 * Created by User on 6/14/2017.
 */
import React from 'react';
import style from './style.scss';
import CameraIcon from 'material-ui/svg-icons/image/camera';
import RemoveIcon from 'material-ui/svg-icons/navigation/cancel';
import IconButton from 'material-ui/IconButton';

export default class Group extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.wrapper}>
        <label>{this.props.label}</label>
        <div>
          <table>
            <tbody>
            <tr>
              <td>
                <CameraIcon/>
              </td>
              <td>
                <label> {this.props.description}</label>
              </td>
              <td>
                <IconButton> <RemoveIcon/></IconButton>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className={style.children}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
