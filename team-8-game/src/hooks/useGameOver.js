import { useCallback, useState } from "react";

export const useGameOver = () => {
  const [gameOver, setGameover] = useState(true);

  const resetGameOver = useCallback(() => {
    setGameover(false);
  }, []);

  return [gameOver, setGameover, resetGameOver];
};