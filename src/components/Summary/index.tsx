import React from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import * as S from './styles';

export default function Summary() {
  return (
    <S.Container>
      <S.SummaryCard>
        <S.SummaryCardHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </S.SummaryCardHeader>
        <S.SummaryCardValue>R$1000,00</S.SummaryCardValue>
      </S.SummaryCard>
      <S.SummaryCard>
        <S.SummaryCardHeader>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </S.SummaryCardHeader>
        <S.SummaryCardValue>R$1000,00</S.SummaryCardValue>
      </S.SummaryCard>
      <S.SummaryCard>
        <S.SummaryCardHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </S.SummaryCardHeader>
        <S.SummaryCardValue>R$1000,00</S.SummaryCardValue>
      </S.SummaryCard>
    </S.Container>
  );
}
