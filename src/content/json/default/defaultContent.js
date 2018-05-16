// @flow

import Home from './home.json';
import About from './about.json';

const defaultContent = {
  sectionName: 'default',
  content: [
    {
      contentName: 'home',
      data: Home,
    },
    {
      contentName: 'about',
      data: About,
    },
  ],
};

export default defaultContent;
