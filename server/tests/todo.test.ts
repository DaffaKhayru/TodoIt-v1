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

interface todoReponseType {
    id: string,
    title: string,
    description: string,
    userId: string,
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

    it('should post todo if request body is valid', async () => {
        const response = await app.request(`/api/auth/todo/${userResponse.id}`, {
            method: "post",
            body: JSON.stringify({
                title: "First title",
                description: "This is first title",
                userId: userResponse.id
            }),
            headers: {
                Authorization: `Bearer ${await jwt.sign(userResponse, secretKey!, { expiresIn: '1h' })}`
            } 
        });

        const body = await response.json();
        
        expect(response.status).toBe(200);
        expect(body.msg).toBeDefined();
    });
});

describe('PUT /api/auth/todo/:user_id/:id', () => {
    let userResponse: userReponseType;
    let todoResponse: todoReponseType;
    
    beforeEach(async () => {
        userResponse = await createUser();
        todoResponse = await createTodo(userResponse.id);
    })

    afterEach(async () => {
        await deleteTodo(userResponse.id!);
        await deleteUser();
    })

    it('should not update if request body is invalid', async () => {
        const response = await app.request(`/api/auth/todo/${userResponse.id}/${todoResponse.id}`, {
            method: "put",
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
    
    it('should update if request body is valid', async  () => {
        const response = await app.request(`/api/auth/todo/${userResponse.id}/${todoResponse.id}`, {
            method: "put",
            body: JSON.stringify({
                title: "Second title",
                description: "This second titles"
            }),
            headers: {
                Authorization: `Bearer ${await jwt.sign(userResponse, secretKey!, { expiresIn: '1h' })}`
            } 
        });

        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.msg).toBeDefined();
    });
    
});

describe('DELETE /api/auth/todo/:user_id/:id', () => {
    let userResponse: userReponseType;
    let todoResponse: todoReponseType;
    
    beforeEach(async () => {
        userResponse = await createUser();
        todoResponse = await createTodo(userResponse.id);
    })

    afterEach(async () => {
        await deleteTodo(userResponse.id!);
        await deleteUser();
    })

    it('should delete todo by user id', async () => {
        const response = await app.request(`/api/auth/todo/${userResponse.id}/${todoResponse.id}`, {
            method: "delete",
            headers: {
                Authorization: `Bearer ${await jwt.sign(userResponse, secretKey!, { expiresIn: '1h' })}`
            } 
        });

        const body = await response.json();

        expect(response.status).toBe(200);
        expect(body.msg).toBeDefined();
    });
    
});
