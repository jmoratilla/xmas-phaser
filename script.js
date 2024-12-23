let question = {
    title:"gato",
    alternatives: ['dog', 'cat', 'bird'],
    correctAnswer: 1
};

function showQuestion(q) {
    // 1. select dom element title
    let titleDiv = document.getElementById('title');

    // 2. modify title
    titleDiv.textContent = q.title;

    // selecting by a query
    let alts = document.querySelectorAll('.alternative');
    console.log(alts);
}

showQuestion(question);