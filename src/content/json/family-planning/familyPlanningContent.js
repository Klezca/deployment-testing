// @flow

import BirthSpacing from './birth-spacing.json';
import Contraception from './contraception.json';
import FamilyPlanning from './family-planning.json';
import Fertility from './fertility.json';
import UnplannedPregnancy from './unplanned-pregnancy.json';

const familyPlanningContent = {
  sectionName: 'family-planning',
  content: [
    {
      contentName: 'birth-spacing',
      data: BirthSpacing,
    },
    {
      contentName: 'contraception',
      data: Contraception,
    },
    {
      contentName: 'family-planning',
      data: FamilyPlanning,
    },
    {
      contentName: 'fertility',
      data: Fertility,
    },
    {
      contentName: 'unplanned-pregnancy',
      data: UnplannedPregnancy,
    },
  ],
};

export default familyPlanningContent;
