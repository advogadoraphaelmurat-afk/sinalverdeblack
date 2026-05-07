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

function App() {
  const [activeSolution, setActiveSolution] = useState<'grupos' | 'imobiliario' | 'pme'>('grupos');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="global-bg" />
      <div className="global-overlay" />
      
      {/* Sidebar */}
      <aside className="glass-sidebar">
        <div className="sidebar-item" data-label="Início" onClick={() => scrollTo('home')}><Home size={20} /></div>
        <div className="sidebar-item" data-label="Sobre" onClick={() => scrollTo('sobre')}><Users size={20} /></div>
        <div className="sidebar-item" data-label="Serviços" onClick={() => scrollTo('servicos')}><Briefcase size={20} /></div>
        <div className="sidebar-item" data-label="Contato" onClick={() => scrollTo('faq')}><Layers size={20} /></div>
        <div className="sidebar-push">
          <div className="sidebar-item" data-label="WhatsApp" onClick={() => window.open('https://wa.me/5511963321755','_blank')}><Lock size={20} /></div>
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
        <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn">
          Fale Conosco
        </a>
      </header>

      <main className="app-container">
        
        {/* HERO SECTION */}
        <section className="section-container" id="home">
          <div className="hero-bg" />
          <div className="hero-overlay" />
          
          <div className="hero-visual">
            <div className="scenic-blob scenic-1" />
            <div className="scenic-blob scenic-2" />
            <Abstract3D />
          </div>
          
          <div className="hero-content">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content-inner"
            >
              <img 
                src="/logo-branco.png" 
                alt="Logo Sinal Verde" 
                className="hero-logo"
              />
              
              <p className="hero-subtitle">
                Confiabilidade na sua Gestão <br />
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.3rem', opacity: 0.5, textTransform: 'uppercase' }}>Assessoria Paralegal Especializada</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* SOLUTIONS SELECTOR SECTION */}
        <section className="section-container" id="servicos" style={{ paddingTop: '5rem' }}>
          <div className="scenic-blob scenic-3" />
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>Soluções Especializadas</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Escolha o perfil que melhor se adapta à sua necessidade empresarial</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'grupos', label: 'Grupos Econômicos', icon: <Briefcase size={18} /> },
              { id: 'imobiliario', label: 'Mercado Imobiliário', icon: <Building2 size={18} /> },
              { id: 'pme', label: 'Empresas & PMEs', icon: <Users size={18} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSolution(tab.id as any)}
                className={`header-btn ${activeSolution === tab.id ? 'active-tab' : ''}`}
                style={{ 
                  borderRadius: '50px', 
                  padding: '1rem 2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.8rem',
                  background: activeSolution === tab.id ? 'var(--primary-color)' : 'rgba(16, 185, 129, 0.03)',
                  border: activeSolution === tab.id ? 'none' : '1px solid rgba(16, 185, 129, 0.1)',
                  color: activeSolution === tab.id ? 'white' : 'var(--text-muted)'
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem', maxWidth: '1200px', margin: '0 auto' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Gestão paralegal centralizada para operações complexas</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                      Reduza em até 70% o tempo gasto com burocracias. Gerencie holdings, filiais e SPEs com segurança jurídica total e processos padronizados.
                    </p>
                    <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn" style={{ padding: '1.2rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem' }}>
                      AGENDAR DIAGNÓSTICO GRATUITO
                    </a>
                    
                    <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem' }}>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--primary-color)' }}>50+</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>GRUPOS ATENDIDOS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>NACIONAL</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ATUAÇÃO</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--secondary-color)' }}>100%</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>COMPLIANCE</span></div>
                    </div>
                  </div>
                  <div className="glass-card" style={{ padding: '3rem', borderRadius: '32px', textAlign: 'right' }}>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }}><Zap color="var(--primary-color)" /> Desafios que resolvemos</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>GESTÃO DESCENTRALIZADA</h4>
                        <p style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Centralizamos tudo em uma plataforma única</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>CUSTOS ELEVADOS</h4>
                        <p style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Redução de até 60% nos custos operacionais</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>RISCOS DE COMPLIANCE</h4>
                        <p style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Monitoramento 24/7 e alertas automáticos</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>PROCESSOS LENTOS</h4>
                        <p style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Processos 85% mais rápidos com automação</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '6rem' }}>
                  <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '4rem' }}>Como transformamos sua operação</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {[
                      { step: '1', title: 'Diagnóstico Completo', desc: 'Mapeamos toda estrutura societária, identificamos gaps e oportunidades de otimização.' },
                      { step: '2', title: 'Plano de Ação', desc: 'Desenvolvemos roadmap personalizado com prioridades, prazos e quick wins.' },
                      { step: '3', title: 'Implementação', desc: 'Executamos processos, regularizações e otimizações com equipe dedicada.' },
                      { step: '4', title: 'Gestão Contínua', desc: 'Monitoramento proativo, alertas de compliance e suporte permanente.' }
                    ].map((s, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 900 }}>{s.step}</div>
                        <h4 style={{ marginBottom: '1rem' }}>{s.title}</h4>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem', maxWidth: '1200px', margin: '0 auto' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Lance seus empreendimentos sem burocracia</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                      Cuidamos de toda regularização e licenciamento para que você foque em vender. Do alvará de construção ao habite-se, garantimos 100% de conformidade.
                    </p>
                    <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn" style={{ padding: '1.2rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem' }}>
                      REGULARIZAR EMPREENDIMENTO
                    </a>
                    
                    <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem' }}>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--primary-color)' }}>300+</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>EMPREENDIMENTOS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>30 DIAS</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MÉDIA LICENÇAS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--secondary-color)' }}>ZERO</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>EMBARGOS</span></div>
                    </div>
                  </div>
                  <div className="glass-card" style={{ padding: '3rem', borderRadius: '32px', textAlign: 'right' }}>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }}><TrendingUp color="var(--accent-cyan)" /> Acelere seus lançamentos</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>ATRASOS EM LICENÇAS</h4>
                        <p style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Licenças em até 30 dias úteis</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>RISCO DE EMBARGO</h4>
                        <p style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Auditoria preventiva e regularização</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>COMPLEXIDADE REGULATÓRIA</h4>
                        <p style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Gestão unificada de toda documentação</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>CUSTOS COM RETRABALHO</h4>
                        <p style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>Aprovação garantida na primeira vez</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '6rem' }}>
                  <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '4rem' }}>Processo ágil e transparente</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {[
                      { step: '01', time: '24 horas', title: 'Análise do Projeto', desc: 'Avaliamos documentação, identificamos pendências e criamos plano de ação.' },
                      { step: '02', time: '3-5 dias', title: 'Preparação Documental', desc: 'Organizamos e preparamos toda documentação necessária.' },
                      { step: '03', time: '15-30 dias', title: 'Protocolo e Acompanhamento', desc: 'Protocolamos nos órgãos e acompanhamos até aprovação.' },
                      { step: '04', time: 'Contínuo', title: 'Entrega e Suporte', desc: 'Documentos aprovados e suporte contínuo para renovações.' }
                    ].map((s, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                        <div style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 900, marginBottom: '0.5rem' }}>{s.step}</div>
                        <h4 style={{ marginBottom: '0.5rem' }}>{s.title}</h4>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{s.desc}</p>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem', maxWidth: '1200px', margin: '0 auto' }}>
                  <div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>Serviços paralegais acessíveis e eficientes</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                      Do MEI à média empresa, oferecemos soluções sob medida para manter seu negócio regularizado e em crescimento. Preços justos, atendimento ágil.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn" style={{ padding: '1.2rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem' }}>
                        FALAR COM CONSULTOR
                      </a>
                      <button className="header-btn" style={{ padding: '1.2rem 2.5rem', borderRadius: '50px', fontSize: '1.1rem', background: 'transparent', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                        VER PLANOS
                      </button>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '3rem', marginTop: '4rem' }}>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--primary-color)' }}>1000+</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>CLIENTES ATENDIDOS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--accent-cyan)' }}>JUSTO</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>PREÇOS ACESSÍVEIS</span></div>
                      <div><span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, color: 'var(--secondary-color)' }}>VIP</span><span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>SUPORTE DEDICADO</span></div>
                    </div>
                  </div>
                  <div className="glass-card" style={{ padding: '3rem', borderRadius: '32px', textAlign: 'right' }}>
                    <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'flex-end' }}><Scale color="var(--secondary-color)" /> Simplifique sua gestão</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>FALTA DE TEMPO</h4>
                        <p style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>Cuidamos de tudo para você</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>MULTAS E PENALIDADES</h4>
                        <p style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>Calendário de obrigações e alertas</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>CUSTOS ELEVADOS</h4>
                        <p style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>Pague apenas pelo que usar</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>PROCESSOS COMPLEXOS</h4>
                        <p style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>Simplificamos e explicamos tudo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Plano Essencial</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Para MEI e Microempresas</p>
                    <ul style={{ color: 'var(--text-muted)', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Abertura de empresa</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Certidões negativas</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Alterações básicas</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Suporte por e-mail</li>
                    </ul>
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>A partir de</span>
                      <div style={{ fontSize: '2rem', fontWeight: 900 }}>R$ 299 <span style={{ fontSize: '0.9rem', fontWeight: 400, opacity: 0.6 }}>/serviço</span></div>
                    </div>
                    <button className="header-btn" style={{ width: '100%', background: 'transparent', border: '1px solid rgba(16, 185, 129, 0.15)' }}>SOLICITAR ORÇAMENTO</button>
                  </div>
                  <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid var(--secondary-color)' }}>
                    <div className="meta-label" style={{ background: 'var(--secondary-color)', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.7rem', display: 'inline-block', marginBottom: '1rem' }}>MAIS POPULAR</div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Plano Crescimento</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Para Pequenas Empresas</p>
                    <ul style={{ color: 'var(--text-muted)', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Tudo do Essencial +</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Licenças e alvarás</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Compliance básico</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Dashboard online</li>
                    </ul>
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>A partir de</span>
                      <div style={{ fontSize: '2rem', fontWeight: 900 }}>R$ 699 <span style={{ fontSize: '0.9rem', fontWeight: 400, opacity: 0.6 }}>/mês</span></div>
                    </div>
                    <button className="header-btn" style={{ width: '100%', background: 'var(--secondary-color)', color: 'white' }}>COMEÇAR AGORA</button>
                  </div>
                  <div className="glass-card" style={{ padding: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Plano Corporate</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Para Médias Empresas</p>
                    <ul style={{ color: 'var(--text-muted)', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Tudo do Crescimento +</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Gestão de filiais</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> Atendimento VIP</li>
                      <li><CheckCircle size={14} style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} /> SLA garantido</li>
                    </ul>
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sob consulta</span>
                      <div style={{ fontSize: '2rem', fontWeight: 900 }}>Personalizado</div>
                    </div>
                    <button className="header-btn" style={{ width: '100%', background: 'transparent', border: '1px solid rgba(16, 185, 129, 0.15)' }}>FALAR COM CONSULTOR</button>
                  </div>
                </div>

                <div style={{ marginTop: '6rem' }}>
                  <h3 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '4rem' }}>Como funciona</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    {[
                      { step: '1', title: 'Solicite Online', desc: 'Preencha o formulário com sua necessidade ou escolha um serviço.' },
                      { step: '2', title: 'Orçamento Rápido', desc: 'Receba proposta detalhada com prazo e valor em até 2 horas.' },
                      { step: '3', title: 'Execução', desc: 'Nossa equipe cuida de tudo enquanto você acompanha online.' },
                      { step: '4', title: 'Entrega', desc: 'Documentos prontos e orientações para manutenção.' }
                    ].map((s, idx) => (
                      <div key={idx} style={{ textAlign: 'center' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.2rem', fontWeight: 900 }}>{s.step}</div>
                        <h4 style={{ marginBottom: '1rem' }}>{s.title}</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* SOBRE SECTION */}
        <section className="section-container" id="sobre" style={{ paddingTop: '8rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', marginBottom: '2rem', lineHeight: 1.1 }}>5 anos transformando desafios em crescimento</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                A Sinal Verde Assessoria nasceu da necessidade real de simplificar a vida empresarial brasileira. Fundada por advogados especializados e pós-graduandos com visão inovadora, combinamos expertise jurídica com tecnologia de ponta.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                  <span style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontWeight: 900, display: 'block' }}>98%</span>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.1rem', color: 'var(--text-muted)' }}>TAXA DE SATISFAÇÃO</span>
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.03)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                  <span style={{ fontSize: '2.5rem', color: 'var(--accent-cyan)', fontWeight: 900, display: 'block' }}>OAB</span>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.1rem', color: 'var(--text-muted)' }}>COMPLIANCE TOTAL</span>
                </div>
              </div>

              {/* CEO Profile */}
              <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '2rem', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--primary-color)', flexShrink: 0 }}>
                  <img src="/ceo.png" alt="Patrícia M. - CEO" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) brightness(0.8)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Patrícia M.</h3>
                  <p style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1rem', marginBottom: '0.5rem' }}>CEO & FOUNDER</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Especialista em Gestão Paralegal e Estratégia Societária.</p>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { title: 'Equipe Especializada', desc: 'Advogados pós-graduandos com OAB ativa e especialização em direito empresarial e paralegal.' },
                { title: 'Tecnologia de Ponta', desc: 'Processos 100% digitalizados com plataforma própria para acompanhamento em tempo real.' },
                { title: 'Segurança Jurídica', desc: 'Compliance total com a legislação vigente e atualizações constantes sobre mudanças regulatórias.' },
                { title: 'Agilidade Garantida', desc: 'Processos 85% mais rápidos que a média do mercado com SLA definido para cada serviço.' },
                { title: 'Atendimento Personalizado', desc: 'Consultor dedicado que conhece profundamente seu negócio e suas necessidades específicas.' },
                { title: 'Resultados Mensuráveis', desc: 'Relatórios detalhados e métricas claras sobre economia de tempo e recursos.' }
              ].map((pilar, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{pilar.title}</h4>
                    <p style={{ color: 'var(--text-muted)' }}>{pilar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reconhecimento */}
          <div style={{ marginTop: '8rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Reconhecimento e Certificações</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'OAB Compliance', desc: 'Em conformidade com o Código de Ética da OAB' },
                { title: 'LGPD Certificado', desc: 'Proteção de dados em conformidade com a lei' },
                { title: 'ISO 9001', desc: 'Certificação de qualidade em processos' },
                { title: 'Associado ANPJ', desc: 'Associação Nacional dos Profissionais Jurídicos' }
              ].map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                  <Award size={40} style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }} />
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Missão, Visão e Valores */}
          <div style={{ marginTop: '8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05 }}><Target size={120} /></div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Target size={28} /> Missão
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Simplificar processos burocráticos e oferecer soluções ágeis para que nossos clientes foquem no crescimento de seus negócios, garantindo conformidade legal e segurança jurídica em todas as operações.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05 }}><Eye size={120} /></div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Eye size={28} /> Visão
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Ser a principal referência nacional em serviços paralegais, reconhecida pela excellence, inovação tecnológica e capacidade de transformar a burocracia em vantagem competitiva para nossos clientes.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05 }}><Heart size={120} /></div>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-color)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Heart size={28} /> Valores
              </h3>
              <ul style={{ color: 'var(--text-muted)', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><strong>Excelência:</strong> Busca constante pela qualidade e inovação</li>
                <li><strong>Transparência:</strong> Relacionamentos baseados em confiança</li>
                <li><strong>Agilidade:</strong> Rapidez na resolução de demandas</li>
                <li><strong>Ética:</strong> Compromisso com la legalidade e integridade</li>
                <li><strong>Personalização:</strong> Soluções sob medida para cada cliente</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section-container" id="faq" style={{ paddingTop: '5rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Perguntas Frequentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { q: 'Qual o prazo médio para obtenção de licenças?', a: 'O prazo varia conforme o tipo de licença e órgão responsável. Em média, licenças municipais levam de 15 a 30 dias, enquanto licenças ambientais podem levar de 60 a 120 dias. Nossa equipe trabalha para acelerar ao máximo esses prazos.' },
                { q: 'Vocês atendem empresas de todos os portes?', a: 'Sim! Atendemos desde MEIs até grandes grupos econômicos. Nossa especialização nos permite oferecer soluções escaláveis e personalizadas para cada perfil de cliente.' },
                { q: 'Como funciona o acompanhamento dos processos?', a: 'Você terá acesso à nossa área do cliente, onde poderá acompanhar em tempo real o status de todos os seus processos. Além disso, enviamos atualizações por e-mail e WhatsApp sempre que houver movimentação.' },
                { q: 'Vocês oferecem serviços de urgência?', a: 'Sim! Temos um serviço express para demandas urgentes, com priorização e acompanhamento dedicado. Entre em contato para verificar a disponibilidade para seu caso específico.' }
              ].map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden', border: activeFaq === idx ? '1px solid var(--primary-color)' : '1px solid rgba(255,255,255,0.05)' }}>
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    style={{ 
                      width: '100%', 
                      padding: '1.5rem 2rem', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                  >
                    {item.q}
                    <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }}>
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ padding: '0 2rem 1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="section-container" style={{ paddingTop: '8rem', paddingBottom: '8rem', textAlign: 'center' }}>
          <div className="glass-card" style={{ padding: '5rem', borderRadius: '40px', background: 'linear-gradient(135deg, rgba(0, 255, 135, 0.1) 0%, rgba(0, 0, 0, 0) 100%)', border: '1px solid rgba(0, 255, 135, 0.2)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '2rem', fontWeight: 900 }}>Vamos crescer juntos?</h2>
            <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Descubra como podemos transformar a burocracia em vantagem competitiva para seu negócio.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5511963321755" target="_blank" rel="noopener noreferrer" className="header-btn" style={{ padding: '1.5rem 3rem', borderRadius: '50px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', background: '#25D366', border: 'none' }}>
                <MessageSquare size={24} /> Fale agora com um especialista
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="scrovex-footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div className="scenic-blob scenic-4" />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <img src="/logo-branco.png" alt="Logo Sinal Verde" style={{ height: '80px', objectFit: 'contain' }} />
            
            <div className="header-nav" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Termos de Uso</a>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Política de Privacidade</a>
              <a href="https://wa.me/5511963321755" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 600 }}>Suporte Online</a>
            </div>
            
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
              Todos os direitos reservados © SINAL VERDE APOIO ADMINISTRATIVO 2026
            </div>
          </div>
        </footer>

        {/* WhatsApp Floating Button */}
        <a 
          href="https://wa.me/5511963321755" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            position: 'fixed', 
            bottom: '2rem', 
            right: '2rem', 
            background: '#25D366', 
            color: 'white', 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
            zIndex: 1000,
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <MessageCircle size={32} />
        </a>

      </main>
    </>
  );
}

export default App;
