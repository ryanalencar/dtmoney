import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';
import * as S from './styles';

interface ITransaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  category: string;
  amount: number;
  createdAt: Date;
}

export default function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const { locale } = Intl.DateTimeFormat().resolvedOptions();
  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

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
