//Here we gonna sync the database and configure our .env and some important functions
//It's better run this before something else in index.js
import { syncDatabase } from './database/synchronization';

export function enableDotEnvConfigs(){
    require('dotenv').config()
}

export function getAccessToken(){
    const SECRET_ACCESS_TOKEN = process.env.SECRET_ACCESS_TOKEN;
    return SECRET_ACCESS_TOKEN;
}

export async function asyncDatabase(){
    console.log("Synchronization of database initiated...")
    await syncDatabase()
    console.log("Synchronization finished... ")
}

export function catchUnhandledPromiseError(){
    process.on('unhandledRejection', (reason, promise) => {
        console.log(promise, reason)
    });
}