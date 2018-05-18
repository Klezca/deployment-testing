#!/bin/bash

serverless config credentials --provider aws --key $access_key_id --secret $secret_access_key


if [[ $TRAVIS_PULL_REQUEST == "false" ]]; then
  if [[ $TRAVIS_BRANCH == 'master' ]]; then
    npm run deploy
  elif [[ $TRAVIS_BRANCH == 'develop' ]]; then
    npm run deploy:stage
  fi
fi
