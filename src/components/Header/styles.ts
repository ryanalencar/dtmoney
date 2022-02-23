import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.blueLight};
  border: 0;
  padding: 0rem 2rem;
  border-radius: 0.25rem;
  height: 3rem;

  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;
