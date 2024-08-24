import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import categoryRouter from './routes/category';
import businessRouter from './routes/business';
import userRouter from './routes/user';

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION as string)
  .then(() => console.log('MongoDb Connected!'))
  .catch((err) => {
    console.log('err: ', err);
  });

app.use(categoryRouter);
app.use(businessRouter);
app.use(userRouter);

app.get('/', (req, res) => {
  return res.status(200).json({ status: 'Hello world' });
});

app.use((req, res) => {
  return res.status(404).json({ status: "Endpoint doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`app started - port ${process.env.PORT}`);
});
