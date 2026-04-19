/**
 * @class CommissionStrategy
 * @description Interface/Contrato abstracto (Simulación en JS). 
 * Aplica el principio de segregación de interfaces (ISP) y asegura que todas las
 * estrategias concretas implementen los métodos necesarios (LSP).
 */
class CommissionStrategy {
  constructor() {
    if (this.constructor === CommissionStrategy) {
      throw new Error("No se puede instanciar la interfaz abstracta CommissionStrategy directamente.");
    }
  }

  /**
   * @param {SalesTransaction} transaction 
   * @returns {number}
   */
  calculate(transaction) {
    throw new Error("El método 'calculate(transaction)' debe ser implementado.");
  }

  /**
   * @returns {number}
   */
  getRate() {
    throw new Error("El método 'getRate()' debe ser implementado.");
  }

  /**
   * @returns {string}
   */
  getCountryName() {
    throw new Error("El método 'getCountryName()' debe ser implementado.");
  }
}
