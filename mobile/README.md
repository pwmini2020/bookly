# Bookly mobile

- [Project link](https://expo.io/@bookly/projects/bookly-mobile)

## 🚀 How to use
* Install dependencies:
  - `yarn install`
* Run project:
  - `yarn start` / `expo start` 
  - `expo publish` to publish it to expo server.
  
## Technology stack
* The app itself is written in React Native. 
* [react-native-toast-message](https://www.npmjs.com/package/react-native-toast-message) is used for toast notifications.
* [react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/) is used for storing security token, received from the backend, in a persistent way (so it doesn't reset in case app reloads).
* [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) is used for storing configuration values in the `.env` files.
