/**
 * @class SalesTransaction
 * @description Entidad del núcleo (DDD) que representa la transacción. 
 * Aplica el Principio de Responsabilidad Única (SRP): solo valida y contiene los datos de la venta.
 */
class SalesTransaction {
  /**
   * @param {number} sales - Ventas totales
   * @param {number} discounts - Descuentos aplicados
   */
  constructor(sales, discounts) {
    this._validate(sales, discounts);
    
    this._sales = sales;
    this._discounts = discounts;
  }

  _validate(sales, discounts) {
    if (typeof sales !== 'number' || isNaN(sales) || sales < 0) {
      throw new Error("Las ventas deben ser un número positivo.");
    }
    if (typeof discounts !== 'number' || isNaN(discounts) || discounts < 0) {
      throw new Error("Los descuentos deben ser un número positivo (o cero).");
    }
    if (discounts > sales) {
      throw new Error("Los descuentos no pueden ser mayores que las ventas.");
    }
  }

  get netSales() {
    return this._sales - this._discounts;
  }

  get sales() {
    return this._sales;
  }

  get discounts() {
    return this._discounts;
  }
}
