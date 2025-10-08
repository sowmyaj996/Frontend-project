document.getElementById("submitForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  // Collect form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skills = document.getElementById("skills").value;
  const location = document.getElementById("location").value;

  const emailError = document.getElementById("emailError");
  const responseMsg = document.getElementById("responseMsg");

  // Reset messages
  emailError.textContent = "";
  responseMsg.textContent = "";

  try {
    // Send data to backend API (replace URL with backend endpoint)
    const res = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, skills, location })
    });

    // const data = await res.json();

    if (res.status === 409) {  
      // Email already exists
      emailError.textContent = "Email already exists!";
    } else if (res.ok) {  
      // Success
      responseMsg.style.color = "green";
      responseMsg.textContent = "Details Entered Successfully!";
      document.getElementById("submitForm").reset();
    } else {  
      // General error
      responseMsg.style.color = "red";
      responseMsg.textContent = "Details not entered!";
    }
  } catch (err) {
    responseMsg.style.color = "red";
    responseMsg.textContent = "Server error!";
    console.error(err);
  }
});
