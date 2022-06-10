// steps progress & form 1 to 2
const nextBtns =document.querySelectorAll(".btn"); // button next
const progressSteps = document.querySelectorAll('pro')
const formStep1 =document.querySelectorAll(".step-1"); // from - 1 - 2
const formStep2 =document.querySelectorAll(".step-2"); // from - 1 - 2


let formStepNum = 0;

nextBtns.forEach(btn =>{
    btn.addEventListener("click", () =>{
        formStepNum++;
         UpdateFormSteps();
         updateProgressbar();

    });
});

function UpdateFormSteps() {
    formStep1.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active") ;
      });
    formStep2.forEach((formStep2) => {
        formStep2.classList.add("form-step-active") ;
      });
};

function  returnTo1() {
    formStep1.forEach((formStep) => {
        formStep.classList.add("form-step-active") ;

      });
    formStep2.forEach((formStep2) => {
        formStep2.classList.remove("form-step-active") ;
      });

};

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepNum + 1) {
        progressStep.classList.add("active");
      } else {
        progressStep.classList.remove("active");
      }
    });
  
    const progressActive = document.querySelectorAll(".active");
};



// inputs=======================================
// -----------------------------------------------
var q1Yes = document.getElementById('step2-q1');
var q2Yes = document.getElementById('step2-q3');
var q2no = document.getElementById('step2-q3-no');
var q3Yes = document.getElementById('step2-q5');
var q3no = document.getElementById('step2-q5-no');
var q3no_1 = document.getElementById('step2-q5-n-1');
var q3no_2 = document.getElementById('step2-q5-n-2');
var q4Yes = document.getElementById('step2-q7');
var q4YesYes = document.getElementById('step2-q7-yes');
var q4no = document.getElementById('step2-q7-no')
var q5Yes = document.getElementById('step2-q9');
// --------------------------------------------------
var q1Input = document.getElementById('step2-q2');
// -------------------------------------------------
var q1Browsse = document.getElementById('step2-q4');
var q2Browsse = document.getElementById('step2-q8');
// ----------------------------------------------
var q1Date = document.getElementById('step2-q6');
var q2Date = document.getElementById('step2-q10');


function check_answer_yes() {
  if(document.querySelector('input[name="gridRadiosq1"]:checked').value){
    q1Input.classList.remove('hide') ;
    q1Input.classList.add('show') ;
  }
};
function check_answer_no()
{
  if(document.querySelector('input[name="gridRadiosq1"]:checked').value){
    q1Input.classList.add('hide');
    q1Input.classList.remove('show');

}
};
function check_answer_yes_2() {

  if(document.querySelector('input[name="gridRadiosq2"]:checked').value){
  q1Browsse.classList.add('show');
  q1Browsse.classList.remove('hide'); 
  q5Yes.classList.add('hide');
  q5Yes.classList.remove('show');
  q1Date.classList.remove('show');
  q1Date.classList.add('hide');
  }
}
function check_answer_no_2() {
  if(document.querySelector('input[name="gridRadiosq2"]:checked').value){
  q1Browsse.classList.remove('show');
  q1Browsse.classList.add('hide');
  q5Yes.classList.remove('hide');
  q5Yes.classList.add('show');
  }
}
function check_answer_yes_4() {
  if(document.querySelector('input[name="gridRadiosq4"]:checked').value){
  q2Browsse.classList.add('show');
  q2Browsse.classList.remove('hide'); 
  q3Yes.classList.remove('show');
  q3Yes.classList.add('hide'); 
  q2Date.classList.remove('show');
  q2Date.classList.add('hide');
  }
}
function check_answer_no_4() {
  if(document.querySelector('input[name="gridRadiosq4"]:checked').value){
  q3Yes.classList.add('show');
  q3Yes.classList.remove('hide'); 
  q2Browsse.classList.remove('show');
  q2Browsse.classList.add('hide'); 
  }
}
function check_answer_no_q9()
{
  if(document.querySelector('input[name="gridRadiosq5"]:checked').value)
  {
    q1Date.classList.add('show');
    q1Date.classList.remove('hide');
  }
}
function check_answer_yes_q9()
{
  if(document.querySelector('input[name="gridRadiosq5"]:checked').value)
  {
    q1Date.classList.remove('show');
    q1Date.classList.add('hide');
  }
}
function check_answer_yes_if_2()
{
  if(document.querySelector('input[name="gridRadiosq3"]:checked').value)
  {
    q2Date.classList.remove('show');
    q2Date.classList.add('hide');
  }
}
function check_answer_no_if_2()
{
  if(document.querySelector('input[name="gridRadiosq3"]:checked').value)
  {
    q2Date.classList.add('show');
    q2Date.classList.remove('hide');
  }
}