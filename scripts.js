// Lunitec Landing Page JS (vanilla)
const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));



// ===== i18n (pt-BR / en-US) =====
const I18N = {
  "pt-BR": {
    "brand_sub": "SERVIÇOS TECNOLÓGICOS",
    "nav_services": "Serviços",
    "nav_how": "Como trabalhamos",
    "nav_stack": "Stack",
    "nav_faq": "FAQ",
    "nav_budget": "Orçamento",
    "nav_contact": "Contato",
    "theme_dark": "Dark",
    "theme_glass": "Glass",
    "theme_sunrise": "Sunrise",
    "theme_neon": "Neon",
    "hero_title": "Sistemas, APIs e experiências digitais<br/>com <span class=\"gradient-text\">padrão de produto</span>.",
    "hero_lead": "Desenvolvimento sob medida, landing pages de alta conversão e consultoria técnica para tirar seu projeto do papel com velocidade, qualidade e segurança.",
    "hero_cta_budget": "Solicitar orçamento",
    "hero_cta_services": "Ver serviços",
    "services_title": "Serviços",
    "services_subtitle": "Escolha o que você precisa hoje. A arquitetura já nasce pronta para o amanhã.",
    "srv_landing_title": "Landing Pages",
    "srv_landing_desc": "Páginas rápidas e com copy orientada a conversão: SEO, formulário, WhatsApp e publicação.",
    "srv_landing_li1": "Core Web Vitals",
    "srv_landing_li2": "Estrutura AIDA",
    "srv_landing_li3": "Deploy + SSL",
    "srv_landing_btn": "Quero uma landing",
    "srv_api_title": "APIs & Integrações",
    "srv_api_desc": "REST/GraphQL, autenticação, filas e integrações com ERP/CRM/pagamentos.",
    "srv_api_li1": "Auth + RBAC",
    "srv_api_li2": "Rate limit",
    "srv_api_li3": "Documentação",
    "srv_api_btn": "Preciso de APIs",
    "srv_web_title": "Sistemas Web",
    "srv_web_desc": "Produtos completos com painel, permissões, integrações e base sólida para escalar.",
    "srv_web_li1": "Dashboard",
    "srv_web_li2": "Multi-tenant",
    "srv_web_li3": "Logs & métricas",
    "srv_web_btn": "Quero um sistema",
    "srv_consult_title": "Consultoria",
    "srv_consult_desc": "Diagnóstico técnico, desenho de arquitetura e plano de ação para destravar performance e qualidade.",
    "srv_consult_li1": "Review de código",
    "srv_consult_li2": "Roadmap",
    "srv_consult_li3": "Boas práticas",
    "srv_consult_btn": "Quero consultoria",
    "srv_auto_title": "Automação & Dados",
    "srv_auto_desc": "ETLs, rotinas, integrações e relatórios. Menos trabalho manual, mais confiabilidade.",
    "srv_auto_li1": "Pipelines",
    "srv_auto_li2": "Jobs",
    "srv_auto_li3": "Observabilidade",
    "srv_auto_btn": "Quero automatizar",
    "srv_obs_title": "Observabilidade",
    "srv_obs_desc": "Logs, métricas e alertas para você enxergar gargalos antes do cliente reclamar.",
    "srv_obs_li1": "SLOs",
    "srv_obs_li2": "Dashboards",
    "srv_obs_li3": "Alertas",
    "srv_obs_btn": "Quero monitorar",
    "how_title": "Como trabalhamos",
    "how_subtitle": "Transparência, checkpoints e entrega incremental. Você acompanha sem ficar no escuro.",
    "how_step1_title": "Descoberta",
    "how_step1_desc": "Objetivo, escopo e prioridades. Fechamos critérios de aceite e caminho mais curto.",
    "how_step2_title": "Design & Arquitetura",
    "how_step2_desc": "Wireframe/protótipo e decisões técnicas. Contratos de API e riscos mapeados.",
    "how_step3_title": "Entrega incremental",
    "how_step3_desc": "Pequenos incrementos com PRs, revisão e validação contínua.",
    "how_step4_title": "Deploy & Evolução",
    "how_step4_desc": "Publicação com CI/CD, métricas e suporte para estabilizar e evoluir.",
    "panel_title": "Acompanhamento técnico",
    "panel_hint": "Sprints • PRs • Deploy",
    "panel_stat1": "Lighthouse",
    "panel_stat2": "Automatizado",
    "panel_stat3": "Escalável",
    "panel_pill1": "Entrega incremental",
    "panel_pill2": "Código versionado",
    "panel_pill3": "Observabilidade",
    "band_k1": "Prazo",
    "band_v1": "curto",
    "band_k2": "Qualidade",
    "band_v2": "auditável",
    "band_k3": "Comunicação",
    "band_v3": "objetiva",
    "band_k4": "Entrega",
    "band_v4": "incremental",
    "stack_title": "Stack",
    "stack_subtitle": "Tecnologia com propósito. Escolha por contexto, não por modinha.",
    "faq_title": "FAQ",
    "faq_subtitle": "Perguntas que aparecem antes do orçamento (a gente já responde aqui).",
    "faq_aria": "Perguntas frequentes",
    "faq_q1": "Quanto tempo leva?",
    "faq_a1": "Depende do escopo, mas a regra é: entregas pequenas e rápidas. Landing geralmente em dias; sistemas em sprints.",
    "faq_q2": "Vocês fazem manutenção/evolução?",
    "faq_a2": "Sim. Podemos seguir por pacote mensal ou por demanda, sempre com backlog e prioridade clara.",
    "faq_q3": "Dá para integrar com WhatsApp, ERP, pagamentos e afins?",
    "faq_a3": "Sim. Integrações são parte do core da Lunitec: APIs, webhooks, filas e autenticação.",
    "faq_q4": "Como funciona o orçamento?",
    "faq_a4": "Você descreve objetivo e escopo. Retornamos com proposta enxuta: etapas, prazos e custo por entrega.",
    "contact_title": "Vamos conversar",
    "contact_subtitle": "Manda o contexto. A Lunitec devolve um plano direto, sem enrolação.",
    "contact_whatsapp": "WhatsApp",
    "contact_copy_email": "Copiar e-mail",
    "form_name": "Nome",
    "form_email": "E-mail",
    "form_service": "Serviço (opcional)",
    "form_message": "Mensagem",
    "form_name_ph": "Seu nome",
    "form_email_ph": "voce@empresa.com",
    "form_message_ph": "Ex.: site de [segmento] com integração no WhatsApp.",
    "opt_select": "Selecione…",
    "opt_landing": "Landing Page",
    "opt_web": "Sistema Web",
    "opt_api": "API / Integrações",
    "opt_consult": "Consultoria",
    "opt_automation": "Automação / Dados",
    "opt_observability": "Observabilidade",
    "form_submit": "Enviar proposta",
    "form_hint": "Você será redirecionado para seu e-mail/WhatsApp com a mensagem pronta.",
    "footer_copy": "© <span id=\"year\"></span> Lunitec Serviços Tecnológicos",
    "footer_services": "Serviços",
    "footer_contact": "Contato",
    "email_copied": "E-mail copiado ✓",
    "email_subject": "Lunitec | Solicitação de orçamento",
    "email_name": "Nome",
    "email_email": "E-mail",
    "email_service": "Serviço",
    "hint_ready": "Mensagem pronta. Se preferir, clique em WhatsApp.",
    "msg_template": "Serviço desejado: {service}\nObjetivo: \nPrazo desejado: \nReferências (links): \n",
    "doc_title": "Lunitec Serviços Tecnológicos | Sistemas, APIs, Landings e Consultoria",
    "doc_desc": "Desenvolvimento de sistemas, APIs, landing pages, consultoria e automação. Entregas rápidas, performance e segurança para seu negócio."
  },
  "en-US": {
    "brand_sub": "TECHNOLOGY SERVICES",
    "nav_services": "Services",
    "nav_how": "How we work",
    "nav_stack": "Stack",
    "nav_faq": "FAQ",
    "nav_budget": "Get a quote",
    "nav_contact": "Contact",
    "theme_dark": "Dark",
    "theme_glass": "Glass",
    "theme_sunrise": "Sunrise",
    "theme_neon": "Neon",
    "hero_title": "Systems, APIs and digital experiences<br/>with <span class=\"gradient-text\">product standards</span>.",
    "hero_lead": "Custom development, high-conversion landing pages and technical consulting to take your project from idea to launch with speed, quality and security.",
    "hero_cta_budget": "Request a quote",
    "hero_cta_services": "See services",
    "services_title": "Services",
    "services_subtitle": "Pick what you need today. The architecture is ready for tomorrow.",
    "srv_landing_title": "Landing Pages",
    "srv_landing_desc": "Fast pages with conversion-focused copy: SEO, forms, WhatsApp and publishing.",
    "srv_landing_li1": "Core Web Vitals",
    "srv_landing_li2": "AIDA structure",
    "srv_landing_li3": "Deploy + SSL",
    "srv_landing_btn": "I want a landing",
    "srv_api_title": "APIs & Integrations",
    "srv_api_desc": "REST/GraphQL, authentication, queues and integrations with ERP/CRM/payments.",
    "srv_api_li1": "Auth + RBAC",
    "srv_api_li2": "Rate limiting",
    "srv_api_li3": "Documentation",
    "srv_api_btn": "I need APIs",
    "srv_web_title": "Web Systems",
    "srv_web_desc": "Complete products with admin panel, permissions, integrations and a solid base to scale.",
    "srv_web_li1": "Dashboard",
    "srv_web_li2": "Multi-tenant",
    "srv_web_li3": "Logs & metrics",
    "srv_web_btn": "I need a system",
    "srv_consult_title": "Consulting",
    "srv_consult_desc": "Technical diagnosis, architecture design and an action plan to unlock performance and quality.",
    "srv_consult_li1": "Code review",
    "srv_consult_li2": "Roadmap",
    "srv_consult_li3": "Best practices",
    "srv_consult_btn": "I need consulting",
    "srv_auto_title": "Automation & Data",
    "srv_auto_desc": "ETLs, routines, integrations and reports. Less manual work, more reliability.",
    "srv_auto_li1": "Pipelines",
    "srv_auto_li2": "Jobs",
    "srv_auto_li3": "Observability",
    "srv_auto_btn": "I want automation",
    "srv_obs_title": "Observability",
    "srv_obs_desc": "Logs, metrics and alerts so you spot bottlenecks before customers do.",
    "srv_obs_li1": "SLOs",
    "srv_obs_li2": "Dashboards",
    "srv_obs_li3": "Alerts",
    "srv_obs_btn": "I want monitoring",
    "how_title": "How we work",
    "how_subtitle": "Transparency, checkpoints and incremental delivery. You follow progress without being left in the dark.",
    "how_step1_title": "Discovery",
    "how_step1_desc": "Goals, scope and priorities. We align acceptance criteria and the shortest path.",
    "how_step2_title": "Design & Architecture",
    "how_step2_desc": "Wireframes/prototypes and technical decisions. API contracts and risks mapped.",
    "how_step3_title": "Incremental delivery",
    "how_step3_desc": "Small increments with PRs, reviews and continuous validation.",
    "how_step4_title": "Deploy & Evolution",
    "how_step4_desc": "Release with CI/CD, metrics and support to stabilize and evolve.",
    "panel_title": "Technical tracking",
    "panel_hint": "Sprints • PRs • Deploy",
    "panel_stat1": "Lighthouse",
    "panel_stat2": "Automated",
    "panel_stat3": "Scalable",
    "panel_pill1": "Incremental delivery",
    "panel_pill2": "Versioned code",
    "panel_pill3": "Observability",
    "band_k1": "Timeline",
    "band_v1": "short",
    "band_k2": "Quality",
    "band_v2": "auditable",
    "band_k3": "Communication",
    "band_v3": "straight to the point",
    "band_k4": "Delivery",
    "band_v4": "incremental",
    "stack_title": "Stack",
    "stack_subtitle": "Technology with purpose. Choose by context, not by hype.",
    "faq_title": "FAQ",
    "faq_subtitle": "Questions that come up before the quote (we answer them here).",
    "faq_aria": "Frequently asked questions",
    "faq_q1": "How long does it take?",
    "faq_a1": "It depends on scope, but the rule is: small, fast deliveries. Landings usually take days; systems run in sprints.",
    "faq_q2": "Do you do maintenance and improvements?",
    "faq_a2": "Yes. We can work on a monthly package or on demand, always with a clear backlog and priorities.",
    "faq_q3": "Can you integrate WhatsApp, ERP, payments, etc.?",
    "faq_a3": "Yes. Integrations are core at Lunitec: APIs, webhooks, queues and authentication.",
    "faq_q4": "How does the quote work?",
    "faq_a4": "You describe the goal and scope. We reply with a lean proposal: steps, timeline and cost per delivery.",
    "contact_title": "Let's talk",
    "contact_subtitle": "Send the context. Lunitec replies with a direct plan, no fluff.",
    "contact_whatsapp": "WhatsApp",
    "contact_copy_email": "Copy email",
    "form_name": "Name",
    "form_email": "Email",
    "form_service": "Service (optional)",
    "form_message": "Message",
    "form_name_ph": "Your name",
    "form_email_ph": "you@company.com",
    "form_message_ph": "E.g.: a [industry] website with WhatsApp integration.",
    "opt_select": "Select…",
    "opt_landing": "Landing Page",
    "opt_web": "Web System",
    "opt_api": "API / Integrations",
    "opt_consult": "Consulting",
    "opt_automation": "Automation / Data",
    "opt_observability": "Observability",
    "form_submit": "Send request",
    "form_hint": "You'll be redirected to your email/WhatsApp with a ready-to-send message.",
    "footer_copy": "© <span id=\"year\"></span> Lunitec Technology Services",
    "footer_services": "Services",
    "footer_contact": "Contact",
    "email_copied": "Email copied ✓",
    "email_subject": "Lunitec | Quote request",
    "email_name": "Name",
    "email_email": "Email",
    "email_service": "Service",
    "hint_ready": "Message ready. If you prefer, click WhatsApp.",
    "msg_template": "Desired service: {service}\nGoal: \nDesired timeline: \nReferences (links): \n",
    "doc_title": "Lunitec Technology Services | Systems, APIs, Landings & Consulting",
    "doc_desc": "Systems, APIs, landing pages, consulting and automation. Fast deliveries, performance and security for your business."
  }
};
let CURRENT_LANG = 'pt-BR';

function t(key){
  const pack = I18N[CURRENT_LANG] || I18N['pt-BR'];
  return (pack && pack[key]) || (I18N['pt-BR'] && I18N['pt-BR'][key]) || key;
}

function detectLang(){
  const saved = localStorage.getItem('lunitec_lang');
  if (saved && I18N[saved]) return saved;

  const nav = String(navigator.language || '').toLowerCase();
  if (nav.startsWith('pt')) return 'pt-BR';
  return 'en-US';
}

function setDocMeta(){
  document.title = t('doc_title');
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t('doc_desc'));
}

function applyI18n(lang){
  if (I18N[lang]) CURRENT_LANG = lang;
  localStorage.setItem('lunitec_lang', CURRENT_LANG);

  document.documentElement.setAttribute('lang', CURRENT_LANG);

  // Active flag
  qsa('.langBtn').forEach(b => b.classList.toggle('is-active', b.getAttribute('data-lang') === CURRENT_LANG));
  qsa('[data-lang-current]').forEach(el => {
    el.textContent = CURRENT_LANG === 'pt-BR' ? 'PT' : 'EN';
  });

  // data-i18n: textContent
  qsa('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // data-i18n-html: innerHTML
  qsa('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  // placeholders
  qsa('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key));
  });

  // aria-labels
  qsa('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    el.setAttribute('aria-label', t(key));
  });

  // labels (keep input/select/textarea intact)
  qsa('[data-i18n-label]').forEach(lab => {
    const key = lab.getAttribute('data-i18n-label');
    const text = t(key);

    // Find first meaningful text node
    const nodes = Array.from(lab.childNodes);
    const textNode = nodes.find(n => n.nodeType === 3 && n.textContent.trim().length > 0);

    if (textNode) {
      textNode.textContent = '\n              ' + text + '\n              ';
    } else {
      lab.insertBefore(document.createTextNode(text + ' '), lab.firstChild);
    }
  });

  setDocMeta();
}

function initI18n(){
  const lang = detectLang();
  applyI18n(lang);

  qsa('.langBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('data-lang') || 'pt-BR';
      applyI18n(next);
    });
  });
  // Dropdown behavior (premium hover + mobile tap)
  const dd = qs('[data-lang-dropdown]');
  const toggle = qs('[data-lang-toggle]');
  if (dd && toggle) {
    const close = () => {
      dd.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    const open = () => {
      dd.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    };
    const isOpen = () => dd.classList.contains('is-open');

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      isOpen() ? close() : open();
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) close();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });

    // Close after choosing a language
    qsa('.langBtn', dd).forEach(btn => {
      btn.addEventListener('click', () => close());
    });
  }

}


document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initThemeSwitcher();
  initHeroCarousel();
  setYear();
  initReveal();
  initMobileNav();
  initFAQ();
  initContact();
  initServicePickers();
});

function setYear(){
  const el = qs('#year');
  if (el) el.textContent = new Date().getFullYear();
}

let neonInitialized = false;

function ensureNeon(){
  const container = qs('#neonParticles');
  if (!container || neonInitialized) return;

  const colors = ['#00ffff', '#ff00ff', '#ffff00'];
  for (let i = 0; i < 36; i += 1) {
    const particle = document.createElement('span');
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.className = 'neon-particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 20}s`;
    particle.style.animationDuration = `${15 + Math.random() * 10}s`;
    particle.style.background = color;
    particle.style.boxShadow = `0 0 12px ${color}`;
    container.appendChild(particle);
  }

  neonInitialized = true;
}

function setTheme(theme){
  const next = ['1', '2', '3', '4'].includes(String(theme)) ? String(theme) : '1';
  document.body.classList.remove('theme-v1', 'theme-v2', 'theme-v3', 'theme-v4');
  document.body.classList.add(`theme-v${next}`);
  localStorage.setItem('lunitec_theme', next);

  qsa('[data-theme]').forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.getAttribute('data-theme') === next));
  });

  if (next === '4') ensureNeon();
}

function initThemeSwitcher(){
  const saved = localStorage.getItem('lunitec_theme') || '1';
  setTheme(saved);

  qsa('[data-theme]').forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.getAttribute('data-theme')));
  });
}

function initReveal(){
  const els = qsa('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('in'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) en.target.classList.add('in');
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  els.forEach(e => obs.observe(e));
}

function initMobileNav(){
  const btn = qs('.nav__toggle');
  const menu = qs('.nav__menu');
  if (!btn || !menu) return;

  const close = () => {
    btn.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };
  const open = () => {
    btn.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
  };

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('is-open');
    isOpen ? close() : open();
  });

  // Close on click
  qsa('a', menu).forEach(a => a.addEventListener('click', close));

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('is-open')) return;
    const within = menu.contains(e.target) || btn.contains(e.target);
    if (!within) close();
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

function initFAQ(){
  const questions = qsa('.faq__q');
  questions.forEach((q) => {
    const a = q.nextElementSibling;
    q.addEventListener('click', () => toggleFAQ(q, a));
    q.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFAQ(q, a);
      }
    });
  });

  function toggleFAQ(q, a){
    const expanded = q.getAttribute('aria-expanded') === 'true';
    q.setAttribute('aria-expanded', String(!expanded));
    if (a) a.hidden = expanded;
  }
}

function initServicePickers(){
  const form = qs('#leadForm');
  if (!form) return;
  const serviceSel = qs('select[name="service"]', form);
  const message = qs('textarea[name="message"]', form);

  qsa('[data-pick]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pick = btn.getAttribute('data-pick') || '';
      if (serviceSel && pick) serviceSel.value = pick;

      const serviceLabel = (serviceSel && serviceSel.selectedOptions && serviceSel.selectedOptions[0])
        ? serviceSel.selectedOptions[0].textContent.trim()
        : pick;

      if (message) {
        const base = message.value.trim();
        const extra = base ? '\n\n' : '';
        const tpl = t('msg_template').replace('{service}', serviceLabel);
        message.value = base + extra + tpl;
        message.focus();
      }

      // jump to contact form
      const contact = qs('#contato');
      if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initContact(){
  const form = qs('#leadForm');
  const whatsBtn = qs('#whatsBtn');
  const copyEmailBtn = qs('#copyEmailBtn');
  const hint = qs('#formHint');

  // TODO: troque pelos contatos reais da Lunitec
  const EMAIL = 'contato@lunitec.com.br';
  const WHATS = '5500000000000'; // ex.: 5541999999999

  if (whatsBtn) {
    whatsBtn.href = `https://wa.me/${WHATS}`;
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText(EMAIL);
        copyEmailBtn.textContent = t('email_copied');
        setTimeout(() => (copyEmailBtn.textContent = t('contact_copy_email')), 1400);
      }catch{
        window.location.href = `mailto:${EMAIL}`;
      }
    });
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const serviceVal = String(data.get('service') || '').trim();
    const msg = String(data.get('message') || '').trim();

    let serviceLabel = '';
    const sel = qs('select[name="service"]', form);
    if (sel && serviceVal) {
      const opt = sel.querySelector(`option[value="${CSS.escape(serviceVal)}"]`);
      serviceLabel = opt ? opt.textContent.trim() : serviceVal;
    }

    const subject = `${t('email_subject')}${serviceLabel ? ' — ' + serviceLabel : ''}`;
    const body = [
      `${t('email_name')}: ${name}`,
      `${t('email_email')}: ${email}`,
      serviceLabel ? `${t('email_service')}: ${serviceLabel}` : null,
      '',
      msg
    ].filter(Boolean).join('\n');

    const mailto = `mailto:${encodeURIComponent(EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    // also prep WhatsApp
    const wa = `https://wa.me/${WHATS}?text=${encodeURIComponent(subject + '\n\n' + body)}`;
    if (whatsBtn) whatsBtn.href = wa;

    if (hint) hint.textContent = t('hint_ready');
  });
}


function initHeroCarousel(){
  const carousel = qs('[data-carousel]');
  if (!carousel) return;

  const track = qs('[data-track]', carousel);
  const dotsWrap = qs('[data-dots]', carousel);
  const btnPrev = qs('[data-prev]', carousel);
  const btnNext = qs('[data-next]', carousel);
  if (!track || !dotsWrap) return;

  // Dica: para prints (texto/UI), usamos fit: 'contain' para não recortar nem borrar.
  // Para imagens abstratas/futuristas, 'cover' fica mais bonito no frame.
  const SLIDES = [
    { src: 'assets/carousel/slide-1.jpg', alt: 'Arquitetura conectada e integrações', fit: 'cover' },
    { src: 'assets/carousel/slide-2.jpg', alt: 'Interface futurista e dados em movimento', fit: 'cover' },
    { src: 'assets/carousel/slide-3.jpg', alt: 'Cidade digital e conectividade', fit: 'cover' },

    // Prints/variações do site (mais nítido em contain)
    { src: 'assets/carousel/slide-4.jpg', alt: 'Tema Dark (preview)', fit: 'contain' },
    { src: 'assets/carousel/slide-5.jpg', alt: 'Tema Glass (preview)', fit: 'contain' },
    { src: 'assets/carousel/slide-6.jpg', alt: 'Tema Sunrise (preview)', fit: 'contain' },
    { src: 'assets/carousel/slide-7.jpg', alt: 'Tema Neon (preview)', fit: 'contain' },
  ];

  track.innerHTML = SLIDES.map((s, i) => `
    <div class="carousel__slide ${s.fit === 'contain' ? 'is-contain' : ''}" data-slide data-idx="${i}">
      <img src="${s.src}" alt="${s.alt}" loading="lazy"/>
    </div>
  `).join('');

  dotsWrap.innerHTML = SLIDES.map((_, i) => `
    <button class="carousel__dot" type="button" aria-label="Ir para imagem ${i + 1}" data-dot="${i}"></button>
  `).join('');

  let slides = qsa('[data-slide]', track);
  let dots = qsa('.carousel__dot', dotsWrap);
  let index = 0;

  const total = () => slides.length;

  const update = () => {
    const t = total();
    if (!t) return;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  };

  const clampIndex = () => {
    const t = total();
    if (!t) return;
    if (index < 0) index = t - 1;
    if (index >= t) index = 0;
  };

  const go = (i) => {
    index = i;
    clampIndex();
    update();
  };

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // Remove slides quebrados (caso a pessoa ainda não tenha os arquivos 6/7 no repo)
  qsa('img', track).forEach((imgEl) => {
    imgEl.addEventListener('error', () => {
      const slide = imgEl.closest('[data-slide]');
      if (!slide) return;

      const slideIdx = slides.indexOf(slide);
      if (slideIdx === -1) return;

      // remove slide e dot correspondente
      slide.remove();
      const dot = dots[slideIdx];
      if (dot) dot.remove();

      slides = qsa('[data-slide]', track);
      dots = qsa('.carousel__dot', dotsWrap);

      if (!total()) return;

      // ajusta index para não ficar fora
      if (index >= total()) index = total() - 1;
      update();
    });
  });

  // Events
  if (btnNext) btnNext.addEventListener('click', next);
  if (btnPrev) btnPrev.addEventListener('click', prev);

  dotsWrap.addEventListener('click', (e) => {
    const dot = e.target.closest('[data-dot]');
    if (!dot) return;
    const i = Number(dot.getAttribute('data-dot'));
    if (!Number.isFinite(i)) return;
    go(i);
  });

  // Autoplay with pause on hover / focus
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer = null;

  const start = () => {
    if (prefersReduced) return;
    if (timer) return;
    timer = setInterval(next, 4200);
  };
  const stop = () => {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
  };

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);
  carousel.addEventListener('focusin', stop);
  carousel.addEventListener('focusout', start);

  // Swipe (touch)
  let x0 = null;
  let locked = false;

  const onStart = (x) => {
    x0 = x;
    locked = false;
  };
  const onMove = (x) => {
    if (x0 == null || locked) return;
    const dx = x - x0;
    if (Math.abs(dx) < 34) return;
    locked = true;
    dx < 0 ? next() : prev();
  };
  const onEnd = () => {
    x0 = null;
    locked = false;
  };

  carousel.addEventListener('touchstart', (e) => onStart(e.touches[0].clientX), { passive: true });
  carousel.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX), { passive: true });
  carousel.addEventListener('touchend', onEnd);

  // Init
  go(0);
  start();
}
