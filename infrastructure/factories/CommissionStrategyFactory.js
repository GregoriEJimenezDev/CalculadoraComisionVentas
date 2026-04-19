/**
 * @class CommissionStrategyFactory
 * @description Capa de Infraestructura. Encapsula la lógica de creación de estrategias.
 * Sigue el Principio Abierto/Cerrado (OCP). Se inicializa con estrategias registradas
 * y puede aceptar nuevas estrategias sin modificar este código (solo registrándolas).
 */
class CommissionStrategyFactory {
  constructor() {
    this._strategies = new Map();
  }

  /**
   * Registra una nueva estrategia de comisión.
   * @param {string} countryCode 
   * @param {CommissionStrategy} strategy 
   */
  registerStrategy(countryCode, strategy) {
    this._strategies.set(countryCode, strategy);
  }

  /**
   * @param {string} countryCode 
   * @returns {CommissionStrategy}
   */
  getStrategy(countryCode) {
    if (!this._strategies.has(countryCode)) {
      throw new Error(`No existe una estrategia de comisión definida para el país: ${countryCode}`);
    }
    return this._strategies.get(countryCode);
  }
}
