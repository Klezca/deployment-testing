// @flow

// Utilities
import { successResponse } from '../utils';

// Buisness Logic
import AllRoutes from './allRoutes';
import RoutesBySection from './routesBySection';

// Handler Functions (Serverless Functions)
const getAll = (event: any, context: any, callback: any) => {
  const response = successResponse(AllRoutes());

  callback(null, response);
};

const getBySection = (event: any, context: any, callback: any) => {
  const response = successResponse(RoutesBySection(event.pathParameters.section));

  callback(null, response);
};

export { getAll, getBySection };
