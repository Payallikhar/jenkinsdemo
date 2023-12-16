const app = require("./app");

// strating application on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
