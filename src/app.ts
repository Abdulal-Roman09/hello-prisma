
import express, { type Request, type Response } from 'express';
import { prisma } from './lib/prisma.js';
const app = express();

// middleware
app.use(express.json());

// routes
app.get('/', async (req: Request, res: Response) => {
    // Fetch all users with their posts
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
        },
    });

    console.log(allUsers);
    res.json(allUsers);
});

export default app;

