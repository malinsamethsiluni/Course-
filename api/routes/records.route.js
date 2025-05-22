import express from "express";
import { create,  deletedata,getAll,  Icreate, shipsend, totalupdate, update} from "../controllers/record.controller.js";




const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.put( '/updatee/:EId', update);
route.delete( '/delete/:EEEId', deletedata);
route.post('/ship-email', shipsend);
route.post("/fcreate", Icreate);
route.put("/total/:PointId", totalupdate);








export default route;