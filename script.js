document.getElementById("submitForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Collect form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skills = document.getElementById("skills").value;
  const location = document.getElementById("location").value;

  const emailError = document.getElementById("emailError");
  const skillsError = document.getElementById("skillsError");
  const responseMsg = document.getElementById("responseMsg");

  // Reset messages
  emailError.textContent = "";
  skillsError.textContent = "";
  responseMsg.textContent = "";

  try {
    // Send data to backend API (replace URL with backend endpoint)
    const res = await fetch("https://backend-team-wwmy.onrender.com/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username:name, email, skills: [skills], location })
    });

    // const data = await res.json();

    if (res.status === 409) {  
      // Email already exists
      emailError.textContent = "Email already exists!";
      skillsError.textContent = "Skills already exists!";
      emailError.style.color = "red";
      skillsError.style.color = "red";
      
    } else if (res.ok) {  
      // Success
      responseMsg.style.color = "green";
      responseMsg.textContent = "Details Entered Successfully!";
      document.getElementById("submitForm").reset();
    } else {  
      // General error
      responseMsg.style.color = "red";
      responseMsg.textContent = "Details are invalid!";
    }
  } catch (err) {
    responseMsg.style.color = "red";
    responseMsg.textContent = "Server error!";
    console.error(err);
  }

});
// const getDataButton = document.getElementById("getData").addEventListener("click", async function() {
//   try {
//     const res = await fetch("https://backend-team-wwmy.onrender.com/submissions").then(data => data.json()).then((completedata) => {
//       console.log(completedata);
//     });
//   } catch (err) {
//     console.error(err);
//   }})