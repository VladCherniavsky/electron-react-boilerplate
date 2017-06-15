/**
 * Created by User on 6/8/2017.
 */
import React from 'react';
import style from './style.scss';
import Dropdown from '../Dropdown';

export default class TextareaDropwdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={style.area}>
        <div className={style.content}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the

        </div>

        <div className={style.rightColumn}>
          <Dropdown options={[1,2,3,4,5]}
                    passedClassName={style.dropdown}
          />

        </div>

      </div>
    );
  }
}
