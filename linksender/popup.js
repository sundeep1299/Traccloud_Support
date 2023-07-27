// Function to copy the link to the clipboard
function copyTextToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
  
  // Execute the copy function for Link 1 when the button is clicked
  document.getElementById("copyButton1").addEventListener("click", function() {
    const linkText1 = "Hello, Welcome to Academic Support Network. To visit the virtual tutoring center. Please join the session using the following link:";
    copyTextToClipboard(linkText1);
    
  });
  
  // Execute the copy function for Link 2 when the button is clicked
  document.getElementById("copyButton2").addEventListener("click", function() {
    const linkText2 = "https://asu.zoom.us/j/89720501931#success";
    copyTextToClipboard(linkText2);
   
  });
  