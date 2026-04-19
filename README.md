# 📊 Calculadora de Comisiones de Ventas

Una aplicación web desarrollada para calcular de forma rápida y transparente las comisiones de los vendedores en función de sus ventas mensuales y la política regional del país de operación.

Este proyecto aplica de forma pedagógica una **Arquitectura Limpia (Clean Architecture)** acoplada con **Heurísticas UX** en un entorno puro de *Vanilla JavaScript, CSS3 y HTML5*, sin depender de frameworks ni librerías de terceros.

---

## 🚀 Arquitectura de Ejecución

La aplicación está construida con recursos estáticos nativos (JavaScript puro, HTML5 y CSS3). Toda la lógica de negocio, el motor de estilos y los componentes visuales operan de manera autocontenida. El diseño de la solución garantiza portabilidad inmediata, ejecutándose estrictamente del lado del cliente a través de un navegador web sin requerir infraestructura de servidores, bases de datos ni gestores de paquetes.

---

## 🎨 Aspectos Destacados de Interfaz y Usabilidad (UX)

La aplicación implementa heurísticas avanzadas y estándares actuales de diseño Frontend:
- **Renderizado CSS Nativo:** Las banderas (India, US, UK) están dibujadas matemáticamente por CSS puro (`linear-gradient` y geometría pseudo-vector), garantizando alto rendimiento y sin peticiones de red externas.
- **Micro-interacciones:** Sistema de **Ken Burns Effect** y animaciones de transición fluidas. 
- **Glassmorphism Design:** Ventanas traslúcidas que heredan y mapean dinámicamente un *Color Accent* representativo del país al interactuar con el formulario (`:focus`).
- **Heurísticas UX Acopladas:** 
  1. *Visibilidad del Estado del Sistema*: Un spinner indica el tiempo de procesamiento.
  2. *Prevención de Errores*: Alertas interactivas amigables ante inputs matemáticamente incorrectos.
  3. *Control del Usuario*: Botón "*Start Over*" para reiniciar el flujo limpiamente y modal de "*Help*" con documentación de los porcentajes.

---

## 🏗️ Desglose Estructural (Clean Architecture & SOLID)

A nivel lógico, el sistema subyace dividido en 4 capas estrictas para un mantenimiento escalable.

### 1. Capa de Dominio (Domain Layer)
Donde residen las reglas de negocio base aisladas del DOM y la tecnología.
- **`SalesTransaction`**: Entidad central. Aplica el **[S] Principio SRP** operando exclusivamente sobre validaciones matemáticas de ventas.
- **`CommissionResult`**: Entidad modelada como *Value Object* garantizando inmutabilidad.
- **Interfaz `CommissionStrategy`**: Simulador JS del Patrón *Strategy* aplicando el **[L] Principio Liskov Substitution** asegurando que cualquier clase regional se comporte estructuralmente bajo el mismo algoritmo.

### 2. Capa de Aplicación (Use Cases)
- **`CalculateCommissionUseCase`**: Responsable de orquestar el flujo principal. Utiliza el **[D] Principio de Inversión de Dependencias (DIP)** al operar inyectando las implementaciones en su constructor.

### 3. Capa de Infraestructura
- **`CommissionStrategyFactory`**: Implementación directa del **[O] Principio Open/Closed (OCP)**. Si la empresa desea agregar un nuevo país (ej: "Brasil al 8%"), la lógica principal no se toca; únicamente se registra la nueva regla en la factoría.

### 4. Capa de Presentación (Frontend DOM)
Aísla la extracción de datos nativos (`index.html`), actualizaciones de variables del DOM y renderizado gráfico (pintado condicional) manteniendo los cálculos fuera de la vista.

---
> Evidencia de Arquitectura de Software, Reglas de Negocio Corporativo y Patrones de Diseño.
