// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBR7URmon6j5cHW7dTX3YGSa2Oci46z4E8",
    authDomain: "manage-issue.firebaseapp.com",
    databaseURL: "https://manage-issue.firebaseio.com",
    projectId: "manage-issue",
    storageBucket: "manage-issue.appspot.com",
    messagingSenderId: "373847883425"
  }
};
