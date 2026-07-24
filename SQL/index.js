const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: '1234'
});


try {
    connection.query("SHOW TABLES", (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        console.log(result.length);

    });
}
catch (err) {
    console.log(err);
}
connection.end();

function createRandomUser() {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}

console.log(createRandomUser());