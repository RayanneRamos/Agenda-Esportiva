export type Campeonato = {
  campeonato: string,
  jogos: Array<Jogo>
}

export type Jogo = {
  modalidade: string,
  etapa: string,
  data: string,
  hora: string,
  mandante: {
    nome: string,
    urlImagem: string,
  },
  visitante: {
    nome: string,
    urlImagem: string
  }
}
