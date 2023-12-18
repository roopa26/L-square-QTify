import React from 'react';
import ButtonComponent from "./Components/Button/Button";
import SearchBar from "./Components/Search/Search";

function App() {
  return (
    <>
      <ButtonComponent>Give Feedback</ButtonComponent>
      <SearchBar placeholder="Search a album of your choice"/>
    </>
  );
}

export default App;
