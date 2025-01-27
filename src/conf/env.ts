let env = process.env.NODE_ENV;
let serverURL;
let directServerUrl;

if (env === 'development') {
  // serverURL = 'http://127.0.0.1:9090';
  serverURL = '/api'
  directServerUrl = 'http://127.0.0.1:9090'
} else if (env === 'production') {
  serverURL = window.location.origin;
  // serverURL = 'http://localhost:8082';
  directServerUrl = window.location.origin;
}

const Env = { serverURL: serverURL, directServerUrl: directServerUrl };

export default Env;
