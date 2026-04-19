/**
 * @class CalculateCommissionUseCase
 * @description Capa de Aplicación. Orquesta la ejecución de la regla de negocio.
 * Sigue el Principio de Inversión de Dependencias (DIP) ya que recibe el Factory por inyección en lugar de instanciarlo directamente.
 */
class CalculateCommissionUseCase {
  /**
   * @param {CommissionStrategyFactory} strategyFactory
   */
  constructor(strategyFactory) {
    this._strategyFactory = strategyFactory;
  }

  /**
   * @param {number} sales 
   * @param {number} discounts 
   * @param {string} countryCode 
   * @returns {CommissionResult}
   */
  execute(sales, discounts, countryCode) {
    // 1. Crear entidad (valida las reglas básicas del negocio)
    const transaction = new SalesTransaction(sales, discounts);

    // 2. Obtener estrategia usando la fábrica
    const strategy = this._strategyFactory.getStrategy(countryCode);

    // 3. Calcular comisión
    const amount = strategy.calculate(transaction);

    // 4. Retornar Value Object con el resultado de la operación
    return new CommissionResult(amount, strategy.getRate(), strategy.getCountryName());
  }
}
