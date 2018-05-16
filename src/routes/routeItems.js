// @flow

/*
    Example Route Object;

    These objects will be used to build out the existing
    sub menu options. They will also provide the routes
    to the related content from the api.

    {
      type: , The type of page this route represents.
      section: , The section this route belongs to. (Top level menu)
      name: , Name of route
      contentUrl: , The api content url
      displayUrl: , The react router url
      style: , The numeric color/ style value for this section.
    }
*/

const routeItems = [
  {
    type: 'contentPage',
    section: 'home',
    name: 'Welcome to Shifra',
    contentUrl: '/content/default/home',
    displayUrl: '/',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'about',
    name: 'About Us',
    contentUrl: '/content/default/about',
    displayUrl: '/about',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Health System Overview',
    contentUrl: '/content/healthcare-australia/health-system-overview',
    displayUrl: '/healthcare-australia/health-system-overview',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Translating and Interpreting Services',
    contentUrl: '/content/healthcare-australia/translating-interpreting',
    displayUrl: '/healthcare-australia/translating-interpreting',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Australian Norms',
    contentUrl: '/content/healthcare-australia/australian-norms',
    displayUrl: '/healthcare-australia/australian-norms',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Medicare and Centrelink',
    contentUrl: '/content/healthcare-australia/medicare-centrelink',
    displayUrl: '/healthcare-australia/medicare-centrelink',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Your Rights and Responsibilities',
    contentUrl: '/content/healthcare-australia/rights-responsibilities',
    displayUrl: '/healthcare-australia/rights-responsibilities',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Disability Access',
    contentUrl: '/content/healthcare-australia/disability',
    displayUrl: '/healthcare-australia/disability',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Private vs. Public Health Services',
    contentUrl: '/content/healthcare-australia/private-vs-public',
    displayUrl: '/healthcare-australia/private-vs-public',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Community Based Services',
    contentUrl: '/content/healthcare-australia/community-services',
    displayUrl: '/healthcare-australia/community-services',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Private Health Insurance',
    contentUrl: '/content/healthcare-australia/private-health',
    displayUrl: '/healthcare-australia/private-health',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'family-planning',
    name: 'Birth Spacing',
    contentUrl: '/content/family-planning/birth-spacing',
    displayUrl: '/family-planning/birth-spacing',
    style: 2,
  },
  {
    type: 'contentPage',
    section: 'family-planning',
    name: 'Contraception',
    contentUrl: '/content/family-planning/contraception',
    displayUrl: '/family-planning/contraception',
    style: 2,
  },
  {
    type: 'contentPage',
    section: 'family-planning',
    name: 'Unplanned Pregnancy',
    contentUrl: '/content/family-planning/unplanned-pregnancy',
    displayUrl: '/family-planning/unplanned-pregnancy',
    style: 2,
  },
  {
    type: 'contentPage',
    section: 'family-planning',
    name: 'Fertility',
    contentUrl: '/content/family-planning/fertility',
    displayUrl: '/family-planning/fertility',
    style: 2,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Pregnancy',
    contentUrl: '/content/pregnancy-newborn/pregnancy',
    displayUrl: '/pregnancy-newborn/pregnancy',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Complications',
    contentUrl: '/content/pregnancy-newborn/complications-of-pregnancy',
    displayUrl: '/pregnancy-newborn/complications',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Models of Maternity Care',
    contentUrl: '/content/pregnancy-newborn/models-maternity-care',
    displayUrl: '/pregnancy-newborn/models-maternity-care',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Birth',
    contentUrl: '/content/pregnancy-newborn/birth',
    displayUrl: '/pregnancy-newborn/birth',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Postnatal',
    contentUrl: '/content/pregnancy-newborn/postnatal',
    displayUrl: '/pregnancy-newborn/postnatal',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Newborn',
    contentUrl: '/content/pregnancy-newborn/newborn',
    displayUrl: '/pregnancy-newborn/newborn',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'sexual-health',
    name: 'Healthy Relationships',
    contentUrl: '/content/sexual-health/healthy-relationships',
    displayUrl: '/sexual-health/healthy-relationships',
    style: 4,
  },
  {
    type: 'contentPage',
    section: 'sexual-health',
    name: 'Having Sex',
    contentUrl: '/content/sexual-health/safe-sex',
    displayUrl: '/sexual-health/safe-sex',
    style: 4,
  },
  {
    type: 'contentPage',
    section: 'sexual-health',
    name: "STI's/HIV",
    contentUrl: '/content/sexual-health/sti',
    displayUrl: '/sexual-health/sti',
    style: 4,
  },
  {
    type: 'contentPage',
    section: 'sexual-health',
    name: "STI's/HIV",
    contentUrl: '/content/sexual-health/sexuality',
    displayUrl: '/sexual-health/sexuality',
    style: 4,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: "Women's Health",
    contentUrl: '/content/community-health/womens-health',
    displayUrl: '/community-health/womens-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: "Men's Health",
    contentUrl: '/content/community-health/mens-health',
    displayUrl: '/community-health/mens-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: 'Teen Health',
    contentUrl: '/content/community-health/teen-health',
    displayUrl: '/community-health/teen-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: "Children's Health",
    contentUrl: '/content/community-health/childrens-health',
    displayUrl: '/community-health/childrens-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: 'Mental Health',
    contentUrl: '/content/community-health/mental-health',
    displayUrl: '/community-health/mental-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: 'Violence',
    contentUrl: '/content/community-health/violence',
    displayUrl: '/community-health/violence',
    style: 5,
  },
];

export default routeItems;
