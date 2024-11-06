document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    var feedback = document.getElementById("feedback").value;
    if (feedback.trim() === "") {
        event.preventDefault(); // Prevent form submission
        document.getElementById("feedbackMessage").innerHTML = "Please enter your feedback!";
    } else if (!isNaN(feedback)) { // Check if feedback is numeric
        event.preventDefault(); // Prevent form submission
        document.getElementById("feedbackMessage").innerHTML = "Invalid Feedback. Feedback cannot be entirely numeric.";
    } else {
        // Display a thank you message
        alert("Thank you for your valuable feedback!");
    }
});



//subscribe button
document.getElementById("subscribeBtn").addEventListener("click", function() {
    window.open("subscribe.html", "_blank");
});