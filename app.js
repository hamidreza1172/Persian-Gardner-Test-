let question_id = [
  {
    ques: "1- به کتاب و کتابخوانی علاقه دارم.",
    category: "هوش منطقی ریاضی",
    score: 0,
    src:"./images/7.jpg"
  },
  {
    ques: "2- میتوانم جمع،تفریق و یا ضرب و تقسیم را در ذهنم به راحتی حساب کنم.",
    category: "هوش فضایی",
    score: 0,
    src:"./images/8.jpg"
  },
  {
    ques:
      "3- وقتی چشمانم را می بندم می توانم تصاویر واضحی را ببینم.(قدرت تخیل و تجسم خوبی دارم).",
    category: "هوش کلامی/زبانی ",
    score: 9,
    src:"./images/9.jpg"
  },
  {
    ques: "4- من به طور منظم حداقل در یک ورزش یا فعالیت های بدنی شرکت دارم.",
    category: "هوش بدنی جنبشی",
    score: 0,
    src:"./images/10.jpg"
  },
  {
    ques: "5- پدر مادر و دوستانم با من مشورت می کنند.",
    category: "هوش بین فردی",
    score: 0,
    src:"./images/11.jpg"
  },
  {
    ques: "6- در تنهایی به موضوعاتی که برایم مهم است فکر میکنم.",
    category: "هوش فضایی",
    score: 0,
    src:"./images/12.jpg"
  },
  {
    ques: "7- من از صدای دلنشینی برای خواندن برخوردارم.",
    category: "هوش موسیقیایی ",
    score: 0,
    src:"./images/13.jpg"
  },
  {
    ques: "8- من حیوانات را دوست دارم.",
    category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques: "9- قبل از نوشتن یا گفتن یا خواندن کلمات، آن ها را در ذهنم می شنوم.",
    category: "هوش منطقی ریاضی",
        score: 0,
  },
  {
    ques: "10- در مدرسه از درس هایی چون ریاضیات و علوم لذّت می برم.",
    category: "هوش فضایی",
    score: 0,
  },
  {
    ques: "11- من نسبت به رنگ ها علاقمند و حساسم.",
    category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques: "12- خیلی مشکل است که برای مدت طولانی آرام در جایی بنشینم.",
    category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques: "13- ورزش های گروهی را بیشتر از ورزش های انفرادی ترجیح می دهم.",
    category: "هوش بین فردی",
    score: 0,
  },
  {
    ques:
      "14- در جلساتی که به رشد و آگاهی های فردی ام افزوده می شود شرکت می کنم.",
    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques: "15- آهنگ های ناموزون و سازهای خارج از ریتم را تشخیص می دهم.",
    category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques: "16- دوست دارم چیزهایی را سازمان بندی یا مرتب کنم.",
    category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques:
      "17- گوش کردن به رادیو و نوار صوتی بیشتر از تلویزیون یا فیلم به من آموزش می دهد.",
      category: "هوش منطقی ریاضی",
          score: 0,
  },
  {
    ques:
      "18- از بازی های منطقی، معماها و سایر بازی های فکری (از قبیل شطرنج) لذّت می برم.",
      category: "هوش فضایی",
    score: 0,
  },
  {
    ques:
      "19- اغلب برای ضبط محیط اطرافم (در صورت امکان) از دوربین فیلم برداری استفاده می کنم.",
      category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques:
      "20- به کارهایی که با دست انجام می شود مانند دوختن، بافتن، نجاری، مدل سازی و حکّاکی علاقمندم.",
      category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques:
      "21- وقتی مشکل دارم ترجیح می دهم از کسی کمک بگیرم تا اینکه تنهایی روی آن کار کنم.",
      category: "هوش بین فردی",
    score: 0,
  },
  {
    ques: "22- قادرم با شکست ها و مشکلاتم با حالتی انعطاف پذیر مواجه شوم.",
    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques:
      "23- اغلب به موزیک هایی از رادیو یا ضبط صوت یا سی دی و غیره گوش می دهم.",
      category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques: "24- من از طبیعت لذّت می برم.",
    category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques:
      "25- من از بازی با کلمات مانند جدول کلمات متقاطع، جملات درهم ریخته یا اسم رمزها لذّت می برم.",
      category: "هوش منطقی ریاضی",
    score: 0,
  },
  {
    ques:
      "26- دوست دارم آزمایش هایی (اگر…آنگاه) ترتیب دهم. (مثلاً اگر به گیاهانم دوبرابر کود دهم چه اتفاقی می افتد؟)",
      category: "هوش فضایی",
    score: 0,
  },
  {
    ques:
      "27- من از معماهای دیداری مانند پازل ها و تصاویر سه بعدی لذّت می برم.",
      category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques:
      "28- بهترین افکار وقتی به سراغ من می آیند که مشغول یک فعالیت جسمی(از قبیل پیاده روی، دو، شنا و…) هستم.",
      category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques: "29- من حداقل سه دوست نزدیک و صمیمی دارم.",
    category: "هوش بین فردی",
    score: 0,
  },
  {
    ques:
      "30- یک سرگرمی یا مشغولیت و فعالیت ویژه ای دارم که به تنهایی انجام می دهم.",
    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques: "31- یکی از آلات موسیقی را می نوازم.",
    category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques:
      "32- من کلکسیونی از قبیل سنگ ها، صدف ها، برگ ها، حشرات، تمبر، کارت های ورزشی … را جمع می کنم.",
      category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques:
      "33- من اغراق های زبانی، ایهام، آهنگ های بی معنی و کلمات دوپهلو را دوست دارم.",
      category: "هوش منطقی ریاضی",
    score: 0,
  },
  {
    ques: "34- من در جستجوی الگوها، توالی یا نظم و سازمان چیزها هستم.",
    category: "هوش فضایی",
    score: 0,
  },
  {
    ques: "35- در خواب رؤیاهای روشنی می بینم.",
    category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques: "36- اغلب دوست دارم اوقات فراغت خود را بیرون خانه سپری کنم.",
    category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques:
      "37- من از سرگرمی های جمعی مانند منچ بیشتر از سرگرمی های فردی مانند بازی های رایانه ای خوشم می آید.",

      category: "هوش بین فردی",
    score: 0,
  },
  {
    ques: "38- اهداف ویژه ای در زندگی دارم که مرتب به آن ها فکر کنم.",

    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques: "39- زندگی من بدون موسیقی بسیار یکنواخت و بی هیجان خواهد بود.",
    category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques: "40- من مرتباً گزارش تغییرات هوایی را کنترل می کنم.",
    category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques: "41- دروس ادبیات و اجتماعی از ریاضی و علوم برایم آسان تر هستند.",
    category: "هوش منطقی ریاضی",
    score: 0,
  },
  {
    ques:
      "42- درباره چگونگی کارکرد چیزها علاقمندم و در مورد پیشرفت های علمی و کشفیات جدید علم خود را به روز نگه می دارم.",

      category: "هوش فضایی",
    score: 0,
  },
  {
    ques: "43- معمولاً قادرم مسیر در یک محل ناآشنا پیدا کنم.",
    category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques:
      "44- هنگام صحبت تمایل دارم دست های خود را تکان دهم و از ژست ها و زبان بدن (مانند تغییر چهره) استفاده کنم.",
      category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques: "45- از آموزش دادن دانسته هایم به دیگران لذّت می برم.",
    category: "هوش بین فردی",
    score: 0,
  },
  {
    ques:
      "46- من از طریق عکس العمل دیگران، دیدگاه واقع بینانه ای نسبت به نقاط قوت و ضعف خود دارم.",

    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques: "47- اغلب در طی روز مدام یک آهنگ در ذهنم اجرا می شود.",
    category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques:
      "48- تفاوت های موجود میان انواع درختان، سنگ ها، پرندگان یا سایر گیاهان و جانوران را به خوبی بیان می کنم.",

      category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques:
      "49- وقتی در ماشین هستم دوست دارم علائم و تابلوهای تبلیغاتی را بخوانم و به آن ها بیشتر از مناظر اطراف توجه کنم.",

      category: "هوش منطقی ریاضی",
    score: 0,
  },
  {
    ques: "50- باور دارم تقریباً برای هر چیزی یک تفسیر منطقی وجود دارد.",

    category: "هوش فضایی",
    score: 0,
  },
  {
    ques: "51- من طراحی را دوست دارم و من اغلب طراحی می کنم.",
    category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques:
      "52- من نیاز دارم چیزها را لمس کرده یا نگه دارم تا بتوانم بیشتر درباره آن ها یاد بگیرم.",
      category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques:
      "53- فکر می کنم قدرت رهبری خوبی دارم و اطرافیان و دوستانم نیز این موضوع را قبول دارند.",
      category: "هوش بین فردی",
    score: 0,
  },
  {
    ques:
      "54- من ترجیح می دهم تعطیلات آخر هفته را در یک اتاق یا مکان خلوت سپری کنم تا اینکه در یک جای عمومی و شلوغ باشم.",

    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques:
      "55- با استفاده از یک ابزار موسیقی ساده به راحتی می توانم اوقات فراغت خود را سپری کنم.",
      category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques: "56- من از ماهیگیری، باغبانی، کاشتن گیاهان و آشپزی لذّت می برم.",

    category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques:
      "57- اغلب در مکالماتم به چیزهایی اشاره می کنم که قبلاً خوانده یا شنیده ام.",

      category: "هوش منطقی ریاضی",
    score: 0,
  },
  {
    ques:
      "58- من می توانم به صورت واضح به مفاهیم غیرملموس، انتزاعی و خیالی فکر کنم.",

      category: "هوش فضایی",
    score: 0,
  },
  {
    ques: "59- جغرافیا از ریاضی برایم آسان تر است.",
    category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques:
      "60- من از بازی های پرهیجان (از قبیل پینت بال و رانندگی پرهیجان) لذّت می برم.",
      category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques: "61- من در میان جمع احساس راحتی می کنم.",
    category: "هوش بین فردی",
    score: 0,
  },
  {
    ques: "62- من با اراده و مستقل هستم.",
    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques: "63- آهنگ های بسیاری از آوازها یا قطعات موسیقی را می دانم.",
    category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques:
      "64- از مشاهده رویدادهای طبیعی( مانند ستاره ها، ماه، جزر و مد) لذّت برده و دوست دارم جزئیات اطّلاعات درباره ی آن ها را به دست آورم.",
      category: "هوش طبیعت گرا",
    score: 0,
  },
  {
    ques: "65- اغلب اطرافیانم معنی کلمات را از من می پرسند.",
    category: "هوش منطقی ریاضی",
    score: 0,
  },
  {
    ques:
      "66- به کشف عیوب منطقی کارهایی که مردم در خانه و محل کار خود انجام می دهند یا در مورد آن ها صحبت می کنند، علاقه دارم.",
      category: "هوش فضایی",
    score: 0,
  },
  {
    ques:
      "67- می توانم تصور کنم (از نگاه یک پرنده)، اجسام از بالا چگونه به نظر می رسند.",
      category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques: "68- من از نظر جسمی و اندازه اندام های بدنی کاملاً متناسبم.",
    category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques:
      "69- من در فعالیت های مدرسه ، مسجد، همسایگان و فعالیت های اجتماعی شرکت می کنم.",
      category: "هوش بین فردی",
    score: 0,
  },
  {
    ques:
      "70- من یک دفتر خاطرات روزانه دارم تا اتّفاقات زندگی ام را یادداشت کنم.",
    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques:
      "71- اگر یک قطعه موزیک را یک یا دوبار بشنوم می توانم به آسانی آن را تکرار کنم.",
      category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques:
      "72- دوست دارم کتاب ها یا مجلاّتی را بخوانم یا برنامه های تلویزیونی را ببینم که به طبیعت مربوط می شود.",
    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques: "73- اخیراً چیزی نوشته ام که به آن افتخار می کنم.",
    category: "هوش منطقی ریاضی",
    score: 0,
  },
  {
    ques:
      "74- وقتی چیزی به روش خاصی اندازه گیری، طبقه بندی، تجزیه یا کمیت گذاری می شود احساس خوبی دارم.",
      category: "هوش فضایی",
    score: 0,
  },
  {
    ques:
      "75- من ترجیح می دهم کتاب، مجلاّت و روزنامه هایی را بخوانم که تصاویر زیادی دارند.",
      category: "هوش کلامی/زبانی ",
    score: 0,
  },
  {
    ques:
      "76- برای یادگیری مهارت های جدید نیاز دارم تا تمرین انجام دهم، به جای ینکه درباره آن بخوانم یا فیلمی را تماشا کنم.",
      category: "هوش بدنی جنبشی",
    score: 0,
  },
  {
    ques:
      "77- من ترجیح می دهم شب تعطیل را در یک میهمانی بگذرانم تا تنها در خانه بمانم.",
      category: "هوش بین فردی",
    score: 0,
  },
  {
    ques: "78- من ترجیح می دهم یک شغل مستقل داشته باشم تا برای دیگران کار کنم.",
    category: " هوش درون فردی",
    score: 0,
  },
  {
    ques:
      "79- اغلب هنگام کار کردن آواز می خوانم یا زمزمه می کنم یا ضربه می زنم.",
      category: "هوش موسیقیایی ",
    score: 0,
  },
  {
    ques:
      "80- در تعطیلات خود ترجیح می دهم به مکان های طبیعی مانند پارک یا جنگل بروم تا به یک هتل مجلّل و پر رفت و آمد.",
      category: "هوش طبیعت گرا",
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
    } else {
      var question1 = document.querySelector(".question1");
      document.querySelector("#examForm").removeChild(question1);
      const parentshowresult = document.createElement("div");
      parentshowresult.classList.add("parentshow");
      const showresult = document.createElement('a');
      showresult.innerHTML = "مشاهده ی پاسخ آزمون ";
      showresult.classList.add("showresult");

      //Routeبرای result
      showresult.href = " example Route";
      parentshowresult.appendChild(showresult);
      document.querySelector("#examForm").appendChild(parentshowresult);

      //محاسبه هوش درون فردی
      let Intrapersonal = question_id
        .filter((obj) => obj.category === " هوش درون فردی")
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);
        console.log("درون فرد=",Intrapersonal)
      //  محاسبه ی هوش ریاضی منطقی
      let matth = question_id
        .filter((obj) => obj.category === "هوش منطقی ریاضی")
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);
        console.log("ریاضی=",matth)
      //محاسبه ی "هوش موسیقیایی
      let musical = question_id
        .filter((obj) => obj.category === "هوش موسیقیایی")
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);
        console.log("موسیقیایی=",musical)
      //محاسبه ی هوش طبیعت گرا
      let naturalist = question_id
        .filter((obj) => obj.category === "هوش طبیعت گرا")
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);
        console.log("طبیعت=",naturalist)
      //محاسبه ی هوش بدنی جنبشی
      let physical = question_id
        .filter((obj) => obj.category === "هوش بدنی جنبشی")
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);
        console.log("جنبشی=",physical)
      //محاسبه ی هوش تجسمی
      let visual = question_id
        .filter((obj) => obj.category === "هوش تجسمی")
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);
        console.log("تجسمی=",visual)
      //محاسبه ی هوش کلامی/زبانی
      let verbal = question_id
        .filter((obj) => obj.category === "هوش کلامی/زبانی ")
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);
        console.log("زبانی=",verbal)
      //محاسبه ی هوش بین فردی
      let Interpersonal = question_id
        .filter((obj) => obj.category === "هوش بین فردی")
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);
console.log("بین فرد=",Interpersonal)
      //ثبت نتیج محاسبات هوشها در دیتابیس
      const url = "َApi for send ";
      const data = {
        key1: Intrapersonal,//درون فردی 
        key2: matth,//ریاضی
        key3: musical,//موسیقیایی
        key4: naturalist,//طبیعتگرا
        key5: physical,//جنبشی
        key6: visual,//تجسمی
        key7: verbal,//زبانی
        key8: Interpersonal,//بین فردی
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    }
  });




  