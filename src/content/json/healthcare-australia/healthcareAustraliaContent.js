// @flow

import AustralianNorms from './australian-norms.json';
import CommunityServices from './community-services.json';
import Disability from './disability.json';
import HealthSystemOverview from './health-system-overview.json';
import MedicareCentrelink from './medicare-centrelink.json';
import PrivateHealth from './private-health.json';
import PrivaseVsPublic from './private-vs-public.json';
import RightsResponsibilities from './rights-responsibilities.json';
import TranslatingInterpreting from './translating-interpreting.json';

const healthcareAustraliaContent = {
  sectionName: 'healthcare-australia',
  content: [
    {
      contentName: 'australian-norms',
      data: AustralianNorms,
    },
    {
      contentName: 'community-services',
      data: CommunityServices,
    },
    {
      contentName: 'disability',
      data: Disability,
    },
    {
      contentName: 'health-system-overview',
      data: HealthSystemOverview,
    },
    {
      contentName: 'medicare-centrelink',
      data: MedicareCentrelink,
    },
    {
      contentName: 'private-health',
      data: PrivateHealth,
    },
    {
      contentName: 'private-vs-public',
      data: PrivaseVsPublic,
    },
    {
      contentName: 'rights-responsibilities',
      data: RightsResponsibilities,
    },
    {
      contentName: 'translating-interpreting',
      data: TranslatingInterpreting,
    },
  ],
};

export default healthcareAustraliaContent;
