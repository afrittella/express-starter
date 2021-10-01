Express template with:
- Typescript
- ESLint / Prettier
- CORS
- Jest / Supertest

### Commands:
First copy **env_example** to **.env_local**.

Then:
- `npm run prebuild` executes only ESLint;
- `npm run build` builds the project into **dist** folder;
- `npm run watch` runs tsc in "watch" mode;
- `npm run start:dev` starts the server using **.env_local** as environment file;
- `npm run start:prod` builds the project and starts the server using **.env_prod** as environment file;
- `npm run test` executes test using **.env_test**.
- `npm run test:coverage` executes test with coverage report using **.env_test**.

