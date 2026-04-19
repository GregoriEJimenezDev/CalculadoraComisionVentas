/**
 * @file app.js
 * @description Composition Root (Wiring). Aquí es donde se conectan todas las capas.
 * Instancia las dependencias e inicializa la aplicación.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Infraestructura (Repositorios)
  const countryRepository = new InMemoryCountryRepository();

  // 2. Inicializar Fábrica de Estrategias e Inyectarle implementaciones concretas
  // NOTA: Principio Abierto/Cerrado (OCP). Para agregar un nuevo país (ej: BR - 8%), 
  // solo se debe crear la clase BrazilCommissionStrategy y registrarla aquí.
  const strategyFactory = new CommissionStrategyFactory();
  strategyFactory.registerStrategy('IN', new IndiaCommissionStrategy());
  strategyFactory.registerStrategy('US', new USCommissionStrategy());
  strategyFactory.registerStrategy('UK', new UKCommissionStrategy());

  // 3. Inicializar Casos de Uso pasándole la factoría (DIP)
  const calculateCommissionUseCase = new CalculateCommissionUseCase(strategyFactory);

  // 4. Inicializar Componentes de Presentación (UI)
  const countrySelector = new CountrySelector('country-select', countryRepository);
  const commissionForm = new CommissionForm('commission-form', 'sales-input', 'discounts-input');
  const resultDisplay = new ResultDisplay('result-container', 'error-container');

  // 5. Renderizar selector inicial
  countrySelector.render();

  // 6. Suscribirse a eventos del formulario
  commissionForm.onSubmit((sales, discounts) => {
    try {
      const selectedCountryCode = countrySelector.getSelectedCountryCode();
      if (!selectedCountryCode) {
        throw new Error("Por favor, seleccione un país Válido.");
      }

      // Ejecutamos el caso de uso
      const result = calculateCommissionUseCase.execute(sales, discounts, selectedCountryCode);

      // Mostramos el resultado
      resultDisplay.showResult(result);

    } catch (error) {
      // Delegamos manejo de UI de error al componente correspondiente
      resultDisplay.showError(error);
      console.error("[App Error]", error);
    }
  });
});
