import Link from "next/link";

const benefits = [
  {
    title: "+2.000 Envios no WhatsApp",
    body: "Acesse a WhatsApp Business API com capacidade de envio em massa. Chegue a mais clientes com campanhas de marketing direto.",
  },
  {
    title: "Limite de até $100k/dia",
    body: "Aumente seu limite diário de anúncios de $50 para até $100.000/dia. Escale suas campanhas sem restrições de gasto.",
  },
  {
    title: "Criar Apps no Facebook",
    body: "Desbloqueie developer features exclusivas do Meta para criar e publicar aplicativos vinculados à sua empresa verificada.",
  },
  {
    title: "Proteção Contra Imposores",
    body: "O Meta monitora ativamente tentativas de impersonação da sua marca, protegendo sua reputação e seus clientes.",
  },
  {
    title: "Selo Azul de Verificação",
    body: "Apareça como empresa legítima com o badge verificado nas buscas do Facebook e Instagram. Mais confiança, mais conversões.",
  },
  {
    title: "Suporte Prioritário Meta",
    body: "Acesso direto a agentes do Meta para resolver limites de conta, bloqueios e problemas com campanhas rapidamente.",
  },
];

const metrics = [
  ["2.000+", "Envios WhatsApp"],
  ["$100k", "Limite Diário Possível"],
  ["< 3min", "Para Configurar"],
  ["100%", "Automatizado"],
] as const;

const steps = [
  {
    title: "Cadastre e Adicione seu Domínio",
    body: "Crie sua conta, informe o CNPJ da empresa e adicione o domínio que deseja verificar no Facebook Business.",
  },
  {
    title: "Configure o DNS em Minutos",
    body: "Siga as instruções geradas automaticamente. Adicione um registro CNAME ou A no seu registrador de domínio.",
  },
  {
    title: "Verifique e Ative sua Empresa",
    body: 'Clique em "Verificar Conexão". O sistema checa o DNS em tempo real. Sua landing page verificada vai ao ar imediatamente.',
  },
];

const plans = [
  {
    name: "Starter",
    price: "$100/mês",
    allowance: "4 domínios incluídos",
    features: [
      "4 domínios verificados",
      "Landing pages automáticas",
      "Verificação DNS em tempo real",
      "Relatório de status",
      "Suporte por email",
    ],
  },
  {
    name: "Business",
    price: "$150/mês",
    allowance: "8 domínios incluídos",
    popular: true,
    features: [
      "8 domínios verificados",
      "Landing pages automáticas",
      "Verificação DNS em tempo real",
      "Relatório detalhado",
      "Suporte prioritário",
      "Pixel do Facebook integrado",
    ],
  },
  {
    name: "Agency",
    price: "$200/mês",
    allowance: "12 domínios incluídos",
    features: [
      "12 domínios verificados",
      "Landing pages automáticas",
      "Verificação DNS em tempo real",
      "Dashboard completo",
      "Suporte dedicado",
      "Pixel do Facebook integrado",
      "White label disponível",
    ],
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Verify Ads">
            <span className="brand-mark" aria-hidden="true">V</span>
            <span>Verify Ads</span>
          </Link>
          <Link href="/login" className="header-link">Minha Área</Link>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Plataforma Oficial de Verificação para Meta Business</p>
          <h1>Verifique sua Empresa no Facebook<br className="desktop-break" /> e Desbloqueie Recursos Exclusivos</h1>
          <p className="hero-copy">
            Conecte seu domínio, gere sua landing page verificada e tenha acesso a limites maiores de anúncios,
            WhatsApp Business API — em menos de 3 minutos.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/login">Acessar Minha Área</Link>
            <a className="button button-secondary" href="#beneficios">Ver Benefícios</a>
          </div>
          <p className="trust-line">Sem cartão de crédito • Configuração em 3 minutos • Suporte em português</p>
        </div>
      </section>

      <section id="beneficios" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Vantagens Exclusivas</p>
            <h2>Por que verificar sua empresa no Facebook Business?</h2>
            <p>Empresas verificadas têm acesso a recursos que a maioria dos anunciantes nunca saberá que existem.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <article className="card benefit-card" key={benefit.title}>
                <div className="icon-chip" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.body}</p>
              </article>
            ))}
          </div>
          <div className="metric-grid" aria-label="Métricas">
            {metrics.map(([value, label]) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Processo Simples</p>
            <h2>Verificação em 3 passos</h2>
            <p>Do cadastro à empresa verificada em menos de 3 minutos.</p>
          </div>
          <div className="step-grid">
            {steps.map((step, index) => (
              <article className="step" key={step.title}>
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Planos e Preços</p>
            <h2>Escolha seu plano</h2>
            <p>Pague por domínios verificados. Quanto mais domínios, mais empresas você pode gerenciar.</p>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card${plan.popular ? " price-card-popular" : ""}`} key={plan.name}>
                {plan.popular ? <span className="popular-badge">⭐ Mais Popular</span> : null}
                <h3>{plan.name}</h3>
                <strong className="price">{plan.price}</strong>
                <p className="allowance">{plan.allowance}</p>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <Link className="button button-primary button-full" href="/login">Começar com {plan.name}</Link>
              </article>
            ))}
          </div>
          <p className="pricing-note">Todos os planos incluem verificação automática de DNS, landing pages profissionais e painel completo.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <Link href="/" className="brand footer-brand"><span className="brand-mark" aria-hidden="true">V</span><span>Verify Ads</span></Link>
            <p>© 2026 VerifyAds. Todos os direitos reservados.</p>
          </div>
          <nav className="footer-nav" aria-label="Rodapé">
            <Link href="/l/privacidade">Privacidade</Link>
            <Link href="/l/termos">Termos</Link>
            <Link href="/login">Login</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
