import React, {useEffect , useState} from 'react';
import '../styles/Bejeweled.css'
import blank from '../assets/jewels/blank.png';
import blue from '../assets/jewels/blue.png';
import gold from '../assets/jewels/gold.png';
import green from '../assets/jewels/green.png';
import purlple from '../assets/jewels/purlple.png';
import red from '../assets/jewels/red.png';
import silver from '../assets/jewels/silver.png';
import yellow from '../assets/jewels/yellow.png';


    const Bejeweled = () => {
        const jewels = [blank, blue, gold, green, purlple, red, silver, yellow];
        const board = [];
        const rows = 8;
        const columns = 8;
        const timeLeft = document.querySelector('#time-left')

        let score = 0
        let maxScore = 800
        let currentTime = 120
        let timerId = null

        let currTile;
        let otherTile;

        useEffect(() => {
            startGame();

            window.setInterval(function () {
                crushJewel();
                slideJewel();
                generateJewel();
                Countdown();
            }, 100);
        }, [])

        function randomJewel() {
            console.log(jewels);
            return jewels[Math.floor(Math.random() * jewels.length)]; //0 - 6.99
        }

        function startGame() {
            for (let r = 0; r < rows; r++) {
                let row = [];
                for (let c = 0; c < columns; c++) {
                    console.log(randomJewel())
                    // <img id="0-0" src="./jewels/red.png">
                    let tile = document.createElement("img");
                    tile.id = r.toString() + "-" + c.toString();
                    // tile.src = randomJewel();
                    // tile.src = './assets/images/jewels/' + randomJewel() + ".png";

                    //DRAG FUNCTIONALITY
                    tile.addEventListener("dragstart", dragStart); //click on a candy, initialize drag process
                    tile.addEventListener("dragover", dragOver);  //clicking on candy, moving mouse to drag the candy
                    tile.addEventListener("dragenter", dragEnter); //dragging candy onto another candy
                    tile.addEventListener("dragleave", dragLeave); //leave candy over another candy
                    tile.addEventListener("drop", dragDrop); //dropping a candy over another candy
                    tile.addEventListener("dragend", dragEnd); //after drag process completed, we swap candies

                    document.getElementById("grid").append(tile);

                    row.push(tile);
                }
                board.push(row);
            }

            console.log(board);
        }

        function dragStart() {
            //this refers to tile that was clicked on for dragging
            currTile = this;
        }

        function dragOver(e) {
            e.preventDefault();
        }

        function dragEnter(e) {
            e.preventDefault();
        }

        function dragLeave() {

        }

        function dragDrop() {
            //this refers to the target tile that was dropped on
            otherTile = this;
        }

        function dragEnd() {

            if (currTile.src.includes(blank) || otherTile.src.includes(blank)) {
                return;
            }

            let currCoords = currTile.id.split("-"); // id="0-0" -> ["0", "0"]
            let r = parseInt(currCoords[0]);
            let c = parseInt(currCoords[1]);

            let otherCoords = otherTile.id.split("-");
            let r2 = parseInt(otherCoords[0]);
            let c2 = parseInt(otherCoords[1]);

            let moveLeft = c2 === c - 1 && r === r2;
            let moveRight = c2 === c + 1 && r === r2;

            let moveUp = r2 === r - 1 && c === c2;
            let moveDown = r2 === r + 1 && c === c2;

            let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

            if (isAdjacent) {
                let currImg = currTile.src;
                let otherImg = otherTile.src;
                currTile.src = otherImg;
                otherTile.src = currImg;

                let validMove = checkValid();
                if (!validMove) {
                    let currImg = currTile.src;
                    let otherImg = otherTile.src;
                    currTile.src = otherImg;
                    otherTile.src = currImg;
                }
            }
        }

        let message;

        //Setting timer
        function Countdown()  {
            const [seconds,setSeconds]=useState(0);
            const [minutes,setMinutes]=useState(0);

            let timer;
            useEffect(() => {
                timer= setInterval(() => {
                    setSeconds(seconds+1);

                    if(seconds === 59){
                        setMinutes(minutes+1);
                        setSeconds(0);
                    }
                },1000)

                return ()=> clearInterval(timer);
            })
        }

        function crushJewel() {
            crushFive();
            crushFour();
            crushThree();
            document.getElementById("score").innerText = score;

        }

        function crushThree() {
            //check rows
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns - 2; c++) {
                    let jewel1 = board[r][c];
                    let jewel2 = board[r][c + 1];
                    let jewel3 = board[r][c + 2];
                    if (jewel1.src === jewel2.src & jewel2.src === jewel3.src && !jewel1.src.includes(blank)) {
                        jewel1.src = blank;
                        jewel2.src = blank;
                        jewel3.src = blank;
                        score += 30;
                    }
                }
            }

            //check columns
            for (let c = 0; c < columns; c++) {
                for (let r = 0; r < rows - 2; r++) {
                    let jewel1 = board[r][c];
                    let jewel2 = board[r + 1][c];
                    let jewel3 = board[r + 2][c];
                    if (jewel1.src === jewel2.src && jewel2.src === jewel3.src && !jewel1.src.includes(blank)) {
                        jewel1.src = blank;
                        jewel2.src = blank;
                        jewel3.src = blank;
                        score += 30;
                    }
                }
            }
        }

        function crushFour() {
            //check rows
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns - 3; c++) {
                    let jewel1 = board[r][c];
                    let jewel2 = board[r][c + 1];
                    let jewel3 = board[r][c + 2];
                    let jewel4 = board[r][c + 3];
                    if (jewel1.src === jewel2.src & jewel2.src === jewel3.src && jewel3.src === jewel4.src && !jewel1.src.includes(blank)) {
                        jewel1.src = blank;
                        jewel2.src = blank;
                        jewel3.src = blank;
                        jewel4.src = blank;
                        score += 40;
                    }
                }
            }

            //check columns
            for (let c = 0; c < columns; c++) {
                for (let r = 0; r < rows - 3; r++) {
                    let jewel1 = board[r][c];
                    let jewel2 = board[r + 1][c];
                    let jewel3 = board[r + 2][c];
                    let jewel4 = board[r + 3][c];
                    if (jewel1.src === jewel2.src && jewel2.src === jewel3.src && jewel3.src === jewel4.src && !jewel1.src.includes(blank)) {
                        jewel1.src = blank;
                        jewel2.src = blank;
                        jewel3.src = blank;
                        jewel4.src = blank;
                        score += 40;
                    }
                }
            }
        }

        function crushFive() {
            //check rows
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns - 4; c++) {
                    let jewel1 = board[r][c];
                    let jewel2 = board[r][c + 1];
                    let jewel3 = board[r][c + 2];
                    let jewel4 = board[r][c + 3];
                    let jewel5 = board[r][c + 4];
                    if (jewel1.src === jewel2.src & jewel2.src === jewel3.src && jewel3.src === jewel4.src && jewel4.src === jewel5.src && !jewel1.src.includes(blank)) {
                        jewel1.src = blank;
                        jewel2.src = blank;
                        jewel3.src = blank;
                        jewel4.src = blank;
                        jewel5.src = blank;
                        score += 50;
                    }
                }
            }

            //check columns
            for (let c = 0; c < columns; c++) {
                for (let r = 0; r < rows - 4; r++) {
                    let jewel1 = board[r][c];
                    let jewel2 = board[r + 1][c];
                    let jewel3 = board[r + 2][c];
                    let jewel4 = board[r + 3][c];
                    let jewel5 = board[r + 3][c];
                    if (jewel1.src === jewel2.src && jewel2.src === jewel3.src && jewel3.src === jewel4.src && jewel4.src === jewel5.src && !jewel1.src.includes(blank)) {
                        jewel1.src = blank;
                        jewel2.src = blank;
                        jewel3.src = blank;
                        jewel4.src = blank;
                        jewel5.src = blank;
                        score += 50;
                    }
                }
            }
        }

        function checkValid() {
            //check rows
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < columns - 2; c++) {
                    let jewel1 = board[r][c];
                    let jewel2 = board[r][c + 1];
                    let jewel3 = board[r][c + 2];
                    if (jewel1.src === jewel2.src && jewel2.src === jewel3.src && !jewel1.src.includes(blank)) {
                        return true;
                    }
                }
            }

            //check columns
            for (let c = 0; c < columns; c++) {
                for (let r = 0; r < rows - 2; r++) {
                    let jewel1 = board[r][c];
                    let jewel2 = board[r + 1][c];
                    let jewel3 = board[r + 2][c];
                    if (jewel1.src === jewel2.src && jewel2.src === jewel3.src && !jewel1.src.includes(blank)) {
                        return true;
                    }
                }
            }

            return false;
        }


        function slideJewel() {
            for (let c = 0; c < columns; c++) {
                let ind = rows - 1;
                for (let r = columns - 1; r >= 0; r--) {
                    if (!board[r][c].src.includes(blank)) {
                        board[ind][c].src = board[r][c].src;
                        ind -= 1;
                    }
                }

                for (let r = ind; r >= 0; r--) {
                    board[r][c].src = blank;
                }
            }
        }

        function generateJewel() {
            for (let c = 0; c < columns; c++) {
                if (board[0][c].src.includes(blank)) {
                    board[0][c].src = randomJewel();
                }
            }
        }

        function refreshPage(){
            window.location.reload();
        }

        let minutes;
        let seconds;
        return (
            <>
                <div className="body-playfield">
                    <div className="score-board">
                        <h2 className="title">Bejeweled</h2>
                        <div className="points">
                            <h3>score</h3>
                            <h4 id="score"></h4>
                        </div>
                        <button className="btn-restart" type="button" onClick={ refreshPage }> <span>Restart Game</span> </button>
                        <div className="timer">
                            <h3>Time Left:</h3>
                            <h2 id="time-left">{minutes}:{seconds}</h2>
                        </div>
                    </div>
                    <div className="grid" id="grid"></div>
                </div>
            </>
        )
    }

export default Bejeweled;