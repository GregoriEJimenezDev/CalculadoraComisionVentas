/**
 * @class CommissionForm
 * @description Componente UI que maneja la interacción del formulario.
 * Extrae y valida que las entradas en crudo del DOM sean correctas antes de pasarlas al Use Case.
 */
class CommissionForm {
  /**
   * @param {string} formId 
   * @param {string} salesInputId 
   * @param {string} discountsInputId 
   */
  constructor(formId, salesInputId, discountsInputId) {
    this._formElement = document.getElementById(formId);
    this._salesInput = document.getElementById(salesInputId);
    this._discountsInput = document.getElementById(discountsInputId);
  }

  /**
   * Manejador para suscribirse al evento de cálculo
   * @param {Function} callback 
   */
  onSubmit(callback) {
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const sales = parseFloat(this._salesInput.value);
      const discounts = parseFloat(this._discountsInput.value) || 0; // Si está vacío asumimos 0

      callback(sales, discounts);
    });
  }
}
