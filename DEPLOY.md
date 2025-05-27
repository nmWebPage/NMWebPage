# Deploy para nmtecnologia.com.br

Este documento contém as instruções para publicar o site no domínio nmtecnologia.com.br

## Arquivos para Upload

Todos os arquivos da pasta `dist/` devem ser enviados para o servidor:

```
dist/
├── index.html
├── .htaccess
├── favicon.ico
├── placeholder.svg
├── robots.txt
└── assets/
    ├── index-D9M8qKZR.css
    └── index-D9UzxoGW.js
```

## Métodos de Deploy

### 1. FTP/SFTP (Manual)
- Acesse seu painel de controle de hospedagem
- Conecte via FTP/SFTP
- Navegue até a pasta public_html (ou www)
- Faça upload de todos os arquivos da pasta `dist/`

### 2. cPanel File Manager
- Acesse o cPanel da sua hospedagem
- Abra o File Manager
- Navegue até public_html
- Faça upload do conteúdo da pasta `dist/`

### 3. Deploy Automático (GitHub Pages/Netlify/Vercel)
- Configure integração com GitHub
- Deploy automático a cada push

## Verificações Pós-Deploy

1. Teste a URL: http://nmtecnologia.com.br/
2. Verifique se todas as rotas funcionam
3. Teste responsividade
4. Confirme carregamento dos assets (CSS/JS)

## Configurações DNS (se necessário)

Se o domínio não estiver apontando corretamente:
- Configure os registros A para o IP do servidor
- Configure CNAME se usando subdomínio

## Build Information

- Framework: React + Vite + TypeScript
- Build size: ~312KB JS, ~63KB CSS
- Otimizado para produção
- Compressão gzip habilitada
