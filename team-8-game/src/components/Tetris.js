import "./Tetris.css";
import Board from "./BoardTal";
import GameStats from "./GameStats";
import Preview from "./Preview";
import GameController from "./GameController";
import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePLayer } from "../hooks/usePlayer";

const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePLayer();
  const [board, setBoard] = useBoard({ 
    rows, 
    columns,
    player,
    resetPlayer,
    addLinesCleared
 });

  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Preview tetrominoes={player.tetrominoes} />
      <GameController
      board={board}
      gameStats={gameStats}
      player={player}
      setGameOver={setGameOver}
      setPlayer={setPlayer} />
    </div>
  );
};

export default Tetris;