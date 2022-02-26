import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
`;

export const TableTheadItem = styled.th`
  color: ${({ theme }) => theme.colors.textBody};
  font-weight: 400;
  padding: 1rem 2rem;
  text-align: left;
  line-height: 1.5rem;
`;

export const TableTbodyItem = styled.td<{ type?: 'deposit' | 'withdraw' }>`
  padding: 1rem 2rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme, type }) => {
    if (type) {
      if (type === 'withdraw') {
        return css`
          color: ${theme.colors.red};
        `;
      }
      return css`
        color: ${theme.colors.green};
      `;
    }
    return css`
      color: ${theme.colors.textBody};
    `;
  }};

  &:first-child {
    color: ${({ theme }) => theme.colors.textTitle};
  }
`;

export const TableTbodyActions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TableActionButton = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
