

# Install dependencies
npm install

# It's recommended that you update dependencies
npm update

# Add metadata.json + index.js + webpack (Node 16.20.0)
npx webpack --config webpack.config.js --mode production

# Build client
npm run package:discover && npm run serve

# Optionally install extra packages:
# For a list of packages, see https://manual.os-js.org/resource/official/
npm install @osjs/example-application

# Discover installed packages
npm run package:discover

# Build client
npm run build

# Start serving
npm run serve
```
