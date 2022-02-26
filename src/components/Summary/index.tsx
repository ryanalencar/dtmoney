import React from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { formatPrice } from '../../utils/formatPrice';
import * as S from './styles';

export default function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      const { amount, type } = transaction;
      if (type === 'deposit') {
        acc.deposit += amount;
        acc.total += amount;
      } else {
        acc.withdraw += amount;
        acc.total -= amount;
      }
      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    },
  );

  return (
    <S.Container>
      <S.SummaryCard>
        <S.SummaryCardHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </S.SummaryCardHeader>
        <S.SummaryCardValue>{formatPrice(summary.deposit)}</S.SummaryCardValue>
      </S.SummaryCard>
      <S.SummaryCard>
        <S.SummaryCardHeader>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </S.SummaryCardHeader>
        <S.SummaryCardValue>{formatPrice(summary.withdraw)}</S.SummaryCardValue>
      </S.SummaryCard>
      <S.SummaryCard total>
        <S.SummaryCardHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </S.SummaryCardHeader>
        <S.SummaryCardValue>{formatPrice(summary.total)}</S.SummaryCardValue>
      </S.SummaryCard>
    </S.Container>
  );
}
