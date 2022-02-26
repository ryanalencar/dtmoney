import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`;

export const SummaryCard = styled.div<{ total?: boolean }>`
  background-color: ${({ theme, total }) =>
    total ? theme.colors.green : theme.colors.shape};
  padding: 1.5rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme, total }) =>
    total ? theme.colors.text : theme.colors.textTitle};
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const SummaryCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryCardValue = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`;
