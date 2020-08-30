# TypeScript&React&ExpressのWEBアプリ開発
## プロジェクトの作成
```ps1
npm init -y
```
## ライブラリのインストール
```ps1
npm install typescript
npm install ts-loader
npm install ts-node
npm install react @types/react
npm install react-dom @types/react-dom
npm install express @types/express
npm install webpack
npm install webpack-cli
npm install path
npm install app-root-path @types/app-root-path
```
## tsconfig.jsonの作成
#### プロジェクトフォルダ直下に`src`フォルダを作成する。
```ps1
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "jsx": "react",
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "sourceMap": true,
    "esModuleInterop": true
  },
  "include": [
    "./src/**/*"
  ]
}
```
## Webpack設定ファイルの作成
#### ※参考：[Webpackのチュートリアル](https://github.com/sh32t/webpack-tutorial), [Typescript + Express + React + Webpack でSSR(サーバサイドレンダリング)を検証](https://qiita.com/adibozu/items/e63144770f1fd48d6cd2)
#### プロジェクトフォルダ直下に`public/js`フォルダを作成する。
### `webpack.config.js`ファイルを作成する。
```js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.tsx',
    output: {
        filename: 'app-bundle.js',
        path: path.join(__dirname, 'public/js')
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: 'ts-loader'
            }
      ]
    },
    devtool: 'source-map'
};
```
## Expressのサーバー処理
#### ※参考：[Expressチュートリアル](https://github.com/sh32t/express-tutorial)
#### `src`フォルダ直下に`server.ts`を作成する。
```ts
import express from 'express';
import path from 'path';
import root from 'app-root-path';

const app:express.Express = express();

// publicフォルダ配下を公開する。
app.use(express.static(path.join(root.path, '/public')));

app.get('/hello', function (req:express.Request, res:express.Response) {
    res.sendFile(path.join(root.path, 'index.html'));
});

app.listen(8080, function () {  
    console.log('Server started on port 8080');
});
```
## Reactのクライアント処理
#### ※参考 [React & TypeScriptのプロジェクト作成](https://typescript-jp.gitbook.io/deep-dive/browser), [React.jsのチュートリアル](https://github.com/sh32t/react-tutorial)
#### `src`フォルダ直下に`app.tsx`を作成する。
```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Hello: React.FunctionComponent = function() {
  return (
    <div>Hello World</div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
```
#### `public`フォルダ直下に`index.html`を作成する。
```tsx
<body>
    <div id="root"></div>
    <script src="./js/app-bundle.js"></script>    
</body>
```
## package.jsonの編集
```json
"scripts": {
  "build": "webpack --config webpack.config.js",
  "start": "ts-node src/server.ts"
}
```
## ビルド
```ps1
npm run build
```
## 起動
```ps1
npm start
```
#### [http://localhost:8080/hello](http://localhost:8080/hello)にアクセスして確認する。

### 参考
#### [React & TypeScriptのプロジェクト作成](https://typescript-jp.gitbook.io/deep-dive/browser)
#### [最新版TypeScript+webpack 4の環境構築まとめ(React, Vue.js, Three.jsのサンプル付き)](https://ics.media/entry/16329/)
#### [tsconfig.jsonの全オプションを理解する（随時追加中）](https://qiita.com/ryokkkke/items/390647a7c26933940470)
#### [Typescript + Express + React + Webpack でSSR(サーバサイドレンダリング)を検証](https://qiita.com/adibozu/items/e63144770f1fd48d6cd2)
#### [Node.jsとExpressでローカルサーバーを構築する(2) ―Expressでルーティング―](https://qiita.com/koedamon/items/fb85c3eb32e7838f9d7c)
