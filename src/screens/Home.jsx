import React from "react";
import Navbar from '../components/Navbar';
import Data from "../components/Data";

export default function Home() {
    return (
        <>
            <Navbar />
            <h1 className="text">This is Home Component</h1>
            <Data />
        </>
    );
}





















// {
//     name: 'Coffee With CodeCell', 
//     time: '5:30-7:30',
//     requirements: 'laptop',
//     duration: '2hrs',
// }