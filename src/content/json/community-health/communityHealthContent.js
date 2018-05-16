// @flow

import ChildrensHealth from './childrens-health.json';
import MensHealth from './mens-health.json';
import MentalHealth from './mental-health.json';
import TeenHealth from './teen-health.json';
import Violence from './violence.json';
import WomensHealth from './womens-health.json';

const communityHealthContent = {
  sectionName: 'community-health',
  content: [
    {
      contentName: 'childrens-health',
      data: ChildrensHealth,
    },
    {
      contentName: 'mens-health',
      data: MensHealth,
    },
    {
      contentName: 'mental-health',
      data: MentalHealth,
    },
    {
      contentName: 'teen-health',
      data: TeenHealth,
    },
    {
      contentName: 'violence',
      data: Violence,
    },
    {
      contentName: 'womens-health',
      data: WomensHealth,
    },
  ],
};

export default communityHealthContent;
