# Kream Compare Viewer

## 이 서비스는 무엇인가요?
Kream의 존재하는 제품들에 정보를 가져와 간단히 비교해볼 수 있는 서비스입니다.

## 요구사양
- Node.js
- Yarn
- Docker

## 실행
모든 애플리케이션은 Dockerized되어 있습니다. <br />
Docker Compose를 활용하여 실행해주세요. 
```shell
# in root...
$ docker compose -f docker-compose.dev.yaml up # dev mode
$ docker compose -f docker-compose.prod.yaml up # prod mode
```

## 사용한 기술
### Front-end(프론트엔드)
- TypeScript
- React
- Next.js
- Tailwind.css
- shadcn/ui
### Back-end(백엔드)
- TypeScript
- Nest.js
- TypeORM
- MySQL