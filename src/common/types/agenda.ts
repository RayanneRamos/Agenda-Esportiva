export type Dados = {
  nome: string,
  link: string,
}

export type Campeonatos = {
  campeonatos: Array<Campeonato>, 
}

export type Campeonato = {
  campeonato: string,
  jogos: Array<Jogo>
}

export type Jogo = {
  modalidade: string,
  etapa: string,
  data: string,
  hora: string,
  link: string,
  mandante: {
    nome: string,
    urlImagem: string,
  },
  visitante: {
    nome: string,
    urlImagem: string
  }
}

export type Agenda = {
  jogo: Array<Jogo>
}