import { successResponse } from "./utils";

const hello = (event, context, callback) => {
  const response = successResponse({
    message: "This is a very important test!",
    input: event
  });

  callback(null, response);
};

export default hello;
