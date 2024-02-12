class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcIMC() {
    return this.peso / this.altura ** 2;
  }
}
