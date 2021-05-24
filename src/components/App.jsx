import React from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

function App () {
return (
    <div>
        <Header />
    <div>
        <Note 
        title = "Delegation"
        desc = "Q. How many programmers does it take to change a light bulb? A. None - it's a hardware problem"/>

        <Note 
        title = "Loops"
        desc = "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."/>

        <Note 
        title = "Arrays"
        desc = "Q. Why did the programmer quit his job? A. Because he didn't get arrays."/>

        <Note 
        title = "Hardware vs. Software"
        desc = "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can onlt curse at your software."/>

        <Note 
        title = "Big ideas"
        desc = "Eat more sushi"/>
    </div>
    <div>
        <Footer />
    </div>
    </div>
);
}
export default App;
