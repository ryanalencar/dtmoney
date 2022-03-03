import styled from 'styled-components';

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;

  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.colors.red : theme.colors.inputBorder};
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

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.textTitle};
  display: block;
  font-weight: bold;
  margin: 5px 0;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;
