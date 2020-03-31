import { Router } from "express";

import PointController from "./App/controllers/PointController";

const routes = new Router();

routes.post("/points", PointController.store);
routes.get("/points", PointController.index);

export default routes;
