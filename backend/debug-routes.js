const path = require('path');
const fs = require('fs');

const routesDir = path.join(__dirname, 'src/routes');

fs.readdirSync(routesDir).forEach(file => {
  if (!file.endsWith('.js')) return;
  try {
    const mod = require(path.join(routesDir, file));
    const isFunction = typeof mod === 'function';
    console.log(file + ' => ' + typeof mod + ' ' + (isFunction ? 'OK' : 'PROBLEM HERE'));
  } catch (err) {
    console.log(file + ' => ERROR loading: ' + err.message);
  }
});