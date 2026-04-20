/**
 * Internationalization (i18n) Module
 * 
 * Provides multi-language support for the application.
 * Default language: Spanish (es).
 * Supported languages: Spanish (es), English (en)
 */

const translations = {
  es: {
    // Language metadata
    langName: 'Español',

    // Page
    pageTitle: 'Calculadora de Comisión de Ventas - UI Premium',

    // Navigation
    btnBack: '← Reiniciar',
    btnHelp: '? Ayuda',

    // Header
    mainTitle: 'Matriz de Comisiones',
    mainSubtitle: 'Estima tus márgenes de ventas globales.',

    // Form Labels
    labelRegion: 'Región de Operación',
    placeholderRegion: 'Selecciona un país...',
    optionIndia: 'India (10%)',
    optionUS: 'Estados Unidos (15%)',
    optionUK: 'Reino Unido (12%)',
    labelSales: 'Ventas Totales ($)',
    placeholderSales: 'ej. 15000.00',
    labelDiscounts: 'Descuentos Aplicados ($)',
    placeholderDiscounts: 'ej. 500.00',
    btnCalculate: 'Calcular Remuneración',

    // Results
    resultTitle: 'Resumen de Comisión',
    resultRegion: 'Región Seleccionada:',
    resultRate: 'Tasa Aplicada:',
    resultTotal: 'Comisión Total',

    // Help Modal
    helpTitle: 'Cómo usar esta Calculadora',
    helpDescription: 'Este sistema calcula tus comisiones finales según la región en la que operas.',
    helpIndia: '<strong>India:</strong> 10% de comisión sobre Ventas Netas.',
    helpUS: '<strong>Estados Unidos:</strong> 15% de comisión sobre Ventas Netas.',
    helpUK: '<strong>Reino Unido:</strong> 12% de comisión sobre Ventas Netas.',
    helpNote: '<em>Nota: Ventas Netas = Ventas Totales - Descuentos. Los descuentos no pueden superar las ventas.</em>',
    helpClose: 'Entendido',

    // Errors
    errorSelectRegion: 'Por favor, selecciona una región geográfica.',
    errorPositiveSales: 'Las ventas deben ser un número positivo.',
    errorNumericDiscounts: 'Los descuentos deben ser numéricos.',
    errorDiscountsExceed: 'Los descuentos no pueden superar las ventas totales.',
    errorStrategyNotFound: 'Estrategia no definida para:',
  },

  en: {
    // Language metadata
    langName: 'English',

    // Page
    pageTitle: 'Sales Commission Calculator - Premium UI',

    // Navigation
    btnBack: '← Start Over',
    btnHelp: '? Help',

    // Header
    mainTitle: 'Commission Matrix',
    mainSubtitle: 'Estimate your global sales margins.',

    // Form Labels
    labelRegion: 'Operating Region',
    placeholderRegion: 'Select a country...',
    optionIndia: 'India (10%)',
    optionUS: 'United States (15%)',
    optionUK: 'United Kingdom (12%)',
    labelSales: 'Total Sales ($)',
    placeholderSales: 'e.g. 15000.00',
    labelDiscounts: 'Discounts Applied ($)',
    placeholderDiscounts: 'e.g. 500.00',
    btnCalculate: 'Calculate Remuneration',

    // Results
    resultTitle: 'Commission Summary',
    resultRegion: 'Selected Region:',
    resultRate: 'Applied Rate:',
    resultTotal: 'Total Commission',

    // Help Modal
    helpTitle: 'How to use this Calculator',
    helpDescription: 'This system calculates your final commissions based on the region you operate.',
    helpIndia: '<strong>India:</strong> 10% commission on Net Sales.',
    helpUS: '<strong>United States:</strong> 15% commission on Net Sales.',
    helpUK: '<strong>United Kingdom:</strong> 12% commission on Net Sales.',
    helpNote: '<em>Note: Net Sales = Total Sales - Discounts. Discounts cannot exceed Total Sales.</em>',
    helpClose: 'Understood',

    // Errors
    errorSelectRegion: 'Please select a geographic region.',
    errorPositiveSales: 'Sales must be a positive number.',
    errorNumericDiscounts: 'Discounts must be numeric.',
    errorDiscountsExceed: 'Discounts cannot exceed total sales.',
    errorStrategyNotFound: 'Strategy not defined for:',
  }
};

/**
 * I18nService - Manages language switching and text application.
 * Default language: Spanish (es).
 * Follows the Single Responsibility Principle.
 */
class I18nService {
  constructor() {
    this._currentLang = 'es'; // Spanish by default
    this._listeners = [];
  }

  /**
   * Returns the current language code.
   */
  get currentLang() {
    return this._currentLang;
  }

  /**
   * Returns all available language codes.
   * @returns {string[]}
   */
  get availableLanguages() {
    return Object.keys(translations);
  }

  /**
   * Returns the display name for a given language code.
   * @param {string} lang - Language code
   * @returns {string}
   */
  getLanguageName(lang) {
    return translations[lang]?.langName || lang;
  }

  /**
   * Returns translation for a given key.
   * @param {string} key - Translation key
   * @returns {string} Translated string
   */
  t(key) {
    return translations[this._currentLang]?.[key] || translations['es']?.[key] || key;
  }

  /**
   * Sets language explicitly.
   * @param {string} lang - Language code
   */
  setLanguage(lang) {
    if (translations[lang] && lang !== this._currentLang) {
      this._currentLang = lang;
      this._notifyListeners();
    }
  }

  /**
   * Registers a callback to be invoked on language change.
   * @param {Function} callback
   */
  onLanguageChange(callback) {
    this._listeners.push(callback);
  }

  _notifyListeners() {
    this._listeners.forEach(cb => cb(this._currentLang));
  }
}
