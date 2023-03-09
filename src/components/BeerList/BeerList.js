import { BeerItem } from 'components/BeerItem/BeerItem';
import { List } from './BeerList.styled';

export function BeerList() {
  return (
    <List>
      <BeerItem />
      <BeerItem />
      <BeerItem />
    </List>
  );
}
