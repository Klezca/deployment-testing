#!/bin/bash

if [[ $TRAVIS_TEST_RESULT == 1 ]]; then
  echo 'Skipping deploy due to broken build';
  exit 1;
fi

echo 'Starting deploy'

if [[ $TRAVIS_PULL_REQUEST == "false" ]]; then
  if [[ $TRAVIS_BRANCH == 'master' ]]; then
    npm run deploy
  elif [[ $TRAVIS_BRANCH == 'develop' ]]; then
    npm run deploy:stage
  fi
fi
