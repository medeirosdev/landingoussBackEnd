Esse tutorial irá se basear na seguinte configuração desse arquivo:

"compilerOptions": {
    "target": "es6",   
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
}
Ajuste o seu arquivo para essa configuração.

Para facilitar a rotina de desenvolvimento, em seguida adicione os scripts start, build e dev ao arquivo de configuração do projeto Node, package.json, dentro da propridade scripts:

"scripts": {
    "dev": "ts-node ./src/index.ts",
    "build": "tsc",
    "start": "node ./dist/index.js"
},
Aproveite para definir o nome do script principal do projeto, trocando index.js por ./src/index.ts nesse mesmo arquivo de configuração:

"main": "./src/index.ts"
Para finalizar a configuração do Typescript, devem ser instalados o módulos dos types para o Node, e o módulo ts-node, por meio do seguinte comando no terminal:

yarn add @types/node typescript
yarn add -D ts-node