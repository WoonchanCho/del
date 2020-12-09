# JsXnat

An XNAT API Wrapper for JavaScript.
`JsXnat` provides a higher-level wrapper around XNAT's rest API.

## Install


## Usage

### Node.js with CommonJS modules
```javascript
var JsXnat = require('jsxnat');

var jsXnat = new JsXnat('http://localhost:8080', 'username', 'password');
const projectApi = jsXnat.getProjectApi();
projectApi.getProjects().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
```

### Browser or Electron with ES6 modules
```javascript
import JsXnat from 'jsxnat';

var jsXnat = new JsXnat('http://localhost:8080', 'username', 'password');
const projectApi = jsXnat.getProjectApi();
projectApi.getProjects().then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
```

### Browser or Electron without ES6 modules
```html
<script src="...jsxnat.umd.js"></script>
<script>
  var jsXnat = new JsXnat('http://localhost:8080', 'username', 'password');
  const projectApi = jsXnat.getProjectApi();
  projectApi.getProjects().then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
</script>
```

### Other tools

To be added

## For more information

To be added

## License

MIT