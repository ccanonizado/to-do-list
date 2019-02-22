import { css } from "lit-element";

export const styles = css`
  .center {
    display: flex;
    justify-content: center;
  }

  .title-bar {
    background-color: #f5f5f5;
    text-align: center;
  }

  .title-bar h1 {
    font-weight: bold;
    color: #212121;
    font-size: 4em;
    padding: 0.2em;
    margin: 0;
  }

  .block-input {
    display: flex;
    justify-content: center;
    max-width: 90%;
    margin: 0 auto;
  }

  .block-item {
    display: flex;
    justify-content: center;
    max-width: 90%;
    margin: 0 auto;
    margin-bottom: 1em;
  }

  .input-label {
    color: #f5f5f5;
    font-size: 1.3em;
    text-align: center;
  }

  .input-res {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Barlow", sans-serif;
    color: #212121;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    max-width: 500px;
    background-color: #f5f5f5;
    border: none;
    padding: 10px 11px 11px 11px;
    border-radius: 3px;
    box-shadow: none;
    outline: none;
    margin: 0;
    box-sizing: border-box;
  }

  .item-res {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: "Barlow", sans-serif;
    color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    max-width: 500px;
    background-color: #212121;
    border: 2px solid #f5f5f5;
    padding: 10px 11px 11px 11px;
    border-radius: 3px;
    box-shadow: none;
    outline: none;
    margin: 0;
    box-sizing: border-box;
  }

  .btn {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid #81c784;
    border-radius: 1em;
    color: #81c784;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-family: "Barlow", sans-serif;
    line-height: 1;
    margin: 20px;
    padding: 1em 1.5em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
  }

  .btn:hover {
    color: #f5f5f5;
    outline: 0;
  }

  .btn:focus {
    color: #f5f5f5;
    outline: 0;
  }

  .btn-transition {
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  }

  .btn-transition:hover {
    box-shadow: 0 0 40px 40px #81c784 inset;
  }

  .btn-x {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid #e57373;
    border-radius: 100%;
    color: #e57373;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1.5rem;
    font-family: "Barlow", sans-serif;
    line-height: 1;
    margin-left: 10px;
    padding: 0.2em 0.4em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 1000;
  }

  .btn-x:hover {
    color: #f5f5f5;
    outline: 0;
  }

  .btn-x:focus {
    color: #f5f5f5;
    outline: 0;
  }

  .btn-x-transition {
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  }

  .btn-x-transition:hover {
    box-shadow: 0 0 40px 40px #e57373 inset;
  }
`;
