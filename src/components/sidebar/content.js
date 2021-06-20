import { MdDataUsage } from 'react-icons/md'
import { GrUnorderedList } from 'react-icons/gr'
import { BsPeople } from 'react-icons/bs'
import { BiBox } from 'react-icons/bi'
import { RiFilePaperLine, RiSettings4Line } from 'react-icons/ri'

export const Items = [
  {
    id: '0',
    icon: <MdDataUsage size='100%' />,
    title: 'Geral',
    path: '/'
  },
  {
    id: '1',
    icon: <GrUnorderedList size='100%' />,
    title: 'Pedidos',
    path: '/pedidos'
  },
  {
    id: '2',
    icon: <BiBox size='100%' />,
    title: 'Produtos',
    path: '/produtos'
  },
  {
    id: '3',
    icon: <RiSettings4Line size='100%' />,
    title: 'Configurações',
    path: '/configuracoes'
  },
  {
    id: '4',
    icon: <RiFilePaperLine size='100%' />,
    title: 'Relatórios',
    path: '/relatorios'
  },
  {
    id: '5',
    icon: <BsPeople size='100%' />,
    title: 'Usuários',
    path: '/usuarios'
  },
]
