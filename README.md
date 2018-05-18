## Prerequisites
Please make sure you have Nodejs installed. You can get it [here](https://nodejs.org/en/).


This project also requires yarn. You can get Yarn from [here](https://yarnpkg.com/en/).

## Install

```bash

# If you don't already have the serverless cli installed, do that
yarn global add serverless

# Clone this repo
git clone https://github.com/ShifraIO/shifra-api.git

# cd into project and set it up
cd shifra-api

# Install dependencies
yarn install
```

## Development

Creating and deploying a new function takes two steps, which you can see in action with this repo's default Hello World function (if you're already familiar with Serverless, you're probably familiar with these steps).

#### 1. Add your function to `serverless.yml`

In the functions section of [`./serverless.yml`](./serverless.yml), you have to add your new function like so:

```yaml
functions:
  hello:
    handler: src/hello.default
    events:
      - http:
          path: hello
          method: get
```

You can see here that we're setting up a function named `hello` with a handler at `src/hello.js` (the `.default` piece is just indicating that the function to run will be the default export from that file). The `http` event says that this function will run when an http event is triggered (on AWS, this happens via API Gateway).

#### 2. Create your function

The Hello World function can be found at [`./src/hello.js`](./src/hello.js). There you can see a basic function that's intended to work in conjunction with API Gateway (i.e., it is web-accessible). Like most Serverless functions, the `hello` function accepts an event, context, and callback. When your function is completed, you execute the callback with your response. (This is all basic Serverless; if you've never used it, be sure to read through [their docs](https://serverless.com/framework/docs/).

------

You can develop and test your lambda functions locally in a few different ways.

### Live-reloading functions

To run the hello function with the event data defined in [`fixtures/event.json`](fixtures/event.json) (with live reloading), run:

```bash
yarn watch:hello
```

### API Gateway-like local dev server

To spin up a local dev server that will more closely match the API Gateway endpoint/experience:

```bash
yarn serve
```

### Test your functions with Jest

Jest is installed as the testrunner. To create a test, co-locate your test with the file it's testing
as `<filename>.test.js` and then run/watch tests with:

```bash
yarn test
```

### Adding new functions/files to Webpack

When you add a new function to your serverless config, you don't need to also add it as a new entry
for Webpack. The `serverless-webpack` plugin allows us to follow a simple convention in our `serverless.yml`
file which is uses to automatically resolve your function handlers to the appropriate file:

```yaml
functions:
  hello:
    handler: src/hello.default
```
As you can see, the path to the file with the function has to explicitly say where the handler
file is. (If your function weren't the default export of that file, you'd do something like:
`src/hello.namedExport` instead.)

### Flow & ESlint
To ensure better quality code Flow types and eslint has been added to the project.
To learn more about flow and how it works visit [this link](https://flow.org/).

While developing yo can use the commands:
```bash
yarn flow check
```
and
```bash
yarn lint
```
to check the project has no errors.

## Deploy

Assuming you've already set up your default AWS credentials (or have set a different AWS profile via [the profile field](serverless.yml#L25)):

```bash
yarn deploy
```

`yarn deploy` will deploy to "dev" environment. You can deploy to `stage` or `production`
with:

```bash
yarn deploy:stage

# -- or --

yarn deploy:production
```

After you've deployed, the output of the deploy script will give you the API endpoint
for your deployed function(s), so you should be able to test the deployed API via that URL.

If you wish to remove the deployed serverless code, you can use:
```bash
yarn dispose
```
This uses the same environment flags as deploy. If you wish to remove the development deployment, you can use `yarn dispose`, if you wish to remove the production instance use `yarn dispose:production`, etc.

To ensure the quality of code, I have added a precommit check to the deployment commands. Please refer to the precommit section for more details.

## Precommit
To help ensure no broken code is commited to the repo, a precommit hook has been added to the project.

When running a git commit command the precommit hook will run all lint, flow and test commands to ensure everything is 100%. If anything returns an error, it will be logged out to the terminal. You will need to resolve this errors before you can commit the code.

The procommit hook is the equivalent of:
```bash
yarn lint && yarn flow check && yarn test
```
