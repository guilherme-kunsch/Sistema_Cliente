const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "guilherme.kunsch@outlook.com" && senha === "080616") {
    window.location.href = "cliente.html";
  } else {
    alert("E-mail ou senha incorretos. Tente novamente. ");
  }
});
