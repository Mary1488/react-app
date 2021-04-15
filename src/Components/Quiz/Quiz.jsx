import React from 'react';
import classes from './Quiz.module.css';

const Quiz = () => {
     return <div className={classes.quiz}>
          <div className={classes.title}>Опросы</div>
          <div className={classes.message}> Функционал в разработке</div>
     </div>
}

export default Quiz;