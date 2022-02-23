import React from 'react';

import * as S from './styles';

export default function TransactionsTable() {
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
          <tr>
            <S.TableTbodyItem>Desenvolvimento de website</S.TableTbodyItem>
            <S.TableTbodyItem value={12000}>R$12.000</S.TableTbodyItem>
            <S.TableTbodyItem>Desenvolvimento</S.TableTbodyItem>
            <S.TableTbodyItem>23/02/2022</S.TableTbodyItem>
          </tr>
          <tr>
            <S.TableTbodyItem>Aluguel</S.TableTbodyItem>
            <S.TableTbodyItem>R$1540</S.TableTbodyItem>
            <S.TableTbodyItem>Casa</S.TableTbodyItem>
            <S.TableTbodyItem>23/02/2022</S.TableTbodyItem>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  );
}
