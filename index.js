var copyBtn = document.getElementById("copy-btn");
var linkInput = document.getElementById("link-input");

copyBtn.addEventListener("click", function() {
  linkInput.select();
  document.execCommand("copy");
  alert("Link copied to clipboard!");
});
