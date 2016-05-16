
## dependencies

    npm i typings typescript http-server -g

### install

    npm run init

### run

    npm run dev


#### notes

This PoC requires the least amount of change to existing babel loader and webpack configuration.

The approach adds a pre-build step that transpiles typescript files to ES6 leaving ES6 modules and JSX syntax in-tact. Essentially all `/\.tsx?/` files become `/\.jsx?/` files and then babel takes over.

This allows changing files over incrementally to the typed syntax, and importing .ts into .js and visa-versa.

The only major change _should_ be pointing the web pack entry file to the typescript generated source (see `./webpack.config.js:2`)