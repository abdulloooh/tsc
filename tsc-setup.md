- Init project with yarn or npm
- Install typescript and tslint as dev dependencies
- Generate tsconfig by running tsc executable in node_modules i.e ./node_modules/.bin/tsc --init
- Generate tsconfig by running tslint executable in node_modules i.e ./node_modules/.bin/tslint --init
- Optionally, change outDir to a built dir and target to latest ecmascript in tsconfig e.g

  > "module": "commonjs"

  > "outDir": "./build" /_ Redirect output structure to the directory. _/,

- Perhaps install typescript in global scope too so you can easily run `tsc` without having to `./node_modules/.bin/tsc`

- Set up scripts in package.json to compile tsc first and run build output

  ```
  "scripts": {
      "build": "tsc",
      "dev": "yarn run build && node build/index.js"
    }
  ```

  > Notes on benefits

- tsc is a static checking tool for your code
- js syntax are valid syntax and you can add more typings as you learn more tsc
- with tsc, you do not need esm to use import statement of es6, tsc handles this well
