const server = require("./api/server");
require("dotenv").config();

const port = parseInt(process.env.PORT);
const environment = process.env.NODE_ENV;

server.listen(port || 5000, () => {
  console.log(
    `Server running on port `,
    port,
    `-={ ${environment} Environment }=- `
  );
});
