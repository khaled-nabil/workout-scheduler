# Workout Scheduler

A small application displaying mock workouts data using React for Frontend, NestJS as Backend, and MongoDB as database.

## Prerequisites

[Docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/)


## Installation

Create `.env` files under `/backend` and `/frontend` folders. Use respective `.env.example` files as a template.

```bash
cp ./backend/.env.example ./backend/.env
cp ./frontend/.env.example ./frontend/.env
```


Use the docker-compose to start containers.

```bash
docker-compose up #[-d] to run in background
```

## Tests

To run tests locally, first install `npm` dependencies locally at `/backend` and/or `/frontend` folders. Then run tests.

```bash
npm install
npm test
```
At the moment, only some frontend tests are implemented, however test framework `jest` is configured.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
