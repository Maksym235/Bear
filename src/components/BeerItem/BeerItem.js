import { Item, BeerName, Img, Description } from './BeerItem.styled';

export function BeerItem() {
  return (
    <Item>
      <Img />
      <BeerName>IPA</BeerName>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia culpa
        aut alias dolorum nemo, doloribus consectetur voluptatibus molestiae
        aliquid suscipit magni. Dolorem nam sunt dicta possimus impedit, illo
        maxime esse!
      </Description>
    </Item>
  );
}
