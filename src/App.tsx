import {useMemo,useState, useEffect} from 'react';
import {ArrowRight,ArrowUpRight,CalendarDays,Clock3,MapPin,Menu,X,Music2,Theater,Utensils,BriefcaseBusiness,Star,Search,Instagram,Facebook,Mail,Phone,ArrowLeft,CheckCircle2} from 'lucide-react';
type Page='home'|'events'|'about'|'contact'|'detail'|'recap';
type EventItem={id:string,title:string,category:string,date:string,month:string,year:string,time:string,location:string,city:string,price:string,image:string,description:string};
const events:EventItem[]=[
{id:'gustavo',title:'Chopp Samba - Flash Back',category:'Shows e Festivais',date:'22',month:'NOV',year:'2026',time:'Abertura dos portões às 17h',location:'Sedinha Quintal do Samba',city:'Santos / SP',price:'Ingressos em breve',image:'/hello-brasil-site/images/Hello_Brasil.jpg',description:'Prepare-se para uma noite inesquecível com música ao vivo, energia contagiante e uma produção pensada para transformar cada instante em memória.'},
{id:'verao',title:'',category:'',date:'',month:'',year:'',time:'',location:'',city:'',price:'',image:'',description:''},
{id:'henrique',title:'',category:'',date:'',month:'',year:'',time:'',location:'',city:'',price:'',image:'',description:''},
{id:'tomorrowland',title:'',category:'',date:'',month:'',year:'',time:'',location:'',city:'',price:'',image:'',description:''},
{id:'gastronomia',title:'',category:'',date:'',month:'',year:'',time:'',location:'',city:'',price:'',image:'',description:''}];
const cats=[{name:'Shows e Festivais',Icon:Music2},{name:'Cultura e Arte',Icon:Theater},{name:'Gastronomia',Icon:Utensils},{name:'Corporativo',Icon:BriefcaseBusiness},{name:'Experiências Exclusivas',Icon:Star}];
const nav:[Page,string][]=[['home','Página Principal'],['events','Eventos'],['about','Sobre Nós'],['contact','Fale Conosco']];
const musicSymbols = [
  { symbol: "𝄞", className: "clef clef-treble left-top" },
  { symbol: "𝄢", className: "clef clef-bass right-top" },
  { symbol: "𝄞", className: "clef clef-treble right-middle" },
  { symbol: "♪", className: "note note-one" },
  { symbol: "♫", className: "note note-two" },
  { symbol: "♬", className: "note note-three" },
  { symbol: "♩", className: "note note-four" },
  { symbol: "♫", className: "note note-five" },
  { symbol: "♪", className: "note note-six" },
  { symbol: "♬", className: "note note-seven" },
  { symbol: "♩", className: "note note-eight" },
  { symbol: "♪", className: "note note-nine" },
  { symbol: "♫", className: "note note-ten" },
  { symbol: "𝄞", className: "clef clef-extra clef-extra-one" },
  { symbol: "𝄢", className: "clef clef-extra clef-extra-two" },
  { symbol: "𝄞", className: "clef clef-extra clef-extra-three" },
  { symbol: "♫", className: "note note-extra-one" },
  { symbol: "♪", className: "note note-extra-two" },
  { symbol: "♬", className: "note note-extra-three" },
  { symbol: "♩", className: "note note-extra-four" },
  { symbol: "♫", className: "note note-extra-five" },
  { symbol: "♪", className: "note note-extra-six" },
  { symbol: "♬", className: "note note-extra-seven" },
  { symbol: "𝄞", className: "clef clef-extra clef-extra-four" },
  { symbol: "𝄢", className: "clef clef-extra clef-extra-five" },
];

function MusicBackground() {
  return (
    <div className="music-background" aria-hidden="true">
      {musicSymbols.map((item, index) => (
        <span
          key={index}
          className={item.className}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}
export default function App(){
const [page,setPage]=useState<Page>('home'),[chosen,setChosen]=useState(events[0]),[filter,setFilter]=useState('Todos'),[search,setSearch]=useState(''),[menu,setMenu]=useState(false),[form,setForm]=useState({name:'',email:'',subject:'Produção de evento',message:''}),[status,setStatus]=useState('');
function go(p:Page){setPage(p);setMenu(false);setStatus('');window.scrollTo({top:0,behavior:'smooth'})}
function openEvent(e:EventItem){setChosen(e);go('detail')}
const shown=useMemo(()=>events.filter(e=>(filter==='Todos'||e.category===filter)&&`${e.title} ${e.category} ${e.city} ${e.location}`.toLowerCase().includes(search.toLowerCase())),[filter,search]);
function send(e:React.FormEvent){e.preventDefault();if(!form.name.trim()||!form.email.includes('@')||!form.message.trim()){setStatus('Preencha nome, e-mail válido e mensagem.');return}const subject=encodeURIComponent('Hello Brasil — '+form.subject),body=encodeURIComponent(`Nome: ${form.name}\nE-mail: ${form.email}\nAssunto: ${form.subject}\n\n${form.message}`);setStatus('Seu aplicativo de e-mail será aberto com a mensagem preparada.');window.location.href=`mailto:contato@hellobrasil.com.br?subject=${subject}&body=${body}`}
function Card({event}:{event:EventItem}){return <article className="event-card"><button className="event-image" onClick={()=>openEvent(event)} aria-label={'Detalhes de '+event.title}><img src={event.image} alt="" loading="lazy"/><span className="image-label">{event.category}</span><span className="image-arrow"><ArrowUpRight/></span></button><div className="card-body"><div className="date"><b>{event.date}</b><span>{event.month}</span></div><div><button className="event-title" onClick={()=>openEvent(event)}>{event.title}</button><p><CalendarDays/>{event.date} de {event.month.toLowerCase()} de {event.year}</p><p><MapPin/>{event.city}</p><button className="details-link" onClick={()=>openEvent(event)}>Detalhes do evento <ArrowRight/></button></div></div></article>}

const [theme, setTheme] = useState<"dark" | "light">(() => {
  const saved = localStorage.getItem("hello-brasil-theme");
  return saved === "light" ? "light" : "dark";
});

useEffect(() => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("hello-brasil-theme", theme);
}, [theme]);

const toggleTheme = () => {
  setTheme((current) => (current === "dark" ? "light" : "dark"));
};

return <div className="app">
    <div className="topline">
        <span>GRANDES MOMENTOS. JUNTOS.</span>
        <span>PRODUÇÃO DE EVENTOS • BRASIL</span>
    </div>

<header className="header">
    <button className="brand" onClick={()=>go('home')}>
        <a href="/hello-brasil-site/" className="brand">
        <img
            src="/hello-brasil-site/images/Pretoedourados.png"
            alt="Hello Brasil"
            className="brand-logo"
        />
        <span className="wordmark">Hello Brasil</span>
      </a>
    </button>
    <button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Abrir menu">{menu?<X/>:<Menu/>}</button>
    <nav className={menu?'nav nav-open':'nav'}>{nav.map(([id,label])=>
        <button key={id} className={page===id?'nav-link active':'nav-link'} onClick={()=>go(id)}>{label}</button>)}
    </nav>
        <div className="social">
            <a href="https://www.instagram.com/hellobrasilprodutora?xtok=MTVxcGV2MTdpOHpxcw%3D%3D" aria-label="Instagram"><Instagram/></a>
            <a href="www.facebook.com" aria-label="Facebook"><Facebook/></a>
            <button aria-label="Buscar eventos" onClick={()=>go('events')}><Search/></button>
        </div>
    <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
        title={theme === "dark" ? "Tema claro" : "Tema escuro"}
        >
        {theme === "dark" ? "☀️" : "🌙"}
    </button>
</header>

{page==='home'&&<main>
    <section className="hero">
        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=90" alt="Público em show ao vivo" className="hero-bg"/>
        <div className="hero-shade"/>
        <div className="hero-copy">
            <p className="eyebrow">EVENTOS QUE CONECTAM PESSOAS</p>
            <h1>HELLO <span>BRASIL</span></h1>
            <p>Mais do que eventos, criamos experiências<br className="desktop"/> que ficam para sempre na memória.</p>
            <button className="outline-button" onClick={()=>go('events')}>CONHEÇA NOSSOS EVENTOS <ArrowRight/></button>
        </div>
        <span className="hero-index">01 <i>/</i> 04</span>
    </section>
    <section className="categories">{cats.map(({name,Icon})=>
        <button key={name} onClick={()=>{setFilter(name);go('events')}}><Icon/><span>{name}</span></button>)}
    </section>
    <section className="featured wrap">
        <button className="featured-photo" onClick={()=>openEvent(events[0])} aria-label="Ver informações do próximo evento">
            <img src={events[0].image} alt="Show ao vivo"/>
            <span>PRÓXIMO EVENTO</span>
        </button>
        <div className="featured-info">
            <p className="eyebrow">SHOW / HELLO BRASIL APRESENTA</p>
            <h2>SHOPP SAMBA</h2>
            <h3>FLASH BACK</h3>
            <p><CalendarDays/>{events[0].date} de {events[0].month} de {events[0].year}</p>
            <p><MapPin/>{events[0].location} — {events[0].city}</p>
            <p><Clock3/>{events[0].time}</p>
            <button className="gold-button" onClick={()=>openEvent(events[0])}>SAIBA MAIS <ArrowRight/></button>
        </div>
        <aside className="featured-quote">
            <p>Prepare-se para uma noite inesquecível com um dos grandes nomes da música brasileira.</p>
            <span>Hello Brasil</span>
        </aside>
    </section>
    <section className="upcoming wrap">
  <div className="section-head">
    <div>
      <p className="eyebrow">VIVA O PRÓXIMO CAPÍTULO</p>
      <h2>PRÓXIMOS EVENTOS</h2>
    </div>
  </div>

  <div
    style={{
      minHeight: "220px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px 20px",
      border: "1px solid rgba(217, 170, 70, 0.25)",
      background:
        "linear-gradient(135deg, #11100d, #090909)",
      marginTop: "24px",
      gap: "14px",
    }}
  >
    <span
      style={{
        color: "#D9AA46",
        fontSize: "28px",
        lineHeight: 1,
      }}
    >
      ✦
    </span>

    <h3
      style={{
        color: "#F5E8C8",
        fontFamily: "Georgia, serif",
        fontSize: "24px",
        fontWeight: "normal",
        margin: 0,
      }}
    >
      Novas experiências estão chegando
    </h3>

    <p
      style={{
        color: "#B9B4A9",
        fontSize: "14px",
        lineHeight: 1.8,
        maxWidth: "420px",
        margin: 0,
      }}
    >
      Estamos preparando momentos especiais
      para você. Em breve, anunciaremos nossos
      próximos eventos.
    </p>

    <span
      style={{
        width: "48px",
        height: "1px",
        backgroundColor: "#D9AA46",
        marginTop: "8px",
      }}
    />
  </div>
</section>
    <section className="home-cta">
        <p className="eyebrow">TEM UMA IDEIA?</p>
        <h2>Vamos criar algo <span>memorável.</span></h2>
        <button className="gold-button" onClick={()=>go('contact')}>FALE COM NOSSA EQUIPE <ArrowRight/></button>
    </section>
</main>}

{page==='events'&&<main className="inner wrap">
    <div className="page-heading">
        <p className="eyebrow">AGENDA HELLO BRASIL</p>
        <h1>Todos os <span>eventos.</span></h1>
        <p>Descubra experiências, shows e encontros que merecem entrar na sua história.</p>
    </div>
    <div className="tools">
        <div className="filters">{['Todos',...cats.map(c=>c.name)].map(c=><button key={c} className={filter===c?'pill selected':'pill'} onClick={()=>setFilter(c)}>{c}</button>)}</div>
        <label className="search-field">
            <Search/>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Buscar eventos, locais..."/>
        </label>
    </div>
    <p className="count">
        {shown.filter(e => e.title.toLowerCase().includes('chopp samba')).length}
        {' '}evento(s) encontrado(s)
    </p>
    <div className="grid all-grid">
  {shown
  .filter(e => e.title && e.image)
  .map(e => <Card key={e.id} event={e} />)}

  <article className="event-card recap-card">
    <button
      className="event-image"
      onClick={() => go('recap')}
      aria-label="Assistir ao vídeo do evento anterior"
    >
      <img
        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85"
        alt="Público em um evento musical"
        loading="lazy"
      />
      <span className="image-label">EVENTO ANTERIOR</span>
      <span className="image-arrow"><ArrowUpRight /></span>
    </button>

    <div className="card-body">
      <div className="date">
        <b>▶</b>
        <span>VÍDEO</span>
      </div>
      <div>
        <p className="eyebrow">HELLO BRASIL • RETROSPECTIVA</p>
        <button
          className="event-title"
          onClick={() => go('recap')}
        >
          Reviva esse evento
        </button>
        <p><Music2 /> Melhores momentos</p>
        <button
          className="details-link"
          onClick={() => go('recap')}
        >
          Assistir ao vídeo <ArrowRight />
        </button>
      </div>
    </div>
  </article>
</div>
    {!shown.length&&
    <div className="empty">
        <h2>Nenhum evento encontrado</h2>
        <button className="gold-button" onClick={()=>{setSearch('');setFilter('Todos')}}>LIMPAR FILTROS</button>
    </div>}
</main>}

{page==='detail'&&<main className="inner wrap detail">
    <div className="event-details-page">
        <MusicBackground />
    <button className="back" onClick={()=>go('events')}><ArrowLeft/> VOLTAR AOS EVENTOS</button>
    <div className="detail-cover">
        <img src={chosen.image} alt={chosen.title}/>
        <span className="badge">EVENTO EM DESTAQUE</span>
    </div>
    <div className="detail-layout">
        <section>
            <p className="eyebrow">{chosen.category.toUpperCase()} / HELLO BRASIL</p>
            <h1>{chosen.title}</h1>
            <p className="lead">{chosen.description}</p>
            <h2>Sobre o evento</h2>
            <p>Prepare-se para uma tarde especial de muito samba, alegria e celebração! O Chopp Samba — Flash Black | Primeira Festa, realizado pelo Sedinha Quintal do Samba, promete reunir música boa, grandes artistas e muita energia em um encontro feito para quem ama samba e momentos inesquecíveis.</p>
            <p>O evento contará com as apresentações de Didi Gomes, Sombra, Kaka Matheus, DJ Helinho, Renato Safu e Amigos do Passinho do Guarujá, além da participação especial da Banda João Sorriso, garantindo uma programação repleta de ritmo e diversão.</p>
            <p>📅 Data: 22 de novembro, domingo</p><p>🕔 Horário: das 17h às 23h30</p><p>📍 Local: Sedinha Quintal do Samba</p><p>📌 Endereço: Rua Napoleão Laureano, 172 — Marapé</p>
            <p>🍺 O convite inclui chopp The Brahmanes, conforme divulgado no material do evento.</p> <p>🎟️ Garanta seu convite e venha fazer parte dessa primeira festa!</p>
            <h4>Chame os amigos, prepare o clima de festa e venha curtir uma experiência especial ao som do melhor do samba!</h4>
            <p className="disclaimer">As informações desta página são demonstrativas e devem ser confirmadas pela organização antes da divulgação pública.</p>
        </section>
        <aside className="event-facts">
    <p className="eyebrow">INFORMAÇÕES</p>

    <p>
      <CalendarDays />
      <span>
        <small>DATA</small>
        {chosen.date} de {chosen.month} de {chosen.year}
      </span>
    </p>

    <p>
      <Clock3 />
      <span>
        <small>HORÁRIO</small>
        {chosen.time}
      </span>
    </p>

    <p>
      <MapPin />
      <span>
        <small>LOCAL</small>
        {chosen.location}<br />
        {chosen.city}
      </span>
    </p>

    <p>
      <Star />
      <span>
        <small>INGRESSOS</small>
        {chosen.price}
      </span>
    </p>

    <div
      className="ticket-prices"
      style={{
        borderTop: "1px solid rgba(217, 170, 70, 0.25)",
        borderBottom: "1px solid rgba(217, 170, 70, 0.25)",
        padding: "18px 0",
        margin: "8px 0 22px",
      }}
    >
      <p
        className="eyebrow"
        style={{
          marginBottom: "16px",
          color: theme === "light" ? "#17130B" : "#E5B84F",
        }}
      >
        🍺 PREÇOS DOS INGRESSOS
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        <span style={{
          color: theme === "light" ? "#17130B" : "#F5E8C8",
          fontSize: "14px",
        }}>
          Convites Antecipados
        </span>

        <strong style={{
          color: theme === "light" ? "#17130B" : "#D9AA46",
          whiteSpace: "nowrap",
        }}>
          R$ 110,00
        </strong>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <span style={{
          color: theme === "light" ? "#17130B" : "#F5E8C8",
          fontSize: "14px",
        }}>
          No dia do evento
        </span>

        <strong style={{
          color: theme === "light" ? "#17130B" : "#D9AA46",
          whiteSpace: "nowrap",
        }}>
          R$ 140,00
        </strong>
      </div>
    </div>
            <a
                className="gold-button"
                href="https://wa.me/5513988024207?text=Olá!%20Tenho%20interesse%20neste%20evento."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    textDecoration: "none",
                }}
                >
                TENHO INTERESSE <ArrowRight />
            </a>
        </aside>
    </div>
    </div>
</main>}

{page === 'recap' && (
  <main className="inner wrap detail recap-detail">
    <button className="back" onClick={() => go('events')}>
      <ArrowLeft /> VOLTAR AOS EVENTOS
    </button>

    <div className="detail-cover">
      <img
        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85"
        alt="Registro do evento anterior"
      />
      <span className="badge">EVENTO ANTERIOR</span>
    </div>

    <div className="detail-layout">
      <section className="recap-main">
        <p className="eyebrow">
          RETROSPECTIVA / HELLO BRASIL
        </p>

        <h1>Reviva esse momento.</h1>

        <div className="recap-video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/hello-brasil-site/images/Pretoedourado.jpeg"
          >
            <source
              src="https://youtu.be/4Ptu4dTDziE?si=Ia-hQlfTrU-kQLVi"
              type="video/mp4"
            />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
        </div>
      </section>

      <aside className="event-facts">
        <p className="eyebrow">INFORMAÇÕES</p>

        <p>
          <CalendarDays />
          <span>
            <small>EVENTO</small>
            Retrospectiva Hello Brasil
          </span>
        </p>

        <p>
          <Music2 />
          <span>
            <small>CONTEÚDO</small>
            Melhores momentos do evento
          </span>
        </p>

        <p>
          <Star />
          <span>
            <small>EXPERIÊNCIA</small>
            Música, encontros e memórias
          </span>
        </p>

        <button
          className="gold-button"
          onClick={() => go('events')}
        >
          VER OUTROS EVENTOS <ArrowRight />
        </button>
      </aside>
    </div>
  </main>
)}

{page==='about'&&<main className="inner wrap about"> 
    <div className="page-heading">
        <p className="eyebrow">SOBRE A HELLO BRASIL</p>
        <h1>Grandes momentos.<br/><span>Juntos.</span></h1>
        <p>Conectamos pessoas, marcas e ideias por meio de experiências bem pensadas e eventos que deixam lembranças.</p>
    </div>
    <div className="about-photo">
        <img src="/hello-brasil-site/images/Banne3.png" alt="Espaço preparado para evento"/>
    </div>
    <div className="about-copy">
        <div>
            <p className="eyebrow">NOSSA ESSÊNCIA</p>
            <h2>Cada detalhe conta.<br/><span>Cada encontro importa.</span></h2>
        </div>
        <div>
            <p>A Hello Brasil é uma empresa de produção e organização de eventos, dedicada a transformar ideias em experiências marcantes. Com criatividade, planejamento e atenção aos detalhes, buscamos conectar pessoas, cultura e entretenimento por meio de eventos que proporcionam momentos únicos e inesquecíveis.</p>
            <p>Nosso propósito é criar experiências que vão além do esperado, valorizando cada etapa do processo — da concepção à realização — com profissionalismo, dedicação e compromisso com a qualidade.</p>
            <p>Acreditamos que cada evento conta uma história. Por isso, trabalhamos para oferecer experiências autênticas, capazes de emocionar, surpreender e criar conexões duradouras.</p>
            <strong>Hello Brasil — experiências que conectam, momentos que ficam.</strong>
        </div>
    </div>
    <div className="values">
        <article>
            <b>01</b>
            <h3>Planejamento</h3>
            <p>Estratégia e organização para que cada etapa faça sentido.</p>
        </article>
        <article>
            <b>02</b>
            <h3>Criatividade</h3>
            <p>Ideias com identidade, pensadas para pessoas reais.</p>
        </article>
        <article>
            <b>03</b>
            <h3>Experiência</h3>
            <p>Detalhes que fazem o público se sentir parte de algo especial.</p>
        </article>
    </div>
    <div className="about-cta">
        <h2>Vamos fazer acontecer?</h2>
        <button className="gold-button" onClick={()=>go('contact')}>FALE CONOSCO <ArrowRight/></button>
    </div>
</main>}

{page==='contact'&&<main className="inner wrap contact">
    <div className="page-heading">
        <p className="eyebrow">FALE CONOSCO</p>
        <h1>Vamos tirar sua ideia <span>do papel.</span></h1>
        <p>Conte para a gente o que você está imaginando. Nossa equipe quer conhecer seu projeto.</p>
    </div>
    <div className="contact-layout">
        <section className="contact-intro">
            <h2>Estamos aqui para ouvir.</h2>
            <p>Para novos projetos, parcerias ou dúvidas sobre os eventos, envie uma mensagem e vamos começar a conversa.</p>
            <p><Mail/> <span><small>E-MAIL</small>hellobrasil542@gmail.com</span></p>
            <p><Phone/><span><small>ATENDIMENTO</small>Entre em contato por e-mail</span></p>
            <p><MapPin/><span><small>ATUAÇÃO</small>Eventos em todo o Brasil</span></p>
        </section>
        <form className="contact-form" onSubmit={send} noValidate>
            <label>Nome completo
                <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Seu nome"/>
            </label>
            <label>E-mail
                <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="voce@email.com"/>
            </label>
            <label>Assunto
                <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}>
                    <option>Produção de evento</option>
                    <option>Parcerias</option>
                    <option>Informações sobre ingressos</option>
                    <option>Imprensa</option>
                    <option>Outro assunto</option>
                </select>
            </label>
            <label>Mensagem
                <textarea rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Conte um pouco sobre seu projeto..."/>
                    </label>{status&&
                    <p className="form-status"><CheckCircle2/>{status}</p>}
                    <button className="gold-button" type="submit">ENVIAR MENSAGEM <ArrowRight/></button>
                    <small className="disclaimer">O formulário abre o aplicativo de e-mail. Confirme o endereço oficial antes de publicar.</small>
        </form>
    </div>
</main>}


<footer className="footer">
    <div className="event-details-page">
        <MusicBackground />
    <div className="footer-main">
        <button className="brand" onClick={()=>go('home')}>
            <a href="/" className="brand">
            <img
                src="/hello-brasil-site/images/Pretoedourados.png"
                alt="Hello Brasil"
                className="brand-logo"
            />
            <span className='wordmark'>Hello Brasil</span>
            </a>
        </button>
        <p style={{paddingLeft: "350px"}}>Grandes Momentos Juntos.</p>
        <nav>{nav.map(([id,label])=>
            <button key={id} onClick={()=>go(id)}>{label}</button>)}
        </nav>
        <div className="footer-social">
            <a href="https://www.instagram.com/hellobrasilprodutora?xtok=MTVxcGV2MTdpOHpxcw==" aria-label="Instagram"><Instagram/></a>
            <a href="https://facebook.com" aria-label="Facebook"><Facebook/></a>
        </div>
    </div>
    <div className="footer-bottom">© {new Date().getFullYear()} Hello Brasil Eventos. Todos os direitos reservados.</div>
    </div>
</footer>
</div>
}
