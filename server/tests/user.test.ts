import {expect, it, describe, beforeEach, afterEach} from 'bun:test';
import { createUser, deleteUser } from './test-util';
import jwt from 'jsonwebtoken';
import app from '../src';

interface userResponseTypes {
    id: string,
    username: string,
    email: string,
    password: string,
}

const secretKey = process.env.SECRET_KEY;

describe('GET /api/auth/user/:id', () => {
    let userResponse:  userResponseTypes;

    beforeEach(async () => {
        userResponse = await createUser();
    });

    afterEach(async () => {
        await deleteUser();
    });
    
    it('should get current user', async  () => {
        const response = await app.request(`/api/auth/user/${userResponse.id}`, {
            method: "get",
            headers: {
                Authorization: `Bearer ${await jwt.sign(userResponse, secretKey!, { expiresIn: '1h' })}`
            }
        });

        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.id).toBeDefined();
        expect(body.username).toBeDefined();
    });
    
});

describe('PUT /api/auth/user/:id', () => {
    let userResponse:  userResponseTypes;

    beforeEach(async () => {
        userResponse = await createUser();
    });

    afterEach(async () => {
        await deleteUser();
    });

    it('should not update if request body is invalid ', async () => {
        const response = await app.request(`/api/auth/user/${userResponse.id}`, {
            method: 'put',
            body: JSON.stringify({
                title: "",
                description: "",
            }),
            headers: {
                Authorization: `Bearer ${await jwt.sign(userResponse, secretKey!, { expiresIn: '1h' })}`
            }
        });

        const body = await response.json();
        
        expect(response.status).toBe(400);
        expect(body.error).toBeDefined();
    });
    
});
