# Bookly mobile
![Expo Bookly Publish](https://github.com/pwmini2020/bookly/workflows/Expo%20Bookly%20Publish/badge.svg)
![Expo Bookly Staging](https://github.com/pwmini2020/bookly/workflows/Expo%20Bookly%20Staging/badge.svg)

- Project `PRODUCTION` link: https://expo.io/@bookly/projects/bookly-mobile
- Project `STAGING` link: https://expo.io/@bookly/projects/bookly-mobile-staging


## 🚀 How to use
* Install dependencies:
  - `yarn install`
* Run project:
  - `yarn start` to run project locally in the development environment (shows all messages).
  - `yarn deploy:staging` to publish it to expo server in the staging environment (doesn't show warnings (`Yellowbox.`).
  - `yarn deploy` to publish it to expo server in the production environment (doesn't show anything - users don't need to know about internal errors).
  
## Technology stack
* The app itself is written in React Native. 
* [react-native-toast-message](https://www.npmjs.com/package/react-native-toast-message) is used for toast notifications.
* [react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/) is used for storing security token and login, received from the backend, in a persistent way (so it doesn't reset in case app reloads).
* [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) is used for storing configuration values in the `.env` files.
* [react-ridge-state](https://www.npmjs.com/package/react-ridge-state) is used for extremely simple and granular state management (as we don't have big project, but one variable should be global).
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) is used for icons.
* [react-native-bcrypt](https://www.npmjs.com/package/react-native-bcrypt) is used for `bcrypt` algorithm (used for client-side encrypting.
* [expo-av](https://docs.expo.io/versions/latest/sdk/av/) is used for playing music on the login screen.
* [@react-native-community/datetimepicker](https://github.com/react-native-datetimepicker/datetimepicker) is used for DateTime picker (works properly only on `android`).

## Features and notes
* App is styled only for Android.
* Logo is handmade by [Kiryl](https://github.com/kirylvolkau).
* Pressing logo on the Login page starts playing this music: https://soundcloud.com/boristosicmusic/cats-jazz-vinyl.
* In case app was previously used on the phone and user didn't log out - then both `login` and `securitu_token` could be restored from `AsyncStorage` API and user could be logged in automatically.
* App uses following logical folder division:
  - `src` - main app code.
    - `components` - folder with reusable react native components.
    - `helpers` - folder with `js` functions for working with internal application needs (as access to the storage or toast notifications).
    - `services` - folder with `js` functions. performing external API communications.
    - `screens` - folder with screens, uniting components together.
    - `state.js` file, storing global app state.
    - `types` - folder with globally needed "types" (i.e. types of resources, passed to the components - Cars, Flats, Parkings).
  - `assets` - folder with static resources (logo, music, etc.)
  - `.env` files - storing environmental variables for different stages (development, production, staging).
  - `app.json` and `app.prod.json` files - they store config for `expo publish` command (in the production env `app.prod` is copied to `app` - see `mobile-prod` action).
  - All other files and folders are default for `React Native` type of projects and don't need to be elaborated.

## Related actions
Following github actions are related to this project (as we have a shaped repository):
* [mobile-staging](https://github.com/pwmini2020/bookly/blob/mobile/.github/workflows/mobile-staging.yml) - publishing in staging environment (while it is not final).
* [mobile-prod](https://github.com/pwmini2020/bookly/blob/mobile/.github/workflows/mobile-prod.yml) - publishing in production environment (when app is final).

