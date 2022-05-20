import {useEffect} from 'react';
import {Provider} from "react-redux";
import {store} from "../redux/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {routes} from "../constants/routes";

function App() {

    useEffect(() => {
        // TEST API, it might be removed
        fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
            console.log('API CONNECTION IS OK');
        }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'))
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {
                        routes.map((r, i) =>
                            <Route key={i} path={r.path} element={r.element}/>)
                    }
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
