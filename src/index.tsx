import './index.css';
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {ThemeProvider} from "@mui/material";
import theme from "./styles/theme/CustomTheme";
import {rootStore} from "./stores/RootStore";
import {AppStoreProvider} from "./stores/StoreContext";

const root = createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <AppStoreProvider rootStore={rootStore}>
                <App/>
            </AppStoreProvider>
        </ThemeProvider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
