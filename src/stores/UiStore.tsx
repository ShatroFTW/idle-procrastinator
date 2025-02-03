import {makeAutoObservable} from "mobx";
import {RootStore} from "./RootStore";

export class UiStore {
    rootStore$: RootStore;
    customShadow$;
    customInvertShadow$;
    isNewChallengeGroupDialogOpen$: boolean;
    isNewChallengeDialogOpen$: boolean;
    isNewTechDialogOpen$: boolean;
    isInitDone$: boolean;
    isInEditMode$: boolean;
    isAdminPanelOpen$: boolean;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {}, {autoBind: true});
        this.rootStore$ = rootStore;
        this.customShadow$ = {
            noHover: "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
            hover: "0px 6px 10px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)"
        }
        this.customInvertShadow$ = {
            noHover: "0px 3px 1px -2px rgba(255, 255, 255, 0.2), 0px 2px 2px rgba(255, 255, 255, 0.14), 0px 1px 5px 0px rgba(255, 255, 255, 0.12)",
            hover: "0px 6px 10px -3px rgba(255, 255, 255, 0.2), 0px 10px 14px 1px rgba(255, 255, 255, 0.14), 0px 4px 18px 3px rgba(255, 255, 255, 0.12)"
        }
        this.isNewChallengeGroupDialogOpen$ = false;
        this.isNewChallengeDialogOpen$ = false;
        this.isNewTechDialogOpen$ = false;
        this.isInitDone$ = true;
        this.isInEditMode$ = false;
        this.isAdminPanelOpen$ = false;
    }
}