# Kream Compare Viewer

## Requirements
- Node.js
- Yarn
- Docker

## Run
All application is dockerized. <br />
Use Docker compose
```shell
# in root...
$ docker compose -f docker-compose.dev.yaml up # dev mode
$ docker compose -f docker-compose.prod.yaml up # prod mode
```

## Spec
### Front-end
- TypeScript
- React
- Next.js
- Tailwind.css
- shadcn/ui
### Back-end
- TypeScript
- Nest.js
- TypeORM
- MySQL