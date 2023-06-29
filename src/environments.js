const environments = {
  development: {
    API_URL: "https://parseapi.back4app.com",
    PARSE_APP_ID: "8h3fhGl0I7tBhYUSz8YW0dC9MBwVQ20lGWXXkDzh",
    PARSE_JS_KEY: "NcN8edYORCfYNTejLN8kkDNlkYpBuz2u4qWYKdYW",
  },
  production: {
    API_URL: "https://parseapi.back4app.com",
    PARSE_APP_ID: "8h3fhGl0I7tBhYUSz8YW0dC9MBwVQ20lGWXXkDzh",
    PARSE_JS_KEY: "NcN8edYORCfYNTejLN8kkDNlkYpBuz2u4qWYKdYW",
  },
};

// Replace 'development' with 'production' when deploying your application
const environment = environments.development;

export const API_URL = environment.API_URL;
export const PARSE_APP_ID = environment.PARSE_APP_ID;
export const PARSE_JS_KEY = environment.PARSE_JS_KEY;
