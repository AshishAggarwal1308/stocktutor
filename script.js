document.addEventListener("DOMContentLoaded", function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
// document.addEventListener('mousemove', (e) => {
//     const smokeCursor = document.createElement('div');
//     smokeCursor.className = 'smoke-cursor';
//     document.body.appendChild(smokeCursor);
  
//     const x = e.clientX;
//     const y = e.clientY;
  
//     smokeCursor.style.left = `${x}px`;
//     smokeCursor.style.right = `${x}px`;
//     smokeCursor.style.top = `${y}px`;
//     smokeCursor.style.bottom = `${y}px`;
  
//     setTimeout(() => {
//       smokeCursor.remove();
//     }, 2000);
//   });
  