import { Router } from "express";
import citiesRouter from './cities.router.js';
// import passengersRouter from './passengers.routes.js';
// import flightsRouter from './flights.routes.js';
// import travelsRouter from './travels.routes.js';

const router = Router();

router.use(citiesRouter);
// router.use(passengersRouter);
// router.use(flightsRouter);
// router.use(travelsRouter);

export default router;