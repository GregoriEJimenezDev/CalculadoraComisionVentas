# Diseño Arquitectónico: Calculadora de Comisiones

Este documento contiene los diagramas formales de arquitectura de la aplicación, elaborados para cumplir con los criterios de evaluación.

## 1. Diagrama de Diseño de la Solución (Visión General)
Ilustra cómo interactúa el usuario con la interfaz y cómo fluye la petición hasta el modelo de dominio.

```mermaid
graph TD
    User([Usuario / Vendedor])
    UI[Interfaz Web HTML/CSS/JS]
    AppLayer[Capa de Aplicación - Use Cases]
    Domain[Capa de Dominio - Reglas de Negocio]
    Infra[Capa de Infraestructura - Repositorios / Factories]

    User -->|1. Ingresa datos| UI
    UI -->|2. Inyecta dependencias| AppLayer
    AppLayer -->|3. Consulta configuración| Infra
    AppLayer -->|4. Aplica Modelo| Domain
    Domain -->|5. Retorna cálculo| AppLayer
    AppLayer -->|6. Muestra Resultado| UI
```

## 2. Diagrama en Capas (Presentación, Lógica, Datos)
Basado en *Clean Architecture*, garantiza que las dependencias apunten de afuera hacia adentro.

```mermaid
graph TD
    subgraph Capa de Presentación
        HTML[index.html]
        CSS[styles.css]
        UI_JS[app.js - DOM Events]
    end

    subgraph Capa de Lógica de Negocio / Aplicación
        UC[CalculateCommissionUseCase]
    end

    subgraph Capa de Dominio / Core
        ST[SalesTransaction Entity]
        CR[CommissionResult ValueObject]
        CS[CommissionStrategy Interface]
    end

    subgraph Capa de Datos / Infraestructura
        Repo[InMemoryCountryRepository]
        Factory[CommissionStrategyFactory]
    end

    HTML --> UI_JS
    CSS --> HTML
    UI_JS --> UC
    UI_JS --> Repo
    UC --> Factory
    UC --> CS
    UC --> ST
    Factory --> CS
    Repo -.->|Hidrata| UI_JS
```

## 3. Diagrama de Componentes (Módulos principales y sus interacciones)
Desglose estricto a nivel de clases y objetos de JavaScript para evidenciar los principios SOLID.

```mermaid
classDiagram
    class CommissionForm {
      +onSubmit(callback)
    }
    class CountrySelector {
      +render()
      +getSelectedCountryCode()
    }
    class ResultDisplay {
      +showResult(result)
      +showError(error)
    }
    
    class CalculateCommissionUseCase {
      -strategyFactory
      +execute(sales, discounts, countryCode)
    }

    class CommissionStrategyFactory {
      -_strategies: Map
      +registerStrategy(countryCode, strategy)
      +getStrategy(countryCode)
    }

    class CommissionStrategy {
      <<interface>>
      +calculate(transaction)
      +getRate()
      +getCountryName()
    }

    class USCommissionStrategy {
      +calculate(transaction)
      +getRate()
      +getCountryName()
    }
    class IndiaCommissionStrategy {
      +calculate(transaction)
      +getRate()
      +getCountryName()
    }

    CommissionStrategy <|-- USCommissionStrategy
    CommissionStrategy <|-- IndiaCommissionStrategy
    
    CommissionForm --> CalculateCommissionUseCase : triggers
    CountrySelector --> CommissionStrategyFactory : provides code
    CalculateCommissionUseCase ..> CommissionStrategyFactory : uses
    CalculateCommissionUseCase --> CommissionStrategy : calculates against
    ResultDisplay <-- CalculateCommissionUseCase : formats output
```
