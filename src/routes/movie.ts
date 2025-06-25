import { Router } from 'express';
import { listMovies } from '../controllers/movie';

const router = Router();
/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get a paginated list of movies
 *     tags:
 *       - Movies
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *       - in: query
 *         name: winner
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of movies
 *         content:
 *           application/json:
 *             example:
 *               {
 *                 "content": [
 *                   {
 *                     "id": 999,
 *                     "year": 1900,
 *                     "title": "Movie Title",
 *                     "studios": ["Studio Name"],
 *                     "producers": ["Producer Name"],
 *                     "winner": true
 *                   }
 *                 ],
 *                 "pageable": {
 *                   "sort": { "sorted": false, "unsorted": true },
 *                   "pageSize": 0,
 *                   "pageNumber": 0,
 *                   "offset": 0,
 *                   "paged": true,
 *                   "unpaged": false
 *                 },
 *                 "totalElements": 999,
 *                 "last": false,
 *                 "totalPages": 99,
 *                 "first": true,
 *                 "sort": { "sorted": false, "unsorted": true },
 *                 "number": 0,
 *                 "numberOfElements": 99,
 *                 "size": 99
 *               }
 */
router.get('/movies', listMovies);

export default router;
