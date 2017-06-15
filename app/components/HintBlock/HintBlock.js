/**
 * Created by User on 6/14/2017.
 */
import React from 'react';
import style from './style.scss';
import ErrorOutlineIcon from 'material-ui/svg-icons/alert/error-outline.js';

const HintBlock = () => (
  <div className={style.hintBlock}>
    <div>
      <ErrorOutlineIcon/>
      <br className={style.clearfix}/>
    </div>
    <div className={style.content}>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the
      </span>

    </div>
    <br className={style.clearfix}/>
  </div>
);

export default HintBlock;
