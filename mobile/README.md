# Bookly mobile

- Project link: https://expo.io/@bookly/projects/bookly-mobile

## 🚀 How to use
* Install dependencies:
  - `yarn install`
* Run project:
  - `yarn start` to run project locally in the development environment.
  - `yarn deploy:staging` to publish it to expo server in the staging environment.
  - `yarn deploy` to publish it to expo server in the production environment.
  
## Technology stack
* The app itself is written in React Native. 
* [react-native-toast-message](https://www.npmjs.com/package/react-native-toast-message) is used for toast notifications.
* [react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/) is used for storing security token, received from the backend, in a persistent way (so it doesn't reset in case app reloads).
* [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) is used for storing configuration values in the `.env` files.
* [react-ridge-state](https://www.npmjs.com/package/react-ridge-state) is used for extremely simple and granular state management (as we don't have big project, but one variable should be global).
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) is used for icons.

## Related actions
Following github actions are related to this project (as we have a shaped repository):
* [mobile-staging](https://github.com/pwmini2020/bookly/blob/mobile/.github/workflows/mobile-staging.yml) - publishing in staging environment (while it is not final).
* [mobile-prod](https://github.com/pwmini2020/bookly/blob/mobile/.github/workflows/mobile-prod.yml) - publishing in production environment (when app is final).

