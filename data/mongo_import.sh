#!/bin/bash
# Import from fixtures

mongoimport --db workout-scheduler --collection workout --file /fixtures/workouts.json --jsonArray