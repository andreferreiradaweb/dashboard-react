import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1024px;

  @media screen and (max-width: 1224px) {
    width: 900px;
  }
  @media screen and (max-width: 1096px) {
    width: 800px;
  }
  @media screen and (max-width: 996px) {
    width: 700px;
  }
  @media screen and (max-width: 894px) {
    width: 600px;
  }
  @media screen and (max-width: 792px) {
    width: 500px;
  }
  @media screen and (max-width: 698px) {
    width: 400px;
  }
  @media screen and (max-width: 594px) {
    width: 300px;
  }
  @media screen and (max-width: 492px) {
    width: 250px;
  }
  @media screen and (max-width: 446px) {
    width: 220px;
  }
  @media screen and (max-width: 414px) {
    width: 210px;
  }
  @media screen and (max-width: 402px) {
    width: 200px;
  }
  @media screen and (max-width: 392px) {
    width: 190px;
  }
  @media screen and (max-width: 382px) {
    width: 170px;
  }
  @media screen and (max-width: 362px) {
    width: 160px;
  }
  @media screen and (max-width: 352px) {
    width: 150px;
  }
  @media screen and (max-width: 342px) {
    width: 140px;
  }
  @media screen and (max-width: 332px) {
    width: 130px;
  }
  @media screen and (max-width: 320px) {
    width: 120px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ spaceBetween }) => spaceBetween ? 'space-between' : 'center'};
  width: 100%;

  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 792px) {
    justify-content: center;
  }
`

export const Block = styled.div`
  width: 320px;
  background: ${({ BgDisabled }) => BgDisabled ? 'transparent' : 'var(--white-bg)'};
  height: ${({ heightFixed }) => heightFixed ? '100px' : 'auto'};
  margin: 10px;
  padding: ${({ BgDisabled }) => BgDisabled ? '0' : '10px'};
  display: flex;
  flex-direction: ${({ vertical }) => vertical ? 'column' : 'row'};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
  align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};;
  flex-wrap: wrap;
  box-shadow: ${({ BgDisabled }) => BgDisabled ? 'none' : '0px 0px 26px 8px rgba(0,0,0,0.1)'};

  @media screen and (max-width: 894px) {
    width: 280px;
  }
  @media screen and (max-width: 792px) {
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 532px) {
    min-width: 100%;
  }
  @media screen and (max-width: 420px) {
    min-width: 100%;
  }
`

export const ColumnRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const IconStyled = styled.div`
  width: 32px;
  height: 32px;
  margin: 0 10px;
  border-radius: 50%;
  background: ${({ color }) => color ? color : ''};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 352px) {
    display: none;
  }
`

export const Image = styled.img`
  width: 100px;
  height: auto;

  @media screen and (max-width: 792px) {
    width: 70px;
  }
`

export const Title = styled.strong`
  color: var(--text);
  font-size: ${({ secondary }) => secondary ? '16px' : '22px'};
  font-weight: ${({ secondary }) => secondary ? '500' : '800'};

  @media screen and (max-width: 446px) {
    font-size: 14px;
  }
  @media screen and (max-width: 382px) {
    font-size: 12px;
    text-align: center;
  }
`

export const Description = styled.p`
  color: var(--text);
  font-size: 12px;

  @media screen and (max-width: 402px) {
    text-align: center;
  }
`

export const Value = styled.p`
  color: ${({ color }) => color ? color : ''};
  font-size: 40px;
  font-weight: 800;
  margin: 0 10px;

  @media screen and (max-width: 444px) {
    font-size: 28px;
  }
  @media screen and (max-width: 393px) {
    font-size: 22px;
  }
`