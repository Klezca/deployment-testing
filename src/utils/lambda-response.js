// @flow

function lambdaResponse(json: any, statusCode: number, allowCORS: boolean = false) {
  const response = allowCORS
    ? {
        statusCode,
        body: JSON.stringify(json),
        headers: { 'Access-Control-Allow-Origin': '*' },
      }
    : {
        statusCode,
        body: JSON.stringify(json),
      };

  return response;
}

export function errorResponse(json: any, cors: boolean = false) {
  return lambdaResponse(json, 500, cors);
}

export function successResponse(json: any, cors: boolean = false) {
  return lambdaResponse(json, 200, cors);
}
