import { darken, transparentize } from 'polished';
import styled from 'styled-components';

export const FormContainer = styled.form``;

export const FormInput = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;

  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.inputBackground};

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textBody};
  }

  & + input {
    margin-top: 1rem;
  }
`;

export const FormSubmitButton = styled.button<{ isDeleting?: boolean }>`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background-color: ${({ theme, isDeleting }) =>
    isDeleting ? theme.colors.red : theme.colors.green};
  border: 0;
  margin-top: 1.5rem;

  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 600;

  transition: filter ease 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const TransactionTypeWrapper = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const TransactionTypeButton = styled.button<{
  isActive: boolean;
  activeColor: string;
}>`
  height: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: ${({ theme }) => theme.borderRadius};

  background: ${({ activeColor, isActive }) =>
    isActive && transparentize(0.8, activeColor)};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => darken(0.2, theme.colors.inputBorder)};
  }

  img {
    width: 25px;
    height: 25px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textTitle};
  }
`;
