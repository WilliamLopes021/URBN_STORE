# Documentação da Aplicação

## Cores

- **Cor primária:** `#1A1A1A`
- **Texto primário:** `#FFFFFF`
- **Cor de destaque (rosa):** `#FF0066`
- **Cor de destaque (azul):** `#00FFFF`
- **Cinza escuro:** `#333333`
- **Cinza claro:** `#CCCCCC`

## Fonte

- **Fonte principal:** Montserrat;

## Estrutura de Pastas

```bash
src/
  app/
    providers/
    routes/
    store/

  features/
    auth/
      components/
      hooks/
      services/
      types/
      pages/

    scheduling/
      components/
      hooks/
      services/
      types/
      pages/

  shared/
    components/
    hooks/
    utils/
    services/ (API base, axios, etc)
    styles/

  domain/
    entities/
    value-objects/
    services/

  infra/
    http/
    adapters/
```

## Fluxo de cada camada

### 1. Interface (pode ser React, Node, etc.)

```bash
components/
- UI pura
- sem regra de negócio

hooks/
- orquestração
- integração com React Query
- controle de formulário

services/
- chamadas API (CRUD)

types/
- DTOs (request/response)
```

### 2. Aplicação (orchestração)

### 3. Domínio (regras de negócio)

### 4. Infraestrutura (detalhes técnicos)
