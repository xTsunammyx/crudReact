import {v4 as uuid} from 'uuid';

export default class Id { //classe Id
   static novo(): string {//função novo
    return uuid(); //retorna um id unico
   } 
}