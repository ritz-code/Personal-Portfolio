import { useContext } from "react";
import { ThemeContext } from '../App';

const ThemeStyles = () => {
  const { darkTheme } = useContext(ThemeContext);

  return {
    backgroundColor: darkTheme ? '#1a1b1e' : '#edeae5',
    color: darkTheme ? '#f3f2f9' : '#1d1d1f'
  }
}

export default ThemeStyles;