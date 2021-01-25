import React from "react"
import Layout from "../components/layout"
const arr = [
    
];
const Interview = () => {
    const showNext = () => {
        const random_index = Math.ceil(Math.random() * arr.length) - 1;
        const question = arr[random_index]['question'];
        const answer = arr[random_index]['answer'];
        document.getElementById('question').innerHTML = question;
        document.getElementById('answer').innerHTML = answer.replace(/(?:\r\n|\r|\n)/g, '<br>');
        document.getElementById('answer').style.display = "none";
    }
    const showAnswer = () => {
        document.getElementById('answer').style.display = "block";
    }
    return (
        <Layout>
            <button id="next" onClick={showNext}>next</button>
            <p id="question"></p>
            <hr/>
            <button id="show" onClick={showAnswer}>show</button>
            <p id="answer"></p>
        </Layout>
    );
}

export default Interview;
