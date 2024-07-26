const quizData=[
    {
        question:"Prime minister of India?",
        a:"Droupadi Murmu",
        b:" Narendra Modi",
        c:"	Nitish Kumar",
        d:"M.S Dhoni",
        correct:"b",
    },
    {
        question:"Which planet has the most moons",
        a:"Earth",
        b:"Venus",
        c:"Mercury",
        d:"Saturn",
        correct:"d",

    },
    {
        question:"Which is the only body part that is fully grown from birth? ",
        a:"Eyes",
        b:"Teeth",
        c:"Leg",
        d:"Hand",
        correct:"a",

    },
    {
        question:"What is the only flag that does not have four sides?",
        a:"India",
        b:"Pakistan",
        c:"Nepal",
        d:"Vietnam",
        correct:"c",

    },
    {
        question:"Which state is also known as the “fruit bowl” of India?",
        a:"Goa",
        b:"Punjab",
        c:"Himachal Pradesh",
        d:"None of the above",
        correct:"c",

    },
    {
        question:"What is the national heritage animal of India?",
        a:"Elephant",
        b:"Tiger",
        c:"Lion",
        d:"Dog",
        correct:"a",

    },
    {
        question:"Which Indian cricketer won the Padma Bhushan in 2018?",
        a:"Shikhar Dhawan",
        b:"Yuvraj Singh",
        c:"Virat Kohli",
        d:"MS Dhoni",
        correct:"d",

    },
    {
        question:" What is the name of Ravan's sister?",
        a:"Nikasha",
        b:"Kaikesi",
        c:"Surpanakha",
        d:"Sita",
        correct:"c",

    },
    {
        question:"Which of the following is a part of Ramcharitmanas?",
        a:"Bal Kanda ",
        b:"Kiskindhakanda",
        c:"Aranya Kandha",
        d:" All of the above",
        correct:"d",

    },
    {
        question:"Which country is considered the birthplace of cricket?",
        a:"England",
        b:"India",
        c:"South Africa",
        d:"Australia",
        correct:"a",

    },
    {
        question:" Which player has the most centuries in Cricket World Cup history? ",
        a:"Sachin Tendulkar",
        b:"Rohit Sharma",
        c:"Ricky Ponting ",
        d:"Virat Kohli",
        correct:"b",

    },
    {
        question:"Which country is set to launch ‘BRICS Startup Forum’ in 2023?",
        a:" Russia",
        b:"Brazil",
        c:"India",
        d:"China",
        correct:"c",

    },
    {
        question:"which actor is commonly recognized as the “Angry Young Man”?",
        a:"Shah Rukh Khan",
        b:"Salman Khan",
        c:"Amitabh Bachan",
        d:"Akshay Kumar",
        correct:"c",

    },
    {
        question:"Which of these movies is not based on a book?",
        a:"Little Women",
        b:"The Hunger Games",
        c:"The Godfather",
        d:"Avtar",
        correct:"d",

    },
    {
        question:"who is the co-actor of  movie Shrikant",
        a:"Rajkumar Rao",
        b:"Ranveer Singh",
        c:"Ranbir Kapoor",
        d:"NTR",
        correct:"a",

    },

  
];

  
  const quiz = document.getElementById('quiz');
  const answerEls = document.querySelectorAll('.answer'); 
  const questionEl = document.getElementById('question');
  const a_text = document.getElementById('a_text');
  const b_text = document.getElementById('b_text');
  const c_text = document.getElementById('c_text');
  const d_text = document.getElementById('d_text');
  const submitBtn = document.getElementById('submit');
  const button = document.querySelector('button');


  button.addEventListener('click', () => {
    button.classList.add('animate-button');
    setTimeout(() => {
      button.classList.remove('animate-button');
    }, 500); 
  });
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id; 
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected(); 
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });