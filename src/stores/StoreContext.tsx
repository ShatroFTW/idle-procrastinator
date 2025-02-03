import {createContext, useContext} from "react";
import {RootStore, rootStore} from "./RootStore";


const AppStoreContext = createContext(rootStore);

export const AppStoreProvider = ({rootStore, children}: {rootStore: RootStore, children?: React.ReactNode}) => {
    return (
        <AppStoreContext.Provider value={rootStore}>
            {children}
        </AppStoreContext.Provider>
    )
}

export const useAppStore = () => useContext(AppStoreContext);