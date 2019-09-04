import express from 'express';
import routes from "./src/routes/crmRoutes";

const app = express();
const port = 3000;
routes(app);
app.get('/', (req, res) => res.send(`in the port ${port} node and express server is running now!`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
