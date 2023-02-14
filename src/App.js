import './App.css';

import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './config/router';

export default function App() {
    return (
        <div>
            <RouterProvider router = {router}/>
        </div>
    );
}