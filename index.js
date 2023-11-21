// Definindo a classe abstrata Veiculo
class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    acelerar() {
        throw new Error("Método acelerar deve ser implementado nas classes filhas.");
    }

    frear() {
        throw new Error("Método frear deve ser implementado nas classes filhas.");
    }
}

// Definindo a classe Carro que herda de Veiculo
class Carro extends Veiculo {
    acelerar() {
        return `O carro ${this.marca} ${this.modelo} está acelerando.`;
    }

    frear() {
        return `O carro ${this.marca} ${this.modelo} está freando.`;
    }
}

// Definindo a classe Moto que herda de Veiculo
class Moto extends Veiculo {
    acelerar() {
        return `A moto ${this.marca} ${this.modelo} está acelerando.`;
    }

    frear() {
        return `A moto ${this.marca} ${this.modelo} está freando.`;
    }
}

// Criando instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla");
const carro2 = new Carro("Ford", "Mustang");
const moto1 = new Moto("Honda", "CBR600RR");

// Testando os métodos
console.log(carro1.acelerar());
console.log(carro2.frear());
console.log(moto1.acelerar());
