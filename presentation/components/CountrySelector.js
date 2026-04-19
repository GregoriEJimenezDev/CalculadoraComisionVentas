/**
 * @class CountrySelector
 * @description Componente UI para manejar la selección de países.
 * Carga dinámicamente los países desde el repositorio.
 */
class CountrySelector {
  /**
   * @param {string} elementId - ID del elemento select en el DOM
   * @param {InMemoryCountryRepository} repository - Repositorio para buscar datos
   */
  constructor(elementId, repository) {
    this._selectElement = document.getElementById(elementId);
    this._repository = repository;
  }

  /**
   * Inicializa el componente y pobla de opciones.
   */
  render() {
    const countries = this._repository.getAllCountries();
    this._selectElement.innerHTML = '';
    
    countries.forEach(country => {
      const option = document.createElement('option');
      option.value = country.code;
      option.textContent = country.name;
      this._selectElement.appendChild(option);
    });
  }

  /**
   * @returns {string} Código del país seleccionado
   */
  getSelectedCountryCode() {
    return this._selectElement.value;
  }
}
