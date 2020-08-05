//Drawing the  grid on  the  canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const row = 10;
const colum = 10;
canvas.width = 800;
canvas.height = 800;
const cellWidth = 80;
const cellHeight = 80;

ctx.fillStyle = '#fff';

function drawBoard() {
	for (let r = 0; r < row; r++) {
		for (let c = 0; c < colum; c++) {
			ctx.save();
			ctx.translate(c * cellWidth, r * cellHeight);
			ctx.fillRect(5, 5, cellWidth - 10, cellHeight - 10);
			ctx.restore();
		}
	}
}

drawBoard();

// Drawing Obstacle on the canvas
function drawObstacle() {

	let img = new Image();
	img.onload = function() {
	  for (let i = 0; i < 10; i++) {
		let randomPositionX = Math.floor(Math.random() * 9) * cellWidth;
		let randomPositionY = Math.floor(Math.random() * 9) * cellHeight;
		  ctx.drawImage(img, randomPositionX,randomPositionY,70 ,70);
		
	  }
	
	};
    img.src = 'img/dragon.png';

	
  }
drawObstacle();




//Drawing the weapons on the board
let Draw = function  (name,damage,image) {
    this.name = name;
    this.damage = damage;
	this.image = image;
	

}
 Draw.prototype.drawImage = function () {
	image = new Image();
	image.src = this.image;

	let randomPositionX = Math.floor(Math.random() * 9) * cellWidth;
	let randomPositionY = Math.floor(Math.random() * 9) * cellHeight;
	ctx.drawImage(image, randomPositionX, randomPositionY, 70, 70);



};




let orc = new Draw('orc', 10, 'img/orcwarrior.png');
let human = new Draw('human',10, 'img/humanwarrior.png');
let bow = new Draw('bow', 50, 'img/bow.png')
let axe = new Draw('axe', 20, 'img/axe.png')
let hammer = new Draw('hammer', 30, 'img/hammer.png')
let sword = new Draw('sword',40, 'img/sword.png');





orc.drawImage();
human.drawImage();
bow.drawImage()
axe.drawImage()
hammer.drawImage()
sword.drawImage()






























































































// function drawBow() {
//     let image = new Image();
//     image.onload = function () {
//     let randomPositionX = Math.floor(Math.random() * 9) * cellWidth;
// 		let randomPositionY = Math.floor(Math.random() * 9) * cellHeight;
// 		  ctx.drawImage(image, randomPositionX,randomPositionY,70 ,70);
// }
// image.src = 'img/bow.png'
// }
// drawBow();

// function drawAxe() {
//     let image = new Image();
//     image.onload = function () {
//     let randomPositionX = Math.floor(Math.random() * 9) * cellWidth;
// 		let randomPositionY = Math.floor(Math.random() * 9) * cellHeight;
// 		  ctx.drawImage(image, randomPositionX,randomPositionY,70 ,70);
// }
// image.src = 'img/axe.png'
// }
// drawAxe();
// function drawHammer() {
//     let image = new Image();
//     image.onload = function () {
//     let randomPositionX = Math.floor(Math.random() * 9) * cellWidth;
// 		let randomPositionY = Math.floor(Math.random() * 9) * cellHeight;
// 		  ctx.drawImage(image, randomPositionX,randomPositionY,70 ,70);
// }
// image.src = 'img/hammer.png'
// }
// drawHammer();
// function drawSword() {
//     let image = new Image();
//     image.onload = function () {
//     let randomPositionX = Math.floor(Math.random() * 9) * cellWidth;
// 		let randomPositionY = Math.floor(Math.random() * 9) * cellHeight;
// 		  ctx.drawImage(image, randomPositionX,randomPositionY,70 ,70);
// }
// image.src = 'img/sword.png'
// }
// drawSword();

// function drawPlayer1() {
//     let image = new Image();
//     image.onload = function () {
//     let randomPositionX = Math.floor(Math.random() * 9) * cellWidth;
// 		let randomPositionY = Math.floor(Math.random() * 9) * cellHeight;
// 		  ctx.drawImage(image, randomPositionX,randomPositionY,70 ,70);
// }
// image.src = 'img/humanwarrior.png'
// }
// drawPlayer1();
// function drawPlayer2() {
//     let image = new Image();
//     image.onload = function () {
//     let randomPositionX = Math.floor(Math.random() * 9) * cellWidth;
// 		let randomPositionY = Math.floor(Math.random() * 9) * cellHeight;
// 		  ctx.drawImage(image, randomPositionX,randomPositionY,70 ,70);
// }
// image.src = 'img/orcwarrior.png'
// }
// drawPlayer2()