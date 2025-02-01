function toggleFaq(element) {
  const faqAnswer = element.nextElementSibling;
  const faqIcon = element.querySelector(".faq-icon");

  if (faqAnswer.style.display === "block") {
    faqAnswer.style.display = "none";
    faqIcon.textContent = "+";
  } else {
    faqAnswer.style.display = "block";
    faqIcon.textContent = "-";
  }
}