Express template with:
- Typescript
- ESLint / Prettier
- CORS
- BodyParser
- Jest / Supertest

###Commands:
First copy **env_example** to **.env_local**.

Then:
- `npm run prebuild` executes only ESLint;
- `npm run build` builds the project into **dist** folder;
- `npm run prestart` executes together `prebuild` and `build`;
- `npm run start` starts the server using **.env_local** as environment file;
- `npm run test` executes test.

