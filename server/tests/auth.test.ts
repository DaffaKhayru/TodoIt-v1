import {describe, it ,expect, afterEach} from "bun:test";
import app from "../src";
import { createUser, deleteUser } from "./test-util";

describe('POST /api/signup', () => {
    afterEach(async () => {
        await deleteUser();
    });

    it('should not signup if user request is invalid', async () => {
        const response = await app.request('/api/signup', {
            method: 'post',
            body: JSON.stringify({
                username: "",
                email: "",
                password: ""
            }),
        });

        const body = await response.json();

        expect(response.status).toBe(400);
        expect(body.error).toBeDefined();
    });
    
    it('should not signup if user already exist', async () => {
        await createUser();

        const response = await app.request('/api/signup', {
            method: 'post',
            body: JSON.stringify({
                username: "",
                email: "",
                password: ""
            }),
        });

        const body = await response.json();

        expect(response.status).toBe(400);
        expect(body.error).toBeDefined();
    });
    
    it('should signup success', async () => {
        const response = await app.request('/api/signup', {
            method: 'post',
            body: JSON.stringify({
                username: "daffakhayru",
                email: "daffakhayru@gmail.com",
                password: await Bun.password.hash("daffa123", {
                    algorithm: 'bcrypt',
                    cost: 10
                })
            }),
        });

        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.msg).toBeDefined();
    });
    
});

describe('POST /api/login', () => {
    afterEach(async () => {
        await deleteUser();
    });

    it('should not login if user request is invalid', async () => {
        const response = await app.request('/api/login', {
            method: 'post',
            body: JSON.stringify({
                email: "",
                password: ""
            }),
        });

        const body = await response.json();

        expect(response.status).toBe(400);
        expect(body.error).toBeDefined();
    });

    it('should not login if user doesnt exist', async () => {
        const response = await app.request('/api/login', {
            method: 'post',
            body: JSON.stringify({
                email: "diffakhayru@gmail.com",
                password: "diffa123"
            }),
        });

        const body = await response.json();

        expect(response.status).toBe(400);
        expect(body.error).toBeDefined();
    });
    
    it('should login success', async () => {
        await createUser();

        const response = await app.request('/api/login', {
            method: 'post',
            body: JSON.stringify({
                email: "daffakhayru@gmail.com",
                password: "daffa123"
            }),
        });

        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.msg).toBeDefined();
    });
    
});

