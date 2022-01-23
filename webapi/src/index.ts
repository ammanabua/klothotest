import * as express from 'express';

const app: any = express();
const router = express.Router();

let quoteStore = new Map<string, string>();

router.post('/v1/quote', async (req, res) => {
  await quoteStore.set(req.body.quote, req.body.quote)
  res.send(`Added ${req.body.quote}`)
});

router.get('/v1/quote-list', async (req, res) => {
  let quoteList = Array.from(await quoteStore.entries()).map(x => x[1])
  res.send(quoteList);
});

router.get('/', async (req, res) => {
  res.send("Hello World!");
});

app.use(router)

app.listen(3000, async () => {
  console.log(`App listening locally`)
})

exports.app = app