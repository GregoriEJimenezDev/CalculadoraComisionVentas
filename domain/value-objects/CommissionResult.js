/**
 * @class CommissionResult
 * @description Value Object (DDD). Representa el resultado inmutable del cálculo de una comisión.
 * Garantiza inmutabilidad no exponiendo setters y congelando el objeto.
 */
class CommissionResult {
  /**
   * @param {number} amount - El monto de la comisión
   * @param {number} rate - La tasa de comisión aplicada
   * @param {string} countryCode - El código del país origen
   */
  constructor(amount, rate, countryCode) {
    this._amount = amount;
    this._rate = rate;
    this._countryCode = countryCode;

    // Hacemos el objeto inmutable (Value Object)
    Object.freeze(this);
  }

  get amount() {
    return this._amount;
  }

  get rate() {
    return this._rate;
  }

  get countryCode() {
    return this._countryCode;
  }
}
