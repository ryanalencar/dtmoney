import React from 'react';

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { useTheme } from 'styled-components';

import { useModal } from '../../hooks/useModal';
import { useTransactions } from '../../hooks/useTransactions';
import { formatPrice } from '../../utils/formatPrice';
import * as S from './styles';

export default function TransactionsTable() {
  const { transactions } = useTransactions();
  const { toggleEditModal } = useModal();
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
                    <S.TableActionButton
                      onClick={() =>
                        toggleEditModal({
                          id,
                          amount,
                          category,
                          createdAt,
                          title,
                          type,
                        })
                      }>
                      <AiOutlineEdit size={25} color={theme.colors.blueLight} />
                    </S.TableActionButton>
                    <S.TableActionButton>
                      <AiOutlineDelete size={25} color={theme.colors.red} />
                    </S.TableActionButton>
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
