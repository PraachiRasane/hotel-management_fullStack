function rewards()
{
    // window.alert("Book your room now to earn exciting cash prices and rewards !!!");
    alert("Book your room now to earn exciting rewards and cash prices !!");
}
function meeting()
{
    // window.alert("Book your room now to earn exciting cash prices and rewards !!!");
    alert("Log into your Google Account to sync your meetings with calendar.To book meeting venue , Call booking counter at +91 9988776655");
}
function subscribe()
{
    const input=prompt("Please type in your email address to recieve latest updates about offers , memberships perks and much more!!");
    while(!isemail(input))
    {
        alert("Invalid Email");
        input=prompt("Try again !!");
    }
    alert("You have been Successfully added to our Newsletter Community !! We hope to see you soon !! ");
}
function isemail(email)
{
    return /\S+@+\S+\.\S/.test(email);
}
document.getElementById("subscribeBtn").addEventListener("click", function() {
    window.open("subscribe.html", "_blank");
});

document.querySelectorAll('.circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    circle.style.setProperty('--percent', percent + '%');
    circle.textContent = percent + '%';
});


// function submitBothForms() {
//     // Get form data for Booking
//     const bookingForm = document.getElementById('bookingForm');
//     const bookingData = new FormData(bookingForm);
    
//     // Submit booking form via AJAX
//     fetch('http://localhost:3000/submitBooking', {
//         method: 'POST',
//         body: bookingData
//     })
//     .then(response => response.json())
//     .then(bookingResponse => {
//         if (bookingResponse.success) {
//             // On successful booking, submit personal info form
//             const personalInfoForm = document.getElementById('personalInfoForm');
//             const personalInfoData = new FormData(personalInfoForm);

//             fetch('http://localhost:3000/submitPersonalInfo', {
//                 method: 'POST',
//                 body: personalInfoData
//             })
//             .then(response => response.json())
//             .then(personalInfoResponse => {
//                 if (personalInfoResponse.success) {
//                     // Show success message or proceed further
//                     alert('Thank you! Your booking and personal information have been successfully submitted.');
//                 } else {
//                     alert('Error submitting personal information');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error submitting personal information:', error);
//                 alert('Error submitting personal information');
//             });
//         } else {
//             alert('Error submitting booking information');
//         }
//     })
//     .catch(error => {
//         console.error('Error submitting booking:', error);
//         alert('Error submitting booking information');
//     });
// }
