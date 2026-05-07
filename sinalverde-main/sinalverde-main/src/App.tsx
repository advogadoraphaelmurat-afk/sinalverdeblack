import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Briefcase, 
  Layers, 
  Users, 
  Lock, 
  Building2,
  ShieldCheck,
  Target,
  Eye,
  Heart,
  MessageCircle,
  MessageSquare,
  Award,
  ChevronDown,
  Zap,
  TrendingUp,
  Scale,
  CheckCircle
} from 'lucide-react';

const Abstract3D = () => (
  <div className="abstract-3d-center">
    <div className="abstract-glow-1" />
    <div className="abstract-glow-2" />
    <div className="abstract-mesh" />
  </div>
);

// Responsive grid helper style
const rGrid = (cols: string, gap = '2rem') => ({
  display: 'grid' as const,
  gridTemplateColumns: cols,
  gap,
});

function App() {
  const [activeSolution, setActiveSolution] = useState<'grupos' | 'imobiliario' | 'pme'>('grupos');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Sidebar */}
      <aside className="glass-sidebar">
        <div className="sidebar-item" data-label="Início" onClick={() => scrollTo('home')}><Home size={20} /></div>
        <div className="sidebar-item" data-label="Sobre" onClick={() => scrollTo('sobre')}><Users size={20} /></div>
        <div className="sidebar-item" data-label="Serviços" onClick={() => scrollTo('servicos')}><Briefcase size={20} /></div>
        <div className="sidebar-item" data-label="Tecnologia" onClick={() => scrollTo('servicos')}><Layers size={20} /></div>
        <div style={{ marginTop: 'auto' }}>
          <div className="sidebar-item" data-label="Portal VIP"><Lock size={20} /></div>
        </div>
      </aside>

      {/* Header */}
      <header className="glass-header">
        <div className="header-logo" onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          <img src="/logo transp.png" alt="Logo Sinal Verde" />
          <span>SINAL <span className="text-neon-green">VERDE</span></span>
        </div>
        <div className="header-nav">
          <a href="#sobre" onClick={(e) => { e.preventDefault(); scrollTo('sobre'); }}>SOBRE</a>
          <a href="#servicos" onClick={(e) => { e.preventDefault(); scrollTo('servicos'); }}>SERVIÇOS</a>
          <a href="#contato" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>CONTATO</a>
        </div>
        <button className="header-btn">ACESSAR PORTAL</button>
      </header>

      <main className="app-container">
        
        {/* HERO SECTION */}
        <section className="section-container" id="home" style={{ alignItems: 'flex-end', paddingTop: '10rem', paddingRight: '10%' }}>
          <Abstract3D />
          
          <motion.h1 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title-huge"
            style={{ 
              textAlign: 'right', 
              display: 'flex', 
              flexDirection: 'column',
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              letterSpacing: '0.5rem',
              lineHeight: 1
            }}
          >
            <span>SINAL</span>
            <span className="text-neon-green">VERDE</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ 
              textAlign: 'right', 
              fontSize: 'clamp(1rem, 2vw, 1.5rem)', 
              color: 'var(--text-muted)',
              marginTop: '1.5rem',
              maxWidth: '600px'
            }}
          >
            Confiabilidade na sua Gestão <br />
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.3rem', opacity: 0.6, textTransform: 'uppercase' }}>Assessoria Paralegal Especializada</span>
          </motion.p>
        </section>

        {/* SOLUTIONS SELECTOR SECTION */}
        <section className="section-container" id="servicos" style={{ paddingTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 7vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>Soluções Especializadas</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Escolha o perfil que melhor se adapta à sua necessidade empresarial</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {[
              { id: 'grupos', label: 'Grupos Econômicos', icon: <Briefcase size={16} /> },
              { id: 'imobiliario', label: 'Mercado Imobiliário', icon: <Building2 size={16} /> },
              { id: 'pme', label: 'Empresas & PMEs', icon: <Users size={16} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSolution(tab.id as any)}
                className={`header-btn ${activeSolution === tab.id ? 'active-tab' : ''}`}
                style={{ 
                  borderRadius: '50px', 
                  padding: '0.8rem 1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.6rem',
                  background: activeSolution === tab.id ? 'var(--primary-color)' : 'rgba(255,255,255,0.03)',
                  border: activeSolution === tab.id ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  color: activeSolution === tab.id ? 'white' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeSolution === 'grupos' && (
              <motion.div
                key="grupos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="resp-grid-2" style={{ maxWidth: '1200px', margin: '0 auto 4rem' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Gestão paralegal centralizada para operações complexas</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                      Reduza em até 70% o tempo gasto com burocracias. Gerencie holdings, filiais e SPEs com segurança jurídica total e processos padronizados.
                    </p>
                    <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn" style={{ padding: '1rem 2rem', borderRadius: '50px', fontSize: '1rem', display: 'inline-block' }}>
                      AGENDAR DIAGNÓSTICO GRATUITO
                    </a>
                    <div className="stats-row">
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--primary-color)' }}>50+</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GRUPOS ATENDIDOS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>NACIONAL</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ATUAÇÃO</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--secondary-color)' }}>100%</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>COMPLIANCE</span></div>
                    </div>
                  </div>
                  <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '32px' }}>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><Zap color="var(--primary-color)" /> Desafios que resolvemos</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {[
                        { label: 'GESTÃO DESCENTRALIZADA', val: 'Centralizamos tudo em uma plataforma única' },
                        { label: 'CUSTOS ELEVADOS', val: 'Redução de até 60% nos custos operacionais' },
                        { label: 'RISCOS DE COMPLIANCE', val: 'Monitoramento 24/7 e alertas automáticos' },
                        { label: 'PROCESSOS LENTOS', val: 'Processos 85% mais rápidos com automação' },
                      ].map((item, i) => (
                        <div key={i}>
                          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>{item.label}</h4>
                          <p style={{ color: 'var(--primary-color)', fontWeight: 600 }}>{item.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', textAlign: 'center', marginBottom: '3rem' }}>Como transformamos sua operação</h3>
                  <div className="resp-grid-4">
                    {[
                      { step: '1', title: 'Diagnóstico Completo', desc: 'Mapeamos toda estrutura societária, identificamos gaps e oportunidades de otimização.' },
                      { step: '2', title: 'Plano de Ação', desc: 'Desenvolvemos roadmap personalizado com prioridades, prazos e quick wins.' },
                      { step: '3', title: 'Implementação', desc: 'Executamos processos, regularizações e otimizações com equipe dedicada.' },
                      { step: '4', title: 'Gestão Contínua', desc: 'Monitoramento proativo, alertas de compliance e suporte permanente.' }
                    ].map((s, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.3rem', fontWeight: 900 }}>{s.step}</div>
                        <h4 style={{ marginBottom: '0.8rem' }}>{s.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSolution === 'imobiliario' && (
              <motion.div
                key="imobiliario"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="resp-grid-2" style={{ maxWidth: '1200px', margin: '0 auto 4rem' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Lance seus empreendimentos sem burocracia</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                      Cuidamos de toda regularização e licenciamento para que você foque em vender. Do alvará de construção ao habite-se, garantimos 100% de conformidade.
                    </p>
                    <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn" style={{ padding: '1rem 2rem', borderRadius: '50px', fontSize: '1rem', display: 'inline-block' }}>
                      REGULARIZAR EMPREENDIMENTO
                    </a>
                    <div className="stats-row">
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--primary-color)' }}>300+</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>EMPREENDIMENTOS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>30 DIAS</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MÉDIA LICENÇAS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--secondary-color)' }}>ZERO</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>EMBARGOS</span></div>
                    </div>
                  </div>
                  <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '32px' }}>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><TrendingUp color="var(--accent-cyan)" /> Acelere seus lançamentos</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {[
                        { label: 'ATRASOS EM LICENÇAS', val: 'Licenças em até 30 dias úteis' },
                        { label: 'RISCO DE EMBARGO', val: 'Auditoria preventiva e regularização' },
                        { label: 'COMPLEXIDADE REGULATÓRIA', val: 'Gestão unificada de toda documentação' },
                        { label: 'CUSTOS COM RETRABALHO', val: 'Aprovação garantida na primeira vez' },
                      ].map((item, i) => (
                        <div key={i}>
                          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>{item.label}</h4>
                          <p style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>{item.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: 'clamp(1.4rem, 5vw, 2rem)', textAlign: 'center', marginBottom: '3rem' }}>Processo ágil e transparente</h3>
                  <div className="resp-grid-4">
                    {[
                      { step: '01', time: '24 horas', title: 'Análise do Projeto', desc: 'Avaliamos documentação, identificamos pendências e criamos plano de ação.' },
                      { step: '02', time: '3-5 dias', title: 'Preparação Documental', desc: 'Organizamos e preparamos toda documentação necessária.' },
                      { step: '03', time: '15-30 dias', title: 'Protocolo e Acompanhamento', desc: 'Protocolamos nos órgãos e acompanhamos até aprovação.' },
                      { step: '04', time: 'Contínuo', title: 'Entrega e Suporte', desc: 'Documentos aprovados e suporte contínuo para renovações.' }
                    ].map((s, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 900, marginBottom: '0.5rem' }}>{s.step}</div>
                        <h4 style={{ marginBottom: '0.5rem' }}>{s.title}</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>{s.desc}</p>
                        <div style={{ display: 'inline-block', background: 'rgba(0, 243, 255, 0.1)', color: 'var(--accent-cyan)', padding: '0.3rem 0.8rem', borderRadius: '50px', fontSize: '0.7rem' }}>{s.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeSolution === 'pme' && (
              <motion.div
                key="pme"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="resp-grid-2" style={{ maxWidth: '1200px', margin: '0 auto 4rem' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Serviços paralegais acessíveis e eficientes</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                      Do MEI à média empresa, oferecemos soluções sob medida para manter seu negócio regularizado e em crescimento.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn" style={{ padding: '1rem 2rem', borderRadius: '50px', fontSize: '1rem' }}>
                        FALAR COM CONSULTOR
                      </a>
                    </div>
                    <div className="stats-row">
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--primary-color)' }}>1000+</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>CLIENTES ATENDIDOS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>JUSTO</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PREÇOS ACESSÍVEIS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--secondary-color)' }}>VIP</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SUPORTE DEDICADO</span></div>
                    </div>
                  </div>
                  <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '32px' }}>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><Scale color="var(--secondary-color)" /> Simplifique sua gestão</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {[
                        { label: 'FALTA DE TEMPO', val: 'Cuidamos de tudo para você' },
                        { label: 'MULTAS E PENALIDADES', val: 'Calendário de obrigações e alertas' },
                        { label: 'CUSTOS ELEVADOS', val: 'Pague apenas pelo que usar' },
                        { label: 'PROCESSOS COMPLEXOS', val: 'Simplificamos e explicamos tudo' },
                      ].map((item, i) => (
                        <div key={i}>
                          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>{item.label}</h4>
                          <p style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>{item.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="resp-grid-3">
                  {[
                    { title: 'Plano Essencial', sub: 'Para MEI e Microempresas', price: 'R$ 299', unit: '/serviço', items: ['Abertura de empresa','Certidões negativas','Alterações básicas','Suporte por e-mail'], cta: 'SOLICITAR ORÇAMENTO', highlight: false },
                    { title: 'Plano Crescimento', sub: 'Para Pequenas Empresas', price: 'R$ 699', unit: '/mês', items: ['Tudo do Essencial +','Licenças e alvarás','Compliance básico','Dashboard online'], cta: 'COMEÇAR AGORA', highlight: true },
                    { title: 'Plano Corporate', sub: 'Para Médias Empresas', price: 'Personalizado', unit: '', items: ['Tudo do Crescimento +','Gestão de filiais','Atendimento VIP','SLA garantido'], cta: 'FALAR COM CONSULTOR', highlight: false },
                  ].map((plan, idx) => (
                    <div key={idx} className="glass-card" style={{ padding: '2rem', border: plan.highlight ? '1px solid var(--secondary-color)' : undefined }}>
                      {plan.highlight && <div style={{ background: 'var(--secondary-color)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.7rem', display: 'inline-block', marginBottom: '1rem' }}>MAIS POPULAR</div>}
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>{plan.title}</h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.2rem' }}>{plan.sub}</p>
                      <ul style={{ color: 'var(--text-muted)', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                        {plan.items.map((item, i) => <li key={i}><CheckCircle size={13} style={{ color: 'var(--secondary-color)', marginRight: '0.4rem' }} />{item}</li>)}
                      </ul>
                      <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{plan.price === 'Personalizado' ? 'Sob consulta' : 'A partir de'}</span>
                        <div style={{ fontSize: '1.8rem', fontWeight: 900 }}>{plan.price} <span style={{ fontSize: '0.85rem', fontWeight: 400, opacity: 0.6 }}>{plan.unit}</span></div>
                      </div>
                      <button className="header-btn" style={{ width: '100%', background: plan.highlight ? 'var(--secondary-color)' : 'transparent', color: plan.highlight ? 'white' : undefined, border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)' }}>{plan.cta}</button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* SOBRE SECTION */}
        <section className="section-container" id="sobre" style={{ paddingTop: '6rem' }}>
          <div className="resp-grid-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>5 anos transformando desafios em crescimento</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                A Sinal Verde nasceu da necessidade de simplificar a vida empresarial brasileira. Combinamos expertise jurídica com tecnologia de ponta.
              </p>
              
              <div className="resp-grid-2-small" style={{ marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '2.2rem', color: 'var(--primary-color)', fontWeight: 900, display: 'block' }}>98%</span>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.1rem', color: 'var(--text-muted)' }}>TAXA DE SATISFAÇÃO</span>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '2.2rem', color: 'var(--accent-cyan)', fontWeight: 900, display: 'block' }}>OAB</span>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.1rem', color: 'var(--text-muted)' }}>COMPLIANCE TOTAL</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', flexWrap: 'wrap' }}>
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary-color)', flexShrink: 0 }}>
                  <img src="/ceo.png" alt="Patrícia M. - CEO" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>Patrícia M.</h3>
                  <p style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1rem', marginBottom: '0.3rem' }}>CEO & FOUNDER</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Especialista em Gestão Paralegal e Estratégia Societária.</p>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { title: 'Equipe Especializada', desc: 'Advogados pós-graduandos com OAB ativa e especialização em direito empresarial.' },
                { title: 'Tecnologia de Ponta', desc: 'Processos 100% digitalizados com plataforma própria para acompanhamento em tempo real.' },
                { title: 'Segurança Jurídica', desc: 'Compliance total com a legislação vigente e atualizações sobre mudanças regulatórias.' },
                { title: 'Agilidade Garantida', desc: 'Processos 85% mais rápidos que a média do mercado com SLA definido.' },
                { title: 'Atendimento Personalizado', desc: 'Consultor dedicado que conhece profundamente seu negócio.' },
                { title: 'Resultados Mensuráveis', desc: 'Relatórios detalhados e métricas claras sobre economia de tempo e recursos.' }
              ].map((pilar, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.8rem', borderRadius: '50%', color: 'var(--primary-color)', flexShrink: 0 }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{pilar.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{pilar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reconhecimento */}
          <div style={{ marginTop: '5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', marginBottom: '2.5rem', textAlign: 'center' }}>Reconhecimento e Certificações</h2>
            <div className="resp-grid-4">
              {[
                { title: 'OAB Compliance', desc: 'Em conformidade com o Código de Ética da OAB' },
                { title: 'LGPD Certificado', desc: 'Proteção de dados em conformidade com a lei' },
                { title: 'ISO 9001', desc: 'Certificação de qualidade em processos' },
                { title: 'Associado ANPJ', desc: 'Associação Nacional dos Profissionais Jurídicos' }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <Award size={36} style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }} />
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Missão, Visão e Valores */}
          <div style={{ marginTop: '5rem' }}>
            <div className="resp-grid-3">
              {[
                { icon: <Target size={26} />, title: 'Missão', color: 'var(--primary-color)', IconBig: Target, text: 'Simplificar processos burocráticos e oferecer soluções ágeis para que nossos clientes foquem no crescimento, garantindo conformidade legal em todas as operações.' },
                { icon: <Eye size={26} />, title: 'Visão', color: 'var(--accent-cyan)', IconBig: Eye, text: 'Ser a principal referência nacional em serviços paralegais, reconhecida pela excelência e capacidade de transformar burocracia em vantagem competitiva.' },
                { icon: <Heart size={26} />, title: 'Valores', color: 'var(--secondary-color)', IconBig: Heart, text: '' },
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <h3 style={{ fontSize: '1.6rem', color: item.color, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    {item.icon} {item.title}
                  </h3>
                  {item.text ? (
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.text}</p>
                  ) : (
                    <ul style={{ color: 'var(--text-muted)', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      <li><strong>Excelência:</strong> Busca constante pela qualidade</li>
                      <li><strong>Transparência:</strong> Relacionamentos de confiança</li>
                      <li><strong>Agilidade:</strong> Rapidez na resolução de demandas</li>
                      <li><strong>Ética:</strong> Compromisso com a integridade</li>
                      <li><strong>Personalização:</strong> Soluções sob medida</li>
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section-container" id="faq" style={{ paddingTop: '5rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '2.5rem', textAlign: 'center' }}>Perguntas Frequentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: 'Qual o prazo médio para obtenção de licenças?', a: 'O prazo varia conforme o tipo de licença. Em média, licenças municipais levam de 15 a 30 dias, enquanto licenças ambientais podem levar de 60 a 120 dias.' },
                { q: 'Vocês atendem empresas de todos os portes?', a: 'Sim! Atendemos desde MEIs até grandes grupos econômicos com soluções escaláveis e personalizadas.' },
                { q: 'Como funciona o acompanhamento dos processos?', a: 'Você terá acesso à nossa área do cliente para acompanhar em tempo real. Também enviamos atualizações por e-mail e WhatsApp.' },
                { q: 'Vocês oferecem serviços de urgência?', a: 'Sim! Temos um serviço express para demandas urgentes com priorização e acompanhamento dedicado.' }
              ].map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden', border: activeFaq === idx ? '1px solid var(--primary-color)' : '1px solid rgba(255,255,255,0.05)' }}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    style={{ width: '100%', padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', textAlign: 'left', fontSize: '1rem', fontWeight: 600, gap: '1rem' }}
                  >
                    <span>{item.q}</span>
                    <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }} style={{ flexShrink: 0 }}>
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div style={{ padding: '0 1.5rem 1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
          <div className="glass-card" style={{ padding: 'clamp(2rem, 6vw, 5rem)', borderRadius: '40px', background: 'linear-gradient(135deg, rgba(0, 255, 135, 0.1) 0%, rgba(0, 0, 0, 0) 100%)', border: '1px solid rgba(0, 255, 135, 0.2)' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 7vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>Vamos crescer juntos?</h2>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Descubra como podemos transformar a burocracia em vantagem competitiva para seu negócio.
            </p>
            <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn" style={{ padding: '1.2rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: '#25D366', border: 'none' }}>
              <MessageSquare size={22} /> Fale agora com um especialista
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '3rem 2rem', marginBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="header-logo" style={{ fontSize: '1rem' }}>
              <img src="/logo transp.png" alt="Logo Sinal Verde" style={{ height: '30px' }} />
              SINAL VERDE
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Termos de Uso</a>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Privacidade</a>
              <a href="https://wa.me/5511963321755" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Suporte</a>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
              © SINAL VERDE APOIO ADMINISTRATIVO 2026
            </div>
          </div>
        </footer>

        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/5511963321755" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ position: 'fixed', bottom: '5.5rem', right: '1.5rem', background: '#25D366', color: 'white', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)', zIndex: 999, transition: 'transform 0.3s' }}
        >
          <MessageCircle size={28} />
        </a>

      </main>
    </>
  );
}

export default App;
