import type { NextApiRequest, NextApiResponse } from 'next';
import { initMongoose } from '@/lib/mongoose';
import Product from '@/models/product';

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await initMongoose();
  res.json(await Product.find().exec());
}
