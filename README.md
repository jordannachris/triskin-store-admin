# Triskin Store Admin
Este projeto é um painel administrativo para gerenciamento de produtos e carrinho de compras, desenvolvido em React com TypeScript.

---

## 🚀 Instruções de Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jordannachris/triskin-store-admin.git
   cd seu-repo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```
   *(ou a porta exibida no terminal)*

---

## 🛠️ Tecnologias e Bibliotecas Usadas

- **React** (com Vite)
- **TypeScript**
- **React Router DOM** (roteamento SPA)
- **Tailwind CSS** (estilização)
- **ESLint** e **Prettier** (padronização de código)
- **Context API** (estado global)
- **Fetch API** (requisições HTTP)
- **React Icons** (ícones, se usado)
- **Outras**: consulte o `package.json` para dependências completas.

---

## ⚡ Estratégias de Otimização e Estado Global

### Estado Global do Carrinho

- O estado do carrinho é gerenciado via **React Context API** (`CartContext`), permitindo acesso global ao carrinho em qualquer componente da aplicação.
- Funções como `addToCart`, `setProductQuantity` e o total de itens (`totalCount`) estão disponíveis globalmente, evitando prop drilling e facilitando a manutenção.

### Otimização de Renderização

- O contexto do carrinho é atualizado de forma imutável, garantindo que apenas componentes realmente dependentes do carrinho sejam re-renderizados.
- O uso de hooks como `useMemo` e `useCallback` pode ser aplicado em componentes de lista para evitar renderizações desnecessárias (verifique nos componentes de lista e item).
- O carregamento de produtos é feito de forma assíncrona, exibindo um componente `Loader` enquanto os dados são buscados, melhorando a experiência do usuário.

### Organização e Reaproveitamento

- Componentes como `ProductItem`, `ProductList`, `EditButton`, `DeleteButton` e `AddButton` são reutilizáveis e recebem props para alterar seu comportamento conforme o contexto (ex: página de listagem ou carrinho).
- A lógica de requisições e manipulação de produtos está centralizada em arquivos de serviço (`productService.ts`), mantendo os componentes limpos e focados apenas na UI.

---

## 📁 Estrutura de Pastas (resumida)

```
src/
  components/
    AddButton.tsx
    CartIcon.tsx
    DeleteButton.tsx
    EditButton.tsx
    Header.tsx
    HeaderHome.tsx
    ProductInfo.tsx
    ProductItem.tsx
    ProductList.tsx
    ...
  contexts/
    CartContext.tsx
  interfaces/
    ProductInterface.ts
  pages/
    CartPage/
    EditPage/
    HomePage/
  services/
    productService.ts
  utils/
    formatPrice.ts
  App.tsx
```

---

## ✨ Observações

- O projeto está pronto para ser expandido com autenticação, mais páginas ou integrações com APIs reais.
- Sinta-se à vontade para abrir issues ou PRs!

---