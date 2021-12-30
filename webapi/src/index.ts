import * as express from 'express';

const app: any = express();
const router = express.Router();

router.get('/', async (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, async () => {
  console.log(`App listening locally`)
})

app.use(router)

exports.app = app