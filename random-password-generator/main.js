const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

function generatePassword() {
  const passLength = document.getElementById("passwordLength").value;
  const lowercase = document.getElementById("lowercase").checked;
  const uppercase = document.getElementById("uppercase").checked;
  const numbers = document.getElementById("numbers").checked;
  const symbols = document.getElementById("symbols").checked;
  const result = document.getElementById("result")

  const lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";
  const uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let password = "";
  let allowedChars = "";

  allowedChars += lowercase ? lowercaseChars : "";
  allowedChars += uppercase ? uppercaseChars : "";
  allowedChars += numbers ? numberChars : "";
  allowedChars += symbols ? symbolChars : "";

  if (passLength <= 0) {
    result.className = "warning";
    result.textContent = "Password length must be at least 1";
    return password;
  }
  if (allowedChars.length === 0) {
    result.className = "warning";
    result.textContent = "At least 1 set of character needs to be selected";
    return password;
  }

  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  result.className = "success";
  result.textContent = password;

  copyBtn.onclick = function() {
    let copyPass = password
    if (copyPass) {
      navigator.clipboard.writeText(copyPass)
      alert("Copied to clipboard")
    }
  }
}
