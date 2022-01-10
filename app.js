// to access the exam
function myFunction(){
  var un = document.forms["myForm"]["Uname"].value;
  var id = document.forms["myForm"]["text"].value;
 
    if(un =="student" && id == "1234"){
      
      window.location.href = "quiz.html" 
      
  }else{
     alert("you dont have permission to take the exam ") 
  }
 
}


// to show the result 

const quizForm = document.querySelector('.qns-form');
const resultPanel = document.querySelector('#result');
const Marks = document.querySelector('span.marks');
const testAnswers = ['A', 'B', 'B', 'C', 'A'];
quizForm.addEventListener('submit', e => {
  e.preventDefault();
  
  let userAnswers = [quizForm.qn1.value, quizForm.qn2.value, quizForm.qn3.value, quizForm.qn4.value, quizForm.qn5.value];
  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === testAnswers[index]) {
      score += 20;
    }
  });

   Marks.textContent = `${score}%`;
 
   

  quizForm.reset();
 

});  


