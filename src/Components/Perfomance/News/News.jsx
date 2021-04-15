import React from 'react';
import classes from './News.module.css';
import Icon from './icon.svg';

const News = () => {
     return <div className={classes.news}>
          <div className={classes.titleContainer}>
               <div className={classes.title}>Новости</div>
               <div><img src={Icon} alt="Icon" /></div>
          </div>
          <div className={classes.flex}>
               <div className={classes.unread}>Не прочитано</div>
          </div>
          <div className={classes.flex}>
               <div className={classes.count}>2</div>
          </div>
     </div>
}


export default News;

