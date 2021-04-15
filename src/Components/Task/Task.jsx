import React from 'react';
import classes from './Task.module.css';

const Task = () => {
     return <div className={classes.task}>
          <div className={classes.flex}>
               <div className={classes.title}>
                    Задачи
               </div>
               <div>
                    <a>Перейти к задачам</a>
               </div>
          </div>
          <div className={classes.flex}>
               <div className={classes.work}>В работе</div>
               <div>1</div>
          </div>
          <div className={classes.flex}>
               <div className={classes.stop}>Приостановленные</div>
               <div>99</div>
          </div>
     </div>
}

export default Task;