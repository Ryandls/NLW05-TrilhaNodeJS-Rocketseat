import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

/* 
Tipos de parametros
Routes Params => Paramtros de rotas
http//localhost:3333/settings/1
Query Params => Filtros e Buscas
http//localhost:3333/settings/1?search=algumacoisa
Body Params => {
    
}

*/
const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

export { routes };
