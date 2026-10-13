import { Router } from 'express';

export const routes = Router();

routes.get('/', (req, res) => {
    res.send('index');
})
// se irán agregando las rutas por entidad
// routes.use('/activos', activoRoutes);
// routes.use('/usuarios', usuarioRoutes);
// routes.use('/asistencias', asistenciaRoutes);