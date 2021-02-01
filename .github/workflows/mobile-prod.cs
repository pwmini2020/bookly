// we will use it once everyone stops commiting directly to main
name: Expo Bookly Publish
on:
  push:
    branches:
      - main
  pull_request:
    branches: 
      - main
jobs:
  publish:
    defaults:
      run:
       working-directory: ./mobile  
    name: Install and publish
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12.20.x
      - uses: expo/expo-github-action@v5
        with:
          expo-version: 4.x
          expo-username: errlobo
          expo-password: Nbx2qBrpAGw3h4Z
      - run: yarn install
      - run: yarn deploy
