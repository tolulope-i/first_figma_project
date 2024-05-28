const btns = document.querySelectorAll(".question-btn");

// to loop through each of the buttons i.e targetting each of them we make use of the foreach method.
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        // here we have to target the parent of the parent of the buttons. this has a class of question
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-paragraph")
    });
});