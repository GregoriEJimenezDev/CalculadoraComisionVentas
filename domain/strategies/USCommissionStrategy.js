/**
 * @class USCommissionStrategy
 * @extends CommissionStrategy
 * @description Estrategia concreta para Estados Unidos (15%).
 */
class USCommissionStrategy extends CommissionStrategy {
  calculate(transaction) {
    return transaction.netSales * this.getRate();
  }

  getRate() {
    return 0.15; // 15%
  }

  getCountryName() {
    return "United States";
  }
}
