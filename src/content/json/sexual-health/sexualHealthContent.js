// @flow

import HealthyRelationships from './healthy-relationships.json';
import SafeSex from './safe-sex.json';
import Sexuality from './sexuality.json';
import Sti from './sti.json';

const sexualHealthContent = {
  sectionName: 'sexual-health',
  content: [
    {
      contentName: 'healthy-relationships',
      data: HealthyRelationships,
    },
    {
      contentName: 'safe-sex',
      data: SafeSex,
    },
    {
      contentName: 'sexuality',
      data: Sexuality,
    },
    {
      contentName: 'sti',
      data: Sti,
    },
  ],
};

export default sexualHealthContent;
