import * as express from 'express';
import Users from './users';
import Sessions from './sessions';

const router = express.Router();

router.route('/')
  .get((req: express.Request, res: express.Response) => {
    res.send('Congratulations! Your local API is working!');
  });

router.use('/users', Users);
router.use('/sessions', Sessions);

export default router;