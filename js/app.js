var React = require('react');
require('6to5ify/polyfill');

var Application = require('./components/application.jsx');
React.render(<Application/>, document.getElementById('application'));

require('./game').init();
