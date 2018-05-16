// @flow

import Birth from './birth.json';
import ComplicationsOfPregnancy from './complications-of-pregnancy.json';
import ModelsMaternityCare from './models-maternity-care.json';
import Newborn from './newborn.json';
import Postnatal from './postnatal.json';
import Pregnancy from './pregnancy.json';

const pregnancyNewbornContent = {
  sectionName: 'pregnancy-newborn',
  content: [
    {
      contentName: 'birth',
      data: Birth,
    },
    {
      contentName: 'complications-of-pregnancy',
      data: ComplicationsOfPregnancy,
    },
    {
      contentName: 'models-maternity-care',
      data: ModelsMaternityCare,
    },
    {
      contentName: 'newborn',
      data: Newborn,
    },
    {
      contentName: 'postnatal',
      data: Postnatal,
    },
    {
      contentName: 'pregnancy',
      data: Pregnancy,
    },
  ],
};

export default pregnancyNewbornContent;
