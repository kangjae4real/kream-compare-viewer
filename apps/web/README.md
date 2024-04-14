# Kream Compare Viewer - Web

## 요구사양
- Node.js
- Yarn
- JDK 11

## 실행에 앞서
### 왜 Node.js Based App에서 JDK 11이 필요한가요?
[OpenAPI Generator](https://openapi-generator.tech)를 활용하여 API Client를 생성하고 있습니다. <br />
[OpenAPI Generator](https://openapi-generator.tech) Script가 JDK를 활용하므로 Local Computer에 설치가 되어 있어야 합니다. <br />
자세한 실행코드는 `docs/api-docs.yaml`, `script/generate-api-docs.js`, `package.json` 을 확인해주세요.

## 직접 실행
```shell
$ yarn
$ yarn client # generate api client
$ yarn dev # dev mode
$ yarn build && yarn start # prod mode
```

## 주의사항 (API Client)
1. `docs/api-docs.yaml` 파일의 업데이트가 필요하다면, `yarn client:docs` 로 API Docs 생성 Script를 실행해주세요.
2. 그 이후, `yarn client` 로 새로이 API Client 를 생성해주세요.