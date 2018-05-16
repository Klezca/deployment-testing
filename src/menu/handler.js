// @flow

// Utilities
import { successResponse } from '../utils';

// Buisness Logic
import AllMenuItems from './allMenuItems';

// Handler Functions (Serverless Functions)
const getAll = (event: any, context: any, callback: any) => {
  const response = successResponse(AllMenuItems());

  callback(null, response);
};

// eslint-disable-next-line
export { getAll }; // ignored lint error due to only needed to export one fucntion.
