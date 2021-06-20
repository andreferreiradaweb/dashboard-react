import React from 'react'

import { ChartBar } from '../../components/charts/chartBar'
import { ChartPie } from '../../components/charts/chartPie'
import { Layout } from '../../layout'
import { Icon } from '../../components/icon'
import { Buttom } from '../../components/button'
import DashboardImage2 from '../../assets/img/dashboard-image2.png'

import { GrUnorderedList } from 'react-icons/gr'
import { BiBox } from 'react-icons/bi'
import { AiOutlineFundView } from 'react-icons/ai'

import {
  Wrapper,
  Row,
  Block,
  Image,
  Title,
  Description,
  Value,
  ColumnRow,
  IconStyled
} from './styled'

export const Home = () => {
  return (
    <Layout>
      <Wrapper>
        <Row spaceBetween>
          <Block
            vertical
            alignItems='flex-start'
            BgDisabled
          >
            <Title>Geral</Title>
            <Description>Resumo de todas as informações.</Description>
          </Block>
          <Block
            vertical
            alignItems='flex-end'
            BgDisabled
          >
            <Buttom secondary>+Adicionar Widget</Buttom>
          </Block>
        </Row>
        <Row>
          <Block heightFixed>
            <Title>Total de Vendas:</Title>
            <ColumnRow>
              <IconStyled color='var(--green)'>
                <Icon color='var(--white-bg)' size='25' icon={BiBox} />
              </IconStyled>
              <Value color='var(--green)'>12345</Value>
            </ColumnRow>
          </Block>

          <Block heightFixed>
            <Title>Total de Pedidos:</Title>
            <ColumnRow>
              <IconStyled color='var(--red)'>
                <Icon color='var(--white-bg)' size='25' icon={GrUnorderedList} />
              </IconStyled>
              <Value color='var(--red)'>3290</Value>
            </ColumnRow>
          </Block>

          <Block heightFixed>
            <Title>Total de Acessos:</Title>
            <ColumnRow>
              <IconStyled color='var(--yellow)'>
                <Icon color='var(--white-bg)' size='25' icon={AiOutlineFundView} />
              </IconStyled>
              <Value color='var(--yellow)'>23679</Value>
            </ColumnRow>
          </Block>
        </Row>
        <Row>
          <Block
            vertical 
            justifyContent='space-around'
          >
            <Image src={DashboardImage2} />
            <Buttom>Adquira o plano Pro</Buttom>
          </Block>
          <Block
            vertical 
            justifyContent='space-between'
          >
            <Title secondary>Percentual das vendas:</Title>
            <ChartPie />
          </Block>
          <Block
            className="lastchild" 
            vertical 
            justifyContent='space-between'
          >
            <Title secondary>Desempenho mensal:</Title>
            <ChartBar />
          </Block>
        </Row>
      </Wrapper>
    </Layout>
  )
}
