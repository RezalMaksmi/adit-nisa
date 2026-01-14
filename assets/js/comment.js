const btnComment = document.getElementById("btn-comment");
const cardForm = document.getElementById("card-comment");

btnComment.addEventListener("click", function () {
  cardForm.classList.toggle("active");
});
