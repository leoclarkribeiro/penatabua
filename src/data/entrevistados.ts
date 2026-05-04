/** Lista alinhada à planilha de produção (personagens / entrevistados). */

export type Entrevistado = {
  nome: string;
  titulo: string;
  local: string;
};

export type GrupoEntrevistados = {
  id: string;
  titulo: string;
  pessoas: Entrevistado[];
};

export const gruposEntrevistados: GrupoEntrevistados[] = [
  {
    id: "principais",
    titulo: "Principais",
    pessoas: [
      { nome: "André Cywinski", titulo: "Empresário", local: "SP" },
      { nome: "Andrés Pinilla", titulo: "Atleta", local: "RJ" },
      { nome: "Beto Andrade", titulo: "Empresário", local: "RJ" },
      { nome: "Bruno Granatowicz", titulo: "Empresário", local: "RJ" },
      { nome: "Caetano Penna", titulo: "Economista", local: "RJ" },
      { nome: "Dany Haiat", titulo: "Empresário", local: "RJ" },
      { nome: "Danilo", titulo: "Atleta", local: "RJ" },
      { nome: "Dario Santos", titulo: "Atleta", local: "SP" },
      { nome: "Dinho", titulo: "Vice-presidente CBDN", local: "SP" },
      { nome: "Domingos Giobbi", titulo: "Fundador da CBDN", local: "SP" },
      { nome: "Felipe Motta", titulo: "Empresário", local: "SP" },
      { nome: "Fernando Cotton", titulo: "Empresário", local: "RJ" },
      { nome: "Flávio Ascânio", titulo: "Empresário", local: "SP" },
      { nome: "Flavio Santoro", titulo: "Empresário", local: "SP" },
      { nome: "Formiga", titulo: "Empresário", local: "SC" },
      { nome: "Guilherme Mallmann", titulo: "Empresário", local: "RJ" },
      { nome: "Gustavo Bauer", titulo: "Atleta", local: "SC" },
      { nome: "Gustavo Veiga", titulo: "Músico", local: "SP" },
      { nome: "Isabel Clark", titulo: "Atleta olímpica de snowboard", local: "RJ" },
      { nome: "Joao Goes", titulo: "Brasil Ski Club", local: "SP" },
      { nome: "Ivan Fuenzalida", titulo: "Técnico de snowboard", local: "RJ" },
      { nome: "Junior Barbosa", titulo: "Atleta", local: "SP" },
      { nome: "Karina Oliani", titulo: "Atleta", local: "SP" },
      { nome: "Kurt Hoy", titulo: "Técnico de snowboard", local: "USA" },
      { nome: "Leo Clark", titulo: "Diretor do filme", local: "RJ" },
      { nome: "Leonardo Metsavaht", titulo: "Médico", local: "RJ" },
      { nome: "Leonardo Oliveira", titulo: "Empresário", local: "RJ" },
      { nome: "Lucas", titulo: "Atleta", local: "SP" },
      { nome: "Manoela Penna", titulo: "COB", local: "RJ" },
      { nome: "Marcelo Apovian", titulo: "Empresário", local: "SP" },
      { nome: "Marco Olm", titulo: "Instrutor de snowboard", local: "SP" },
      { nome: "Marcos Batista", titulo: "Atleta", local: "Japão" },
      { nome: "Mario Zulian", titulo: "Atleta", local: "USA" },
      { nome: "Maurício Natário", titulo: "Instrutor de snowboard", local: "SP" },
      { nome: "Nathali Oliani", titulo: "Atleta", local: "SP" },
      { nome: "Oskar Metsavaht", titulo: "Empresário", local: "RJ" },
      { nome: "Stefano Arnhold", titulo: "Ex-Presidente da CBDN", local: "SP" },
      { nome: "Anders Pettersson", titulo: "Presidente da CBDN", local: "SP" },
      { nome: "Pedro Cavazzoni", titulo: "CEO CBDN", local: "SP" },
      { nome: "Ricardo Moruzzi", titulo: "Atleta", local: "SP" },
      { nome: "Roberta Suplicy", titulo: "Empresária", local: "SP" },
      { nome: "Rogério Lalau", titulo: "Empresário", local: "SP" },
      { nome: "Roque", titulo: "Parque São Roque", local: "SP" },
      { nome: "Sylvio Monti", titulo: "Empresário", local: "SP" },
      { nome: "Ted Martin", titulo: "FIS", local: "USA" },
      { nome: "Tony Mallmann", titulo: "Atleta", local: "RJ" },
    ],
  },
  {
    id: "nova-geracao",
    titulo: "Nova geração",
    pessoas: [
      { nome: "Augustinho", titulo: "Atleta", local: "CA" },
      { nome: "Elenilda", titulo: "Mãe do atleta", local: "CA" },
      { nome: "Vitoria", titulo: "Para atleta", local: "RS" },
      { nome: "Paula Vitoria", titulo: "Mãe da atleta", local: "RS" },
      { nome: "Zion", titulo: "Atleta", local: "SC" },
      { nome: "Noah", titulo: "Atleta", local: "SC" },
    ],
  },
  {
    id: "famosos",
    titulo: "Famosos",
    pessoas: [
      { nome: "Cynthia Howlett", titulo: "Apresentadora", local: "RJ" },
      { nome: "Dani Monteiro", titulo: "Apresentadora", local: "RJ" },
      { nome: "Juliana Veiga", titulo: "Apresentadora", local: "SP" },
      { nome: "Luciano Huck", titulo: "Apresentador", local: "RJ" },
      { nome: "Marcio Garcia", titulo: "Ator", local: "RJ" },
      { nome: "Paulo Lima", titulo: "Empresário", local: "SP" },
      { nome: "Rodrigo Santoro", titulo: "Ator", local: "RJ" },
      { nome: "Paulo Barros", titulo: "Viradouro", local: "RJ" },
      { nome: "Lucas Pinheiro", titulo: "Medalha ouro Ski", local: "SP?" },
    ],
  },
  {
    id: "snowland",
    titulo: "Snowland",
    pessoas: [
      { nome: "Guilherme Ribeiro", titulo: "Instrutor", local: "RS" },
      { nome: "Andre Caliari", titulo: "Snowland", local: "RS" },
    ],
  },
  {
    id: "extra",
    titulo: "Extra",
    pessoas: [
      { nome: "Pierre", titulo: "Instrutor de snowboard", local: "Chile" },
      { nome: "Beb", titulo: "Instrutor de snowboard", local: "Chile" },
      { nome: "Júlia Clark", titulo: "Irmã da Isabel Clark", local: "RJ" },
      { nome: "Paula Clark", titulo: "Irmã da Isabel Clark", local: "RJ" },
      { nome: "Ana Clark", titulo: "Irmã da Isabel Clark", local: "RJ" },
      { nome: "Daisy Clark", titulo: "Mãe da Isabel Clark", local: "RJ" },
      { nome: "João Ribeiro", titulo: "Pai da Isabel Clark", local: "RJ" },
      { nome: "Nazaré Metsavaht", titulo: "Atleta", local: "RJ" },
      { nome: "Nicholas Metsavaht", titulo: "Atleta", local: "RJ" },
      { nome: "Jonas Amarante", titulo: "Cineasta", local: "RJ" },
      { nome: "Felipe Metsavaht", titulo: "Atleta", local: "RJ" },
      { nome: "Thomas Metsavaht", titulo: "Atleta", local: "RJ" },
      { nome: "Leandra Metsavaht", titulo: "Médica", local: "RJ" },
      { nome: "Paulina Metsavaht", titulo: "Atleta", local: "RJ" },
    ],
  },
];
