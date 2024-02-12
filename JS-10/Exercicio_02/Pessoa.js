class Pessoa {
  #nif;

  constructor(nome, idade, morada, nif) {
    this.nome = nome;
    this.idade = idade;
    this.morada = morada;
    this.#nif = nif;
  }

  falar() {
    console.log(
      `Meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.morada}.`
    );
  }

  getNif() {
    return this.#nif;
  }
}
