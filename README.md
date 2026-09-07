# Lojas +Brasil — GS10 Mini Landing Page

Landing page em **Next.js + TypeScript + Motion**, pronta para GitHub, Vercel e domínio próprio.

## 1. Rodar localmente

Requisitos:
- Node.js 20.9+ (recomendado Node 22 LTS)
- npm

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## 2. Ajustes antes de publicar

### Checkout
Edite:

`src/data/product.ts`

Troque:

```ts
checkoutUrl: "https://seu-checkout-aqui.com"
```

pelo link real do checkout.

### Domínio
Procure por `seudominio.com.br` nos arquivos:
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`

Troque pelo domínio final.

### Dados do produto
Todo o conteúdo principal fica centralizado em:

`src/data/product.ts`

Ali você altera preço, cores, descrição, recursos, especificações, FAQ e link de compra.

> IMPORTANTE: valide com o fornecedor antes da publicação final as afirmações técnicas/comerciais, principalmente homologação Anatel, EAN, bateria, resistência à água, CPU e recursos de IA.

### Imagens
As imagens desta V1 foram extraídas das referências visuais enviadas no chat. Para produção, substitua por fotos originais em alta resolução e com fundo transparente sempre que possível.

Pasta:

`public/images/`

## 3. Build de produção

```bash
npm run build
npm start
```

## 4. Publicar no GitHub

Crie um repositório vazio e depois rode:

```bash
git init
git add .
git commit -m "Landing page GS10 Mini"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/lojas-brasil-gs10.git
git push -u origin main
```

## 5. Deploy na Vercel

1. Acesse a Vercel.
2. Clique em **Add New > Project**.
3. Importe o repositório do GitHub.
4. Framework detectado: **Next.js**.
5. Clique em **Deploy**.

Depois disso, cada `git push` para `main` atualiza a produção automaticamente.

## 6. Domínio próprio

Na Vercel:

1. Projeto > **Settings** > **Domains**.
2. Adicione seu domínio principal.
3. Adicione também o `www` se desejar.
4. Crie no seu provedor DNS os registros exatos informados pela Vercel.
5. Defina um domínio como principal e redirecione o outro para ele.

Se estiver usando Cloudflare, para uma configuração simples mantenha inicialmente os registros apontados para a Vercel como **DNS only**.

## 7. Estrutura

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    Benefits.tsx
    Brand.tsx
    ColorSelector.tsx
    Faq.tsx
    Features.tsx
    FinalCta.tsx
    Footer.tsx
    Hero.tsx
    MobileBuyBar.tsx
    Navbar.tsx
    PackageContent.tsx
    ProductShowcase.tsx
    Specifications.tsx
    Warranty.tsx
  data/
    product.ts
  lib/
    animations.ts
public/
  images/
```

## 8. Recursos incluídos

- Navbar fixa com blur no scroll
- Hero responsivo
- Animações Motion
- Cards flutuantes
- Seletor de cores interativo
- Seção de benefícios
- Showcase visual
- Conteúdo da caixa
- Recursos organizados em cards
- Especificações técnicas
- Garantia
- FAQ animado
- CTA final
- Sticky bar de compra no mobile
- Metadata SEO
- Open Graph
- Schema.org Product
- sitemap.xml
- robots.txt
- Layout responsivo
- Suporte a `prefers-reduced-motion`

## 9. Próximas integrações sugeridas

- Google Tag Manager
- GA4
- Meta Pixel
- TikTok Pixel
- Checkout real
- WhatsApp
- Eventos `view_item`, `select_color`, `begin_checkout`, `purchase`
