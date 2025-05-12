  const searchInput = document.getElementById('courseSearch');
  const cards = document.querySelectorAll('.card-box');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();

    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(query) || query === '') {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  });





//   const searchInput = document.getElementById("courseSearch");

//   searchInput.addEventListener("input", function () {
//     const searchTerm = this.value.toLowerCase().trim();
//     const cards = document.querySelectorAll(".card-box");

//     cards.forEach((card) => {
//       const title = card.querySelector(".card-title").textContent.toLowerCase();
//       if (title.includes(searchTerm)) {
//         card.parentElement.style.display = "block";
//       } else {
//         card.parentElement.style.display = "none";
//       }
//     });
//   });

