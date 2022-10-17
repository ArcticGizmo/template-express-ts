import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ value: 'hello' });
});

export { router as indexRouter };
