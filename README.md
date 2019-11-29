# Brizz Mobile App

This is the repository for the Front-End of the Brizz application built with [React Native](https://facebook.github.io/react-native/).

### Development

Project was bootstrapped by Expo SDK. To start developing, run `expo start`. You will need _Expo Client_ app on your phone
or an emulator installed. Under no circumstances, do not run `expo eject` unless you are absolutely sure what you are doing.

#### Code Styling and Quality

There is a `.eslintrc` file in the root of the project. You are encouraged to configure eslint and IDE on
your local machine to make use of these rules. Rules are based on Google guidelines, React guidelines, functional
programming best practices and some custom rules. Please run your code against eslint before committing.

#### Deployment

To deploy the project, you need `expo-cli` installed globally on your machine. To do so, run `yarn global add expo-cli` or
`npm install -g expo-cli`. After installing, you need to log in to Devbrizz account using `expo login`. After you log in,
run `expo start` to run the development server and press the _Publish_ button on the web interface.

### Files and directories breakdown

- **actions** - Context action creators
- **assets** - static files (mostly pictures) for splash screen, icons, etc.
- **screens** - common screens that are used in pages
- **babel.config.js, .eslintignore, .prettierignore** - do not edit
- **App.js** - entry point of application
- **routes.js** - configuration for routing in app
- **.eslintrc** - code style rules for eslint. _See Code Styling and Quality_.
- **readme.md** - this file
