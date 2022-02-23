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

export const TableTbodyItem = styled.td<{ value?: number }>`
  padding: 1rem 2rem;
  border: 0;
  background-color: ${({ theme }) => theme.colors.shape};
  ${({ theme, value }) =>
    value
      ? css`
          color: ${theme.colors.red || theme.colors.green};
        `
      : css`
          color: ${theme.colors.textBody};
        `};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:first-child {
    color: ${({ theme }) => theme.colors.textTitle};
  }
`;
