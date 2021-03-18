$(function () {
  $(".myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  if ($("#name").val() <= 5) {
    $("#name").css({ border: "2px solid red" });
    $("#nameP").text("Name Must be at least 5 characters long");
  } else if ($("#email").val() == 0) {
    $("#email").css({ border: "2px solid red" });
    $("#emailP").text("Please enter email");
  } else if ($("#password").val() < 8) {
    $("#password").css({ border: "2px solid red" });
    $("#passwordP").text("Password Must be at least 8 characters long");
  } else if ($("#password").val() != $("#confirmPassword").val()) {
    $("#password").css({ border: "2px solid red" });
    $("#confirmpasswordP").text("Password not Matched");
  } else {
    $("#submitP").text("Form is being submitted");
  }
  e.preventDefault();
}
