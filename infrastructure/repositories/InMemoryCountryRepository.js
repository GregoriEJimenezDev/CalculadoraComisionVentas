/**
 * @class InMemoryCountryRepository
 * @description Capa de Infraestructura. Implementación del Patrón Repository (en memoria).
 * Provee un acceso abstracto a la lista de países disponibles.
 */
class InMemoryCountryRepository {
  constructor() {
    this._countries = [
      { code: 'IN', name: 'India (10%)' },
      { code: 'US', name: 'United States (15%)' },
      { code: 'UK', name: 'United Kingdom (12%)' }
    ];
  }

  /**
   * @returns {Array<{code: string, name: string}>}
   */
  getAllCountries() {
    // Retornamos una copia para evitar mutaciones directas (inmutabilidad básica)
    return [...this._countries];
  }

  /**
   * Simula obtener un país por código.
   * @param {string} code 
   */
  getCountryByCode(code) {
    const country = this._countries.find(c => c.code === code);
    if (!country) {
      throw new Error(`Country with code ${code} not found.`);
    }
    return { ...country };
  }
}
