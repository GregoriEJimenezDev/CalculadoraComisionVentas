/**
 * @class IndiaCommissionStrategy
 * @extends CommissionStrategy
 * @description Estrategia concreta para India (10%).
 */
class IndiaCommissionStrategy extends CommissionStrategy {
  calculate(transaction) {
    return transaction.netSales * this.getRate();
  }

  getRate() {
    return 0.10; // 10%
  }

  getCountryName() {
    return "India";
  }
}
