// @flow

import DefaultContent from './json/default/defaultContent';
import FamilyPlanningContent from './json/family-planning/familyPlanningContent';
import CommunityHealthContent from './json/community-health/communityHealthContent';
import HealthcareAustraliaContent from './json/healthcare-australia/healthcareAustraliaContent';
import PregnancyNewbornContent from './json/pregnancy-newborn/pregnancyNewbornContent';
import SexualHealthContent from './json/sexual-health/sexualHealthContent';

const contentArray = [
  DefaultContent,
  FamilyPlanningContent,
  CommunityHealthContent,
  HealthcareAustraliaContent,
  PregnancyNewbornContent,
  SexualHealthContent,
];

// Returning [0] of the filtered array is not great practice. But will suffice.

function getContentArrayForSection(sectionName: string) {
  return contentArray.filter(contentSection => contentSection.sectionName === sectionName)[0]
    .content;
}

function getContentByName(contentSectionArray: Array<any>, contentName: string) {
  return contentSectionArray.filter(content => content.contentName === contentName)[0].data;
}

function getContent({ sectionName = 'default', contentName }: any) {
  return getContentByName(getContentArrayForSection(sectionName), contentName);
}

export default getContent;
