# mister meat admin back

고기아찌 관리자 서버

## Introduction

(주)한박스마일의 소고기 브랜드 '고기아찌'의 상품관리, BI, CS를 위한 관리자 웹 서비스의 서버입니다.

## Versions

version 0.0.1<br/>
1. 발주관리
2. 고객에게 SMS 전송

version0.0.0<br/>
1. Project structure setting

## Development settings
### 1. Language
#### Development
Javascript (ESNext)<br/>
Typescript<br/>

#### Production
Javascript (CommonJS)

### 2. Infras

Node.js (LTS)<br/>
Koa.js<br/>

### 3. Modelings

Sequelize<br/>
mybatis-mapper<br/>

### 4. APIs

Coupang API<br/>
SENS API<br/>

### 5. Environments

local<br/>
development<br/>
production<br/>

## Managing branchs
### Local

branch : local

### Development

branch : development

### Production

branch : production

## Commands
### Project compile
```
npm run compile-ts

yarn run compile-ts
```

### Clear build output directory
```
npm run clear

yarn run clear
```

### Project setup
```
npm install

yarn add
```

### Run on local environment

```
npm run local

yan run local
```

### Run on development environment

```
npm run development

yarn run development
```

### Run on production environment

```
npm run production

yarn run production
```
