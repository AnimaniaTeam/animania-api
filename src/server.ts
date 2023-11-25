import { App } from './app';

const app = new App();

app.server.listen(3001, () => {
    console.log('server running at port 3001');
});