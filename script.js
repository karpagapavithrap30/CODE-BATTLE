document.getElementById("entryForm").addEventListener("submit", function(event) {
event.preventDefault();
let name = document.getElementById("name").value.trim();
let lang = document.getElementById("language").value.trim();
let exp = document.getElementById("experience").value.trim();
let valid = true;   
document.getElementById("nameError").textContent = "";
document.getElementById("langError").textContent = "";
document.getElementById("expError").textContent = "";
document.getElementById("successMessage").textContent = "";
if (name === "")
{
   document.getElementById("nameError").textContent = "Name is required.";
   valid = false;
}
if (lang === "")
{
    document.getElementById("langError").textContent = "Programming language is required.";
    valid = false;
}
if (exp === "" || isNaN(exp) || exp < 0)
{
    document.getElementById("expError").textContent = "Enter a valid number.";
    valid = false;
}
if (valid)
{
    document.getElementById("successMessage").textContent =
    "Thank you! Your entry has been submitted.";
    document.getElementById("entryForm").reset();
}
});
