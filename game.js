const board = [
	[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
	[-1,  0,  0,  0,  0,  0,  0,  0,  0, -1],
	[-1,  0,  0,  0,  0,  0,  0,  0,  0, -1],
	[-1,  0,  0,  0,  0,  0,  0,  0,  0, -1],
	[-1,  0,  0,  0,  2,  1,  0,  0,  0, -1],
	[-1,  0,  0,  0,  1,  2,  0,  0,  0, -1],
	[-1,  0,  0,  0,  0,  0,  0,  0,  0, -1],
	[-1,  0,  0,  0,  0,  0,  0,  0,  0, -1],
	[-1,  0,  0,  0,  0,  0,  0,  0,  0, -1],
	[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

const drawBoard = () => {
	const div = document.getElementById("game");
	while (div.hasChildNodes()) { div.removeChild(divv.firstChild); }
	
	for (let i = 1; i <= 8; i++) {
		for (let j = 1; j <= 8; j++) {
			const img = document.createElement("img");
			img.src = `img/piece${board[j][i]}.png`;
			div.append(img);
		}
		div.append(document.createElement("br"));
	}
};

drawBoard();
