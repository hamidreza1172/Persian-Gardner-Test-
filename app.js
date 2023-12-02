let question_id = [
  {
    ques: "1- به کتاب و کتابخوانی علاقه دارم.",
    category: "هوش موسیقیایی",
    score: 0,
  },
  {
    ques: "2- میتوانم جمع،تفریق و یا ضرب و تقسیم را در ذهنم به راحتی حساب کنم.",
    category: "هوش منطقی ریاضی",
    score: 0,
  },
  {
    ques:
      "3- وقتی چشمانم را می بندم می توانم تصاویر واضحی را ببینم.(قدرت تخیل و تجسم خوبی دارم).",
    category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques: "4- من به طور منظم حداقل در یک ورزش یا فعالیت های بدنی شرکت دارم.",
    category: "هوش بین فردی",
    score: 0,
  },
  {
    ques: "5- پدر مادر و دوستانم با من مشورت می کنند.",
    category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques: "6- در تنهایی به موضوعاتی که برایم مهم است فکر میکنم.",
    category: "هوش تجسمی",
    score: 0,
  },
  {
    ques: "7- من از صدای دلنشینی برای خواندن برخوردارم.",
    category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques: "8- من حیوانات را دوست دارم.",
    category: " هوش درون فردی",
    score: 0,
  },
];
var i = 0;
document.querySelector(".textquestion").innerHTML = question_id[i].ques;
document
  .getElementById("examForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
if (i < question_id.length) {
  
//لیست جوابهای موجود
    let option_text_array = [
      "به هیچ وجه شبیه من نیست",
      " اندکی شبیه من است",
      "در حد متوسط شبیه من است",
      "تا حد زیادی شبیه من است",
      "کاملا شبیه من است",
    ];
    var questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
      if (question.checked) {
        document.querySelector(".errortext").innerText = "";
        //اضافه کردن امنتیازات به متغیر score در هر سوال 
        if (question.value === option_text_array[0]) {
          question_id[i].score = 1;
        } else if (question.value === option_text_array[1]) {
          question_id[i].score = 2;
        } else if (question.value === option_text_array[2]) {
          question_id[i].score = 3;
        } else if (question.value === option_text_array[3]) {
          question_id[i].score = 4;
        } else if (question.value === option_text_array[4]) {
          question_id[i].score = 5;
        }

        console.log(`score is ${question_id[i].score}`);
        // بررسی جواب‌ها و اعمال عملیات مناسب
        // مثال: نمایش امتیاز برای جواب

        document.querySelector(".textquestion").innerHTML =
          question_id[(i += 1)].ques;
      }
    });
  }else{
    var question1 = document.querySelector(".question1");
        document.querySelector("#examForm").removeChild(question1);
        const endtest = document.createElement("h1")
              endtest.innerText="آزمون تمام شد   تشکر از شما"
              endtest.classList.add("endtest");
              document.querySelector("#examForm").appendChild(endtest)
            
  }
  });
