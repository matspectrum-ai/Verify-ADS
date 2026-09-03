# System Map

Status: discovery in progress.
Target: `https://score-scanner-7q2s.vercel.app/`

## Observed routes

| Route | Status | Evidence |
| --- | --- | --- |
| `/` | OBSERVED | Public landing page is reachable. |
| `/login` | OBSERVED route existence | Public CTAs and footer link to this route. Page body is not yet captured in this environment. |
| `/l/privacidade` | OBSERVED route existence | Footer link. Page body not yet captured. |
| `/l/termos` | OBSERVED route existence | Footer link. Page body not yet captured. |

## Public landing inventory

### Header
- Brand: `Verify Ads`
- CTA/link: `Minha Área`

### Hero
- Eyebrow: `Plataforma Oficial de Verificação para Meta Business`
- Heading: `Verifique sua Empresa no Facebook e Desbloqueie Recursos Exclusivos`
- Description: domain connection, verified landing page, larger ad limits and WhatsApp Business API, advertised as under three minutes.
- Primary CTA: `Acessar Minha Área`
- Secondary CTA: `Ver Benefícios`
- Trust line: `Sem cartão de crédito • Configuração em 3 minutos • Suporte em português`

### Benefits
Observed cards:
1. `+2.000 Envios no WhatsApp`
2. `Limite de até $100k/dia`
3. `Criar Apps no Facebook`
4. `Proteção Contra Imposores`
5. `Selo Azul de Verificação`
6. `Suporte Prioritário Meta`

Observed metrics:
- `2.000+` / `Envios WhatsApp`
- `$100k` / `Limite Diário Possível`
- `< 3min` / `Para Configurar`
- `100%` / `Automatizado`

### Three-step process
1. `Cadastre e Adicione seu Domínio`
2. `Configure o DNS em Minutos`
3. `Verifique e Ative sua Empresa`

### Pricing
- Starter — `$100/mês` — 4 domains.
- Business — `$150/mês` — 8 domains — marked `Mais Popular`.
- Agency — `$200/mês` — 12 domains.

### Footer
- Brand: `Verify Ads`
- Copyright: `© 2026 VerifyAds. Todos os direitos reservados.`
- Links: Privacidade, Termos, Login.

## Authenticated application

Status: UNKNOWN in this environment. Credentials were supplied by the owner for a test account, but browser automation in the current runtime is blocked from outbound navigation. Do not commit or document those credentials.

## Next discovery targets
- Login UI and validation behavior.
- Post-login default route.
- Auth/session behavior.
- Dashboard navigation tree.
- Domain CRUD.
- DNS verification workflow and polling behavior.
- Landing page generation workflow.
- Billing/subscription behavior.
- API contracts and error states.
- Responsive layouts and visual baselines.
