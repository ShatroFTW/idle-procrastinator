import {makeAutoObservable} from "mobx";
import {DataStore} from "./DataStore";
import {UiStore} from "./UiStore";

export class RootStore {
    dataStore$: DataStore;
    uiStore$: UiStore;

    constructor() {
        makeAutoObservable(this, {}, {autoBind: true});
        this.dataStore$ = new DataStore(this);
        this.uiStore$ = new UiStore(this);
    }
}

export const rootStore = new RootStore();