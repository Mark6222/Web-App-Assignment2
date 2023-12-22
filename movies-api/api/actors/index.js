import actorsModel from './actorsModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getActors} from '../tmdb-api';
import {getPerson} from '../tmdb-api';
import {getPersonCredits} from '../tmdb-api';


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        actorsModel.estimatedDocumentCount(),
        actorsModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const actor = await actorsModel.findByPersonDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/actors', asyncHandler(async (req, res) => {
    const actors = await getActors();
    res.status(200).json(actors);
}));

router.get('/tmdb/person/:name', asyncHandler(async (req, res) => {
    const name = req.params.name;
    const actors = await getPerson(name);
    res.status(200).json(actors);
}));

router.get('/tmdb/person/credits/:name', asyncHandler(async (req, res) => {
    const name = req.params.name;
    const actors = await getPersonCredits(name);
    res.status(200).json(actors);
}));

export default router;