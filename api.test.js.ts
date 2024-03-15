import request from 'supertest';
import {app} from "./routes";

describe('Test de l\'API', () => {
    it('GET / renvoie "Hello World!"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});
