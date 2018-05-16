// @flow

// Utilities
import { successResponse } from '../utils';

// Buisness Logic
import GetContent from './getContent';

// Handler Functions (Serverless Functions)
const getContent = (event: any, context: any, callback: any) => {
  const contentObj = {
    sectionName: event.pathParameters.sectionName,
    contentName: event.pathParameters.contentName,
  };

  const response = successResponse(GetContent(contentObj));

  callback(null, response);
};

// eslint-disable-next-line
export { getContent }; // ignored lint error due to only needed to export one fucntion.
