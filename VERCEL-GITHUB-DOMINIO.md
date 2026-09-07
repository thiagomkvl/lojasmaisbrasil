# Passo a passo: GitHub → Vercel → domínio próprio

## A. Teste local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` e confira desktop e mobile.

## B. GitHub

1. Crie um repositório chamado `lojas-brasil-gs10`.
2. Não marque a criação automática de README se for enviar esta pasta inteira.
3. Abra o terminal dentro da pasta do projeto.
4. Execute:

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/lojas-brasil-gs10.git
git push -u origin main
```

## C. Vercel

1. Entre em sua conta Vercel.
2. `Add New` → `Project`.
3. Conecte o GitHub, se necessário.
4. Escolha `lojas-brasil-gs10`.
5. Framework: Next.js.
6. Build command: deixe o padrão.
7. Output: deixe o padrão.
8. Deploy.

## D. Domínio

1. Vercel → projeto → `Settings` → `Domains`.
2. Adicione `seudominio.com.br`.
3. Adicione `www.seudominio.com.br`.
4. A Vercel exibirá quais registros DNS devem ser criados.
5. Configure esses registros no provedor DNS.
6. Após propagação, escolha o domínio canônico.

## E. Cloudflare

Se o DNS estiver na Cloudflare:

- crie os registros exatamente como a Vercel indicar;
- use `DNS only` inicialmente;
- aguarde a validação na Vercel;
- o certificado SSL será gerenciado pela Vercel.

## F. Antes de anunciar

- Trocar o checkout placeholder.
- Trocar `seudominio.com.br` pelo domínio real.
- Validar Anatel/EAN/especificações com fornecedor.
- Inserir CNPJ, contato, termos e política de privacidade.
- Configurar GA4/GTM/Meta Pixel/TikTok Pixel.
- Testar compra no celular.
- Rodar Lighthouse.
