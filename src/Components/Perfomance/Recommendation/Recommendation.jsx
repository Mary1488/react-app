import React from 'react';
import classes from './Recommendation.module.css';
import Icon from './icon.svg';

const Recommendation = () => {
     return <div className={classes.recommend}>
          <div className={classes.titleContainer}>
               <div className={classes.title}>Рекомендации</div>
               <div className={classes.date}>15-19 марта</div>
               <div>  <img src={Icon} alt="Icon" /> </div>
          </div>
          <div className={classes.flex}>
               <div className={classes.total}>
                    <div>Всего</div>
                    <div className={classes.countTotal}>11</div>
               </div>
               <div className={classes.new}>
                    <div>Новых</div>
                    <div className={classes.countNew}>8</div>
               </div>
               <div className={classes.expired}>
                    <div>Просрочено</div>
                    <div className={classes.countExpired}>6</div>
               </div>
          </div>
     </div>
}

export default Recommendation;

