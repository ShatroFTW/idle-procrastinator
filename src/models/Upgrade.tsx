import {makeAutoObservable} from "mobx";

export interface  UpgradeInit {
    id: number,
    title: string,
    description: string,
    price: number,
}

export class Upgrade {
    id: number;
    title: string;
    description: string;
    price: number;

    constructor(init: UpgradeInit) {
        makeAutoObservable(this, {}, {autoBind: true})
        this.id = init.id;
        this.title = init.title;
        this.description = init.description;
        this.price = init.price;
    }
}