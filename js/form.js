$(function () {
  $(".myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  if ($("#name").val() <= 5) {
    $("#name").css({ border: "2px solid red" });
    $("#nameP").text("Name Must be at least 5 characters long");
  }
  if ($("#email").val() == 0) {
    $("#email").css({ border: "2px solid red" });
    $("#emailP").text("Please enter email");
  }
  if ($("#password").val() < 8) {
    $("#password").css({ border: "2px solid red" });
    $("#passwordP").text("Password Must be at least 8 characters long");
  }
  if ($("#password").val() != $("#confirmPassword").val() && $("#password")) {
    $("#confirmPassword").css({ border: "2px solid red" });
    $("#confirmPasswordP").text("Password not Matched");
  }
  if (
    $("#password").val() == $("#confirmPassword").val() &&
    $("#password").val() >= 8 &&
    $("$name").val() >= 5
  ) {
    $("#submitP").text("Form is being submitted");
  }
  e.preventDefault();
}
