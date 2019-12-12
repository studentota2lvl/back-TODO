# TODO list backend

#### Deployment order:
1) Clone this project;
2) Create file `.env` from `.env.sample` in the root of the project;
3) Configure `.env` like in the sample `.env.sample`;
4) Run `npm i` to install all dependencies;
5) Before the starting of the project you have to install pm2 globally (`npm i pm2 -g`);
6) Start the project `npm run pm2:start`.

#### Schema:
```typescript
interface TODO {
    id: string;
    text: string;
    isDone: boolean;
}
```

#### APIs:
`GET` [/todo/list]() - get all item  
`GET` [/todo/:id]() - get item by ID  
`POST` [/todo]() - save or update item  
`DELETE` [/todo/:id]() - remove item by ID  
