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