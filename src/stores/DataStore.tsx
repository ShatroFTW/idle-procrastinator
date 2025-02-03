import {RootStore} from "./RootStore";
import {action, makeAutoObservable} from "mobx";

export class DataStore {
    rootStore$: RootStore;
    clickerScore$: number;
    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {}, {autoBind: true});
        this.rootStore$ = rootStore;
        this.clickerScore$ = 0
    }

    increaseClickerScore(increment: number) {
        this.clickerScore$ += increment;
    }
}