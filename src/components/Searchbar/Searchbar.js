import React from 'react';
import {
  Wrapper,
  Form,
  Input,
  Btn,
  Icon,
  Conteiner,
  IconBtn,
} from './Searchbar.styled';

export function Searchbar() {
  return (
    <Wrapper>
      <Form>
        <Icon />
        <Conteiner>
          <Input name="name" placeholder="Enter beer name" />
          <Btn type="submit">
            <IconBtn />
          </Btn>
        </Conteiner>
      </Form>
    </Wrapper>
  );
}
