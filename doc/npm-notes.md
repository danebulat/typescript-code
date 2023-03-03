# npm Notes

- https://www.npmjs.com/

### Initializing a package.json file 

```
npm init 
```

### Adding node packages 

```
npm install express
npm install --save-dev babel-cli babel-preset-stage-0 babel-preset-es2015
```

### Managing global directory

- https://docs.npmjs.com/getting-started/fixing-npm-permissions

Unix-based systems (Mac/Linux):
- /usr/local/lib/node_modules 
- /usr/local/lib/node

```
sudo npm install -g typescript 
sudo npm install -g create-react-app
```

### Updating a package

Listing outdated packages:

```
npm -g outdated
npm outdated
```

Updating a package:

```
sudo npm install -g eslint@5.2  // preferred method
sudo npm update -g eslint       // doesn't always work
```

### Removing a package

```
npm uninstall babel-preset-es2015
npm install --save-dev babel-preset-env
```

### Semantic versioning

Major Release . Minor Release . Patch Release 
Ie. 1.4.2

Caret (^): Installs most recent minor and patch version
Ie. "express": "^4.16.3"

Tilde (\~): Installs most recent patches only
Ie. "express": "~4.16.3"

### package-lock.json

Generated when `npm install` is run.

Guarenteese the same installation when `npm install` is called
for the project.

### Working with a npm cache

Sometimes npm's cache gets confused. Clearing the cache will make 
modules work. Since npm 5.0 the cache self-heals. 

Run a report that will verify the cache:
`npm cache verify`

Clear cache:
`npm cache clean --force`

### Run an npm audit

A command that'll check a project's dependencies and reports any 
issues with any packages. 

Make sure npm version is >6.2.0:

```
npm -v
sudo npm install npm@latest -g
```

Install and audit package:

```
npm install socketio
npm audit
```

To fix:
- Update packages one-by-one 
- Or run `npm audit fix`

### Scripting in package.json

- https://docs.npmjs.com/misc/scripts

```
npm install nodemon

"scripts": {
  "start": "nodemon ./index.js --exec babel-node -e js"
  "nodemonthis": "nodemon ./index.js --exec babel-node -e js"
}

npm start
npm run nodemonthis
```

### npx overview 

- https://www.npmjs.com/package/npx

Temporary install packages and run commands.

Set up a new Angular project:
`npx -p @angular/cli ng new myapp`

Run tests with mocha without installing the mocha package:
`npx mocha`

Temporarily install cowsay:
`npx cowsay hello`

Use in a script:
```
"scripts": {
  "createang": "npx -p @angular/cli ng new myapp"
}
```

### npm alternatives 

- yarn
  `npx yarn` (installs yarn executable)
- ni 
  `npx -p better-npm-install ni`

