/**
 * @class UKCommissionStrategy
 * @extends CommissionStrategy
 * @description Estrategia concreta para Reino Unido (12%).
 */
class UKCommissionStrategy extends CommissionStrategy {
  calculate(transaction) {
    return transaction.netSales * this.getRate();
  }

  getRate() {
    return 0.12; // 12%
  }

  getCountryName() {
    return "United Kingdom";
  }
}
