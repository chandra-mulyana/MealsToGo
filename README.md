# Meals TO GO

Ini jalan di Nodejs 14.17 (karena ESLint jalannya di versi ini) Win7 64bit

## Hal yang harus dijalankan

### Install Expo

```bash
npm install -g expo-cli
```

### Create App

```bash
expo init MealsToGo
```

### Install ESLint

```bash
yarn add --dev eslint prettier @react-native-community/eslint-config
```

### Buat file .eslintrc

Isinya adalah sbb :

```bash
{
	"extends": "@react-native-community",
	"rules": {
		"quotes": [2, "double", { "avoidEscape": true }]
	}
}
```

### Install @babel/eslint-parser

```bash
npm install eslint @babel/core @babel/eslint-parser --save-dev
```

Kemudian update file .eslintrc

```bash
{
	"extends": "@react-native-community",
	"rules": {
		"quotes": [2, "double", { "avoidEscape": true }],
		"prettier/prettier": ["error",{"endOfLine": "auto"}]
	},
	"parser": "@babel/eslint-parser"

}
```

### Install react-native-paper

Ini adalah component-component Form yang akan digunakan dalam React Native

```bash
yarn add react-native-paper
```

### Installing and Using Styled Component

```bash
yarn add styled-components
```

