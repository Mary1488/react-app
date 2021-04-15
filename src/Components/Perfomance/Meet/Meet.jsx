import React from 'react';
import classes from './Meet.module.css';
import Icon from './icon.svg';

const Meet = () => {
     return <div className={classes.meet}>
          <div className={classes.titleContainer}>
               <div className={classes.title}>Встречи</div>
               <div> <img src={Icon} /></div>
          </div>
          <div className={classes.flex}>
               <div className={classes.today}>Сегодня</div>
               <div className={classes.countToday}>3</div>
          </div>
          <div className={classes.flex}>
               <div className={classes.tomorrow}>Завтра</div>
               <div className={classes.countTomorrow}>0</div>
          </div>
     </div>
}

export default Meet;

