import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import ScheduleBuilder from "@components/ScheduleBuilder.tsx";
import "./index.css";
import store from '../store.tsx'
import { Provider } from 'react-redux'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ScheduleBuilder />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>,
);
