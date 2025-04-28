const fetchGames = async () => {
  try {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();
    const gamesContainer = document.getElementById("games-container");

    data.games.forEach(game => {
      const card = document.createElement('div');
      card.className = 'game-card';

      const name = document.createElement('h3');
      name.innerText = game.name;

      const description = document.createElement('p');
      description.innerText = game.description;

      const button = document.createElement('button');
      button.className = 'game-button';
      button.innerText = 'Play';
      button.onclick = () => {
        window.location.href = `http://localhost:3000/${game.file_location}`;
      }

      card.appendChild(name);
      card.appendChild(description);
      card.appendChild(button);

      gamesContainer.appendChild(card);
    });
  } catch (error) {
    console.error(`Error fetching games: ${error}`);
  }
};

fetchGames();