// @flow

import RouteItems from './routeItems';

function routesBySection(accessString: string) {
  return RouteItems.filter(routeItem => routeItem.section === accessString);
}

export default routesBySection;
