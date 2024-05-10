const passwords = [];

document.addEventListener("submit", function(event) {
  event.preventDefault();

  const website = document.getElementById("website").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  passwords.push({
    website,
    username,
    password,
  });

  document.getElementById("passwords").innerHTML = "";

  for (const password of passwords) {
    const passwordElement = document.createElement("div");
    passwordElement.classList.add("password");

    passwordElement.innerHTML = `
      <h3>${password.website}</h3>
      <p>Username: ${password.username}</p>
      <p>Password: ${password.password}</p>
    `;

    document.getElementById("passwords").appendChild(passwordElement);
  }
});