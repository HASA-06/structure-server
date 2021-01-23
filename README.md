# STRUCTURE SERVER

구조를 잡기 위한 테스트 서버

## Introduction

개발자 여러분 알면 알수록 공부할 게 많네요<br/>
이 코드는 공개용입니다.<br/>
필요하다면 구조를 복제해서 사용하셔도 좋습니다.<br/><br/>
Node.js의 프레임워크 중 Koa.js를 사용했으며, Typescript를 적용해 Class기반으로 제작된 서버입니다.

## Versions
version 0.0.2<br/>
1. Mybatis-mapper 적용(다중 조인 쿼리 처리용)

version 0.0.1<br/>
1. Sequelize 로 ORM(Object Relation Mapping) 적용

version 0.0.0<br/>
1. Class 형식의 Node기반 REST API 서버 구조작업
2. Routing 구조 class 기반으로 작성

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

### 2. Environments

local<br/>
development<br/>
production<br/>

### 3. Modelings

Sequelize<br/>
mybatis-mapper<br/>

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
