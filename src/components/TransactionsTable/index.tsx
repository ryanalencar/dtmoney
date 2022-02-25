import React, { useContext } from 'react';

import { TransactionContext } from '../../contexts/TransactionContext';
import * as S from './styles';

export default function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);
  const { locale } = Intl.DateTimeFormat().resolvedOptions();

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <S.TableTheadItem>Título</S.TableTheadItem>
            <S.TableTheadItem>Valor</S.TableTheadItem>
            <S.TableTheadItem>Categoria</S.TableTheadItem>
            <S.TableTheadItem>Data</S.TableTheadItem>
          </tr>
        </thead>
        <tbody>
          {transactions?.map(
            ({ id, amount, category, createdAt, title, type }) => (
              <tr key={id}>
                <S.TableTbodyItem>{title}</S.TableTbodyItem>
                <S.TableTbodyItem type={type}>
                  {new Intl.NumberFormat(locale, {
                    style: 'currency',
                    currency: locale === 'pt-BR' ? 'BRL' : 'USD',
                  }).format(amount)}
                </S.TableTbodyItem>
                <S.TableTbodyItem>{category}</S.TableTbodyItem>
                <S.TableTbodyItem>
                  {new Intl.DateTimeFormat().format(new Date(createdAt))}
                </S.TableTbodyItem>
              </tr>
            ),
          )}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
