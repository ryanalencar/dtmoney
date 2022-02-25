import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';
import * as S from './styles';

interface ITransaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
}

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  console.log(transactions);

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
                <S.TableTbodyItem>{amount}</S.TableTbodyItem>
                <S.TableTbodyItem>{category}</S.TableTbodyItem>
                <S.TableTbodyItem>{createdAt}</S.TableTbodyItem>
              </tr>
            ),
          )}
        </tbody>
      </S.Table>
    </S.Container>
  );
}
