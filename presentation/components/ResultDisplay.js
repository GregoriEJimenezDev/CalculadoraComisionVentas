/**
 * @class ResultDisplay
 * @description Componente UI. Responsabilidad Única: Mostrar datos procesados y manejar errores.
 */
class ResultDisplay {
  /**
   * @param {string} containerId 
   * @param {string} errorContainerId 
   */
  constructor(containerId, errorContainerId) {
    this._container = document.getElementById(containerId);
    this._errorContainer = document.getElementById(errorContainerId);
  }

  /**
   * Muestra el resultado de la comisión.
   * @param {CommissionResult} result 
   */
  showResult(result) {
    this.clearErrors();
    this._container.style.display = 'block';

    // Format moneda
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    const formattedAmount = formatter.format(result.amount);
    const ratePercent = (result.rate * 100).toFixed(0);

    this._container.innerHTML = `
      <div class="result-card">
        <h3>Commission Details</h3>
        <p><strong>Country:</strong> ${result.countryCode}</p>
        <p><strong>Applied Rate:</strong> ${ratePercent}%</p>
        <p class="amount"><strong>Total Commission:</strong> <span>${formattedAmount}</span></p>
      </div>
    `;
  }

  /**
   * Muestra un mensaje de error.
   * @param {Error|string} error 
   */
  showError(error) {
    this._container.style.display = 'none';
    this._errorContainer.style.display = 'block';
    
    const message = error instanceof Error ? error.message : error;
    this._errorContainer.innerHTML = `<span class="error-msg">⚠️ ${message}</span>`;
  }

  /**
   * Limpia el contenedor de errores.
   */
  clearErrors() {
    this._errorContainer.style.display = 'none';
    this._errorContainer.innerHTML = '';
  }
}
