db.createUser(
    {
        user: "app-consumer",
        pwd: "pass",
        roles: [
            {
                role: "readWrite",
                db: "workout-scheduler"
            }
        ]
    }
);
