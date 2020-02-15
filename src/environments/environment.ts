// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const PERSON_API_BASE = 'http://localhost:8080/person';

export const environment = {
  production: false,
  API: {
    PERSON: {
      CREATE: `${PERSON_API_BASE}/create`,
      UPDATE: `${PERSON_API_BASE}/update`,
      GET_BY_ID: `${PERSON_API_BASE}/`,
      GET_ALL: `${PERSON_API_BASE}/getAll`,
      DELETE: `${PERSON_API_BASE}/remove/`
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
