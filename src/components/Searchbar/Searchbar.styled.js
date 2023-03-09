import styled from 'styled-components';
import { IoBeer } from 'react-icons/io5';
import { BiSearchAlt2 } from 'react-icons/bi';

export const Icon = styled(IoBeer)`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const IconBtn = styled(BiSearchAlt2)`
  width: 20px;
  height: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #72a6b6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0;
  padding-left: 5px;
  border: 0;
  height: 30px;
  width: 175px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.31) 48.96%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }
`;

export const Btn = styled.button`
  margin-left: 2px;
  padding: 0;
  height: 30px;
  width: 30px;
  border: none;
  background: #527681;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
