import express from 'express';
import cors from 'cors';
import adminRouter from './infra/http/routes/admin-router';
import sessionsRouter from './infra/http/routes/sessions-router';
import docsApi from './infra/http/routes/documentation-router';
import jwtAuthenticationMiddleware from './infra/middlewares/jwt-authentication.middleware';
import errorHandler from './infra/middlewares/error-handler.middleware';
import releaseRouter from './infra/http/routes/release-router';


export class App {
    server = express();
    constructor() {
        this.middlewares();
        this.routes();
        this.errorHandler();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.server.use(docsApi);
        this.server.get('/status', (req, res) => {
            res.send('ok');
        });
        this.server.use(sessionsRouter);
        this.server.use(jwtAuthenticationMiddleware);
        this.server.use(releaseRouter);
        this.server.use(adminRouter);
    }

    errorHandler(){
        this.server.use(errorHandler);
    }
}