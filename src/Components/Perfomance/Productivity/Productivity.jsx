import React from 'react';
import classes from './Productivity.module.css';
import Icon from './icon.svg';

const Productivity = () => {
     return <div className={classes.productivity}>
          <div className={classes.titleContainer}>
               <div className={classes.title}>Продуктивность</div>
               <div className={classes.date}>На март</div>
               <div><img src={Icon} /></div>
          </div>
          <div className={classes.flex}>
               <div className={classes.your}>
                    <div className={classes.titleYour}>Ваша</div>
                    <div className={classes.countYour}>0,69</div>
               </div>
               <div className={classes.cluster}>
                    <div className={classes.titleCluster}>Кластер</div>
                    <div className={classes.countCluster}>0,6</div>
               </div>
               <div className={classes.factor}>
                    <div className={classes.titleFactor}>Коэфф. личной эффективности</div>
                    <div className={classes.countFactor}>6</div>
               </div>
          </div>
     </div>
}

export default Productivity;

