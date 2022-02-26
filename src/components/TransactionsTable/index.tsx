import React, { useContext } from 'react';

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useTheme } from 'styled-components';

import { TransactionContext } from '../../contexts/TransactionContext';
import { TransactionModalContext } from '../../contexts/TransactionModalContext';
import { formatPrice } from '../../utils/formatPrice';
import * as S from './styles';

export default function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);
  const { editTransactionModal } = useContext(TransactionModalContext);
  const theme = useTheme();

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <S.TableTheadItem>Título</S.TableTheadItem>
            <S.TableTheadItem>Valor</S.TableTheadItem>
            <S.TableTheadItem>Categoria</S.TableTheadItem>
            <S.TableTheadItem>Data</S.TableTheadItem>
            <S.TableTheadItem>Ações</S.TableTheadItem>
          </tr>
        </thead>
        <tbody>
          {transactions?.map(
            ({ id, amount, category, createdAt, title, type }) => (
              <tr key={id}>
                <S.TableTbodyItem>{title}</S.TableTbodyItem>
                <S.TableTbodyItem type={type}>
                  {type === 'deposit' ? '+ ' : '- '}
                  {formatPrice(amount)}
                </S.TableTbodyItem>
                <S.TableTbodyItem>{category}</S.TableTbodyItem>
                <S.TableTbodyItem>
                  {new Intl.DateTimeFormat().format(new Date(createdAt))}
                </S.TableTbodyItem>
                <S.TableTbodyItem>
                  <S.TableTbodyActions>
                    <AiOutlineEdit
                      size={25}
                      color={theme.colors.blueLight}
                      onClick={() =>
                        editTransactionModal({
                          id,
                          amount,
                          category,
                          createdAt,
                          title,
                          type,
                        })
                      }
                    />
                    <AiOutlineDelete size={25} color={theme.colors.red} />
                  </S.TableTbodyActions>
                </S.TableTbodyItem>
              </tr>
            ),
          )}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
