// Dark mode
function toggleDark(){
  document.body.classList.toggle("dark");
}

// Welcome + score
window.onload = function(){
  let user = localStorage.getItem("user");
  if(user){
    document.getElementById("welcome").innerText = "Welcome " + user;
  }

  let score = localStorage.getItem("stressScore") || 0;
  document.getElementById("score").innerText = score;

  let rec = "";
  if(score == 1) rec = "You are doing great 😊";
  else if(score == 2) rec = "Take small breaks 😌";
  else if(score == 3) rec = "Relax and breathe 🧘";

  document.getElementById("recommend").innerText = rec;
}

// Mood tracker
function setMood(val){
  localStorage.setItem("stressScore", val);

  let msg = "";
  if(val == 1) msg = "You are happy!";
  else if(val == 2) msg = "Stay calm!";
  else msg = "Try relaxing exercises!";

  document.getElementById("result").innerText = msg;
}

// Planner
function addTask(){
  let task = document.getElementById("task").value;
  if(task === "") return;

  let li = document.createElement("li");
  li.innerText = task;
  document.getElementById("list").appendChild(li);
}

// Chatbot
function reply(){
  let msg = document.getElementById("msg").value.toLowerCase();
  let res = "";

  if(msg.includes("stress")){
    res = "Take deep breaths and relax 🧘";
  } else if(msg.includes("exam")){
    res = "Plan your study time well 📅";
  } else if(msg.includes("sad")){
    res = "Talk to someone you trust 💙";
  } else {
    res = "I'm here for you 😊";
  }

  document.getElementById("chat").innerText = res;
}