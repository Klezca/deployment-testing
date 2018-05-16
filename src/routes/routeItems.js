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
    contentUrl: '/content/home.json',
    displayUrl: '/',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'about',
    name: 'About Us',
    contentUrl: '/content/about.json',
    displayUrl: '/about',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Health System Overview',
    contentUrl: '/content/health-system-overview.json',
    displayUrl: '/healthcare-australia/health-system-overview',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Translating and Interpreting Services',
    contentUrl: '/content/translating-interpreting.json',
    displayUrl: '/healthcare-australia/translating-interpreting',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Australian Norms',
    contentUrl: '/content/australian-norms.json',
    displayUrl: '/healthcare-australia/australian-norms',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Medicare and Centrelink',
    contentUrl: '/content/medicare-centrelink.json',
    displayUrl: '/healthcare-australia/medicare-centrelink',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Your Rights and Responsibilities',
    contentUrl: '/content/rights-responsibilities.json',
    displayUrl: '/healthcare-australia/rights-responsibilities',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Disability Access',
    contentUrl: '/content/disability.json',
    displayUrl: '/healthcare-australia/disability',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Private vs. Public Health Services',
    contentUrl: '/content/private-vs-public.json',
    displayUrl: '/healthcare-australia/private-vs-public',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Community Based Services',
    contentUrl: '/content/community-services.json',
    displayUrl: '/healthcare-australia/community-services',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'healthcare-australia',
    name: 'Private Health Insurance',
    contentUrl: '/content/private-health.json',
    displayUrl: '/healthcare-australia/private-health',
    style: 1,
  },
  {
    type: 'contentPage',
    section: 'family-planning',
    name: 'Birth Spacing',
    contentUrl: '/content/birth-spacing.json',
    displayUrl: '/family-planning/birth-spacing',
    style: 2,
  },
  {
    type: 'contentPage',
    section: 'family-planning',
    name: 'Contraception',
    contentUrl: '/content/contraception.json',
    displayUrl: '/family-planning/contraception',
    style: 2,
  },
  {
    type: 'contentPage',
    section: 'family-planning',
    name: 'Unplanned Pregnancy',
    contentUrl: '/content/unplanned-pregnancy.json',
    displayUrl: '/family-planning/unplanned-pregnancy',
    style: 2,
  },
  {
    type: 'contentPage',
    section: 'family-planning',
    name: 'Fertility',
    contentUrl: '/content/fertility.json',
    displayUrl: '/family-planning/fertility',
    style: 2,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Pregnancy',
    contentUrl: '/content/pregnancy.json',
    displayUrl: '/pregnancy-newborn/pregnancy',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Complications',
    contentUrl: '/content/complications-of-pregnancy.json',
    displayUrl: '/pregnancy-newborn/complications',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Models of Maternity Care',
    contentUrl: '/content/models-maternity-care.json',
    displayUrl: '/pregnancy-newborn/models-maternity-care',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Birth',
    contentUrl: '/content/birth.json',
    displayUrl: '/pregnancy-newborn/birth',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Postnatal',
    contentUrl: '/content/postnatal.json',
    displayUrl: '/pregnancy-newborn/postnatal',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'pregnancy-newborn',
    name: 'Newborn',
    contentUrl: '/content/newborn.json',
    displayUrl: '/pregnancy-newborn/newborn',
    style: 3,
  },
  {
    type: 'contentPage',
    section: 'sexual-health',
    name: 'Healthy Relationships',
    contentUrl: '/content/healthy-relationships.json',
    displayUrl: '/sexual-health/healthy-relationships',
    style: 4,
  },
  {
    type: 'contentPage',
    section: 'sexual-health',
    name: 'Having Sex',
    contentUrl: '/content/safe-sex.json',
    displayUrl: '/sexual-health/safe-sex',
    style: 4,
  },
  {
    type: 'contentPage',
    section: 'sexual-health',
    name: "STI's/HIV",
    contentUrl: '/content/sti.json',
    displayUrl: '/sexual-health/sti',
    style: 4,
  },
  {
    type: 'contentPage',
    section: 'sexual-health',
    name: "STI's/HIV",
    contentUrl: '/content/sexuality.json',
    displayUrl: '/sexual-health/sexuality',
    style: 4,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: "Women's Health",
    contentUrl: '/content/womens-health.json',
    displayUrl: '/community-health/womens-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: "Men's Health",
    contentUrl: '/content/mens-health.json',
    displayUrl: '/community-health/mens-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: 'Teen Health',
    contentUrl: '/content/teen-health.json',
    displayUrl: '/community-health/teen-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: "Children's Health",
    contentUrl: '/content/childrens-health.json',
    displayUrl: '/community-health/childrens-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: 'Mental Health',
    contentUrl: '/content/mental-health.json',
    displayUrl: '/community-health/mental-health',
    style: 5,
  },
  {
    type: 'contentPage',
    section: 'community-health',
    name: 'Violence',
    contentUrl: '/content/violence.json',
    displayUrl: '/community-health/violence',
    style: 5,
  },
];

export default routeItems;
