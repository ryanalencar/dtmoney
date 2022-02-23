import logoImg from "../../assets/logo.svg";
import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dt money" />
        <S.Button>Nova transação</S.Button>
      </S.Content>
    </S.Container>
  );
};

export default Header;
