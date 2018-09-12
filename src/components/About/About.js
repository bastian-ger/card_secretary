import React from 'react';
import classes from './About.css';

const About = (props)  => {
  return (
    <main className={classes.About}>
      <h1>About this website</h1>
      <p>This website is my second attempt to bring my recently obtained React
      skills to life. Thanks to Maximilian Schwarzmüller's course
      "React 16 - The Complete Guide" on Udemy, I was able to improve my code
      and its structure a lot. Everyone who wants to use React should check out
      this course.</p>
      <p>Furthermore I would like to thank the respective communities and companies who
      developed and maintain these frameworks and libraries...</p>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Font Awesome</li>
        <li>Webpack</li>
        <li>Babel</li>
        <li>Reactstrap</li>
      </ul>
      <p>To all my fellow coders: Keep on coding!!</p>
    </main>
  );
}

export default About;
