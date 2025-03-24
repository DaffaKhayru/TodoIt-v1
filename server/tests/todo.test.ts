import {afterEach, beforeEach, describe,expect,it} from 'bun:test'
import app from '../src';
import { createTodo, createUser, deleteTodo, deleteUser } from './test-util';
import jwt from 'jsonwebtoken';

interface userReponseType {
    id: string,
    username: string,
    email: string,
    password: string,
}

const secretKey = process.env.SECRET_KEY;

describe('GET /api/auth/todo/:user_id', () => {
    let userResponse: userReponseType;
    
    beforeEach(async () => {
        userResponse = await createUser();
    })

    afterEach(async () => {
        await deleteTodo(userResponse.id!);
        await deleteUser();
    })

    it('should find all todos ', async () => {
        await createTodo(userResponse.id!);

        const response = await app.request(`/api/auth/todo/${userResponse.id!}`, {
            method: "get",
            headers: {
                Authorization: `Bearer ${await jwt.sign(userResponse, secretKey!, { expiresIn: '1h' })}`
            }
        });

        const body = await response.json();

        expect(response.status).toBe(200);
    });
    
});

describe('GET /api/auth/todo/:user_id/:id', () => {
    let userResponse: userReponseType;

    beforeEach(async () => {
        userResponse = await createUser();
    });

    afterEach(async () => {
        await deleteTodo(userResponse.id!);
        await deleteUser();
    })

    it('should find todo index', async () => {
        const createTodoResp = await createTodo(userResponse.id!);

        const response = await app.request(`/api/auth/todo/${userResponse.id!}/${createTodoResp.id}`, {
            method: "get",
            headers: {
                Authorization: `Bearer ${await jwt.sign(userResponse, secretKey!, { expiresIn: '1h' })}`
            }
        });

        const body = await response.json();

        expect(response.status).toBe(200);
    });
    
});

describe('POST /api/auth/todo/:user_id', () => {
    let userResponse: userReponseType;
    
    beforeEach(async () => {
        userResponse = await createUser();
    })

    afterEach(async () => {
        await deleteTodo(userResponse.id!);
        await deleteUser();
    })

    it('should not post todo if request body is invalid', async () => {
        const response = await app.request(`/api/auth/todo/${userResponse.id}`, {
            method: "post",
            body: JSON.stringify({
                title: "",
                description: ""
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

