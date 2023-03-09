import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { BeerList } from './BeerList/BeerList';
export function App() {
  return (
    <div>
      <Searchbar />
      <BeerList />
    </div>
  );
}
