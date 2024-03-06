document.addEventListener("DOMContentLoaded", function() {
  const tableTeams = document.getElementById("tableTeams");
  const tbody = tableTeams.querySelector("tbody");
  const teams = Array.from(tbody.querySelectorAll("tr"));
  let sortingDirection = '';

  document.getElementById("QualifiedTeams").addEventListener("change", function() {
    const checkbox = document.getElementById("QualifiedTeams");
    
    if (checkbox.checked) {
      for (let i = 4; i < teams.length; i++) {
        teams[i].style.display = "none";
      }
    } else {
      teams.forEach(team => {
        team.style.display = "";
      });
    }
  });

  document.querySelectorAll('input[type="radio"][name="sorting"]').forEach(radio => {
    radio.addEventListener("change", function() {
      sortingDirection = this.value;
      sortTeams(sortingDirection);
    });
  });

  function sortTeams(direction) {
    teams.sort((a, b) => {
      const pointsA = parseInt(a.lastElementChild.textContent);
      const pointsB = parseInt(b.lastElementChild.textContent);
      if (direction === 'ascending') {
        return pointsA - pointsB;
      } else if (direction === 'descending') {
        return pointsB - pointsA;
      }
    });

    teams.forEach((team, index) => {
      tbody.appendChild(team);
    });
  }
});
