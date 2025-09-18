function detectNow(){
    let password = document.getElementById("detect").value;
    let noofcharacters = password.length >= 12;
    let hasuppercaseornot = /[A-Z]/.test(password);
    let haslowercaseornot = /[a-z]/.test(password);
    let hasdigits = /[0-9]/.test(password);
    let hasspecialcharacters = /[!@#$%^&*]/.test(password);
    let feedback = [];
    if (!noofcharacters)feedback.push("Typed Password is too short MIN 12 CHARACTERS");
    if (!hasuppercaseornot)feedback.push("Typed Password doesn't has any UPPERCASE LETTER..");
    if (!haslowercaseornot)feedback.push("Typed Password doesn't has any LOWERCASE LETTER..");
    if (!hasdigits)feedback.push("Typed Password doesn't has any NUMBERS/DIGITS..");
    if (!hasspecialcharacters)feedback.push("Typed Password doesn't has any SPECIAL CHARACTERS(!@#$%)");
    if (feedback.length === 0) {
        document.getElementById("output").innerText = " WELL DONE, TYPED PASSWORD IS ✅ STRONG PASSWORD!!";
    } else {
        document.getElementById("output").innerText = "❌ OOPS!! WEAK PASSWORD :" + feedback.join("\n");
    }
}