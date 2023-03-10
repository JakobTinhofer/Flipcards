var ae=Object.defineProperty;var se=(n,e,t)=>e in n?ae(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var K=(n,e,t)=>(se(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function w(){}function Q(n){return n()}function j(){return Object.create(null)}function L(n){n.forEach(Q)}function X(n){return typeof n=="function"}function Y(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function le(n){return Object.keys(n).length===0}function u(n,e){n.appendChild(e)}function P(n,e,t){n.insertBefore(e,t||null)}function B(n){n.parentNode&&n.parentNode.removeChild(n)}function b(n){return document.createElement(n)}function S(n){return document.createTextNode(n)}function O(){return S(" ")}function M(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function W(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ue(n){return Array.from(n.childNodes)}function V(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let x;function R(n){x=n}const G=[],$=[],C=[],J=[],he=Promise.resolve();let T=!1;function de(){T||(T=!0,he.then(ee))}function Z(n){C.push(n)}const I=new Set;let H=0;function ee(){if(H!==0)return;const n=x;do{try{for(;H<G.length;){const e=G[H];H++,R(e),ce(e.$$)}}catch(e){throw G.length=0,H=0,e}for(R(null),G.length=0,H=0;$.length;)$.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];I.has(t)||(I.add(t),t())}C.length=0}while(G.length);for(;J.length;)J.pop()();T=!1,I.clear(),R(n)}function ce(n){if(n.fragment!==null){n.update(),L(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Z)}}const N=new Set;let E;function oe(){E={r:0,c:[],p:E}}function ge(){E.r||L(E.c),E=E.p}function F(n,e){n&&n.i&&(N.delete(n),n.i(e))}function _(n,e,t,r){if(n&&n.o){if(N.has(n))return;N.add(n),E.c.push(()=>{N.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function me(n){n&&n.c()}function ne(n,e,t,r){const{fragment:i,after_update:a}=n.$$;i&&i.m(e,t),r||Z(()=>{const l=n.$$.on_mount.map(Q).filter(X);n.$$.on_destroy?n.$$.on_destroy.push(...l):L(l),n.$$.on_mount=[]}),a.forEach(Z)}function te(n,e){const t=n.$$;t.fragment!==null&&(L(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function be(n,e){n.$$.dirty[0]===-1&&(G.push(n),de(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function re(n,e,t,r,i,a,l,c=[-1]){const h=x;R(n);const s=n.$$={fragment:null,ctx:[],props:a,update:w,not_equal:i,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:j(),dirty:c,skip_bound:!1,root:e.target||h.$$.root};l&&l(s.root);let f=!1;if(s.ctx=t?t(n,e.props||{},(d,y,...o)=>{const z=o.length?o[0]:y;return s.ctx&&i(s.ctx[d],s.ctx[d]=z)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](z),f&&be(n,d)),y}):[],s.update(),f=!0,L(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const d=ue(e.target);s.fragment&&s.fragment.l(d),d.forEach(B)}else s.fragment&&s.fragment.c();e.intro&&F(n.$$.fragment),ne(n,e.target,e.anchor,e.customElement),ee()}R(h)}class ie{$destroy(){te(this,1),this.$destroy=w}$on(e,t){if(!X(t))return w;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!le(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function fe(n){let e,t=n[0].a+"",r;return{c(){e=b("p"),r=S(t)},m(i,a){P(i,e,a),u(e,r)},p(i,a){a&1&&t!==(t=i[0].a+"")&&V(r,t)},d(i){i&&B(e)}}}function ke(n){let e,t=n[0].q+"",r;return{c(){e=b("p"),r=S(t)},m(i,a){P(i,e,a),u(e,r)},p(i,a){a&1&&t!==(t=i[0].q+"")&&V(r,t)},d(i){i&&B(e)}}}function pe(n){let e,t,r,i,a,l;return{c(){e=b("div"),t=b("button"),t.textContent="Correct",r=O(),i=b("button"),i.textContent="Wrong",W(t,"class","svelte-t3i3ac"),W(i,"class","svelte-t3i3ac"),W(e,"class","card-rate svelte-t3i3ac")},m(c,h){P(c,e,h),u(e,t),u(e,r),u(e,i),a||(l=[M(t,"click",n[4]),M(i,"click",n[5])],a=!0)},p:w,d(c){c&&B(e),a=!1,L(l)}}}function we(n){let e,t,r;return{c(){e=b("p"),e.textContent="Press to flip",W(e,"class","svelte-t3i3ac")},m(i,a){P(i,e,a),t||(r=M(e,"click",n[3]),t=!0)},p:w,d(i){i&&B(e),t=!1,r()}}}function ze(n){let e,t,r,i,a=n[0].t+"",l,c,h=n[0].id+"",s,f,d,y,o,z,g;function v(m,q){return m[2]?ke:fe}let A=v(n),k=A(n);function U(m,q){return m[2]?we:pe}let D=U(n),p=D(n);return{c(){e=b("div"),t=b("div"),r=b("p"),i=b("b"),l=S(a),c=S(" Question nr. "),s=S(h),f=O(),d=b("div"),k.c(),y=O(),o=b("div"),p.c(),W(t,"class","card-header"),W(d,"class","card-top svelte-t3i3ac"),W(o,"class","card-bottom svelte-t3i3ac"),W(e,"class","card svelte-t3i3ac")},m(m,q){P(m,e,q),u(e,t),u(t,r),u(r,i),u(i,l),u(r,c),u(r,s),u(e,f),u(e,d),k.m(d,null),u(e,y),u(e,o),p.m(o,null),z||(g=M(d,"click",n[3]),z=!0)},p(m,[q]){q&1&&a!==(a=m[0].t+"")&&V(l,a),q&1&&h!==(h=m[0].id+"")&&V(s,h),A===(A=v(m))&&k?k.p(m,q):(k.d(1),k=A(m),k&&(k.c(),k.m(d,null))),D===(D=U(m))&&p?p.p(m,q):(p.d(1),p=D(m),p&&(p.c(),p.m(o,null)))},i:w,o:w,d(m){m&&B(e),k.d(),p.d(),z=!1,g()}}}function ve(n,e,t){let{Question:r}=e,{Callback:i}=e,a=!0;function l(s){t(2,a=!a)}const c=()=>{i(!0)},h=()=>{i(!1)};return n.$$set=s=>{"Question"in s&&t(0,r=s.Question),"Callback"in s&&t(1,i=s.Callback)},n.$$.update=()=>{n.$$.dirty&1&&r&&t(2,a=!0)},[r,i,a,l,c,h]}class We extends ie{constructor(e){super(),re(this,e,ve,ze,Y,{Question:0,Callback:1})}}const Se=[{id:0,q:"Was ist die Abgrenzung zwischen Oberem und Unteren Atemweg?",a:"* Der Kehlkopf, auch Larynx genannt. Er wird zu den Unteren Atemwegen gez??hlt, alles dar??ber ist beim oberen Atemweg",t:"Airway"},{id:1,q:"Wie werden Luftr??hre, Kehlkopf, Kehldeckel, Speiser??hre und Rachen mit Fachbegriff genannt?",a:"* Trachea, Larynx, Epiglottis, ??sophargus, Pharynx",t:"Airway"},{id:2,q:"Was sind die Aufgaben der Nase?",a:`* Befeuchten\r
	* Erw??rmen\r
	* Reinigen`,t:"Airway"},{id:3,q:"Wie ist die Nase aufgebaut?",a:`* 2 Teile (links und rechts) durch Nasenscheidewand getrennt\r
	* 3 G??nge/Muscheln:\r
		. Untere Nasenmuschel: Atemgang\r
		. Mittlere Nasenmuschel: Sinusgang\r
		. Obere Nasenmuschel: Riechgang`,t:"Airway"},{id:4,q:"Woraus besteht der Larynx und wie ist er aufgebaut?",a:`* Besteht aus Knorpeln\r
	* Aufbau:\r
		. Epiglottis: Verschlie??t Trachea beim Schlucken\r
		. Stimmb??nder im Kehlkopf (Engste Stelle im Kehlkopf bei Erwachsenen, Bei Kindern direkt darunter)\r
		. Anfang Trachea`,t:"Airway"},{id:5,q:"Wie sind die unteren Atemwege aufgebaut",a:`* Larynx\r
	* Trachea (Hufeisenknorpel nach hinten offen damit ??sophargus platz zum ausdehnen hat)\r
	* Hauptbronchien\r
	* Bronchien\r
	* Bronchiolen\r
	* Alveolen (Hier Gasaustausch)`,t:"Airway"},{id:6,q:"Was bezeichnet man als anatomischen Totraum?",a:"* Alle Atemwege bis auf die Alveolen, da dort kein Gasaustausch",t:"Airway"},{id:7,q:"Wie sind die Alveolen aufgebaut? Wie funktionieren sie?",a:`* Kleine Ballons die von Bronchiolen gef??llt werden -> Expandieren\r
	* Umgeben von Kapillarnetz f??r Gasaustausch durch Diffusion, kommen von Lungenarterie (-O2) f??hren zu Lungenvene (+O2)`,t:"Airway"},{id:8,q:"Wie ist die Lunge selber aufgebaut? Wie kann man sie unterteilen?",a:`* 2 Lungenfl??gel: L, R\r
	* L: 2 Lappen (Platz f??rs herz)\r
	* R: 3 Lappen`,t:"Airway"},{id:9,q:"Wie viel Luft Atmet man bei einem Atemzug ein?",a:"* 0,5 L, davon 0,15L nur in Totraum",t:"Airway"},{id:10,q:"Wie viel % O2 hat die umgebungsluft? Wie viel die Ausatemluft?",a:`* Umgebung: 21%\r
	* Ausatem: 17%`,t:"Airway"},{id:11,q:"Wie kann der Atemweg sein?",a:`* Frei\r
	* Gef??hrdet\r
	* Verlegt`,t:"Airway"},{id:12,q:"Wann ist der Atemweg gef??hrdet?",a:`* B-Los\r
	* Anfang Allergische Reaktion\r
	* Anfang Schwellung v. Insektenstich\r
	* ...`,t:"Airway"},{id:13,q:"Wann ist er verlegt?",a:`* Zunge f??llt bei bewusstlosen zur??ck\r
	* Zugeschwollen (insekt/allergie)\r
	* Bolus (Fremdk??rper)`,t:"Airway"},{id:14,q:"Was f??r Kategorien von Ma??nahmen gibt es um den Atemweg frei zu halten/frei zu machen?",a:`* Einfache Atemwegssicherung (SSL, Esmarch, Kopf ??berstrecken)\r
	* Atemwegshilfen (Tubus)\r
	* Fremdk??rperentfernung\r
	* Fl??ssigkeit absaugen`,t:"Airway"},{id:15,q:"Warum ist bei bewusstlosen der Atemweg gef??hrdet?",a:`* Patient hat keine Schutzreflexe und Muskelspannung mehr -> Zunge kann zur??ckfallen und A-way verlegen\r
	* Au??erdem Mageninhalt m??gl. nicht mehr in Magen gehalten (regurgitation) -> Flie??t heraus und in trachea -> Aspiration`,t:"Airway"},{id:16,q:"Was sind M??glichkeiten f??r einfache Atemwegsicherung?",a:`* Kopf ??berstrecken: \r
		. In R??ckenlage Atemweg verengt\r
		. Kopf wird nach hinten gedreht, daf??r 1ne hand auf der stirn, andere dr??ckt am unterkiefer/kinn an\r
		. Bereit Atemweg, Spannt Auch zunge\r
	* Esmarch:\r
		. Auch in R??ckenlage\r
		. Angewendet wenn ??berstrecken nicht m??glich weil HWS gef??hrdet\r
		. Kiefer nach unten und nach vorne Gedr??ckt, H??nde von Oben am Patienten links und rechts, Finger graifen Kiefer (Nur Knochen!) von unten, Daumen Dr??ckt Unterkiefer weg und ??ffnet mund\r
	* Stabile Seitenlage:\r
		. Immer anzuwenden wen Patient B-los ist und gerade keine Ma??nahmen durchgef??hrt werden die R??ckenlage erfordern\r
		. Mund soll niedrigster Punkt sein -> Mageininhalt bei regurgitation soll abflie??en k??nnen`,t:"Airway"},{id:17,q:"Welche Atemwegshilfen gibt es?",a:`* Guedeltubus\r
	* Wendltubus\r
	* Larynxtubus\r
	* Endotrachealtubus`,t:"Airway"},{id:18,q:"Was ist der Guedeltubus?",a:"* Eine R??hre welche wenn eingesetzt von mund bis zum pharynx f??hrt und die Zunge zur??ckh??lt",t:"Airway"},{id:19,q:"Wann setzt man einen Guedeltubus? Wann nicht?",a:`* ??ber 8 Jahre\r
	* Bewusstlos (Keine W??rgereflexe!!)`,t:"Airway"},{id:20,q:"Wie w??hlt man die richtige Gr????e von Guedeltubus?",a:"* Anlegen des Tubus au??en am Gesicht des Patienten: Soll von Mund bis Ohrl??ppchen reichen",t:"Airway"},{id:21,q:"Wie wird der Guedeltubus gesetzt?",a:"* Zuerst mit beigung nach oben ohne Spray eingef??hrt bis Widerstand, dann nach unten gedreht",t:"Airway"},{id:22,q:"Was ist der Wendltubus?",a:"* R??hre die von der nase bis in den Rachen f??hrt",t:"Airway"},{id:23,q:"Wann? Wann nicht?",a:`* Eingetr??bt, m??glw. noch W??rgereflex vorhanden\r
	* Nicht wenn: \r
		. Reanimationspflichtig\r
		. Verletzungen im Gesichtssch??del\r
		. nicht Erwachsen`,t:"Airway"},{id:24,q:"Wie ist vorzugehen wenn eine nicht person nicht auf ansprache oder ber??hrung reagiert (bewusstlos ist)?",a:`* Brust entbl????en (so das Atembewegungen erkennbar sind -> T-Shirt ok)\r
	* Atemcheck: Kopf ??berstrecken, 10s H??ren, sehen, F??hlen\r
		. keine Atmung/ineffektive atmung: Reanimieren\r
	* Stabile Seitenlage!\r
	* 15L O2 ??ber MASKE\r
	* Notarzt!\r
	* SpO2, HF, RR, BZ, T messen und ??berwachen\r
	* Auf 97% ziels??ttigen\r
	* Reanim. Bereitsch (Defi, Beatmungsbeutel, Absaugeeinh)\r
	* Bodycheck\r
	* !!!W??rmeerhalt!!!`,t:"Airway"},{id:25,q:"Wie saugt ein RS ab?",a:`* Immer nur auf sicht (so tief ie wie guedeltubus)\r
	* Kein UDruck beim Reingehen, UDruck beim Rausnehmen d. Katheters\r
	* Kathetergr????en absteigend: Wie ampel (rot gelb gr??n schwarz[erde])\r
	* Achtung bei W??rgereflex`,t:"Airway"},{id:26,q:"Wie passiert eine FK-Verlegung meistens?",a:`* Beim Essen\r
	* Oft von anderen Beobachtet`,t:"Airway"},{id:27,q:"Was tun wenn patient nicht ansprechbar beim Eintreffen der Rettung?",a:"* Sofort NA alamieren und Reanimation (mit mundraumkontrollen vorm beatmen) starten",t:"Airway"},{id:28,q:"Wie l??sst sich die Atemwegsverlegung allgemein einteilen?",a:`* Leichte A-verleg.:\r
		. effektives husten (luft kommt noch durch)\r
		. -> Anregen zum husten, leichte R??ckenschl??ge\r
		. kein NA notwendig\r
	* Schwere A-verleg. (ineffektives husten)`,t:"Airway"},{id:29,q:"Was tun bei einer Schweren A-verleg?",a:`* NA Alamieren\r
	* 5 R??ckenschl??ge (patient nach vorne gebeugt zwischen die Schultern fest durchziehen, auf WS aufpassen)\r
	* 5 Oberbauchkompressionen (hinter patienten gehen u ruckartig unter den rippen nach oben dr??cken) [Sobald min eine Oberbauchkomp. durchgef??hrt wurde ist der Patient immer zu hospitalisieren!!! (Organsch??den m??gl)]`,t:"Airway"},{id:30,q:"Was tun wenn der Patient bewusstlos wird?",a:"* Reanimieren! (immer vor Beatmung mundraumkontrolle!)",t:"Airway"},{id:31,q:"Wodurch k??nnte eine Schwellung der Atemwege verursacht werden?",a:`* Insektenstiche\r
	* Anaphylaxie\r
	* Infektionen`,t:"Airway"},{id:32,q:"Was ist zu tun falls eine SChwellung atemnot verursacht?",a:`* O2\r
	* Vitalzeichen kontrollieren\r
	* immer NA\r
	* Von Au??en K??hlen\r
	* M??glw. Allergene entfernen, etc.`,t:"Airway"},{id:33,q:"Was ist ein Tracheostoma?",a:"* K??nstlicher Zugang zur Luftr??hre im Kehlkopf unter den Stimmb??ndern",t:"Airway"},{id:34,q:"Was sind Ursachen f??r eine Verlegung der Tracheostomas?",a:"* Meist SChleim",t:"Airway"},{id:35,q:"Was tun?",a:`* Notarzt\r
	* OK erh??ht lagern\r
	* Tracheostoma Aussaugen\r
	* O2 druch Anhalten v Makse ans tracheostoma verabreichen\r
	* Atemstillstand: CPR (Beatmung mit Babymaske)`,t:"Airway"},{id:36,q:"Wie viele Rippen hat der Mensch?",a:`* 12 Paare, davon\r
		. 7 echte Rippen (1-7)\r
		. 5 unecte Rippen, davon (8-12)\r
			~ 2 fliegende Rippen (11,12)`,t:"Breathing"},{id:37,q:'Was unterscheidet "echte" von "unechten" rippen?',a:"* Echte sind direkt mit dem Brustbein (Sternum) verbunden, w??hrend 7-10 nur mit ??ber andere Rippen und 11,12 garnicht mit dem sternum verbunden sind.",t:"Breathing"},{id:38,q:"Warum sind 11,12 fliegende Rippen?",a:"* Weil sie nicht teil des geschlossenen Brustkorbs sind, sie verbinden weder direkt noch indirekt zum sternum",t:"Breathing"},{id:39,q:"Woraus bestehen die Rippen?",a:"* Knochen die aus der Wirbels??ule entspringen und dann in Knorpel ??bergehen die zum Sternum verbinden (damit sich der Brustkorb auch ausdehnen kann)",t:"Breathing"},{id:40,q:"Wie erden Die R??ume zwischen den Rippen genannt? Wie viele gibt es?",a:"* Sie hei??en Zwischenrippenr??ume oder Intercostalr??ume und es gibt 9 pro seite",t:"Breathing"},{id:41,q:"Wo findet man das Atemzentrum?",a:"* Verl??ngertes Mark",t:"Breathing"},{id:42,q:"Was ist die Aufgabe des Atemzentrums?",a:"* Steuert die Atemfrequenz, Atemtiefe, ... in Reaktion auf gewisse werte",t:"Breathing"},{id:43,q:"Welche Werte nimmt das Atemzentrum in erw??gung beim bestimmen der Atemfrequenz/ -tiefe?",a:"* Blut-02-gehalt, Blut-Co2-gehalt, Blut-pH",t:"Breathing"},{id:44,q:"Was ist der f??r Menschen normale BLut-pH?",a:"* 7.35-7.45",t:"Breathing"},{id:45,q:"Wie nennt man es wenn es zu sauer/basisch wird?",a:"* Azidose/Alkalose",t:"Breathing"},{id:46,q:"Was sind die pH grenzen welche sicher T??dlich sind wenn ??berschritten?",a:"* 6.8 / 8.0",t:"Breathing"},{id:47,q:"Wodurch k??nnte der pH wert im blut au??er kontrolle geraten?",a:`- respiratorische \r
		. Azidose: zu wenig Atmung -> zu viel CO2 im Blut -> zu viel Kohlens??ure -> pH sinkt\r
		. Alkalose: zu viel Atmung (Hypervent.) -> zu wenig CO2 im Blut -> zu wenig Kohlens??ure -> pH steigt\r
	- metabolische\r
		. Azidose: Milchs??ureg??rung im dekompensierten Schock, Hyperglyk??mie f??hrt zu Ketoazidose -> pH sinkt\r
		. Alkalose: Magens??ureverlust -> weniger S??ure -> pH steigt`,t:"Breathing"},{id:48,q:"Wie kann der pH wert im Blut wieder normalisiert werden?",a:`* bei einer respiratorischen Azidose/Alkalose versucht der Stoffwechsel im K??rper den pH wert auszugleichen\r
	* bei einer metabolsichen (vom Stoffwechsel ausgel??sten) Azid/Alka wird die atmung verlangsamt/beschleunigt um es respiratorisch zu kompensieren`,t:"Breathing"},{id:49,q:"Welche 2 Teile der Pleura werden unterschieden?",a:`* Brustfell (an den Rippen)\r
	* Lungenfell (an der Lunge)`,t:"Breathing"},{id:50,q:"Was ist der Pleuraspalt?",a:"* Raum zwischen Brust- und Lungenfell, gef??llt mit Fl??ssigkeit mit Unterdruck -> Lungenfell folgt bewegungen des Rippenfells",t:"Breathing"},{id:51,q:"Wie nennt man den Einatem/Ausatemprozess mit Fachbegriff?",a:"* Inspiration/Expiration",t:"Breathing"},{id:52,q:"Welcher der beiden ist normalerweise aktiv?",a:"* Inspiration",t:"Breathing"},{id:53,q:"Welche Muskeln machen die Atemmuskulatur aus?",a:"* Zwischenrippen, Zwerchfell",t:"Breathing"},{id:54,q:"Atemhilfsmuskulatur?",a:"* Schulterg??rtel Halsmuskeln, ...",t:"Breathing"},{id:55,q:"Wie funktioniert das Einatmen?",a:"* Atemmuskeln angespannt (Rippen nach au??en (durch ??u??ere Zwischenrippenmuskulatur), Zwerchfell strafft sich -> nach unten)",t:"Breathing"},{id:56,q:"Ausatmen?",a:"* Atemmuskeln entspannen; normalerweise rein passiv kann aber willk??rlich aktiv getan werden -> innere Zwischenmuskulatur spannt an (antagonist zur ??u??eren)",t:"Breathing"},{id:57,q:"Welche 2 Arten der Atmung unterscheidet man?",a:"* Innere (Zellen gasaustausch mit BLut) und ??u??ere (blut gasaustuasch mit luft in alveolen)",t:"Breathing"},{id:58,q:"Was ist der normbereich der Atemfrequenz bei Erwachsenen?",a:"* 12-20/min",t:"Breathing"},{id:59,q:"-//- bei Neugeborenen?",a:"* 40-60/min",t:"Breathing"},{id:60,q:"-//- kindern?",a:"* 16-20/min",t:"Breathing"},{id:61,q:"Wie sagt man wenn die AF au??erhalb des Normbereichs liegt?",a:"* Tachy (zu schnell) / Bradypnoe (zu langsam)",t:"Breathing"},{id:62,q:"Wie sagt man wenn jemand schwierigkeiten beim Atmen hat?",a:"- Dyspnoe",t:"Breathing"},{id:63,q:"Wie l??sst sich die Atmung beurteilen?",a:`* Atemfrequenz\r
	* Atemtiefe\r
	* Atemarbeit -> Hat schwierigkeiten beim Atmen? Verwendet Atemhilfsmuskulatur (vorgebeugt?) \r
	* Atemger??usche -> abnormale Ger??usche beim atmen: beim einatmen/ausatmen -> inspiratorisch/expiratorisch ... Stridor (Pfeifen), Rasseln, Brodeln\r
	* Zyanose\r
	* SpO2\r
	* Qualit??t / Atemmuster`,t:"Breathing"},{id:64,q:"Was sind die wichtigsten Atemmuster?",a:`- normale Atmung 12-20/min\r
	- Atemdepression (-AF, -Atemtiefe) -> Symptom von Opiat-OD\r
	- Ku??maul Atmung\r
	- Biot-Atmung\r
	- Cheyne-Stokes-Atmung`,t:"Breathing"},{id:65,q:"Was ist die Ku??maul-Atmung?",a:`* Tiefere Atmung, evtl. auch schneller\r
	* M??glw. Respiratorische Kompensation f??r metabilische Azidose (Hyperglyk??mie)`,t:"Breathing"},{id:66,q:"-//- Biot-Atmung?",a:`* Immer wieder sekundenlange Atempausen\r
	* Kann Symptom f??r erh??hten Hirndruck sein\r
	* Atemzentrum kann evtl nicht mehr auf CO2-Gehalt reagieren, nur O2 -> O2 ok -> h??rt auf zu Atmen obwohl CO2 nicht ok`,t:"Breathing"},{id:67,q:"-//- Cheyne-Stokes-Atmung?",a:`* So wie Biot, nur stark beschleunigt\r
	* Kann Symptom f??r Schlaganfall, Hirntumor, CO-Vergiftung sein`,t:"Breathing"},{id:68,q:"Was ist eine Zyanose?",a:"* Blauf??rbung der Haut weil zu wenig O2 im blut (Wenn h??moglobin nix gebunden hat schimmert es blau, sonst rot)",t:"Breathing"},{id:69,q:"Welche formen der Zyanose unterscheidet man",a:`* Zentrale\r
	* Periphere`,t:"Breathing"},{id:70,q:"Woran erkennt man Zentrale/Periphere Z. + wodurch wird sie ausgel??st?",a:`* Zentrale\r
		. erkennbar an \r
			~ Mundschleimhaut\r
			~ Zunge\r
			(~ Lippen)\r
		. AUsgel??st durch ein A/B-Problem -> Lungen-Problem -> Lunge kann nicht genug O2 aufnehmen\r
	* Periphere\r
		. erkannbar an\r
			~ Finger/Zehen			\r
			~ H??nde\r
			~ Nase\r
			~ Andere Extremit??ten\r
		. ausgel??st durch erh??hte O2-Aussch??pfung in peripherie -> zu wenig Blutfluss -> C-Problem (Herzinsuffizienz, Hypovl??mer Schock, ...)`,t:"Breathing"},{id:71,q:"Sind beide Formen gleichzeitig m??glich?",a:"* JA",t:"Breathing"},{id:72,q:"Was misst das Pulsoxymeter?",a:"* Herzfrequenz und Sauerstoffs??ttigung",t:"Breathing"},{id:73,q:"Wie funktioniert das Pulsoxymeter?",a:"* Es schickt 2 Lichter mit 2 Unterschiedlichen Wellenl??ngen durch den Finger. Auf der anderen Seite trifft das Licht auf einen Sensor wo eine Spektralanalyse durchgef??hrt wird. Da gebundenes H??moglobin andere Wellenl??ngen absorbiert als ungebundenes l??sst sich daraus ein Wert errechnen",t:"Breathing"},{id:74,q:"Was sind typische Fehlerquellen beim Pulsoxymeter?",a:`* SChmutzige/Lackierte Fingern??gel\r
	* Schlechte Periphere Durchblutung (Schock, k??lte, ...)\r
	* Patient bewegt sich zu viel\r
	* CO!! weil CO-gebundenes Hb absorbiert auch gleiche Wellenl??ngen wie O2-Gebundenes Hb \r
	* Helles umgebungslicht`,t:"Breathing"},{id:75,q:"Wie misst das Pulsoxymeter die Herzfrequenz?",a:"* Es errechnet sie indirekt aufgrund des Blutvolumens in den Kapillaren",t:"Breathing"},{id:76,q:"Welche Ma??nahmen kann man generell setzen wenn man ein B Problem vermutet?",a:`* O2-Gabe\r
	* OK Erh??ht Lagern (Atemmuskulatur wird aktiviert)\r
	* Beatmung`,t:"Breathing"},{id:77,q:"Wie kann man O2 verabreichen?",a:`* Brille (<4L/min)\r
	* Maske (>6L/min)\r
	* Sauerstoffdusche (Maske 1cm ??ber Patienten halten)`,t:"Breathing"},{id:78,q:"Welche Arten der Beatmung gibt es?",a:`* Assistierte Beatmung:\r
		. Selbst??ndige Atmung des Patienten nicht suffizient, dh wird Nachgeholfen\r
		. Patient bestimmt wann er ein/ausatmet\r
		. aber maschine/(mensch) hilft nach -> dr??ckt mehr Luft hinein\r
		. Sehr schwer zu timen, dh meist nur an der Maschine\r
	* Kontrollierte Beatmung:\r
		. Patient atmet gar nicht mehr von alleine -> Reanimationspflichtig!!!\r
		. Atem-timing und Atem-tiefe von au??en "kontrolliert"\r
		. Ambubeutel\r
	* Maschinelle Beatmung\r
		. Ventilator`,t:"Breathing"},{id:79,q:"Wann ist eine Gro??e Flasche am Auto zu wechseln?",a:`* Falls nur 1ne Flasche am Auto: <70 bar\r
	* Falls 2: <10 bar`,t:"Breathing"},{id:80,q:"Wann die kleine im Oxybag?",a:"* <50 bar",t:"Breathing"},{id:81,q:"Wie nennt man astma mit Fachbegriff?",a:"* Astma bronchiale",t:"Breathing"},{id:82,q:"Was ist Asthma?",a:`* chronische entz??ndbarkeit der unteren Atemwege\r
	* dauerhaft ??berempfindlich\r
	* H??ufig ab Kindheit/Jugend\r
	* Ausgel??st durch extrinsische (von au??en kommende -> allergene) oder intrinsische (andere) Faktoren\r
	* Mit guter Medikamenteneinstellung meist komplett beschwerdefrei`,t:"Breathing"},{id:83,q:"Was ist ein akuter Asthma anfall?",a:"* Pl??tzliche Verengung der Atemwege bei einem Asthma Patienten",t:"Breathing"},{id:84,q:"Durch was kann ein Anfall ausgel??st werden?",a:`* Allergene\r
	* Infekte\r
	* K??rperliche Antrengung\r
	* Feinstaub\r
	* Kalte/Trocjente Luft\r
	* Meds\r
	* Psychische Faktoren\r
	* ...`,t:"Breathing"},{id:85,q:"Welche genauen Faktoren f??hren bei einem Anfall zu einer Verengung der Atemwege?",a:`* Bronchospasmus -> unwillk??rliches Zusammenziehen der Muskeln welche die Bronchien umgeben -> verengung\r
	* SChleimhaut??dem -> Schwellung der Schleimhaut in den Bronchien durch Fl??ssigkeit -> weitere verengung\r
	* Hypersekretion -> ganz viel sekret wird abgegeben -> noch verengter\r
	* Schleim wird dickfl??ssiger -> nicht abhustenbar`,t:"Breathing"},{id:86,q:"Wof??r steht COPD?",a:"* Chronic Obstructive Pulminary Disease, Chronisch obstruktive Lungenerkrankung",t:"Breathing"},{id:87,q:"Was sind die tats??chlichen Probleme die unter COPD vorkommen?",a:`* chonische Bronchitis -> Entz??ndung der Bronchien -> produktives Husten, verengte Bronchien\r
	* Emphyseme -> ??berausdehnung und Sch??digung der Alveolen -> Verlieren stark an elastizit??t -> Ausatmen weniger effektiv`,t:"Breathing"},{id:88,q:"Was sind Risikofaktoren f??r COPD?",a:`* Haupts??chlich Rauchen\r
	* beg??nstigend sind auch\r
		. feinstaub\r
		. chemikalien\r
		. wiederkehrende (rezividierende) Infekte`,t:"Breathing"},{id:89,q:"Mit welchem Lebensalter tritt COPD normalerweise fr??hestens auf?",a:"* 40 j",t:"Breathing"},{id:90,q:"Wie l??sst sich COPD einteilen?",a:`* Je nach st??rke durch GOLD-Skala\r
		. Einteilung durch Spirometrie-Test -> 1-4 nach schwere aufsteigend\r
		. Einteilung nur durch Symptomatik -> A-D nach schwere aufsteigend`,t:"Breathing"},{id:91,q:"Was sind die Beschwerden bei COPD?",a:`* Husten mit Auswurf\r
	* Dispnoe (je nach GOLD nur bei Belastung oder auch in Ruhe)\r
	* M??digkeit, Abgeschlagenheit`,t:"Breathing"},{id:92,q:"Wie nennt man eine Akute Verschlechterung von COPD?",a:"* COPD- Exacerbation",t:"Breathing"},{id:93,q:"Was l??st eine Exacerbation aus?",a:"* meist Infekte d Atemwege (Pneumonie), manchmal auch ??beranstrengung",t:"Breathing"},{id:94,q:"Was sind die Symptome von Asthmaanfall/COPD-E?",a:`* Dyspnoe\r
	* Tachypnoe\r
	* Erh??hte Atemarbeit\r
	* Expiratorischer Stridor\r
	* Husten\r
	* Zyanose\r
	* Bl??sse\r
	* Kaltschwei??ig\r
	* Tachykardie`,t:"Breathing"},{id:95,q:"Was sind zu setzende Ma??nahmen bei Asthma-Anfall/COPD-E?",a:`* Notarzt\r
	* OK Erh??ht lagern -> Atemmuskulatur einsetzen\r
	* 6L O2 geben\r
	* Vitalwerte st??ndig ??berwachen\r
	* Ziels??ttigung \r
		. Asthma: 92-95%\r
		. COPD: 88-92%\r
	* Bewegungsverbot, auch Patienten sagen er soll sich nicht bewegen\r
	* Reanimationsbereitschaft`,t:"Breathing"},{id:96,q:"Warum ist bei COPD die Ziels??ttigung nur 92%?",a:"* K??rper an erh??hten CO2 gehalt gew??hnt -> regelt nur ??ber O2 -> genug O2 -> h??rt auf zu atmen -> CO2 viel zu hoch",t:"Breathing"},{id:97,q:"Was ist ein Lungen??dem?",a:"* Ansammlung von Fl??ssigkeit im Lungengewege und in den Alveolen",t:"Breathing"},{id:98,q:"Welche arten von Lungen??demen unterscheidet man und wie entstehen sie?",a:`* Hypertensives Lungen??dem\r
		. Generell erh??hter Blutdruck\r
		. Blutdruck auch in Lungenkreislauf erh??ht\r
		. Dr??ckt Fl??ssigkeit durch Kapillarwand\r
	* Kardiales Lungen??dem\r
		. Linksherzinsuffizienz\r
		. Blut staut in Lungenkreislauf zur??ck\r
		. Lungenkreislaufdruck steigt\r
		. Fl??ssigket wieder durch Kapillarw??nde gedr??ckt\r
	* toxisches Lungen??dem\r
		. Ausgel??st durhc Rauch/Reizgase\r
		. Alveolen gesch??digt -> Fl??ssigkeitsdurchtrutt\r
		. Symptomfreies intervall (bis zu 24h nach kontakt mit gas)`,t:"Breathing"},{id:99,q:"Symptome f??r Lungen??dem",a:`* Dyspnoe\r
	* Tachypnoe\r
	* Brodelndes Atemger??usch\r
	* Schaumige, rot/pinke Fl??ssigkeit hochgehustet\r
* Blass/kaltschwei??ig\r
* M??glw. Bewusstseinstr??bung	\r
* KEINE ATEMABH??NGIGEN SCHMERZEN??`,t:"Breathing"},{id:100,q:"Ma??nahmen bei Lungen??dem?",a:`* Notarzt\r
	* Sauerstoff 15 bis SpO2 97%\r
	* OK Erh??ht lagern\r
	* Vitalwerte ??berwachen\r
	* W??rmeerhalt\r
	* Reanimationsbereitschaft`,t:"Breathing"},{id:101,q:"Was ist eine Lungenembolie?",a:"* Verlegung der Blutstrombahn durch die Lunge",t:"Breathing"},{id:102,q:"Wodurch wird eine Lungenembolie verursacht?",a:`* Blutgerinsel (entsteht bei Ven??sen Verschluss in den Beinen, L??st sich und Bleibt in Lungenkapilaren stecken)\r
	* Manchmal auch\r
		* Fett\r
		* Luft (wenn Luft in spritze/IV)\r
		* Fruchtwasser`,t:"Breathing"},{id:103,q:"Symptome der Lungenembolie?",a:`* Atemabh??ngige Brustschmerzen (v.a. beim Einatmen)\r
	* niedrige SpO2\r
	* Dyspnoe\r
* m??glw. Zyanose\r
	* Bluthusten\r
	* Blass, kaltschwei??ig\r
	* Tachykardie\r
	* Todesangst, UNruhe\r
	* M??glw. Symptome Ven??ser Verschluss im Bein`,t:"Breathing"},{id:104,q:"Was sind die Folgen bei einer Lungenembolie?",a:`* Hypoxia\r
	* Rechtsherzinsuffizienz (Rechte Herzkammer kann blut nicht mehr durchdr??cken weil weg verstopft)`,t:"Breathing"},{id:105,q:"Was sind Risikofaktoren f??r eine Lungenembolie?",a:`* Risikofaktoren Ven??ser Gef????verschluss\r
	* An Infusion h??ngend`,t:"Breathing"},{id:106,q:"Was sind die Ma??nahmen bei einer Lungenembolie?",a:`* Lagerung mit erh??htem Oberk??rper (au??er eingetr??bt dann ssl)\r
* 15L O2 bis auf 97% Ziels??ttigen\r
* Vitalzeichen ??berwachen\r
* Notarzt\r
* Reanimationsbereitschaft\r
* Bewegungsverbot\r
* W??rmeerhalt`,t:"Breathing"},{id:107,q:"Was ist eine Lunngenentz??ndung?",a:"* Entz??ndung der Lunge (AHAHHA)",t:"Breathing"},{id:108,q:"Wie nennt man eine Lungenentz??ndung noch?",a:"* Pneumonie",t:"Breathing"},{id:109,q:"Was kann eine Lungenentz??ndung ausl??sen?",a:`* Infektion (meist Baktierien wie Pneumokokken)\r
	* Aspiration (Erbrochenes, Nahrung)`,t:"Breathing"},{id:110,q:"Wer ist besonders gef??hrdet f??r Lungenentz??ndungen?",a:`* Alte Menschen\r
	* Vorerkrankungen (zb COPD)\r
	* Bettl??grige\r
	* Immuno-compromised`,t:"Breathing"},{id:111,q:"Was sind die Typischen Symptome einer Lungenentz??ndung?",a:`* Dyspnoe\r
	* erh??hte Atemfrequenz\r
	* Atemabh??ngige Brustschmerzen\r
	* M??glw. brodelndes Atemger??usch\r
	* Fieber\r
	* Husten mit auswurf (wenn gelb -> bakterien, klar -> viren)\r
	* Sch??ttelfrost\r
	* M??glw. Bewusstseinstr??bung wegen hohem Fieber`,t:"Breathing"},{id:112,q:"Bei welchen Patienten sind atypische Verl??ufe h??ufig?",a:"* Alten menschen",t:"Breathing"},{id:113,q:"Wie schauen diese Atypischen Verl??ufe aus?",a:`* Viele Symptome k??nnen teilweise oder ganz fehlen\r
	* Oft nur schlechterer Allgemeinzustand`,t:"Breathing"},{id:114,q:"Was ist zu tun bei einer Lungenentz??mdung?",a:`* Erh??hter OK -> Atemhilfmuskulatur\r
	* 6L initial O2\r
	* Vitalwerte Kontrollieren\r
	* Notarzt je nach Patientenzustand`,t:"Breathing"},{id:115,q:"Was ist das Hyperventilationssyndrom?",a:"* Unwillk??rlich stark erh??hte Atemfrequenz und Tiefe",t:"Breathing"},{id:116,q:"Was sind Ausl??ser des Hyperventilationssyndrom?",a:"* psychische Faktoren wie Angst/Aufregung",t:"Breathing"},{id:117,q:"Was sind m??gliche Komplikationen von Hyperventilation?",a:"* wegen erh??hter Atmung zu viel CO2 abgeatmet -> respiratorische Alkalose",t:"Breathing"},{id:118,q:"Was ist bei der Diagnose von Hyperventilation zu beachten?",a:`* Andere Diagnosen zuerst ausschlie??en, z.B. Hyperglyk??mie (Acetongeruch in ausatemluft) -> BZ messen\r
	* Beschleunigte, aber nicht vertiefte atmung auch bei\r
		. Hohem Fieber\r
		. Hypoxie (Asthma-Anfall, COPD-E)\r
		. Schonatmung`,t:"Breathing"},{id:119,q:"Was sind die Symptome von Hyperventilation?",a:`* subjektive Dyspnoe\r
	* schnelle, tiefe Atmung\r
	* Kribbeln in H??nden\r
	* Taube Lippen/Zunge\r
	* Tetanie (Muskelverkrampfung) \r
		. in Unterarmen -> symmetrische Pf??tchenstellung \r
		. des Munds -> Karpfenmund\r
	* Kopfweh, Schwindel, Sehst??rungen`,t:"Breathing"},{id:120,q:"Ma??nahmen bei Hyperventilation?",a:`* Zuerst versuchen Patienten zu beruhigen\r
	* "Nur eine Harmlose st??rung"\r
	* Angeleitetes Atmen\r
	* R??ckatmung der Ausatemluft (O2 Maske nicht anschlie??en)\r
	* Wenn nix funktioniert: NA Rufen`,t:"Breathing"},{id:121,q:"Was ist zu beachten bevor der Patient r??ckatmet?",a:"* Andere Diagnosen Ausschlie??en: BZ messen (Schlie??t aus Hyperglyk??mie)",t:"Breathing"},{id:122,q:"Was sind typische Gasvergiftungen?",a:`* CO\r
	* CO2\r
	* Rauch/Reizgase`,t:"Breathing"},{id:123,q:"Was ist wichtig bei Verdacht auf Gasvergiftung?",a:`* Selbstschutz!\r
	* MA70 ??ber Journal verst??ndigen lassen -> Feuerwehr und Einsatzfahrzeuge zur behandlung von uns JUH und anderen leuten in umgebung kommen\r
	* NA wenn n??tig muss extra angefordert werden!`,t:"Breathing"},{id:124,q:"Welche infos sollen an diw MA70 weitergegeben werden?",a:`* Bei CO: Messwert am display\r
	* Gr????e des Wohnhauses\r
		. wie viele stockwerke\r
		. wie viele wohneinheiten`,t:"Breathing"},{id:125,q:"Wie entsteht CO? Was sind h??ufige quellen?",a:`* Verbrennung mit zu wenig O2\r
	* Alte Gasthermen\r
	* Wohnungsbr??nde\r
	* SHisha\r
	* Pelletlager`,t:"Breathing"},{id:126,q:"Was sind wichtige eigenschaften von CO? warum ist es gef??hrlich?",a:`* Farblos\r
	* Geruchlos\r
	* Diffundiert durch w??nde\r
	* ??hnlich schwer wie O2 -> vermischt sich gut \r
	* Bindet 200x st??rker an Hb als O2`,t:"Breathing"},{id:127,q:"Welche Kategorien von Symptomen treten meist bei CO-Intox in Kombi auf?",a:`* Neurol??gisch\r
	* Kardial`,t:"Breathing"},{id:128,q:"Was sind Symptome einer CO-Intoxikation?",a:`* Neurologische\r
		. Kopfweh\r
		. Schwindel\r
		. ??belkeit\r
		. Sehst??rungen\r
		. Bewusstseinseintr??bung\r
	* Kardiale\r
		* Brustenge (AP)\r
		* Tachykardie\r
	* Pulsoxy zeigt falsche hohe werte an (kann nicht zwischen CO und O2 unterscheiden)\r
	* Blasse Hautfarbe (keine Zyanose), bei sehr hoher Belastung evtl. leicht rosig`,t:"Breathing"},{id:129,q:"Was sind die Grenzen beim CO Messger??t? Welche Ma??nahmen sind zu ergreifen?",a:`* >30ppm: Alarmgrenze 1\r
		. Fenster auf\r
		. Wenn m??glich mit Patient weggehen\r
	* >60ppm: Alarmgrenze 2\r
		. Sofort Ort verlassen\r
		. Crashrettung nur wenn m??glich: Wenn patient am weg mitnehmen und so schnell wie m??glich raus`,t:"Breathing"},{id:130,q:"Was hei??t OL am display?",a:"* OVER LIMIT -> >300ppm SOFORT RAUS!!!!!!!!!!!",t:"Breathing"},{id:131,q:"Welche Ma??nahmen sind zu ergreifen bei einer CO Intox?",a:`* Lagerung\r
		. wenn B-los: SSL\r
		. sonst OK erh??ht\r
	* 15L O2 -> CO raussp??len\r
	* Vitalzeichen je nach Patientenzustand Kontrollieren oder st??ndig ??berwachen\r
	* Bewegungsverbot\r
	* Notarzt je nach Zustand`,t:"Breathing"},{id:132,q:"Wie entsteht CO2? Wo treten manchmal gef??hrliche Konzentrationen auf?",a:`* Verbrennungs und G??hrprozesse\r
	* Weinkellern\r
	* Silos\r
	* G??llegruben\r
	* ...`,t:"Breathing"},{id:133,q:"Was sind wichtige Eigenschaften von CO2?",a:`* Farblos\r
	* Geruchlos\r
	* Ungiftig\r
	* Schwerer als Luft -> sammelt sich in bodenn??he an (keller); kann aber verwirbelt werden und sich so ausbreiten`,t:"Breathing"},{id:134,q:"Symptome CO2-Intox?",a:`* Schl??frigkeit\r
	* Schwindel\r
	* Kopfweh\r
	* Dyspnoe\r
	* Zyanose\r
	* Tachykardie\r
	* Kr??mpge\r
	* Bewusstseinstr??bung bis B-los (kann sofort passieren bei sehr hohen Konzentrationen)`,t:"Breathing"},{id:135,q:"Ma??nahmen CO2-Intox?",a:`* MA70\r
	* Nur Feuerwehr darf patienten holen\r
	* Lagerung nach zustand\r
		. B-los: SSL\r
		. OK erh??ht\r
	* O2 je nach SpO2 -> (Ziels. >95%?)\r
	* Kontrolle/??berwachung d. Vitalzeichen je nach Zustand\r
	* Bewegungsverbot\r
	* NA je nach Zustand`,t:"Breathing"},{id:136,q:"Wo treten Rauch oder Reizgase m??glicherweise auf?",a:`* Br??nde\r
	* Chlor: Schwimmb??der`,t:"Breathing"},{id:137,q:"Was sind Symptome f??r Rauch/Reizgasintox?",a:`* Ru??partikel um Mund\r
	* Husten\r
	* Dyspnoe\r
	* Rote/tr??ndende Augen\r
	* Hypoxie\r
	* zeitverz??gert toxisches Lunden??dem`,t:"Breathing"},{id:138,q:"Ma??nahmen Rauch/Rezigasintox?",a:`* MA70\r
	* Bergung nur durch Feuerwehr\r
	* Lagerung nach patientenzustand\r
		. B-Los: SSL\r
		. Sonnst OK erh??ht\r
	* O2 je nach SpO2\r
	* Kontrolle/??berwachung Vitalz. je nach Zustand\r
	* NA je nach Zustand\r
	* Bewegungsverbot`,t:"Breathing"},{id:139,q:"Wodurch kommt es zu einer Rippenfraktur/Prellung?",a:"* Stumpfe Gewalteinwirkung",t:"Breathing"},{id:140,q:"Wie kann eine Rippenfraktur von einer -prellung unterschieden werden?",a:"* Pr??klinisch meist nur sehr schwer",t:"Breathing"},{id:141,q:"Was sind Symptome eines solchen Thorax-Traumas?",a:`* starke stechende Atemabh??ngige Brustschmerzen\r
	* H??matome\r
	* Schonatmung\r
	* Druckempfindlichkeit`,t:"Breathing"},{id:142,q:"Was ist die gr????te Gefahr bei Thoraxtraumas im bereich der Unteren rippen?",a:"* Verletzungen von Organen im Bauchraum wie Milz, Niere, Leber",t:"Breathing"},{id:143,q:"Wann spricht man von einer Serienrippenfraktur?",a:`* > 2 Anliegende Rippen oder\r
	* > 3 Rippen`,t:"Breathing"},{id:144,q:"Was sind Symptome einer Serienrippenfraktur?",a:`* Paradoxische atmung im betroffenen Bereich -> zu wenig O2\r
	* Zyanose\r
	* Dispnoe\r
	* Alles von Rippenfraktur`,t:"Breathing"},{id:145,q:"Was ist ein Pneumothorax?",a:`* Kompletter oder Teilweiser Kollaps eines Lungenfl??gels\r
	* Pleura ge??ffnet -> Unterdruck ausgeglichen -> Lungenfl??gel kollabiert und f??llt f??r atmung aus`,t:"Breathing"},{id:146,q:"Welche Kategorien von Pneumothorax gibt es?",a:`* Geschlossen\r
		. spontan\r
	* Offen\r
	* Spannungspneumothorax`,t:"Breathing"},{id:147,q:"Wie kommt ein geschlossener Pneumothorax zustande",a:`* Lungenfell verletzt (z.B. durhc gebrochene Rippe)\r
	* Luft str??mt von Lunge in Pleuraspalt\r
	* Spontaner Pneum.:\r
		. im Wachstom manchmal einfach Riss des Lungenfells`,t:"Breathing"},{id:148,q:"Wie ein offener?",a:`* Rippenfell von au??en durchsto??en (Stich-, SChusswinde, ...)\r
	* Au??enluft gelangt in Pleuraspalt`,t:"Breathing"},{id:149,q:"Wie ist die Wunde eines offenen Pneumothorax zu versorgen?",a:"* Sterile Wundauflage darauf und an 3 der 4 Seiten mit Leukoplast fixieren, darf aber nicht Luftdicht sein, sonst Spannungspneum. m??glich!!",t:"Breathing"},{id:150,q:"Was sind Symptome eines Pneumothorax?",a:`* Dyspnoe\r
	* Tachypnoe\r
	* Nicht-Seitengleiche Atmung\r
	* Atemabh??ngiger stechender Schmerz`,t:"Breathing"},{id:151,q:"Wie nennt man die Trennwand zischen den beiden Lungenfl??geln?",a:"* Mediastinum",t:"Breathing"},{id:152,q:"Was passiert bei einem Spannungspneum.?",a:`* Immer mehr Luft str??mt beim Einatmen in Pleuraspalt, ??ffnung verschlie??t sich beim ausatmen\r
	* Druck im Pleuraspalt w??chst an`,t:"Breathing"},{id:153,q:"Was sind die Symptome eines Spannungspneum.?",a:`* Dyspnoe\r
	* Zyanose\r
	* Tachypnoe\r
	* Asym. Atembewegungen\r
	* Hautemphysem (Gas unter der Haut)\r
		. Schwellungen\r
		. Unter "Schneeballknirschen" wegdr??ckbar\r
	* Blutdruckabfahl weil nicht mehr so viel Blut zu Herz flie??en kann\r
	* Halsvenenstauung\r
	* Verschiebung der Trachea zur gesunden Seite (sehr sp??t)\r
	* Mediastinum zur Gesunden seite verlagert ->\r
		. Hohlvenenkompression -> weiterer RR abfall\r
		. massive Atemnot (keiner der Beiden Lungenfl??gel funktioniert noch gut)\r
		. Gefahr auf Pneumothorax beim gesunden Lungenfl??gel\r
	* bei offenen Spannungspneum. zus??tzlich m??glich:\r
		. Schaumiges Blut aus der Wunde\r
		. atemsynchrones saugendes Ger??usch`,t:"Breathing"},{id:154,q:"Was tun bei Spannungspneu?",a:`* SSL\r
	* Absaugen von Blut bei Verletzungen\r
	* 15L O2\r
	* Vital st??dnig ??berwachen\r
	* Notarzt\r
	* Bodycheck\r
	* Reanimationsbereitschaft\r
	* W??rmeerhalt`,t:"Breathing"},{id:155,q:"Beschreibe den Weg den das Blut nimmt, ausgehend von der Lunge",a:`1. Sauerstoffreiches Blut flie??t ??ber die Lungenvene in den linken Vorhof\r
	2. Linke Kammer\r
	3. Aorta transportiert Blut in den K??rperkreislauf\r
	4. Im K??rper gibt BLut O2 ab\r
	5. Blut flie??t ??ber venen zu rechtem Vorhof\r
	6. Rechte Kammer\r
	7. Lungenarterie\r
	8. Blut nimmt in Lungenkapillaren O2 auf\r
	9. wieder 1.`,t:"Circulation"},{id:156,q:"Wie viel Blut hat ca ein Erwachsener?",a:`* 5-6L\r
	* 70 ml/kg K??rpergewicht\r
	* 10 mal das Atemvolumen hahaha`,t:"Circulation"},{id:157,q:"Wie viel Blutverlust ist akut lebensgef??hrlich?",a:"* >1L",t:"Circulation"},{id:158,q:"Was sind die Aufgaben des Bluts?",a:`* Transport von N??hrstoffen, Gasen, Hormone, Abf??lle\r
	* Fl??ssigkeitshaushalt\r
	* Wundverschlie??ung\r
	* pH Gehalt regeln\r
	* Infektionsabwehr`,t:"Circulation"},{id:159,q:"Was sind die 3 wichtigsten Zellentypen im BLut?",a:`* Erythrozyten: ROte BLutk??rperchen, Transpotieren O2 (Hb)\r
	* Leukozyten: Wei??e BK, Imunabwehr\r
	* THrombozyten: Blutpl??ttchen, gerinnung`,t:"Circulation"},{id:160,q:"Welche 2 Komponenten f??hren zur Blutgerinnung?",a:`* Gerinnungsfaktoren (Proteine)\r
	* Blutpl??ttchen (Thrombozyten0)`,t:"Circulation"},{id:161,q:"Wie sind Arterien aufgebaut?",a:`* au??en glatte Muskelzellen\r
	* Elastische Fasern\r
	* Endothelzellen`,t:"Circulation"},{id:162,q:"Was sind die aufgaben der Kapillaren?",a:"* Gasaustausch und Stoffaustausch mit der Zelle",t:"Circulation"},{id:163,q:"Warum ist die Venenwand d??nner als die Arterienwand?",a:"* Niedriger blutdruck (nur so 10 mmHg)",t:"Circulation"},{id:164,q:"Welche Mechanismen bewegen das Blut in den Venen trotz niedrigem Blutdruck?",a:`* Muskelpunpe kontrahiert teile des gef???? -> Dr??ckt blut nach oben und unten\r
	* Venenklappen verhindern R??ckfluss -> Blut kann nur nach oben flie??en`,t:"Circulation"},{id:165,q:"Wie hei??en Hals-, Speichen-, Oberarm-, Oberschenkel- und Fu??r??ckenarterie auf Latein?",a:`* A. Carotis\r
	* A. Radialis\r
	* A. Brachialis\r
	* A. Femoralis\r
	* A. dorsalis pedis`,t:"Circulation"},{id:166,q:"Wie hei??en Hohl- und Oberschenkelvene auf latein?",a:`* V. cava\r
	* V. femoralis`,t:"Circulation"},{id:167,q:"Welche informationen k??nnen beim Puls-tasten erfasst werden?",a:`* Tastbar peripher/zentral/garnicht\r
	* Leicht/Stark\r
	* Frequenz\r
	* Rhytmisch/Arrhytmisch`,t:"Circulation"},{id:168,q:"Was bezeichnet man als Schock?",a:`* Durchblutungsproblem -> O2-Mangel der Organe\r
	* Kann bis zu Zelltod f??hren\r
	* Lebensbedrohlich`,t:"Circulation"},{id:169,q:"Was sind 3 m??glichkeiten die zu einem massiven Durchblutungsproblem und damit zum Schock f??hren k??nnen?",a:`* absoluter Volumensmangel (zu wenig Blut im Kreislauf; Blutverlust): absoluter hypovol??mer Schock\r
	* relativer Volumensmangel (Gef????e zu weit festellt, z.B. anaphylaxie): relativer hypovol??mer Schock\r
	* Herzst??rung (z.B. ausgedehnter MCI): kardiogener Schock`,t:"Circulation"},{id:170,q:"Wie reagiert der K??rper im Schock?",a:`* Sympathicus wird aktiv ->\r
	* Adrenalin`,t:"Circulation"},{id:171,q:"Was bewirkt Adrenalin?",a:`* AF erh??ht\r
	* Bronchien erweitert\r
	* Zentralisierung (Periphere Gef????e enggestellt)\r
	* +HF\r
	* +Schlagkraft\r
	* Zuckermobilisierung`,t:"Circulation"},{id:172,q:"Welche 3 Stadien l??sst sich Schock einteilen? Wie schauen die aus? (Am Beispiel von absolutem hypovol??men schock)",a:`* kompensiert\r
		* Ma??nahmen des K??rpers funktionieren -> Organe noch gut versorgt\r
		* RR noch normal weil HF und Schlagkraft erh??ht\r
		* Kann nicht endlos aufrecht erhalten werden, wenn Situation sich verschlechtert n??chstes Stadium\r
	* dekompensiert\r
		* HF noch mehr angehoben, reicht aber nicht\r
		* RR sinkt\r
		* Bewusstheitseintr??bung\r
		* Gef????e enger gestellt -> Versorgung schlechter\r
		* Zellen nicht mehr ordentlich versorgt -> beginnen mit Milchs??ureg??hrung -> metablische Azidose\r
	* irreversibel\r
		* Wenn dekompensiertes Stadium nicht schnellstens repariert -> Zellen sterben ab\r
		* Nun nicht mehr reversibel\r
		* Multiples Organversagen\r
		* Tod`,t:"Circulation"},{id:173,q:"Was sind Typische Schocksymptome?",a:`* stark Erh??hte HF\r
	* blasse, Kaltschwei??ige haut\r
	* RR sinkt ab (bei Hypovol??m)\r
	* Bewusstseinstr??bnug`,t:"Circulation"},{id:174,q:"Was tun bei Schock?",a:`* Lagerung nach zustand\r
		. wenn B-Los: SSL\r
		. sonst flach oder OK leicht erh??ht\r
	* Wenn m??glich Ursache beheben (Blutung stillen)\r
	* 15L O2 -> 97% Ziels??ttigung\r
	* ??berwachen der Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft\r
	* Bodycheck (vor allem Bauch)\r
	* W??rmeerhalt`,t:"Circulation"},{id:175,q:"Was sind Sofortma??nahmen zur Blutstillung?",a:`* Verletzte sollen sitzen oder liegen\r
	* Blutung mit Wundauflage zudr??cken\r
	* Druckverband wenn m??glich\r
	* Abbinden wenn Notwendig und m??glich`,t:"Circulation"},{id:176,q:"Wie ist ein Druckverband aufgebaut?",a:`* Sterile Wundauflage\r
	* Festgebunden mit Mullbinde/PEHA-Haft\r
	* Druckk??rper\r
		. Gr????er als die Wunde\r
		. Fest\r
		. Saugf??hig\r
	* Druckk??rper wiederum festgebunden`,t:"Circulation"},{id:177,q:"Wann kann kein Druckverband angelegt werden?",a:`* Kein Knochen gegen den gedr??ckt werden kann\r
	* Hals, Bauch\r
	* Wunde zu gro??`,t:"Circulation"},{id:178,q:"Wann darf Abgebunden werden?",a:`* Wunde zu Gro?? f??r druckverband\r
	* Gliedma??en sind Abgetrennt/Teilabgetrennt\r
	* Extreme Innere Blutungen\r
	* Arm/Bein eingeklemmt -> man kommt nicht zur Blutung\r
	* Sehr viele Verletzte (kann nicht so viel Zeit investieren)`,t:"Circulation"},{id:179,q:"Was ist wichtig sobald abgebunden wurde?",a:"* Zeit notieren",t:"Circulation"},{id:180,q:"Was ist ein anaphylaktischer Schock?",a:"* schwerstm??gliche allergische Reaktion",t:"Circulation"},{id:181,q:"Was l??st einen anaphylaktischen Schock aus?",a:`* Allergische REaktion f??hrt zu Histaminaussch??ttung\r
	* Gef????e werden Weitgestellt -> relativer hypovol??m.\r
	* Gef????wand wird durchl??ssiger -> noch mehr Blutverlust\r
	* Bronchien stellen sich eng -> Dysnpoe`,t:"Circulation"},{id:182,q:"Was im K??rper ist bei einem anaphylaktischem Schock direkt betroffen?",a:`* Lunge\r
	* Herz-Kreislauf\r
	* Haut/Schleimhaut\r
	* Kombinationen davon`,t:"Circulation"},{id:183,q:"Was sind Symptome f??r einen Anaphylaktischen SChock?",a:`* Haut/Schleimhaut:\r
		. R??tung\r
		. Juckreiz\r
		. Schwellungen\r
		. Quaddeln (Hebungen)\r
	* Atemwege:\r
		* Asthma-Anfall\r
	* Kreislauf\r
		* anaphylaktischer schock -> relativer hypovol??mer schock\r
	* Nicht unbedingt alle 3 Systeme betroffen`,t:"Circulation"},{id:184,q:"Was tun bei einem Anaphylaktischen Schock?",a:`* Lagerung je nach Zustand\r
		. B-Los: SSL\r
		. sonst: Flach oder OK leicht erh??ht\r
	* Allergene entfernen wenn m??glich\r
	* initial 15L O2 auf 97% Ziels??ttigen\r
	* Vitalzeichen St??ndig ??berwachen\r
	* Notarzt\r
	* Reanimationsbereitschaft\r
	* W??rmeerhalt`,t:"Circulation"},{id:185,q:"Was ist eine Hypertensive Krise?",a:"* Blutdruck plo??tzlich viel zu hoch + Symptome",t:"Circulation"},{id:186,q:"Was kann eine Hypertensive Krise ausl??sen?",a:`* Bei bekannten Hypertonikern manchmal auch einfach so\r
	* Blutdruckmittel nicht eingenommen\r
	* Psychisch/K??rperliche belastung\r
	* Aufputschende Drogen`,t:"Circulation"},{id:187,q:"Welche Symptome k??nnen bei einer Hypertensiven Krise auftreten?",a:`* RR > 200mmHg\r
	* Druckgef??hl in der Brust\r
	* Herzklopfen sp??rbar\r
	* Schwindel\r
	* Kopfweh\r
	* Sehst??rungen\r
	* Ohrensausen\r
	* ??berlkeit\r
	* Erbrechen\r
	* Verwirrtheit\r
	* Nasenbluten\r
	* Rotes Gesicht`,t:"Circulation"},{id:188,q:"Was tun bei einer Hypertensiven Krise?",a:`* OK erh??ht lagern\r
	* pot. Nasenbluten stillen\r
	* Je nach Zustand Kontrolle/??berwachung der Vitalzeichen\r
	* Neurocheck durchf??hren\r
	* Notarzt wenn eines Zutrifft\r
		. >200mmHg Systole + Symptome\r
		. >220mmHg\r
		. Druckgef??hl in der Brust`,t:"Circulation"},{id:189,q:"Was sind m??gliche Komplikationen einer Hypertensiven Krise?",a:`* Agina Pectoris od MCI\r
	* Linksherzinsuffizienz -> Lungen??dem, kardiogener Schock\r
	* Hirnblutung`,t:"Circulation"},{id:190,q:"Was ist der Fachbegriff f??r Nasenbluten?",a:"* Epistaxis",t:"Circulation"},{id:191,q:"Was kann Epistaxis verursachen?",a:`* Hypertonie / Hypertensive Krise\r
	* Verletuzungen\r
	* Infekte\r
	* Blutverd??nner`,t:"Circulation"},{id:192,q:"Was tun bei Nasenbluten?",a:`* OK erh??ht, Kopf nach vorne (kein Blut soll in Magen rinnen)\r
	* Nasenfl??gel zusammenpressen\r
	* Nicht tamponieren!\r
	* Nacken k??hlen\r
	* Vitalzeichen kontrollieren\r
	* Bodycheck durchf??hren`,t:"Circulation"},{id:193,q:"Was kann einen Arteriellen Gef????verschluss verursachen?",a:`* Eingeschwemmter Thrombus (entsteht in Tasche in linker Herzh??lfte)\r
		. bei Vorhofflimmern noch wahrscheinlicher\r
	* Ateriosklerose`,t:"Circulation"},{id:194,q:"Was sind Risikofaktoren f??r ateriosklerose?",a:`* Rauchen\r
	* erh??hter Blutfettgehalt\r
	* hoher blutdruck\r
	* hoher Cholesterin\r
	* Diabetes`,t:"Circulation"},{id:195,q:"Was sind die Klassischen 5 Symptome eines arteriellen Gef????verschlusses?",a:`* Pulseless - an der Betroffenen Gliedma??e ist kein Puls tastbar\r
	* Pain - art. Verschluss extrem Schmerzhaft (8-10 auf skala)\r
	* Pale - betroffene Stelle und darunter blass weil zu wenig blut\r
	* Parastheisa - Betroffene Stelle Taub\r
	* Paralysis - Betroffene stelle gel??hmt`,t:"Circulation"},{id:196,q:"Was ist zu tun bei einem Arteriellen Gef????verschluss?",a:`* Extremit??t tief, warm und weich lagern\r
	* Vitalzeichen kontrollieren\r
	* MDS zum Abchecken durchf??hren\r
	* Notarzt nach PAtientenwunsch (Schmerztherapie)`,t:"Circulation"},{id:197,q:"Welche Station ist anzufahren mit einem art. verschluss?",a:"* Gef????chirugie",t:"Circulation"},{id:198,q:"Was sind Risikofaktoren f??r einen Ven??sen Verschluss?",a:`* Rauchen\r
	* Krampfandern\r
	* ??bergewicht\r
	* ??strogen (also auch Frauen unter 60j)`,t:"Circulation"},{id:199,q:"Was sind Ursachen eines ven??sen Verschlusses?",a:`* Lange immobilisierung\r
	* mechanische Reizung (verengung der venen)\r
	* zu wenig getrunken`,t:"Circulation"},{id:200,q:"Was sind Symptome eines Gef????verschluss?",a:`* Schmerzen (ziehend) aber weniger stark als bei art. Gef????v.\r
	* Spannungs- und Schweregef??hl\r
	* Druck und Bewegungsschmerz\r
	* Schwellungen ??deme\r
	* R??tung oder Blauf??rbung d. Extremit??t\r
	* deutlich w??rmer`,t:"Circulation"},{id:201,q:"Was tun?",a:`* weich und flach -> thrombus soll sich nicht l??sen\r
	* Kontrolle Vitalzeichen\r
	* MDS\r
	* Bewegungsverbot -> thrombus soll sich nicht l??sen`,t:"Circulation"},{id:202,q:"Welche Station f??hrt man damit an?",a:"* Dermatologie",t:"Circulation"},{id:203,q:"Wie gro?? und schwer ist das herz?",a:`* geballte Faust\r
	* 250-350g`,t:"Circulation"},{id:204,q:"Was ist ein durschnittliches Herminutenvolumen und wie l??sst es sich berechnen?",a:`* Schlagvolumen * Herzfrequenz\r
	* 5-30L (bei anstrenugn mehr)`,t:"Circulation"},{id:205,q:"Wie hei??en Vorhof, Kammer mit Fachbegriff?",a:`* Atrium\r
	* Ventrikel`,t:"Circulation"},{id:206,q:"Wie hei??en die Klappen zwischen Vorhof und Kammer?",a:"* Segelklappen",t:"Circulation"},{id:207,q:"Wie hei??en die Klappen zwischen Kammer und Aorta/Lungenarterie?",a:"* Taschenklappen",t:"Circulation"},{id:208,q:"Was ist die Aufgabe der Klappen?",a:"* R??ckstrohm verhindern",t:"Circulation"},{id:209,q:"Wie funktioniert das Herz beim Schlag?",a:`* Segelklappen geschlossen (kein Blut flie??t aus Kammer zu vorhof)\r
	* Kammern kontrahieren\r
	* Taschenklappen offen`,t:"Circulation"},{id:210,q:"In der Entspannung?",a:`* Segelklappen offen\r
	* Taschenklappen verhindern r??ckstrom\r
	* Atrien kontrahieren\r
	* Blut aus atrium str??mt in kammer`,t:"Circulation"},{id:211,q:"Wie wird der Herzmuskel selbst versorgt?",a:`* Herzkranzgef????e / Koronargef????e\r
	* Entspringen direkt aus der Aorta ??ber der Aortenklappe`,t:"Circulation"},{id:212,q:"Welche Stationen nimmt der Reiz bei der Herz-Kontraktion?",a:`* Erzeugt im Sinusknoten\r
	* Geht zu AV-Knoten -> Atrien Kontrahieren\r
	* Nach unten zu Kammer -> Kammern kontrahieren`,t:"Circulation"},{id:213,q:"Was f??r Zellen erzeugen den reiz/geben ihn wieter?",a:"* spezifische Muskelfasern",t:"Circulation"},{id:214,q:"Wie wird die Herzfrequenz bestimmt?",a:"* Sinusknoten l??st normalerweise 60-80/min aus, moduliert durch Sympathicus",t:"Circulation"},{id:215,q:"Was passiert wenn der Sinusknoten keinen Reiz erzeugen/weitergeben kann?",a:`* Der av knoten schwingt mit 40-60/min\r
	* restliches System wenn auch av knoten kaputt: 20-40/min`,t:"Circulation"},{id:216,q:"Wie funktioniert hier ein Defi?",a:`* wenn unkontrollierte impulse bei kammern:\r
		. Alle Zellen gelichzeitig angeregt -> reset`,t:"Circulation"},{id:217,q:"Wof??r steht MCI?",a:"* Myokardinfarkt -> Herzinfarkt",t:"Circulation"},{id:218,q:"Was l??st einen MCI aus?",a:`* Ateriosklerose\r
		. Blutfett erh??ht\r
		. ??bergeweicht\r
		. Diabetes\r
		. Nikotin\r
		. Bluthochdruck`,t:"Circulation"},{id:219,q:"Was ist AP?",a:`* Angina Pectoris\r
	* Brustenge\r
	* Minderdurchblutung des Herzens`,t:"Circulation"},{id:220,q:"Was l??st AP aus?",a:`* Arteriosklerose -> Gef????e verengt aber noch nicht verschlossen (das w??re MCI)\r
	* Verkrampfung der Gef????e`,t:"Circulation"},{id:221,q:"Ursachen?",a:`* Belastung\r
	* Nikotin\r
	* K??lte`,t:"Circulation"},{id:222,q:"Was passiert bei einem MCI?",a:`* manche Koronargef????e ganz verschlossen\r
	* Teil des muskels nicht versorgt -> stirbt ab`,t:"Circulation"},{id:223,q:"Was deutet einen MCI im vorhinein an?",a:"* AP, wenn durch ASKL ausgel??st, da ASKL platzt und Gef???? nun ganz verschlossen",t:"Circulation"},{id:224,q:"Was sind ??berlebenschancen bei MCI?",a:"* 30% T??dlich, davon 50% innerhalb der ersten 60 min nach Symptombeginn",t:"Circulation"},{id:225,q:"Was sind Symptome eines MCI?",a:`* Blass, Kaltschwei??ig\r
	* Druckgef??hl in der Brust\r
	* Thorax-Schmerz (retrosternal, brennend)\r
	* Ausstrahlung der Schmerzen\r
	* Vernichtungsgef??hl, Todesangst\r
	* ??berlkeit\r
	* Erbrechen\r
	* Kombination von mehreren davon\r
	* Abnormale Herzfrequenz\r
	* erh??hte AF`,t:"Circulation"},{id:226,q:"Wann k??nnen MCIs mit sehr wenigen Symptomen auftreten?",a:"* Diabetikern, da Nerven in der Brust abgestorben -> kein schmerz",t:"Circulation"},{id:227,q:"Was sind Ma??nahmen bei einem MCI?",a:`* OK 45?? lagern\r
	* O2 wenn SpO2 unter 90 [au??er wenn Schock, Zyanose, ... dann auch ??ber 90%]\r
	* Vitalzeichen ??berwachen\r
	* Notarzt\r
	* Reanimationbereitschaft\r
	* Bewegungsverbot\r
	* W??rmeerhalt`,t:"Circulation"},{id:228,q:"Was ist ein kardiogener Schock?",a:"* Herz kann nicht genug Blut pumpen -> schlechte Versorgung trotz au??reichendem Volumen",t:"Circulation"},{id:229,q:"Was sind Ursachen eines kardi. SChock?",a:`* MCI wenn arg\r
	* Herzrhytmusst??rungen`,t:"Circulation"},{id:230,q:"Was sind Symptome eines kardiogenen Schocks?",a:`* bl??sse\r
	* kaltschwei??ig\r
	* niedriger Blutdruck\r
	* m??glw. MCI symptome\r
	* m??glw. Lungen??demsymptome\r
	* bewusstseinstr??bung`,t:"Circulation"},{id:231,q:"Was tun beim kardiogenen Schock?",a:`* SSL\r
	* 15L O2\r
	* ??berwachung d Vitalzeichen\r
	* Notarzt\r
	* W??rmeerhalt\r
	* REanimationsbereitschaft`,t:"Circulation"},{id:232,q:"Was ist der Normbereich der HF?",a:"* 60-100",t:"Circulation"},{id:233,q:"Was sind normale Gr??nde f??r niedrige HF?",a:`* in ruhe sein\r
	* Sportler haben generell niedrigeren ruhepuls\r
	* Medikamente`,t:"Circulation"},{id:234,q:"Wann ist -HF ein symptom?",a:`* beruhigungsmittel (opiate)\r
	* Hirnblutung/Hirndruck -> Druckpuls \r
	* Erregungsleitungsst??rungen (unterversorgung Sinus/Av knoten):\r
		. mit Schwindel\r
		. Synkopen`,t:"Circulation"},{id:235,q:"Wann ist Tachykardie normal?",a:"* Anstrengung, Aufregung",t:"Circulation"},{id:236,q:"Wann ist es ein Symptom?",a:`* AUfputschmittel\r
	* Sympathikus\r
	* Fieber\r
	* Erregungsleitungsst??rungen: Vorhofflimmern, MCI\r
		. arrhytmischer puls\r
		. schwindel\r
		. Atemnot`,t:"Circulation"},{id:237,q:"Was tun bei verdacht auf Erregungsleitungsst??rungen?",a:`* Lagerung nach Patientenzustand\r
		. B-Los SSL\r
		. Ok erh??ht\r
	* O2 wenn ben??tigt (97% Ziels??ttigung)\r
	* Vitalwerte ??berwachen\r
	* Notarzt\r
	* Reanimationsberreitschaft\r
	* Bewegungsverbot`,t:"Circulation"},{id:238,q:"Was kann zu einer Linksherzinsuffizienz f??hren?",a:`* Chronisch\r
		. Hypertonie\r
		. St. p. MCI\r
		. virale Infekte (Herzmuskelinsuffizienz)\r
	* akut\r
		. MCI\r
		. Hypertensive Krise\r
		. Rhytmusst??rungen`,t:"Circulation"},{id:239,q:"Was sind beschwerden bei einer Chronischen Linksherzinsuffizienz?",a:`* Lungenstauung: Bronchialschleimh??ute geschwollen -> Dispnoe (v.a. im Liegen)\r
	* O2 je nach Zustand geben`,t:"Circulation"},{id:240,q:"Wie kommt es zu einer rechtsherzinsuffizienz?",a:`* akute\r
		. MCI\r
		. Lungenembolie\r
	* chronische\r
		. lange ASthma/COPD (Blutgef????e abgedr??ckt)\r
		. chronische Linksherzinsuffizient`,t:"Circulation"},{id:241,q:"Was sind symptome einer akuten rechtsherzinsuffizienz?",a:"* -RR",t:"Circulation"},{id:242,q:"Was ist zu tun?",a:"* Ursache (MCI/Lungenembolie behandeln)",t:"Circulation"},{id:243,q:"was sind Symptome einer Chronischen Rechtsherzinsuffizienz?",a:`* Wegdr??ckbare ??deme in beiden Beinen\r
	* Aszites (Bauchwassersucht, also Wasser in der Bauchh??le)`,t:"Circulation"},{id:244,q:"Was ist die Aufgabe des Kleinhirns?",a:"* Inverse Kinematik",t:"Disability"},{id:245,q:"Wie sind die Hirnh??ute aufgebaut, von oben nach unten?",a:`* Knochen\r
	* Dura Mater - Harte Hirnhaut\r
	* Arrachnoidea - Spinnwebenhaut\r
	* Pia mater - Weiche Haut`,t:"Disability"},{id:246,q:"Wie l??sst sich das Nervensystem anatomisch einteilen?",a:`* Zentral\r
	* Peripher`,t:"Disability"},{id:247,q:"Wie funktionel?",a:`* somatisch -> willk??rlich\r
	* autonom -> unwillk??rlich`,t:"Disability"},{id:248,q:"Welchen einfluss haben Sympathicus/Parasympathicus?",a:`* +HF/HF\r
	* +Herzkraft/-Herzkraft\r
	* +Bronchienweite/-Bronchienweite\r
	* +Pupillenweite/-Pupillenweite\r
	* -Verdauung/+Verdauung`,t:"Disability"},{id:249,q:"Wie l??sst sich die Bewusstseinslage mit Fachbegriffen einteilen?",a:`* Solomnenz: leicht schl??firg/eingetr??bt\r
	* Sopor: starke eintr??bung, nicht ansprechbar, nur auf Schmerzreize reagieren\r
	* Koma: gar keine Reaktionen mehr, keine Schutzreflexe`,t:"Disability"},{id:250,q:"Wie kann man orientiert sein?",a:`* Z\r
	* O\r
	* P\r
	* S`,t:"Disability"},{id:251,q:"Was ist eine Synkope?",a:"* Pl??tzliche Bewusstlosigkeit die aber schnell wieder vorbeigeht",t:"Disability"},{id:252,q:"Wodurch wird sie ausgel??st?",a:"* Minderdurchblutung",t:"Disability"},{id:253,q:"Was sind Pr??synkope-symptome?",a:`* Schwindel\r
	* Flimmern\r
	* Schwarz for Augen\r
	* Bl??sse\r
	* ??belkeit\r
	* Pupillen nach oben`,t:"Disability"},{id:254,q:"Was tun bei Pr??synkopesymptomen?",a:"* Hinlegen/Hinsetzen",t:"Disability"},{id:255,q:"Was f??r Ursachen k??nnen zu einer Synkope f??hren?",a:`* Kreislauf\r
		. Lage??nderung\r
		. Schreck\r
		. Vena Cava Kompressionsyndrom\r
		. ...\r
	* Kardiale\r
		. Abmormale herzfrequenz\r
		. Herzinsuffizienz\r
		. Rhytmusst??rungen\r
		. Herzklappen kapput`,t:"Disability"},{id:256,q:"Welche 2 Symptome werden oft unter Schwindel zusammengefasst?",a:`* systematischer Schwindel (Vertigo, Dreh- oder Wankschwindel)\r
	* unystematischer Schwindel (Eng.: Dizziness)`,t:"Disability"},{id:257,q:"Wie kommt es zu Vertigo?",a:`* 3 Lgeichgewichtssysteme (Innenohr, Auge, Information ??ber muskellage im raum) stimmen nicht ??berein\r
	* zB Karussel: Innenohrfl??ssigkeit dreht sich weiter obwohl auge sieht dass sich nicht mehr dreht`,t:"Disability"},{id:258,q:"Wie kommt es zu unsystematischem Schwindel",a:`* Sensoren unterversorgt\r
	* Symptom bei\r
		. Hypoglyk??mie\r
		. Herzrhytmusst??rungen\r
		. Pr??synkope\r
		. Hypotonie`,t:"Disability"},{id:259,q:"Welche formen kann systematischer Schwindel annehmen?",a:`* Dreh-\r
	* Wank-\r
	* Liftschwindel`,t:"Disability"},{id:260,q:"Wo ist systematischer Schwindel unter anderem ein Symptom?",a:`* gutatiger Lagerungsschwindel\r
	* Entz??ndung d. Gleichgewichtnervs\r
	* Altersschwindel\r
	* ....`,t:"Disability"},{id:261,q:"Was verursacht gutartigen Lagerungsschwindel?",a:"* Steinchen im Gleichgewichtsorgan brauchen sehr lange um nach Lagerungs??nderung zu Ruhe zu kommen",t:"Disability"},{id:262,q:"Was sind Symptome f??r gutartigen Lagerungsschwindel?",a:`* tritt immer bei Lagerungs??nderungen auf\r
	* dauert sekunden bis zu mehrere minzten\r
	* Oft ??belkeit, Erbrechen\r
	* Auch Kleinste Kopfbewegungen l??sen Drehschwindel aus`,t:"Disability"},{id:263,q:"Was sind symptome f??r eine Entz??dnung des Gleichgewichtnervs?",a:`* Krankheitsgef??hl\r
	* Starke ??berlkeit und Erbrechen\r
	* Heftiger Drehschwindel, verst??rkt durch Lagerungs??nderung`,t:"Disability"},{id:264,q:"Was ist Morbus Meniere? Welche Symptome sind typisch?",a:`* seltene, noch nicht ganz erforschte Erkrankung\r
	* Drehschwindelattacken\r
		. mehrere male pro Woche\r
		. 20 mintuen - Stunden andauendt\r
	* ??belkeit\r
	* Erbrechen\r
	* Ohrger??usche, schwerh??rigkeit, Druckgef??hl auf betroffenen Ohr`,t:"Disability"},{id:265,q:"Was kann sonst SChwindel ausl??sen?",a:`* Angst, Psychische Belastung va bei Depression/Angestst??rung\r
	* Intoxikationen\r
	* Seekrank, Reisekrank, ...`,t:"Disability"},{id:266,q:"Was versteht man unter Alterschwindel?",a:`* Schwindel der im Alter auftritt wegen Ver??nderungen im Gleichgewichtsorgan, Augen oder Bewegungsaparat\r
	* Unterschiedleicher Schwindel/Dauer\r
	* Zunahme im Dunkeln\r
	* Gangunsicher`,t:"Disability"},{id:267,q:"Was ist Diabetes mellitus?",a:"* Stoffwechsel-St??rung im Zuckerhaushalt",t:"Disability"},{id:268,q:"Was ist die Aufgabe von insulin?",a:"* Transportiert Zucker aus dem Blut in die K??rperzellen",t:"Disability"},{id:269,q:"Wo wird Insulin normalerweise Hergestellt?",a:"* Pankreas in den Beta-Zellen",t:"Disability"},{id:270,q:"Was ist Diabetes mellitus Typ 1?",a:`* Mei??t schon im Kinder/Jugendalter\r
	* Autoimmunerkrankung, Beta-Zellen zerst??rt\r
	* Insulin muss von au??en zugef??hrt werden`,t:"Disability"},{id:271,q:"Was ist Diabetes mellitus Typ 2?",a:`* im alter und bei ungesunden Lebensstil\r
	* zu viel Zucker aufgenommen -> viel Insulin produziert\r
	* Immer mehr insulin notwendig weil Zellen daran gew??hnt (Insulinrezeptoren weniger Empfindlich)\r
	* Irgendwann kann nicht mehr Insulin produziert werden -> muss zugef??hrt werden`,t:"Disability"},{id:272,q:"Was ist Hypoglyk??mie",a:"* BZ unter 70",t:"Disability"},{id:273,q:"Was kann Hypoglyk??mie ausl??sen?",a:`* zu viel Insulin/Antidiabetika\r
	* nichts gegessen\r
	* Starke Anstregung (Fieber)\r
	* Alkoholkonsum`,t:"Disability"},{id:274,q:"Was passiert bei Hypoglyk??mie?",a:"* Gehrin zu wenig zucker -> aktiviert Sympathikus",t:"Disability"},{id:275,q:"Was sind Symptome bei Hypoglyk??mie?",a:`* blass, kaltschwei??ig\r
	* +HF\r
	* Hunger\r
	* Unkonzentriertheit\r
	* M??digkeit\r
	* Abnormales Verhalten (Verwirrt, Agressiv)\r
	* Abnormale Sprache\r
	* Motorik eingeschr??nkt\r
	* Krampfanf??lle\r
	* Bewusstseinseintr??bung bis zu Koma`,t:"Disability"},{id:276,q:"Ma??nahmen bei Hypo?",a:`* Lagerung nach zustand, wenn nicht eingetr??bt OK erh??ht\r
	* O2 wenn ben??tigt\r
	* Kontrolle/??berwachung je nach Zustand\r
	* Neurocheck\r
	* Notarzt wenn eingetr??bt oder B-Los\r
	* Wenn nicht stark Bewusstseinsauff??llig:\r
		. Zuckerzufuhr (Zucker, dann Langkettige KH)\r
	* Immer Hospitalisieren!`,t:"Disability"},{id:277,q:"Was ist Hyperglyk??mie?",a:`* Blutzucker zu hoch (>250)\r
	* Passiert langsam`,t:"Disability"},{id:278,q:"Was sind Ursachen f??r Hyperglyk??mie?",a:`* undiagnostiziertes Diabetes\r
	* falsche/fehlende Medikamente\r
	* zu wenig Insulin\r
	* zu viel Zucker\r
	* Infektion`,t:"Disability"},{id:279,q:"Was passiert bei Hyperglyk??mie?",a:`* zu wenig Insulin um Zucker in K??rperzellen zu verfrachten\r
	* mobilisieren mehr Zucker weil Unterversorgt\r
	* BZ steigt weiter\r
	* Fetts??uren abgebaut -> ketose`,t:"Disability"},{id:280,q:"Was sind Symptome von Hyperglyk??mie?",a:`* Tachypnoe\r
	* Acetongeruch in Ausatemluft\r
	* Viel Urinieren\r
	* HF erh??ht\r
	* Trockene Haut/Schleimhaut\r
	* starker Durst\r
	* Bewusstseinstr??bung/Koma`,t:"Disability"},{id:281,q:"Am??nahmein bei Hyperglyk??mie?",a:`* Lagerung nach Zustand\r
	* O2 wenn ben??tigt\r
	* Vitalwerte ??berwachen wenn eingetr??bt\r
	* Notarzt wenn eingetr??bt\r
	* Fl??ssigkeit geben wenn nicht Bewusstseinsauff??llig`,t:"Disability"},{id:282,q:"Wie sagt man zu einem Schlaganfall mit Fachbegriff?",a:"* Insult",t:"Disability"},{id:283,q:"Welche 2 Ursachen kann ein Insult haben?",a:`* Minderdurchblutung (Hirnisch??mie)\r
	* Hirnblutung`,t:"Disability"},{id:284,q:"Was ist ein TIA?",a:`* Transitorische isch??mische attacke -> Vorr??bergehende Minderdurchblutung\r
	* 12 minuten symptome\r
	* Vorbote f??r Hirninfarkt`,t:"Disability"},{id:285,q:"Welche Blutungstypen k??nnen zu einem Insult f??rhen?",a:`* Subarachnoedalblutung\r
	* Intercerebralblutung`,t:"Disability"},{id:286,q:"Wie l??sst sich eine TIA pr??klinisch von einem Infarkt unterscheiden?",a:"* Nicht",t:"Disability"},{id:287,q:"Was verursacht einen isch??mischen Insult?",a:`* Embolus eingeschwemmt von Vorhofflimmern, Herzklappenerkrankung, Carotis\r
	* ASKL vor ort\r
	* Verengung der Halsschlagader`,t:"Disability"},{id:288,q:"Was kann eine Intercerebralblutung verursachen?",a:`* ASKL\r
	* Hypertonie\r
	* Blutverd??nner\r
	* Drogen\r
	* Gef????missbildung`,t:"Disability"},{id:289,q:"Was kann zus??tzlich eine Subarachnoidalblutung ausl??sen?",a:"* Aneurisma (Gef????wand verd??nnt sich)",t:"Disability"},{id:290,q:"Welche Symptome tr??ten bei einem Insult auf?",a:`* Unterschiedlcih \r
	* Alle neurologisch\r
	* abh??ngig von betroffenem Areal\r
	* Typische Symptome:\r
		. motorische Schw??chen\r
		. Hemiparese\r
		. Gesichtsl??hmungen\r
		. Kopfweh\r
		. Sprachst??rungen\r
		. Sehst??rungen\r
		. Gleichgewichtsst??rung\r
		. selten Cheyne Stokes`,t:"Disability"},{id:291,q:"Wie l??sst sich eine Isch??mie und eine Hirnblutung unterscheiden?",a:`* Bei Isch??mie Symptome pl??tzlich und unver??ndert\r
	* Bei Blutung auch pl??tzlich aber immer schlimmer werdend`,t:"Disability"},{id:292,q:"Was sind Ma??nahmen bei Isch??mie?",a:`* OK 30?? erh??ht\r
	* O2 auf 94-98% Ziels??ttigen\r
	* BZ messen (Hypoglyk??mie)\r
	* Vitalzeichen + GCS ??berwachen -> wenn verschlechterung eher Hirnblutung\r
	* Neurocheck\r
	* NA nur wenn wirklich Vitalparameter extrem problematisch (RR bis 220 tolerierbar)\r
	* Stroke Unit so schnell wie m??glich`,t:"Disability"},{id:293,q:"Was sind innerklinische Therapieformen f??r Isch??mie?",a:`* <4.5h Lyse\r
	* Thrombektomie (entfernen von THrombus) bei schweren Anf??llen`,t:"Disability"},{id:294,q:"Wie l??sst sich ein schwerer SChlaganfall von einem leichten unterscheiden?",a:`* APSS < 4 -> leicht\r
	* APSS >= 4 -> schwer`,t:"Disability"},{id:295,q:"Was ist wichtig zu merken beim APSS?",a:"* nicht f??r diagnose geeignet",t:"Disability"},{id:296,q:"Was sind symptome bei einer Blutung?",a:`* Gleiche wie bei Isch??mie\r
	* Folgende Symptome erh??hen wahrscheinlichkeit f??r Blutung:\r
		. Pupillendifferenz\r
		. Unruhe\r
		. ??belkeit, Erbrechen\r
		. Biot\r
		. BEwusstseinstr??bung/Koma\r
		. Druckpuls\r
		. Verschlechterung\r
		. Bei Subarachnoidalblutung: Nackensteife`,t:"Disability"},{id:297,q:"Was sind Ma??nahmen bei einer Blutung?",a:`* Lagerung nach zustand\r
		. Wenn B-Los SSL\r
		. sonnst 30??\r
	* O2 94-98\r
	* BZ messen\r
	* Vitalzeichen + GCS ??berwachen\r
	* Nerocheck und Meningismustest\r
	* Notarzt\r
	* Reanimationsbereitschaft`,t:"Disability"},{id:298,q:"Wodurch k??nnen Krampfanf??lle erm??glicht werden?",a:`* genetisch\r
	* symptomatisch\r
		- SHT, Blutungen, St. p. Insult, Tumor\r
		- Hypoglyk??mie\r
		- Meningitis\r
		- Eklampsie\r
		- Fieberkrampf`,t:"Disability"},{id:299,q:"Welche Art von Krampf ist f??r uns relevant?",a:"* tonisch-klonischer Krampfanfall / Grand Mal",t:"Disability"},{id:300,q:"Welche Faktoren k??nnen einen Krampfanfall ausl??sen?",a:`* Alkoholentzug\r
	* visuelle Reize\r
	* Schlafentzug\r
	* Absetzen von Antiepileptiker`,t:"Disability"},{id:301,q:"Was ist der Unterschied zwischen fokalem und generalisierten Anfall?",a:`* Fokal betrifft nur eine einzige Hirnregion\r
	* Generalisiert ist ganzes Hirn betroffen -> tonisch-klonischer Anfall\r
	* Vor generalisiertem Anfall meist fokaler`,t:"Disability"},{id:302,q:"Was ist die Aura?",a:`* Fokaler Anfall als Vorbote f??r einen Generalisierten\r
	* Symptome: Sinnest??uschungen (Seh- H??r- Geruchs- Geschmacksst??rungen, Kribbeln, Taubheitsgef??ghl, W??rmegef??hl)`,t:"Disability"},{id:303,q:"Wie ist die Tonische Phase?",a:`* Streck oder Beugekrampf\r
	* 10-30 sek\r
	* m??glw. Inertialschrei\r
	* Patient st??rzt zu boden\r
	* Bewzusstseinstr??bung\r
	* Atemstillstand`,t:"Disability"},{id:304,q:"Klonische Phase",a:`* 3-5 Minuten\r
	* rhytmisches Zucken\r
	* Zungenbiss\r
	* SChaum vorm Mund\r
	* Lichtstarre Pupillen, gerader/Schr??ger starrer Blick\r
	* Harn- oder Stuhlabgang`,t:"Disability"},{id:305,q:"Ma??nahmen w??hrend Anfall",a:`* Patient vor verletzungen sch??tzen (spitze Gegenst??dne weg, evtl mit Decke abpolstern)\r
	* Anfall abwarten\r
	* O2 Dusche 15L\r
	* Notarzt\r
	* Reanimationsbereitschaft`,t:"Disability"},{id:306,q:"Was ist die Nachschlafphase?",a:`* Person schwer erqweckbar/schl??frig/verwirrt/abwesend/wach\r
	* Dauert Minuten bis Stunden\r
	* W??hrend Phase Krampfanfall nicht erinnerlich (retrograde Amnesie)\r
	* Unterschiedlich Person zu Person`,t:"Disability"},{id:307,q:"Ma??nahmen nach Kramnpfanfall?",a:`* Lagerung nach Zustand\r
		. B-klar: OK erh??ht\r
		. sonst SSL\r
	* O2 bei Bedarf\r
	* Vitalwerte krontrollieren\r
	* BZ messen (Hypo)\r
	* BC, NC\r
	* Notarzt eig nicht notwendig`,t:"Disability"},{id:308,q:"Was sind wichtige Anamnesefragen bei Krampfanfall?",a:`* Durch Krampfanfall gest??rzt?\r
	* Krampfanfall bekannt?\r
	* Medikammente? Eingenommen?\r
	* Drogen, Alk, andere provozierende Faktoren?`,t:"Disability"},{id:309,q:"Was ist Status Epilepticus?",a:`* Krampf l??nger als 5 min\r
	* Mehrere Anf??lle ohne zu Bewusstsein zu kommen\r
	* Lebensbedrohlich!!\r
	* NA!`,t:"Disability"},{id:310,q:"Wie wird die K??rpertemp geregelt?",a:`* Hypothalamus: Thermostat d K??rpers\r
	* Schwitzen\r
	* Eng/Weitstellung peripherer Gef????e\r
	* Zittern\r
	* Bewegung\r
	* Bei Neugeborenen: W??rmererzeugung in Braunen Fettgewebe`,t:"Disability"},{id:311,q:"Was ist ein Sonnenstich? Symptome?",a:`* Intensive Sonnenenstrahlung\r
	* Reizung von Hirnhaut und -gewebe\r
	* Schwindel\r
	* ??belkeit\r
	* R??tung, hei??e haut\r
	* Meningismus\r
	* ??belkeit, Erbrechen, Schwindel\r
	* K??rpertemp evlt leicht erh??ht\r
	* Symptome m??glw. stunden nach einstrahlung bei kindern und s??uglingen`,t:"Disability"},{id:312,q:"Ma??nahmen Sonnenstich?",a:`* k??hler ort ohne Sonne\r
	* Kalte Wickel an Kopf und Nacken\r
	* OK Erh??ht\r
	* NC + Meningismus\r
	* Vitalkontrolle`,t:"Disability"},{id:313,q:"Welche typen von Hitzenotfall unterscheidet man?",a:`* Hitzeersch??pfung (<40??C)\r
	* Hitzeschlag (>40??C)`,t:"Disability"},{id:314,q:"Was ist Hitzeersch??pfung? Symptome?",a:`* Wasser, Elektrolytverlust durch Schwitzen\r
	* Thermoregulation noch normal\r
	* M??glw. Vorstufe Hitzeschlag\r
	* Symptome\r
		. ??belkeit\r
		. Schwindel\r
		. Erbrechen\r
		. Kopfweh\r
		. Schwei??ige haut\r
		. + AF, + HF\r
		. T normal bis 40??`,t:"Disability"},{id:315,q:"Ma??nahmen Hitzeersch??pfung?",a:`* k??hle Umgebung\r
	* Lagerung nach Zustand\r
	* kontrolle/??berwachung Vitalzeichen (??berwachung wenn richtung hitzeschlag)\r
	* NA nach Zustand`,t:"Disability"},{id:316,q:"Was ist Hitzeschlag?",a:`* Temp ??ber 40\r
	* Thermoregulation funktioniert nicht mehr\r
	* Organdysfunktion bis zu Versagen (immer ZNS betroffen)\r
	* akute Lebensgefahr\r
	* 2 Typen\r
		. klassischer Hitzeschlag: (klein)kinder + ??ltere bei hoher umgebungstemp\r
		. anstrengungshitzeschlag: extreme Anstrengung bei hoher temp`,t:"Disability"},{id:317,q:"Symptome Hitzeschlag?",a:`* K??rpertemp > 40\r
	* evtl trockene Haut\r
	* Kopfweh, ??belkeit, Erbrechen\r
	* -RR, Arrhytmia\r
	* Bewusstseinstr??bung bis koma\r
	* Krampfanf??lle\r
	* Andere Organe versagen`,t:"Disability"},{id:318,q:"Ma??nahmen Hitzeschlag?",a:`* K??hlere Umgebung\r
	* Abk??hlen (Ziel <39??, Coolpack achsel/leisten)\r
	* SSL\r
	* 15L O2\r
	* ??berwachung Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft`,t:"Disability"},{id:319,q:"Wann spricht man von Unterk??hlung?",a:"* < 35??",t:"Disability"},{id:320,q:"Wie l??sst sich UNterk??hlungssymptomatik unterteilen?",a:`* leicht\r
		. Vasokonstriktion -> Zentralisierung\r
		. periphere Zyanose\r
		. +FH, +AF\r
		. Zittern\r
		. Bewusstsein normal\r
	* moderat\r
		. Vasodilatation\r
		. -HF, -AF, -RR\r
		. kein Zittern, sondern Starre\r
		. B-tr??bung\r
	* schwere\r
		. minimaler Kreislauf/Kreislaufstillstand\r
		. Scheintod\r
		. keine Schmerz-/Pupillenreflexe`,t:"Disability"},{id:321,q:"Ma??nahmen leichte Unterk??hlung?",a:"* Aktives Aufw??rmen",t:"Disability"},{id:322,q:"Ma??nahmen moderat/schwer?",a:`* Patient m??gl wenig bewegen\r
	* SSL\r
	* 15L O2\r
	* Vitalparam ??berwachen\r
	* NA\r
	* Reanimtionsbereitschaft\r
	* W??rmeerhalt (kein Aufw??rmen!)`,t:"Disability"},{id:323,q:"Was sind h??ufige Vergiftungen?",a:`* Schlaf/Beruhingungsmittel\r
	* Schmerzmittel\r
	* Neuroleptika\r
	* Antidepressiva\r
	* Alk + Med\r
	* Alkohol\r
	* Andere Drogen`,t:"Disability"},{id:324,q:"Was sind die 4 stadien einer Alkoholvergiftung?",a:`* Exzitationsstadium (0.2-2 prom)\r
		. Enthemmung\r
		. verl??ngerte Reaktionszeit\r
		. verminderte Schmezrwahrnehmung\r
		. Gleichgewichtsst??rung\r
		. undeutliche Sprache\r
	* Rauschstadium (2-2,5 prom)\r
		. Muskelschlaffheit\r
		. evtl. aggressiv\r
		. Erbrechen\r
		. ??belkeit\r
		. Amnesie\r
		. Sprachst??rung\r
		. enge Pupillen\r
	* Narkose (2,5-4 prom)\r
		. B-Los\r
		. keine Schmerzreaktion\r
		. Puillen unterschiedlich, tr??ge reaktiv\r
		. -RR\r
	* Asphyxie (>4 prom)\r
		. Koma\r
		. Keine Reaktionen/reflexe mehr\r
		. Ateminsuffizienz\r
		. pupillen nicht reaktiv, weit ge??fnet`,t:"Disability"},{id:325,q:"Ma??nahmen Alk intox",a:`* Lagerung nach zustand\r
		. klar: flach/leiucht ok erh??ht\r
		. eingetr??bt: SSL\r
	* O2 wenn ben??tigt\r
	* BZ (Hypoglyk)\r
	* ??berwachung Vitalzeichen + GCS\r
	* NC, BC\r
	* NA wenn B-Los\r
	* W??rmeerhalt`,t:"Disability"},{id:326,q:"Was sind Typische Abdomensymptome?",a:`* ??belkeit\r
	* Erbrechen\r
	* Durchfall\r
	* Fieber\r
	* Gastrointestinale Blutungen`,t:"Environment"},{id:327,q:"Wie l????st sich die Location einer Blutung bei Blut im Erbrochenen feststellen?",a:`* "Dunkelheit" d Blutes -> je dunkler desto Verdauter -> niedriger\r
	* Schwarzes Erbrechen / Kaffeesatz -> Magenblutung\r
	* Helles Blut -> ??sophargusvarizenblutung`,t:"Environment"},{id:328,q:"Was ist die gro??e Gefahr bei Gastrointestinalen Blutungen?",a:"* Hypovol??mer Schock",t:"Environment"},{id:329,q:"Was ist der Fachbegriff f??r das Bauchfell?",a:"* Peritonem",t:"Environment"},{id:330,q:"Was ist eine akutes Abdomen?",a:`* Entz??ndung/Reizung d Bauchfells -> Bretthart\r
	* potentiel Lebensbedrohlich\r
	* Entz??ndung, Blutungen, ....\r
	* Bildet sich ??ber Stunden/Tage`,t:"Environment"},{id:331,q:"Wie ist der Verlauf bei einer Perforation eines Hohlorgans?",a:`* Bildet ??ber Stunden-Tage\r
	* Bakterien in Bauchraum -> Entz??ndung\r
	* M??glw. Sepsis/Spetischer Schock als folge`,t:"Environment"},{id:332,q:"Was kann ein akutes Abdomen ausl??sen?",a:"* Blutung im Bauchraum reizt Peritonem",t:"Environment"},{id:333,q:"WIe ist der Verlauf bei einer Gastrointestinalen/Gyn??kologischen Blutungen",a:"* Schnelle Entwicklung",t:"Environment"},{id:334,q:"Was sind Symptome eines akuten Abdomen?",a:`* Anf??nglich Abwehrspannung\r
		. Bei perforationen m??glw. nur in einem Segment\r
	* Sp??ter Brettharte Bauchdecke\r
	* Heftige Schmerzen\r
	* Schonhaltung\r
	* M??glw. ??belkeit\r
	* M??glw. Erbrechen\r
	* Tachypnoe\r
	* RR niedrig\r
	* Tachykard\r
	* Eintr??bung\r
	* Andere Symptome Hypovol??mer Schock\r
	* wenn Blutung: blass, kaltschwei??ig`,t:"Environment"},{id:335,q:"Was tun bei akutem Abdomen?",a:`* Lagerung nach Zustand\r
		. klare Bewusstseinslage: flach\r
		. eingetr??bt: SSL\r
	* O2 auf 97% s??ttigen\r
	* ??berwachen der Vitalzeichen\r
	* W??rmeerhalt\r
	* Keine Nahrung- oder Fl??ssigkeit (OP!)\r
	* NA\r
	* Reanimationsbereitschaft`,t:"Environment"},{id:336,q:"Welche Organe findet man im Oberen rechten quadranten?",a:`* Leber\r
	* Gallenblase\r
	* 12 Finger Darm\r
	* Dickdarm`,t:"Environment"},{id:337,q:"Welche oben links?",a:`* Milz\r
	* Magenblutung\r
	* Pankreas\r
	* ??sophargus\r
	* Dickdarm`,t:"Environment"},{id:338,q:"Links unten?",a:`* Vorne\r
		. D??nndarm\r
		. Dickdarm\r
		. Eileiter\r
	* Hinten\r
		. Niere\r
		. Harnleiter`,t:"Environment"},{id:339,q:"Rechts Unten?",a:`* Vorne\r
		. Appendix\r
		. D??nndarm\r
		. Dickdarm\r
		. Eileiter\r
	* Hinten\r
		. Niere\r
		. Harnleiter`,t:"Environment"},{id:340,q:"Was ist in der mitte?",a:`* Pankreas\r
	* Bauchaorta\r
	* Harnblase\r
	* Uterus`,t:"Environment"},{id:341,q:"Was verursacht Gastritis?",a:`* Bakterien\r
	* Kaffe, Nikotin, Alkohol\r
	* Ern??hrung (Scharf, Fettig, gebraten)\r
	* Stress\r
	* Meds`,t:"Environment"},{id:342,q:"Was sind Symptome f??r Gastritis?",a:`* V??llegef??hl\r
	* Apetitlosigkeit\r
	* Erbrechen\r
	* Druckempfindlichkeit d Magens\r
	* Schmerzen nach dem Essen`,t:"Environment"},{id:343,q:"Was sind Ursachen f??r ein Magengeschw??r?",a:"* Wie Gastritis",t:"Environment"},{id:344,q:"Was sind Symptome f??r ein Magengeschw??r (Ulcus ventriculi/duodeni)?",a:`* Oberbauchschmeruen\r
		. Nach der Nahrungsaufnahme: Magen\r
		. N??chtern: 12-Finger-Darm\r
		. Druck\r
		. V??llegef??hl\r
		. ??belkeit`,t:"Environment"},{id:345,q:"Was sind m??gliche Komplikationen eines Magengeschw??rs?",a:`* Blutungen (Kann auch lebensbedrohlich sein!)\r
	* Ulcusperforationen -> Akutes Abdomen`,t:"Environment"},{id:346,q:"Welche Schmerztypen unterscheidet man bei Abdominelen Notf??llen?",a:`* Perforation: Schmerzspitze am Anfang, dann immer st??rker werdender Schmerz\r
	* Kolik: Auf- und abwallender Schmerz\r
	* Entz??ndung: Immer st??rker werdender aber auch schwankender Schmerz`,t:"Environment"},{id:347,q:"Was tun bei Magengeschw??r?",a:`* Lagerung nach Patientenwunsch\r
	* Vitalzeichen kontrollieren\r
	* Bodycheck\r
	* Notarzt bei verdauch auf Perforation/Blutung (akut. Abdomen)\r
	* Nahrungs/Fl??ssigkeitskaren`,t:"Environment"},{id:348,q:"Wie nennt man einen Darmverschluss mit Fachbegriff?",a:"* Illeus",t:"Environment"},{id:349,q:"Welche arten von Illeus unterscheidet man? Was l??st die aus?",a:`* mechanischer Illeus\r
		. Verwachsung\r
		. Tumor\r
		. Gallensteine\r
	* paralytischer Illeus\r
		. Entz??ndungen\r
		. Nervensch??digung\r
		. Mesentrialinfarkt\r
		. Vergiftung (va Opiate)`,t:"Environment"},{id:350,q:"Was sind Symptome eines Illeus?",a:`* krampfartige (kolische) Bauchschmerzen\r
	* kein Stuhl\r
	* ??belkeit, Erbrechen (m??glw. Stuhl im Erbrochenen)\r
	* V??llegef??hl, Appetitlosigkeit\r
	* Meteorismus -> evtl Dyspnoe`,t:"Environment"},{id:351,q:"Was sind m??gliche Komplikationen bei einem Illeus?",a:"* Bakterien gelangen in Bauchraum -> akutes Abdomen",t:"Environment"},{id:352,q:"Was tun bei Illeus?",a:`* Lagerung nach Patientenwunsch\r
	* O2 bei bedarf\r
	* Kontrulle/??berwachung je nach zustand\r
	* NA bei akutem Abdomen\r
	* Bodycheck\r
	* Nahrungs- Fl??ssigkeitskarenz`,t:"Environment"},{id:353,q:"Appendizitis Symptome",a:`* anfang: Oberbauchschmerzen\r
	* sp??ter: rechter Unterbauch SChmerzen\r
	* Entz??ndungsschmerz\r
	* McBurney Punkt, Blumberg-Zeichen\r
	* ??belkeit\r
	* Erbrechen\r
	* Fieber`,t:"Environment"},{id:354,q:"Wie l??sst sich f??r Appendizitis testen?",a:`* 3-Eck Zwischen Nabel und H??ftschaufeln\r
	* unteres 3. auf der rechten Seite: McBurney Punkt, Schmerz`,t:"Environment"},{id:355,q:"Was tun bei Appendizitis?",a:`* Lagerung nach Patientenwunsch\r
	* Kontrolle der Vitalzeichen\r
	* Bodycheck\r
	* Nahrungs- und Fl??ssigkeitskarenz`,t:"Environment"},{id:356,q:"Was sind die Aufgaben der Leber?",a:`* Gallens??ure produktion\r
	* Gerinnungsfaktoren produktion\r
	* Speichert Glykogen \r
	* Entgiftet`,t:"Environment"},{id:357,q:"Wie nennt man Leber mit Fachbegriff?",a:"* Hepar",t:"Environment"},{id:358,q:"Was ist die Pfortader?",a:`* Bringt Blut von Bauchorganen zur Leber -> reinigt\r
	* Vene\r
	* Alle einzelnen Bauchorgane angeschlossen`,t:"Environment"},{id:359,q:"Symptome einer Gallenkolik",a:`* kolik schmerzen rechter Oberbauch\r
	* evtl ausstrahlend in rechte Schulter\r
	* oft nach fettreicher Nahrung\r
	* V??llegef??hl\r
	* Bl??hungen\r
	* ??belkeit\r
	* Erbrechen\r
	* evtl wei??er Stuhl\r
	* evtl. Ikterus (gelbe augen)`,t:"Environment"},{id:360,q:"Was sind m??gliche Komplikationen?",a:`* Entz??nung\r
	* Pankreatitis\r
	* Perforation d Gallenblase (Akutes Abdomen)`,t:"Environment"},{id:361,q:"Was tun Gallenkolik?",a:`* Lagerung nach patientenwunsch\r
	* Kontrolle Vitalzeichen\r
	* Bodycheck\r
	* NA nach Patientenwunsch\r
	* Nahrungs und Fl??ssigkeitskarenz`,t:"Environment"},{id:362,q:"Was sind Aufgaben des Pankreas?",a:`* Herstellung von Verdauungsenzymen\r
	* Herstellung von Hormonen (Insulin, Glucagon)`,t:"Environment"},{id:363,q:"Was kann zu einer Pankreatitis f??hren?",a:`* vorbestehende Gallensteine\r
	* Chronischer Alkoholkonsum\r
	* -> L??st selbstverdauung aus`,t:"Environment"},{id:364,q:"Was sind Symptome einer Pankreatitis",a:`* G??rtelf??rmige (li u re) Schmerzen im Oberbauch \r
	* ??belkeit, Erbrechen\r
	* elastische Abwehrspannung (Gummibauch -> Abwehrspannung + Meteorismus)\r
	* Meteorismus -> evtl Atemnot`,t:"Environment"},{id:365,q:"Ma??nahmen Pankreatitis?",a:`* Lagerung nach Patientenwunsch\r
	* O2 nur wenn <90% (wegen MCI!)\r
	* Kontrolle Vitalzeichen\r
	* Bodycheck\r
	* Notarzt wenn keine eindeutigen Symptome (DD MCI)\r
	* Nahrungs und Fl??ssigkeitkarenz`,t:"Environment"},{id:366,q:"??sophargusvarizenblutung",a:`* Erkrankung d Leber \r
	* Leber kann nicht mehr so viel Blut aus der Pfortader verarbeiten\r
	* Blut weicht ??ber Venen in ??sophagus, ...\r
	* Krampfadern bilden sich\r
	* Harte nahrung rei??t krampfaden auf\r
	* Starke blutung`,t:"Environment"},{id:367,q:"Symptome ??sophargusvaritzenblutung",a:`* ??belkeit\r
	* Erbrechen (mit Blut, eher rot)\r
	* Gef??hrdung der Atemwege\r
	* hypovol??mer Schock`,t:"Environment"},{id:368,q:"??sophargusvarizenblutung Ma??nahmen?",a:`* SSL\r
	* Absaugebereitschaft\r
	* 15L O2 !DUSCHE!\r
	* ??berwachung der Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft\r
	* W??rmeerhalt`,t:"Environment"},{id:369,q:"Wo liegt die Milz? Was sind ihre Aufgaben?",a:`* linker Oberbauch\r
	* Umgeben von Gewebskapsel\r
	* Immunabwehr\r
	* Erythrozyten\r
	* Sehr stark durchblutet`,t:"Environment"},{id:370,q:"Was sind die Aufgaben der Niere?",a:`* Ausscheidung\r
	* Harnproduktion\r
	* Wasser- Elektrolyt- S??ure-Basen-Haushalt\r
	* RR Regulation\r
	* In Nebennieren: Hormonproduktion`,t:"Environment"},{id:371,q:"Wie sind die Ableitenden Harnwege aufgebaut?",a:`* Nierenbecken: Sammelt Harn in Niere\r
	* Harnleiter\r
	* Harnblase\r
	* Harnr??hre`,t:"Environment"},{id:372,q:"Wie wird akute bzw chronische Niereninsuffizienz abgek??rzt?",a:"* ANV (akutes Nierenversagen) bzw CNI (Chronische Niereninsuffizeinz)",t:"Environment"},{id:373,q:"Nierenkolik?",a:"* Nierensteine im Harnleiter",t:"Environment"},{id:374,q:"Symptome Nierenkolik?",a:`* kolik schmerzen in der Flanke oder seitlicher Unterbauch, evtl. bis in Genitalbereich\r
	* oft besser beim Gehen\r
	* ??belkeit\r
	* Erbrechen\r
	* Harndrang, evtl. Blut im Harn / wenig / kein Harn`,t:"Environment"},{id:375,q:"Ma??nahmen Nierenkolik?",a:`* Lagerung nach Patientenwunsch\r
	* T messen (DD Nierenbeckenentz??ndung/HWI)\r
	* Vitalkontrolle\r
	* NA (Schmerztherapie)`,t:"Environment"},{id:376,q:"HWI",a:`* Infektion der Harnr??hre\r
	* Aufstieg der Erreger`,t:"Environment"},{id:377,q:"Symptome HWI",a:`* Schmerzen beim Urinieren (Brennen)\r
	* h??ufiger Harndrang, evtl nur wenig\r
	* evtl. Blut im Harn\r
	* evtl. Fieber`,t:"Environment"},{id:378,q:"Was kann einen HWI bei alten Leuten ausl??sen?",a:`* Wenig getrunken\r
	* Hygene WC\r
	* Katheter\r
	* schwaches Immunsystem`,t:"Environment"},{id:379,q:"Wie k??nnen sich die Symptome eines HWI bei alten Leuten unterscheiden?",a:`* fehlen/abgeschw??cht sein\r
	* Va Verschlechterung Allgemeinzustand\r
		. Inkontinenz\r
		. Appetitlosigkeit\r
		. Verwirrtheit`,t:"Environment"},{id:380,q:"Welche Abschnitte hat die Wirbels??ule?",a:`* HalsWS (7, C1-C7)\r
	* BrustWS (12, Th1...)\r
	* LendenWS (5, L1)\r
	* Kreuzbein (5 verwachsene)\r
	* Stei??bein (5 verwachsene)`,t:"Environment"},{id:381,q:"Wie  nennt man C1, C2 und was bilden sie?",a:`* Kopfgelenk/Genick\r
	* C1: Atlas\r
	* C2: Axis`,t:"Environment"},{id:382,q:"Wie ist ein Wirbel aufgebaut?",a:`* innen hohl (R??ckenmarkskanal)\r
	* Dornenfortsatz (hi)\r
	* Querforts??tze (hi l/r)`,t:"Environment"},{id:383,q:"Aus was bestehen die bandscheiben? Was ist die Aufgabe?",a:`* Fasriger Ring mit Gallertkern\r
	* Sto??d??mpfer\r
	* Wenn Kern herausrutscht: Bandscheibenvorfall`,t:"Environment"},{id:384,q:"Was ist eine Prellung?",a:`* Gewebe durch stumpfe Gewalt gequetscht\r
	* Schmerzen\r
	* H??matom\r
	* Bewegungseinschr??nkung`,t:"Environment"},{id:385,q:"Wie kann man eine Prellung pr??klinisch von Fissuren unterscheiden?",a:"* gar nicht",t:"Environment"},{id:386,q:"Was ist eine Verstauchung?",a:`* gelenk aus pfanne raus und gleich wieder rein\r
	* Gelenkskapsel/B??nder gezerrt/gerissen\r
	* Gleiche Symptome wie Prellung nur bei Gelenk`,t:"Environment"},{id:387,q:"Wie nennt man eine Verrenkung mit Fachbegriff?",a:"* Luxation",t:"Environment"},{id:388,q:"Was ist eine Luxation?",a:`* Gelenk aus pfanne raus, kehrt nicht zur??ck\r
	* Optisch sichtbar (fehlstellung des Gelenks)\r
	* Aktive Bewegung nicht m??glich\r
	* Au??erdem wie bei Verstauchung`,t:"Environment"},{id:389,q:"Was tun bei Luxation?",a:`* Kleidung weg wenn beengend\r
	* evtl K??hlen\r
	* Schienen (MDS!!)\r
	* NICHT REPONIEREN\r
	* Kontrolle Vitalzeichen\r
	* Bodycheck\r
	* NA f??r Schmerztherapie oder Reposition wenn durchblutung gef??hrdet (MDS nicht gut)`,t:"Environment"},{id:390,q:"Welche arten von Knochenbr??chen unterscheidet man?",a:`* Fissur -> nur eingerissen\r
	* geschlossene Fraktur\r
	* offene Fraktur\r
	* Gr??nholzfraktur\r
		. bei Kindern/Jugendlich\r
		. Knochen bricht, aber Knochenhaut intakt`,t:"Environment"},{id:391,q:"Was sind die Symptome einer Fraktur?",a:`* Unsicher: Prellungssymptome\r
	* Sicher:\r
		. Achsenfehlstellung\r
		. Knochenreiben bei bewegung\r
		* Knochenfragmente sichtbar (offene Fraktur)`,t:"Environment"},{id:392,q:"Wo ist auch bei geschlossenen Frakturen ein Hypovol??mer schock m??glich? ??ndert das die Ma??nahmen?",a:`* Becken\r
	* Oberschenkel\r
	* JA, immer NA und RR ??berwachen`,t:"Environment"},{id:393,q:"Was sind Symptome f??r einen Oberschenkelhalsbruch?",a:`* Schmerzen\r
	* verk??rztes bein\r
	* nach au??en rotiert\r
	* nicht gestreckt abhebbar`,t:"Environment"},{id:394,q:"Wohin mit dem Oberschenkelhals?",a:"* OSH-Bett auf unfall abbuchen",t:"Environment"},{id:395,q:"Was sind die symptome bei einem eingestauchten OSH?",a:`* schmerzen bei belastung werden immer schlimmer -> Rettung oft erst nach tagen\r
	* Bein nur leicht nach au??en geneigt`,t:"Environment"},{id:396,q:"Was sind die Schweregrade einer offenen Fraktur?",a:`* Haut durchstochen nur durch knochen\r
	* Hautwunden durch gewalt von au??en\r
	* (Teil)amputation`,t:"Environment"},{id:397,q:"Ma??nahmen offene Fraktur?",a:`* kleidung Weg\r
	* OP-Folie dr??ber\r
	* Schienen\r
	* Kontrolle/??berwachung je nach Ausmas\r
	* Bodycheck\r
	* W??rmeerhalt\r
	* O2 bei bedarf\r
	* NA!`,t:"Environment"},{id:398,q:"Was sind die Notarztkriterien bei Frakturen?",a:`* Schmerztherapie (abstimmen mit Patienten)\r
	* Blutverlust -> hypovol??m\r
	* Becken, Oberschenkel gebrochen\r
	* Bei Luxation mit beeintr??chtiger Durchblutung\r
	* Alle offenen Frakturen`,t:"Environment"},{id:399,q:"Was ist ein HWS Schleudertrauma?",a:`* Zuerst schnell in die eine dann in die andere Richtung (Autounfall)\r
	* B??nderzerrung C3-C7`,t:"Environment"},{id:400,q:"Was sind Symptome eines Wirbelk??rper-Bruchs?",a:`* Oft Osteoporose\r
	* "Knacken" bei Bagatelltrauma geh??rt\r
	* Verletztung im bereich der WS\r
	* Schonhaltung -> Verspannte Muskeln\r
	* Neurologische Probleme je nach nh??he\r
		. Stuhl/Harnabgang \r
		. Parallysis/Parastesia ab einer gewissen h??he + beidseitig`,t:"Environment"},{id:401,q:"Ma??nahmen WS verletzung",a:`* Vakuum/Stifneck va wenn Neurologische Symptome / Verspannungen / Intoxikiert\r
	* Kontrolle/??berwachung\r
	* Neurocheck + Bodycheck\r
	* NA wenn ...\r
	* W??rmeerhalt\r
	* BZ\r
	* wenn B-Los/Eingetr??bt -> Checkliste`,t:"Environment"},{id:402,q:"Welche typen von Beckenfrakturen unterscheidet man?",a:`* Stabile\r
		. nur Randbereich (h??ufig Schambein) betroffen\r
		. Schmerz in der Leiste\r
		. Bewegungseinschr??nkung\r
	* Instabile\r
		. Becken gibt bei druck nach\r
		. gehen, stehen unm??glich\r
		. m??glw. Blutverlust -> hypovol??m\r
		. Nervenverletzungen`,t:"Environment"},{id:403,q:"Ma??nahmen Beckenfraktur?",a:`* Wenn Bewusstseinsklar: Vakuummatratze, sonst SSL\r
	* O2 nach bedarf\r
	* Vitalzeichen ??berwachen\r
	* Neurocheck, Bodycheck\r
	* NA\r
	* Reanimationsbereitschaft\r
	* W??rmeerhalt`,t:"Environment"},{id:404,q:"Definition Polytrauma:",a:"* mehrere gleichzeitig entstandene Verletzungen wo min eine oder die kombi Lebensbedrohlich ist",t:"Environment"},{id:405,q:"Welche formen von Bauchtrauma unterscheidet man?",a:`* stumpfes\r
		. h??ufiger\r
		. innere Blutungen (va Milz, Leber) -> Hypovol??m\r
		. UHG wichtig\r
	* penetrierendes/offenes`,t:"Environment"},{id:406,q:"Was sind Symptome eines stumpfen Bauchtraumnas?",a:`* Bauchschmerzen\r
	* Prellmarken\r
	* Zuerst Abwehrspannung dann Brettharte Bauchdecke (akut Abdomen)\r
	* Schonhaltung\r
	* Bauch wird gr????er\r
	* Hypovol??mer Schock`,t:"Environment"},{id:407,q:"Was tun bei Bauchtrauma?",a:`* Lagerung je nach Zustand\r
		. SSL wenn eingetr??bt\r
		. sonst OK erh??ht, Knierolle\r
	* O2 bei Bedarf\r
	* ??berwachung Vital\r
	* BC\r
	* NA\r
	* Reanimationsbereitschaft\r
	* W??rmeerhalt\r
	* Nahrungs- u Fl??ssigkeitskarenz`,t:"Environment"},{id:408,q:"Was tun wenn Darm etc austreten?",a:`* Kompressen mit NaCl befeuchten\r
	* Trocken abdecken\r
	* W??rmeerhalt!`,t:"Environment"},{id:409,q:"Was tun wenn Gegenstand noch in Bauch?",a:`* nicht entfernen oder bewegen\r
	* Fixieren\r
	* Verbinden`,t:"Environment"},{id:410,q:"Wie ist die Haut aufgebaut?",a:`* Oberhaut (2mm)\r
	* Lederhaut (4mm)\r
	* unterhaut (2mm)`,t:"Environment"},{id:411,q:"Was sind die Aufgaben der Haut?",a:`* schutz vor Infektionen, Umwelteinfl??ssen, Substanzen\r
	* W??rmeerhalt/Temperaturregulation\r
	* Wasser u Elektrolythaushalt\r
	* Sinnesfunktion`,t:"Environment"},{id:412,q:"Was kann zu Wunden f??hren?",a:`* mechanisch\r
	* chemisch\r
	* thermisch`,t:"Environment"},{id:413,q:"Welche arten von mechanischen Wunden gibt es?",a:`* Sch??rfwunde (Excoratio)\r
		. nur kapillaren ge??ffnet -> punktf??rmige blutungen\r
		. schmerzhaft\r
	* RQW\r
		. stumpfe Gewalt wo knochen dahinter\r
		. oberfl??chlich, wundr??nder zerfetzt \r
	* Schnittwunde\r
		. glatte R??nder\r
		. m??glw tief\r
		. Sehnen, Muskel, Nervenverletzungen\r
		. M??glw infektionsrisiko -> Gegenstand ermitteln\r
	* Stichwunde\r
		. ??u??ere Verletzung oft sehr klein\r
		. innere Verletzungen gut m??glich\r
	* Bisswunde\r
		. Wundrand je nachdem wie spitz z??hne\r
		. infekti??s\r
		. HIV, Hep B/C\r
		. Besitzer von Tier Notieren/LPD \r
	* Schusswunde\r
		. oft starke innere verletzungen\r
		. Austrittswunde m??gl.\r
	* Pf??hlung\r
		* Pfahlartige gegenst??nde (Stahlstangen, Zaun, ...) dringen ein\r
		* sehr tief (m??glw wiederaustritt)\r
		* schwere innere Verletzungen m??glich\r
	* Fremdk??rper\r
		. Gegenstand steckt noch -> nicht entfernen/bewegen\r
		. Gegenstand stabilisieren\r
	* Ablederung\r
		. Scherkr??fte rei??en haut\r
		. Gro??e fl??che\r
		. m??glw starke Blutung\r
		. bei alten Leuten recht einfach (d??nne Haut)\r
	* Skalpierung\r
		. Haare in Maschine gefangen, ...\r
		. sehr viel Blutverlust\r
	* Amputation\r
		. Abtrennung v (teil)gliedma??en\r
		. total/subtotal (h??ngt noch iwo)\r
		. immer nach abgetrenntem st??ck suchen\r
		. in sterile Kompressen verpacken\r
		. NA + Schockraum!`,t:"Environment"},{id:414,q:"Was sind Ma??nahmen bei mechanischen Wunden?",a:`* Verbinden/abdecken (steril)\r
	* MDS\r
	* Kontrolle/??berwachung\r
	* Blutstillung wenn starke blutung\r
	* Notarzt (hypovol??m, schockraum, ...)`,t:"Environment"},{id:415,q:"Welche Verbrennungsgrade unterscheidet man?",a:`* 1: R??tung, schwellung, schmerz | betrifft nur oberhaut\r
	* 2: BLASENBILDUNG, abheilung nur wenn oberfl??chlich (sonst narben) | betrifft ober- und lederhaut\r
	* 3: SCHORF, KEINE SCHMERZEN, VERKOHLUNG, narbenbildung | betrifft alle hautschichten`,t:"Environment"},{id:416,q:"Was sind die Gefahren bei Stromunf??llen?",a:`* Stromkreis immer vor ann??herung von Fachpersonal unterbrechen lassen\r
	* unter 1000V (niederspannungsunfall)\r
		. Herzrhytmusst??rungen\r
		. lokale Verbrennungen\r
	* ??ber 1000V (hochspannungsunfall)\r
		. tiefe Verbrennungen`,t:"Environment"},{id:417,q:"Was tun bei Verbrennungen?",a:`* Kleidung vorsichtig entfernen\r
	* Ausma??, Grad absch??tzen (eine Patientenhandfl??che ~ 1%)\r
	* Mit lauwarmen wasser sp??len (10-20min); ACHTUNG: UNTERK??HLUNG\r
	* steril abdecken (Wundauflage od Verbrennungstuch) & Verbinden (Finger einzeln!)\r
	* Kontrolle/??berwachung nach zustand\r
	* O2 bei Bedarf\r
	* Bodycheck\r
	* NA f??r SChmerztherapie oder wenn gro??fl??chige Verletzungen\r
	* W??rmeerhalt\r
	* Verbrennungsbett wenn\r
		. Kinder: >10% 2. Grad oder >5% 3. Grad\r
		. Erwachsene: >15% 2. Grad oder >10% 3. Grad\r
		. H??nde, F????e, Gesicht, Genitalbereich mit grad 2`,t:"Environment"},{id:418,q:"Was sind Erfrierungen? Wie unterscheiden sie sich von Unterk??hlung?",a:`* K??rperkerntemp noch normal\r
	* Lokaler K??lteschaden\r
	* Meist sehr peripher (F????e, H??nde, Nase, Ohren)\r
	* 3 Grade\r
		. 1: blasse haut, Gef??hlslos oder prickelnde Schmerzen\r
		. 2: R??tung, schwellung, BLASENBIDLUNG, STARKE Schmerzen\r
		. 3: wei??, gef??hllos, nach Zeit blau-schwarz`,t:"Environment"},{id:419,q:"Ma??nahmen Erfrierung?",a:`* weitere K??lte verhindern\r
	* Temp messen\r
	* Grad 1:\r
		. aktiv	es Aufw??rmen (warmes wasser)\r
	* Grad 2, 3:\r
		. wunden m??glichst wenig ber??hren\r
		. Wundauflage/Verbrennungstuch\r
		. Kontrolle Vitalzeichen`,t:"Environment"},{id:420,q:"Bei Chemischen Wunden - Unterschied S??ure-/Basenver??tzung?",a:`* S??ure entzieht wasser -> schorf -> dring nicht so tief ein\r
	* Base dringt tief ein, perforation ??soph, Magen m??glich (orale einnahme)`,t:"Environment"},{id:421,q:"Ma??nahmen Chemische Wunden?",a:`* Selbstschutz (Fachpersonal)\r
	* kleidung mit chem entfernen\r
	* mit Wasser aussp??len (nicht noch mehr kontaminieren)\r
	* abdecken wundauflage, verbrennungstuch\r
	* Vergiftunszentrale anrufen, art der substanz notieren\r
	* Kontrolle/??berwachung je nach Zustand\r
	* NA bei bedarf`,t:"Environment"},{id:422,q:"Was bei chem verletzungen der Augen zu beachten?",a:`* Kopf zur seite des Verletzen auges\r
	* Mit Elo-Mel/NaCl aussp??hlen\r
	* Beide Augen locker Verbinden (verhindert viel bewegen von patienten)\r
	* NA f??r Schmerztherapie?`,t:"Environment"},{id:423,q:"Was bei chem Verletzungen des Verdauungstrakts?",a:`* nicht Ebrechen bringen\r
	* Mund aussp??len (Wasser)`,t:"Environment"},{id:424,q:"Was ist Dekubitus?",a:`* Druckwunde\r
	* Oft bei Immobilit??t -> Gef????e zugedr??ckt -> minderdurchblutung\r
	* 3 Ds: Druck (va nahe an Knochen, hohem gewicht), Dauer, Disposition (-RR, +Alter)`,t:"Environment"},{id:425,q:"In welche Stadien wird ein Dekubitus eingeteilt?",a:`* 1: R??tung\r
	* 2: Blase\r
	* 3: Offen + Sektret\r
	* 4: Nekrose, Tasche`,t:"Environment"},{id:426,q:"Ma??nahmen Dekubitus?",a:`* Lagerung so dass stelle entlastet\r
	* Prophylaktisch: Hautpflege, Mobilisation, gute Ern??hrung`,t:"Environment"},{id:427,q:"Was ist ein Ulcus crusis (venosum/ateriosum)",a:`* Wunden durch Kreislaufst??rung\r
	* CVI (chroniische ven??se insuffzienz):\r
		. kaputte Venenklappen\r
		. Blut Staut sich -> ??dem\r
		. oft in Unterschenkel\r
	* pAVK (periphere Arterielle Verschluss Krankheit):\r
		. ASKL\r
		. oft in Zehen, Vorfu??, Ferse\r
		. f??hrt zu Nekrose`,t:"Environment"},{id:428,q:"Was kann eine Bindehautentz??ndung ausl??sen?",a:`* Infektion\r
	* physk. reize (rauch, staub, ...)\r
	* Allergie`,t:"Environment"},{id:429,q:"Was sind Symptome einer Bindehautsentz??ndung?",a:`* R??tung\r
	* Lidspalte Verengt\r
	* mehr Tr??nen\r
	* Lichtscheu\r
	* Juckreiz, gef??hl so als w??re Fremdk??rper drinnen\r
	* Brennen, m??glw. starke Schmerzen`,t:"Environment"},{id:430,q:"Was tun wenn Fremdk??rper im Auge?",a:`* kleine FK mit Tupfer, Sp??lung entferen\r
	* gro??e/scharfe FK oder Holz/glas/metall nicht entfernen\r
		. beide Augen abdecken -> Bewegung minimiert\r
		. NA f??r Analgesie?`,t:"Environment"},{id:431,q:"Was kann eine Blutung aus dem Ohr ausl??sen?",a:`* Entz??ndung\r
	* Verletzung (Trommelfellriss)\r
	* Sch??delbasisfraktur`,t:"Environment"},{id:432,q:"Ma??nahmen bei Blut aus Ohr?",a:"* Locker abdecken (nicht Tamponieren!)",t:"Environment"},{id:433,q:"Wie kommt es zu einer Mittelohrentz??ndung?",a:`* Erreger druch eustachische R??hre von Rachen zu Mittelohr\r
	* Symptome:	\r
		. pulsierender Ohrschmerz\r
		. Fieber\r
		. H??rminderung`,t:"Environment"},{id:434,q:"Wie kommt es zu einer Trommelfellperforation? Was sind symptome?",a:`* Wattest??bchen, andere direkte Verletzung\r
	* pl??tzlicher ??berdruck (Ohrfeige, Explosion)\r
	* Mittelohrentz??ndung\r
	* Starke Druckschwankungen (Tauchen, Fliegen)\r
	* Symptome\r
		. stechender Schmerz\r
		. pl??tzliche H??rverschlechterung\r
		. Rauschen im Ohr\r
		. ??belkeit, Schwindel\r
		. m??glw. leichte Blutung`,t:"Environment"},{id:435,q:"Wie lange dauert eine Schwangerschaft?",a:`* Meist 40 SSW\r
	* 38-42 SSW normal\r
	* Davor fr??hgeburt`,t:"Gyn??kologie und P??diatrie"},{id:436,q:"Ab welcher woche hat baby ??berlebenschance?",a:"* 24 SSW",t:"Gyn??kologie und P??diatrie"},{id:437,q:"Was kann zu Fr??hgeburten f??hren?",a:`* Alk\r
	* Nikotin\r
	* Hypertonie\r
	* Infektion\r
	* Pr??eklampsie\r
	* Diabetes`,t:"Gyn??kologie und P??diatrie"},{id:438,q:"Wie l??sst sich die Schwangerschaft einteilen?",a:`* Trimester\r
		. 1: (bis 13 SSW): Anlage wichtiger Organe\r
		. 2: (bis 26 SSW): Ausbildung organe, erste bewegungen, ab 24 lebensf??hig\r
		. 3: (bis 40 SSW): Organe fertig ausgebildet, Mutter wird geburtsbereit`,t:"Gyn??kologie und P??diatrie"},{id:439,q:"Was ist eine Fehlgeburt? Symptome?",a:`* meist 10-12. SSW\r
	* nicht ??berlebensf??hriges kind geboren\r
	* Symptome:\r
		. Wehenartige Schmerzen (Unterbauch/Kreuz)\r
		. Vaginale Blutung\r
		. Abgang v Gewebe/toter Frucht`,t:"Gyn??kologie und P??diatrie"},{id:440,q:"Was ist die Extrauteringravidit??t",a:`* Eizelle nistet au??erhalb d Geb??rmutter\r
	* meist Eileiter`,t:"Gyn??kologie und P??diatrie"},{id:441,q:"Was sind die Symptome einer Eileiterschwangerschaft?",a:`* Einsietige Unterbauchschmerzen\r
	* vaginale Blutung\r
	* Schwangerschaft m??glich\r
	* -> Lagerung nach Patientenwunsch`,t:"Gyn??kologie und P??diatrie"},{id:442,q:"Was ist eine Tubenruptur? Symptome?",a:`* Komplikation Eileiterschwangerschaft\r
	* meist 6-9 SSW (6-9 W ohne Regel)\r
	* Eileiter rei??t ein\r
	* Symptome:\r
		. sehr starke einseitige Unterbauchschmerzen\r
		. akutes Abdomen\r
		. Hypervol??mer Schock\r
		. evtl. Vaginalblutung`,t:"Gyn??kologie und P??diatrie"},{id:443,q:"Ma??nahmen Tubenruptur?",a:"* siehe Hypovol??m Schock",t:"Gyn??kologie und P??diatrie"},{id:444,q:"Was sind die Ma??nahmen bei anderen Vaginalblutungen?",a:`* Lagerung nach Fritsch\r
	* Anamnese (Zyklus, Schwangerschaft, MuKi-Pass)\r
	* ggf. Ma??nahmen hypovol??m. schock\r
	* ggf. NA\r
	* AVISO`,t:"Gyn??kologie und P??diatrie"},{id:445,q:"Was ist die Aufgabe der Plazentas?",a:`* Verbindet Kreislauf v Mutter und Kind\r
	* Stellt Kind n??hstoffe zur verf??gung\r
	* Blut trotzdem getrennt - kapillaren von mutter neben kapillaren von kind\r
	* Entsteht wo eizelle eingenistet`,t:"Gyn??kologie und P??diatrie"},{id:446,q:"Was ist die Nabelschnur?",a:`* Verbindung Plazenta-Kind\r
	* 2 Arterien (zur Mutter hin, entorgt Schadstoffe), 1 Vene (zu Kind hin, bringt N??hrstoffe)`,t:"Gyn??kologie und P??diatrie"},{id:447,q:"Was ist die Fruchtblase?",a:`* Eiheute von Plazenta ausgehend, bilden Sack\r
	* Gef??llt mit Fruchtwasser\r
	* SCh??tzt vor St????en, Verletzungen, Infektionen`,t:"Gyn??kologie und P??diatrie"},{id:448,q:"Was ist eine vorzeitige Plazental??sung?",a:`* meist letztes trimester\r
	* Plazenta ganz oder Teilweise von Geb??rmutter getrennt\r
	* Durch St????e, Trauma, Zug, Gef????verenderungen (Drogen, Pr??eklampsie, Hypertonie, Nikotin)`,t:"Gyn??kologie und P??diatrie"},{id:449,q:"Was sind Symptome einer Plazental??sung?",a:`* Blutverlust\r
	* Schmerzen\r
	* Brettharter Uterus\r
	* Hypovol??m\r
	* m??glw leichte-starke vaginale blutung`,t:"Gyn??kologie und P??diatrie"},{id:450,q:"Wie nennt man es wenn plazenta vor ausgan?",a:"* Plazenta praevia",t:"Gyn??kologie und P??diatrie"},{id:451,q:"Was ist Placenta praevia? Symptome?",a:`* Plazenta vor Muttermund -> verlegt\r
	* Am ende d Schwangerschaft Plazenta verletzt -> blutungen\r
	* Meist in MuKi zu lesen\r
	* Symptome: \r
		* vaginale Blutung\r
		* keine Schmerzen\r
		* m??glw. hypovol??m`,t:"Gyn??kologie und P??diatrie"},{id:452,q:"Was ist SIH?",a:`* Schwangerschafts-Induzierte Hypertonie\r
	* RR > 140/90\r
	* vor Schwangerschaft RR normal\r
	* 6-8% aller Schwangeren\r
	* meist weg 3 mo vor geburt\r
	* Wenn Organ-involement: Pr??eklampsie`,t:"Gyn??kologie und P??diatrie"},{id:453,q:"Was sind Symptome f??r Pr??eklampsie?",a:`* SIH + Organmanifest\r
	* RR > 140/90 + Proteine im Urin\r
	* M??gliche Symptome:\r
		. ??deme\r
		. Kopfweh, Schwindel\r
		. Benommen\r
		. Ohrensausen\r
		. Sehst??rungen\r
		. ??belkeit, Erbrechen\r
		. selten Ikterus\r
	* 2% aller schwangeren (25% aller mit SIH)`,t:"Gyn??kologie und P??diatrie"},{id:454,q:"Was sind Risikofaktoren f??r Pr??eklampsie?",a:`* Erstgeburt\r
	* Schwangere > 35\r
	* fr??her schon mal pr??eklampsie\r
	* Mehrlinge\r
	* Hypertonie vor Schwanger\r
	* Adipositas\r
	* Diabetes`,t:"Gyn??kologie und P??diatrie"},{id:455,q:"Was ist HELLP?",a:`* 0,1-0,2% aller Schwangerschaften, 10-20% von Pr??eklampsie\r
	* Auch nach geburt m??glich\r
	* Hemolysis (Blut l??st sich auf -> an??mie)\r
	* Elevated Liver (schlechte Leber)\r
	* Low Platelet Count (wenig Blutpl??ttchen)`,t:"Gyn??kologie und P??diatrie"},{id:456,q:"Symptome HELLP?",a:`* m??glw. Pr??eklampsie\r
	* Starke SChmerzen rechter Oberbauch (Leber-Kapsel steht unter Spannugn)\r
	* ??belkeit, Erbrechen, Durchfall\r
	* Ikterus`,t:"Gyn??kologie und P??diatrie"},{id:457,q:"Komplikationen HELLP?",a:`* Leber immer kaputter\r
	* Leberkapselruptur -> akut Abdomen\r
	* Hirnblutungen	\r
	* ANV\r
	* Placental??sung\r
	* fetale Wachstumsst??rung\r
	* Lethalit??t:\r
		. Mutter 3-5%\r
		. Kind 10-40%`,t:"Gyn??kologie und P??diatrie"},{id:458,q:"Was ist Eklampsie?",a:`* Pr??eklampsie + Kr??mpfe\r
	* Grand mal vor/w??hrend/bis zu 7 Tage nach Geburt`,t:"Gyn??kologie und P??diatrie"},{id:459,q:"Was sidn vorzeichen f??r Eklampsie?",a:`* starker RR anstieg\r
	* Sehst??rungen (Flimmern, Doppelt sehen, verschwommen)\r
	* Verwirrtheit\r
	* fokale motorische ausf??lle`,t:"Gyn??kologie und P??diatrie"},{id:460,q:"Was ist ein Nabelschnurvorfall?",a:`* sehr selten (0,2-0,6%)\r
	* bei Vorzeitigem Blasensprung\r
	* Nabelschnur vor kinderkopf\r
	* wird abgedr??ckt -> kind unterversorgt`,t:"Gyn??kologie und P??diatrie"},{id:461,q:"Was sind Pr??ventivma??nahmen gegen Nabelschnurvorfall?",a:`* Nach Blasensprung nicht stehen/gehen\r
	* Becken hochgelagert\r
	* Bis Hebame OK gibt`,t:"Gyn??kologie und P??diatrie"},{id:462,q:"Was sind akute Ma??nahmen bei Nabelschnurvorfall?",a:`* NA\r
	* Becken hoch\r
	* Wehen verhecheln`,t:"Gyn??kologie und P??diatrie"},{id:463,q:"Was steht im MuKi-Pass?",a:`* SSW\r
	* Lageanomalien\r
	* Mehrlinge?`,t:"Gyn??kologie und P??diatrie"},{id:464,q:"Was ist sonst wichtig zur Doku nach Blasensprung?",a:`* wann Blasensprung?\r
	* Pat wie angetroffen?\r
	* Farbe Fruchtwasser`,t:"Gyn??kologie und P??diatrie"},{id:465,q:"Was ist das Vena Cava - Kompressionssyndrom? Symptome?",a:`* in R??ckenlage gewicht von kind dr??ckt Vena Cava inferior ab -> wenig r??ckfluss zum Herzen\r
	* Symptome (in R??ckenlage):\r
		* -RR\r
		* Synkope\r
		* Bl??sse\r
		* +HF\r
		* Atemnot\r
		* Kollaps\r
		* Wenn zu lange: kind Unterversorgt`,t:"Gyn??kologie und P??diatrie"},{id:466,q:"Ma??nahmen Vena-Cava-Kompressionssyndrom?",a:`* Seitenlage\r
	* Wenn sich zustand nicht bessert, andere Ursache!!`,t:"Gyn??kologie und P??diatrie"},{id:467,q:"Wie viel wiegt ein normales Neugeborenes?",a:"* 3,5-5kg",t:"Gyn??kologie und P??diatrie"},{id:468,q:"Wie k??nnte ein Kind liegen? Wann macht man einen Kaiserschnitt?",a:`* Sch??dellage (96%)\r
	* Beckenendlage (3%)\r
	* Querlage, Schr??glage (beide <1%): Kaiserschnitt`,t:"Gyn??kologie und P??diatrie"},{id:469,q:"Welche Phasen der Geburt gibt es?",a:`* ER??ffnungsphase\r
		. 6-12h (Erstgeb??rende)\r
		. Err??fnungswehen (Senkwehen): unregelm????ig, kurz -> kind weiter nach unten\r
		. Muttermund ??ffnet sich (10cm) -> Ende v. Er??ffnungsph.\r
		. Blasensprung (wenn davor: vorzeitig, auch in Austreibungsphase m??glich)\r
	* Austreibungsphase\r
		. von Muttermund??ffnung bis kind drau??en\r
		. Wehen im Abstand v 2-5min\r
		. Wehendauer 60-90s \r
		. Kind immer Tiefer, Presswehen\r
	* Nachgeburtsphase\r
		. Nachwehen (ca 15 min lang) -> Auswurf Placenta\r
		. bis zu 0.5l blutverlust normal`,t:"Gyn??kologie und P??diatrie"},{id:470,q:"Ma??nahmen in der Nachgeburtsphase?",a:`* Kind an Brust von Mutter -> Hormonaussch??ttung -> zieht Geb??rmutter zusammen\r
	* Lagerung Fritsch\r
	* Placenta an KH`,t:"Gyn??kologie und P??diatrie"},{id:471,q:"Was ist PPH?",a:`* postpartale Blutung -> Blutung nach Placenta-Abl??sung zu stark\r
	* Schocksymptome`,t:"Gyn??kologie und P??diatrie"},{id:472,q:"Risikofaktoren PPH?",a:`* St. p. atone Blutung (MuKi-pass)\r
	* Mehrlingsschwangersch.  (MuKi)\r
	* zu schnelle Geburt\r
	* Plazenta unvollst??ndig gel??st\r
	* Gerinnungsst??rung\r
	* Verletzung bei Austreibung (Dammbruch?)`,t:"Gyn??kologie und P??diatrie"},{id:473,q:"Ma??nahmen PPH?",a:`* ??ber nabel kreisf??rmig streichen -> Wehe ausl??sen\r
	* Coolpack unterbauch \r
	* Kind stillen lassen -> oxytocin\r
	* Hypovol??m`,t:"Gyn??kologie und P??diatrie"},{id:474,q:"Wie schaut es mim NA bei der Geburt aus?",a:"* IMMER",t:"Gyn??kologie und P??diatrie"},{id:475,q:"Was fragen bei Geburtshilfe?",a:`* MuKi-Pass\r
	* wie vielte SChwangerschaft?\r
	* Wehen?\r
	* Blasensprung?\r
	* Termin?\r
	* Wunschklinik?\r
	* Wie gehts jtzt?`,t:"Gyn??kologie und P??diatrie"},{id:476,q:"Was ist bei APGAR inkludiert?",a:`* Atmung\r
	* Puls\r
	* Grund-tonus (bewegung)\r
	* Aussehen\r
	* Reflexe`,t:"Gyn??kologie und P??diatrie"},{id:477,q:"Was tun bei Geburt?",a:`* NA\r
	* R??ckenlage, Beine Nach oben\r
	* OK leicht erh??ht\r
	* Langsame geburt\r
		. sanft kopf zur??ckhalten/abbremsen (flache Hand)\r
		. zum Verhecheln auffordern\r
	* Kind bei geburt zur Seite mitdrehen\r
	* Schulteraustritt mithelfen\r
	* Wenn K??rper vollst??ndig drau??en: Zeit notieren`,t:"Gyn??kologie und P??diatrie"},{id:478,q:"Was tun nach Geburt?",a:`* W??rmeverlust sch??tzen\r
	* Abtrocknen\r
		. warme t??cher\r
		. stimuliert kind -> sollte Atmen anfangen\r
		. danach zu Mutter an die Brust\r
	* Abnabeln\r
		. wenn Nabelschnur nicht mehr pulsiert (wenn baby stabil)\r
		. wenn nicht stabil: nach abtrocknen`,t:"Gyn??kologie und P??diatrie"},{id:479,q:"Wie wird abgenabelt?",a:`* 1 Klemmme 2 Handbreiten von Neugeborenen\r
	* 2. Klemme eine Handbreite nach 1. Klemme\r
	* Mit Steriler Schere durchtrennen\r
	* Neugebornen-Ende \r
		. mit WUndauflage bedeckt\r
		. mit mulbinde an babybauch fixiert\r
	* Mutter-Ende in Leistenbeuge, darauf Vorlage`,t:"Gyn??kologie und P??diatrie"},{id:480,q:"Wann macht man APGAR?",a:`* 1 / 5 / 10 min nach geburt\r
	* notieren!`,t:"Gyn??kologie und P??diatrie"},{id:481,q:"Wie unterscheidet sich die A-Anatomie von S??ulginen zu Erwachsenen?",a:`* <5 mo: nur Nasenatmung\r
	* kurzer Hals, gro??e Zunge/Epiglottis\r
	* Engste stelle nicht stimmritze sondern direkt darunter\r
	* Larynx h??her`,t:"Gyn??kologie und P??diatrie"},{id:482,q:"B-Anatomie S??uglinge unterschied zu Erwachsenen?",a:`* l/r Hauptbronchien fast gleich steil\r
	* Atemwege generell eng\r
	* rel. O2 verbrauch doppelt so hoch\r
	* Thorax biegsamer\r
	* Rippen horizontal -> nicht guter schutz\r
	* atemmuskulatur noch in entwicklung -> S??uglinge sind Bauchatmer`,t:"Gyn??kologie und P??diatrie"},{id:483,q:"AF Neigeborener, S??ugling, Kind?",a:`* 40-60, 30-40, 15-30\r
	* Weil Lungenvolumen viel kleiner`,t:"Gyn??kologie und P??diatrie"},{id:484,q:"Symptome Atemnot S??ugling/Kind?",a:`* AF noch h??her\r
	* Zyanose\r
	* Atemger??usche\r
	* Nasenfl??geln gehoben\r
	* Einziehungen am Hals (unterdruck ohne Atmung)\r
	* "Head-bobbing"\r
	* Schaukelatmung (Bauch/Thorax gegengleich)`,t:"Gyn??kologie und P??diatrie"},{id:485,q:"Wie wird Pseudokupp noch genannt?",a:"* Laryingitis",t:"Gyn??kologie und P??diatrie"},{id:486,q:"Was ist Pseudokrupp/Laryngitis?",a:`* meist viral\r
	* herbst, winter\r
	* Entz??ndung Larynx\r
	* verengung der Atemwege bei engster Stelle\r
	* wiederkehrende sch??be va in der Nacht\r
	* betroffen meist 6mo-3j`,t:"Gyn??kologie und P??diatrie"},{id:487,q:"Was sind Symptome von Pseudokrupp/Laryngitis?",a:`* Atemnot\r
	* Zyanose\r
	* inspiratorischer Stridor\r
	* Heiserkeit\r
	* trockener, bellender Husten\r
	* m??glw. Fieber`,t:"Gyn??kologie und P??diatrie"},{id:488,q:"Was ist Epiglottits?",a:`* bakteriell (HIB)\r
	* Schwellung v Epiglottis, umliegendes gewebe\r
	* pl??tzlich\r
	* 2-6j\r
	* impfung gegen HIB im Schema`,t:"Gyn??kologie und P??diatrie"},{id:489,q:"Symptome Epiglottitis?",a:`* Atemnot\r
	* Zyanose\r
	* Inspiratorischer Stridor\r
	* Schluck- und Sprachst??rungen\r
	* deutlicher Speichelfluss\r
	* wenig/kein Husten\r
	* pl??tzliches, hohes Fieber\r
	* schwer Krank`,t:"Gyn??kologie und P??diatrie"},{id:490,q:"DD Epilgottitis/Laryngitis?",a:`* 1-7/0,5-3 J\r
	* keine Tageszeit/Abends\r
	* keine Jahreszeit/herbst o winter\r
	* hohes fieber/kein o  niedriges Fieber\r
	* speichelfluss: stark/kein\r
	* schuckst??rung: stark/nein\r
	* husten: selten / bellend + trocken\r
	* sprache: hot potato voice / heiser\r
	* verlauf: schnell/langsam`,t:"Gyn??kologie und P??diatrie"},{id:491,q:"Ma??nahmen Epiglottitis/Laryngitis?",a:`* beruhingen -> Eltern bei kind\r
	* O2 15 L (dusche)\r
	* Feuchte u Kalte umgebungsluft\r
	* ??berwachung Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft`,t:"Gyn??kologie und P??diatrie"},{id:492,q:"HF biw kinder/sa??uzgling?",a:`* Newborn: 130\r
	* 1-12 mo : 120\r
	* 1 jahr: 110\r
	* 2-6: 100\r
	* 6 - 10: 95\r
	* RR niedriger`,t:"Gyn??kologie und P??diatrie"},{id:493,q:"Was ist Gastroentritis?",a:`* viral\r
	* Brechfruchfal\r
	* Symptome: \r
		* ??belkeit, heftige Erbrechen\r
		* starker Durhcfall\r
		* bauchweh\r
		* Kopfweh\r
		* MAtt\r
		* evtl. Fieber\r
	* Komplikation: Dehydration`,t:"Gyn??kologie und P??diatrie"},{id:494,q:"Wie erkennt man Dehydration bei Baby?",a:`* trockener Mudn/Zunge\r
	* Kneiftest: Zwichek, wenn haut nicht gl??ttet: positiv\r
	* Wenig urin (trockene windel >0,5d)\r
	* Gewichtsabnahme\r
	* Teilnahmslosigkeit\r
	* eingesunkene Augen, keine Tr??nen`,t:"Gyn??kologie und P??diatrie"},{id:495,q:"Was ist Fieberkrampf?",a:`* 3-5% aller Kinder \r
	* 6mo-5j (meist 1-3j)\r
	* rascher Anstieg d K??rpertemp (oft viraler infekt)\r
	* KRampf meist <1 min max 5 min`,t:"Gyn??kologie und P??diatrie"},{id:496,q:"Symptome Fieberkrampf?",a:`* B-verlust\r
	* starre augen (evtl schr??g oben)\r
	* Zyanose od Bl??sse\r
	* Kurzer Atemstillstand\r
	* Muskelverspannung\r
	* Zuckung\r
	* Schlaffheit`,t:"Gyn??kologie und P??diatrie"},{id:497,q:"Ma??nahmen Fieberkramf?",a:`* Lagerung nach zustand\r
	* O2 dusche, m??glw assistierte Beatmung (w??hrend Astillstand)\r
	* ??berwachen Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft\r
	* Anfall Dauer und ablauf notieren`,t:"Gyn??kologie und P??diatrie"},{id:498,q:"Was ist der Unterschied bei W??rmehaushalt von kindern/s??uglingen zu erwachsenen?",a:`* mehr oberfl??che/volumen -> unterk??hlungsgefahr\r
	* weniger muskel(entwicklung) -> zittern ineffektiver`,t:"Gyn??kologie und P??diatrie"},{id:499,q:"Was ist Mumps? Symptome?",a:`* Schwellung einer Ohrspeicheldr??se\r
	* Schmerzen\r
	* Fieber\r
	* in Impfschema`,t:"Gyn??kologie und P??diatrie"},{id:500,q:"Was ist Keuchhusten? Symptome?",a:`* hochansteckende Kinderkrankheit\r
	* Auch Pertussis genannt\r
	* sehr lange dauer (100-Tage-husten)\r
	* Symptome: \r
		* 40% kein Husten, 40% akute Bronchitis, 20% typischer Keuchhusten\r
		* Hustenattacken mit herausgesteckter Zunge\r
		* Ziehendes einatemger??usch\r
		* glasiger schleim + erbrechen`,t:"Gyn??kologie und P??diatrie"},{id:501,q:"Wie unterscheiden sich Kinderkrankheitsausschl??ge?",a:`* Masern: Geh??uft, ??berall\r
	* R??teln: einelne Punkte, ??berall\r
	* Scharlach: geh??uft, va achsel, genitalbereich, gesicht\r
	* Windpocken: einzeln, va achseln, genitalbereich`,t:"Gyn??kologie und P??diatrie"},{id:502,q:"Vorgehen Kinderkrankheiten?",a:`* hoch ansteckend\r
	* Hygene: handschuhe, kittel, maske\r
	* Kinderambulanz (eigener Eingang, sonst zuerst ohne patient nachfragen)`,t:"Gyn??kologie und P??diatrie"},{id:503,q:"Was ist SIDS?",a:`* Sudden Infant Death Syndrome\r
	* Ungekl??rter Kindstod\r
	* 2.-4. mo`,t:"Gyn??kologie und P??diatrie"},{id:504,q:"Was sind die Aufgaben des Sanit??tsdiensts?",a:"* Erste Hilfe/Sanit??tshilfe (geht wsl noch ein bissi ??ber erste hilfe hinaus), Rettungstechnik (Verladen, Transportieren, etc.) + Diagnostik und Therapeutik (erstdiagnose + pr??klinische Ma??nahmen)",t:"Recht"},{id:505,q:"Was ist der T??tigkeitsbereich d. Rettungssanit??ter?",a:"Pr??klinische, haupts??chlich nicht invasive Ma??nahmen und Tests im Gesundheitlichen Interesse des Patienten, e.g. O2, BZ, .. ...",t:"Recht"},{id:506,q:"Was darf der Rettungssani?",a:`* Lebensrettende Sofortma??nahmen\r
	* O2\r
	* Infusion Aufrechterhalten/Beenden\r
	* BZ Messen\r
	* Halbautom. Defi`,t:"Recht"},{id:507,q:"Was sind die Pflichten d. RS?",a:`* Allgemeine Pflichten\r
	* Dokupflicht\r
	* Verschwiegenheitspflicht\r
	* Auskunftspflicht\r
	* Fortbildungspflicht\r
	* Rezertifizierungspflicht`,t:"Recht"},{id:508,q:"Welche Algemeinen Pfilchten gibt es?",a:`. Aus??bung "ohne Ansehen der Person" -> Egal wer es ist, er muss gleich behandelt werden!\r
		. Handeln nach Wissenschaftlicher Erkenntnis und Erfahrungen (lege artis)\r
		. NA Anfordern`,t:"Recht"},{id:509,q:"Was ist die Dokupflicht?",a:`. Gesetze Ma??nahmen\r
		. Immer Objektiv und Genau\r
		. Dient der Qualit??tssicherung, Nachvollziebarkeit und rechtl Schutz des RS\r
		. Nur Patient/gesetzl. Vertreter hat einsichtsrecht! Sonst immer explizite Erlaubnis des Patienten notwendig\r
		. 10 Jahre aufbewahrt durch JUH`,t:"Recht"},{id:510,q:"Was ist die Verschwiegenheitspflicht?",a:`. ALLE Geheimnisse die durch Aus??bung der T??tigkeit in erfahrung gebracht wurden\r
		. Gegen??ber JEDEM`,t:"Recht"},{id:511,q:"Welche Au??nahmen der Verschwiegenheitspflicht gibt es?",a:`* Meldepflichtige Krankheiten\r
	* Sozialversicherung / Kostentr??ger\r
	* Explizite Endbindung v. d. Geheimhaltung\r
	* H??herwertige Interessen (ich habe eine Bombe plaziert!)\r
	* Anzeigepflicht`,t:"Recht"},{id:512,q:"Was ist die Auskunftspflicht?",a:`* gilt gg?? \r
		. Patienten\r
		. Gesetzlichen Vertretern\r
		. als auskunftsberechtigt benannte Personen (meiner Schwester k??nnt ihr alles ??ber meine Probleme sagen!)\r
		. Weiterversorgendes Personal`,t:"Recht"},{id:513,q:"Was ist die Fortblidungspflicht?",a:"* Jeder RS muss innerhalb v 2 Jahren mind 16h t??tigkeitsrelevant fortgebildet werden",t:"Recht"},{id:514,q:"Wann muss man sich Rezertifizieren (Rezertifizierungspflicht)",a:"* 2 Jahre",t:"Recht"},{id:515,q:"Was sind die Voraussetzungen f??r eine Einwilligung zu einer Behandlung?",a:`* !Informed! Consent -> Aufkl??rung\r
	* Einwilligungsf??higkeit (!= Gesch??ftsf??higkeit) -> Einsichts + Urteilsf??higkeit\r
		. Patient muss Grund, m??gl. Folgen, m??gl. Alternativen kennen, einsehen und daraus dann eine Meinung dazu bilden k??nnen\r
		. ZOPS orientiert`,t:"Recht"},{id:516,q:"Wann kann auf ein Einholen einer Einwilligung verzichtet werden, unabh??ngig von Patientenalter, Einsichts-/Urteilsf??higkeit, ...?",a:"* Wenn Gefahr im Verzug ist, also das Einholen einer Einwilligung gef??hrlich f??r den Patienten w??re",t:"Recht"},{id:517,q:"Wann kann ein Minderj??hriger alleine keine Einwilligung zu einer Behandlung geben?",a:"* Wenn keine Gafahr im Vorzug ist und keine Einwilligungsf??higkeit gegeben ist -> Gesetzliche Vertreter (Eltern) m??ssen einwilligen",t:"Recht"},{id:518,q:"Wie ermittelt man die Einwilligungsf??higkeit bei Minderj??hrigen?",a:"* Theoretisch nach Einsitsh- + Urteilsf??higkeit; aber wenn nicht eindeutig bestimmbar: <14j. Einwilligungsf??h. nicht gegeben, >14j schon (einzelfall jedoch m??glw. anders!)",t:"Recht"},{id:519,q:"Was ist wenn ein Minderj??hriger, der nach den bereits genannten Kriterien als Einwilligungsf??hig eingestuft wurde, eine andere Meinung hat als seine Eltern/Gesetzliche Vertreter?",a:"* Die Meinung der Eltern/Vertreter ist zu ignorieren",t:"Recht"},{id:520,q:"Wann m??ssen RS auch bei Vollj??hrigen die Einverst??ndniss 3ter einholen?",a:`* Es ist keine Gefahr im Vollzug\r
	* Er ist offensichtlich nicht Einwilligungsf??hig (Psych. Krank, Dement, Sucht, ...)`,t:"Recht"},{id:521,q:"Wer kann in so einem Fall eine Einwilligung f??r eine Behandlung geben?",a:`* Patientenverf??gung\r
	* Gerichtliche Erwachsenenvertretung (z.B. Anwalt dem das fr??her schon ??bertragen wurde)\r
	* Person mit Vorsorgevollmacht\r
	* Gesetzliche Erwachsenenvertretung (z.B. Ehepartner, nahe Angeh??rige)`,t:"Recht"},{id:522,q:"Was ist eine Gerichtliche Erwachsenenvertretung",a:"* Von Gericht bestimmte Person die wegen Geistiger Erkrankung, ... die Entscheidungen d Patienten in gewissen Bereichen ??bernimmt",t:"Recht"},{id:523,q:"Wann m??ssen RS Einwilligung d. Gerichtlichen Erwachsenenvertretenden einholen? Wann nicht?",a:`* Vorraussetzungen f??r die Bindung d. Sanis sind:\r
		. im Gerichtlichen Beschluss sind auch medizinische Behandlungen als Kompetenz inkludiert\r
		. Die Vertretung ist aktuell (muss alle 3 Jahre erneuert werden)\r
	* Nicht g??ltig wen\r
		. Gefahr im Verzug ist\r
		. Der Patient im Moment Einwilligungsf??hig ist ("Luzides Interval")`,t:"Recht"},{id:524,q:"Was ist eine Patientenverf??gung?",a:"* Ein Schriftliches Dokument wo der Patient seine Einwilligung zu gewissen med. Behandlungen schon im Vorhinein festlegt, falls er in der Zukunft nicht mehr Einwilligunsf??hig seien sollte",t:"Recht"},{id:525,q:"Welche Vorraussetzung f??r die G??ltigkeit gelten hier? Wann ist sie nicht anwendbar?",a:`* Vorraussetzungen: \r
		. Entspricht den gesetlichen Vorderungen Patienten Verf??gungs Gesetz\r
	* Ung??ltig wenn:\r
		. Gefahr im Verzug ist\r
		. Es einen rechtsg??ltigen Widerruf gibt\r
		. Momentan Einwilligungsf??higkeit besteht ("Luzides Interval")`,t:"Recht"},{id:526,q:"Was ist die Gesetzliche Erwachsenenvertretung?",a:"* Eine nicht Einwilligungsf??hige Person, f??r die keine Gerichtliche Erwachsenenvertretung bestimmt wurde und keinen anderen Gesetzlichen Vertreter hat, kann durch n??chste Angeh??rige (eltern, vollj??hr. Kinder, Ehepartner, ..) vertreten werden",t:"Recht"},{id:527,q:"G??lting nur wenn? Wann nicht?",a:`* Nur g??ltig wenn die gesetzliche Erwachsenenvertretung beim ??ZVV registriert wurde und der Aufgabenbereich die Zustimmung zu med. Behandlungen inkludiert\r
	* Nicht g??ltig wenn\r
		. Gefahr im Verzug ist\r
		. Die Vertretung widerrufen wurde (selbst nach Verlust der Einwilligungsf??higkeit hahaha)\r
		. Mehrere Vertretungsbefugte Angeh??rige sich uneinig sind\r
		. Luzides Interval`,t:"Recht"},{id:528,q:"Was ist die Vorsorgevollmacht?",a:"* Eine Vollmacht welche erst dann wirksam wird wenn der Patient die Einsichts-, Urteils- oder ??u??erungsf??higkeit verliert",t:"Recht"},{id:529,q:"G??ltig nur wenn? Wann nicht?",a:`* G??ltig nur wenn\r
		. Sie Registriert wurde im Zentralen Vertretungsverzeichniss\r
		. In der Urkunde sind med. Behandlungen inkludiert\r
	* Nicht G??ltig wenn\r
		. Gefahr im Verzug ist\r
		. Es einen Widerruf gibt (auch wenn nicht Einwilligungsf??hig)\r
		. Luzides Interval`,t:"Recht"},{id:530,q:"Was ist eine Belassung?",a:`. Patient wird aus Willen d. Sanis oder d. Patienten nicht ins KH mitgenommen\r
	. RS tr??gt hier mitverantwortung, falls Patient etwas passiert`,t:"Recht"},{id:531,q:"Was ist ein Revers?",a:`. Eine Schriftliche Urkunde die Dokumentiert dass es der eindeutige Wille d. Patienten war belassen zu werden\r
	. Nur auf Grundlage einer umfassenden Aufkl??rung\r
	. Verantwortung NUR bei Patienten\r
	. Wichtig das Revers immer rechtsg??ltig/korrekt ausgef??llt wird und GUT DOKUMENTIERT WIRD`,t:"Recht"},{id:532,q:"Wann kann kein Revers ausgestellt werden (Reversf??higkeit)?",a:". Wenn der Patient <18j alt ist oder nicht Einwilligungsf??hig ist",t:"Recht"},{id:533,q:"Wof??r ist eine Gesch??ftsf??higkeit n??tig und was sind die Kriterien zur Beurteilung?",a:`* N??tig f??r den Abschluss eines Kranken- oder Rettungstransportvertrags\r
	* <7 nie Gesch??ftsf??hig\r
	* 7-18 beschr??nkt\r
	* >18 gruns??tzlich F??hig`,t:"Recht"},{id:534,q:"Wie ist Vorzugehen bei Gesch??ftsunf??higen Patienten?",a:`* Wenn GEfahr im Verzug ist keine Einwilligung n??tig\r
	* Gesetzl Vertreter`,t:"Recht"},{id:535,q:"Einwilligungsf??higkeit?",a:`* Zur Einwilligung bei med. Behandlung\r
	* <14 grundvermutung nicht ef??hig\r
	* 14-18 grundvermutung ef??hig\r
	* >18 grunds??tzlich ef??hig`,t:"Recht"},{id:536,q:"Wenn Eunf??hig?",a:`* Gefahr im Verzug\r
	* Gesetzlicher Vertreter, Patientenverf??gung, ..`,t:"Recht"},{id:537,q:"Reversf??higkeit?",a:"* <18 nicht; >18 grunds??tzlich schon",t:"Recht"},{id:538,q:"Wenn nicht?",a:`* Gesetzlicher Vertreter\r
	* Wenn ohne Revers belassen: HAFTUNG`,t:"Recht"},{id:539,q:"Was rechtfertigt eine Unterbringung nach dem Unterbringungsgesetz?",a:`* psych. Krankheit\r
	* Eigen- oder Fremdgef??hrdung\r
	* andere Behandlung/Betreuung nicht m??glich`,t:"Recht"},{id:540,q:"Wann ist eine unfreiwillige Unterbringun m??glich?",a:`* Untersuchung d. oberen Vorraussetzunhen dorch einen Amtsarzt od. Polizeiarzt\r
	* Oder wenn Gefahr im Verzug (Amtsarzt zu langsam): Polizei f??hrt Vorl??ufige Unterbringung durch`,t:"Recht"},{id:541,q:"Was ist das Effektenverzeichniss?",a:`* Eine liste alles Pers??nlichen Besitzes das beim Patienten gefunden wurde\r
	* Rechtliches Dokument\r
	* Sollten Sachen fehlen/kaput gehen haftet der Austeller oder die Personen an die die Gegenst??nde weitergegeben wurde\r
	* Deshalb: immer auf Vollst??ndigkeit (va Wertgegenstende) und Unversehrtheit pr??fen`,t:"Recht"},{id:542,q:"Wie schauen die Vertragskonstruktionen beim Transport aus?",a:`- Der Patient hat einen Kranken- oder Rettungstranportvertrag mit der Einrichtung\r
	- Die Einrichtung hat einen Dienstvertrag/(Verpflichtung zum Zivildienst) mit den RS\r
	- Die RS Erf??llen die Pflicht des Transportvertrages der Einrichtung mit dem Patienten, f??hren also die T??tigkeit aus haben aber keinen direkten Vertrag!`,t:"Recht"},{id:543,q:"Welche Gesetze sind Relevant f??r unseren Rettungsdienst?",a:`Bundesgesetze: \r
		* Sanit??tergesetz (SanG): Pflichten, T??tigkeitsbereich, Kompetenzen der Sanis\r
			. Sanit??ter-Ausbildungsverordnung: Wie werden RS ausgebildet, ...\r
			. Sanit??ter-Auswei??- und Fortbildungsverordnung: Wie musst du dich Fortbilden...\r
		* Angestelltengesetz (AngG): F??r Hauptberufliche, regelt das Dienstverh??ltnis (im Arbeitsvertrag dann auch: wer darf dir Weisungen erteilen)\r
		* Zivildienstgesetz (ZDG): Pflichten und Rechte der Zivildiener im Allgemeinen -> Weisung (wer darf dir was ansagen) \r
\r
	Landesgesetze:\r
		* Wiener Rettungs- und Krankentransportsgesetz (WRKG): Regelt die Abwicklung von Rettungs- und Krankentransporten`,t:"Recht"},{id:544,q:"Welche Regeln gelten im Katastrophenfall?",a:`* Normale RS Gesetze (SanG)\r
	* Katastrophenhilfsgesetze\r
	* Statuten/Regelungen der JUH`,t:"Katastrophen"},{id:545,q:"Welche Kategorien von Katastrophen unterscheidet man?",a:"* Naturkatastrophen, technische Katastrophen, humanogene Katastrophen",t:"Katastrophen"},{id:546,q:"Was sind die Wichtigsten Mitglieder des K Kreis?",a:`* Rettungsorganisationen\r
	* Polizei\r
	* Feuerwehr\r
	* Heer\r
	* Medienpartner (z.B. ORF)\r
	* Wiener Betriebe (Linien, Energie, Netze)\r
	* Magistratsabteilungen`,t:"Katastrophen"},{id:547,q:"Wie funktioniert die Alarmierung der Bev??lkerung im Katastrophenfall?",a:`* Bundeswarnzentrale\r
	* Landeswarnzentrale\r
	* kat. leitzentrale (im Ratshaus)\r
	* K-Kreis, wichtige Betriebe, Krankenhj??uzser, Sirene -> Bev??lkerung`,t:"Katastrophen"},{id:548,q:"??ber welche Kan??le wird die Bev??lkerung gewarnt?",a:`* Radio, TV\r
	* Lautsprecher (auf Autos, in ??ffentl. Geb??uden)\r
	* Sirene\r
	* Presse`,t:"Katastrophen"},{id:549,q:"Was sind wichtige Sirenenzeichen?",a:`* 3 min an: Warnung -> TV, Radio an\r
	* 1 min auf/ab: Alarm\r
	* 1 min an: Entwarnung`,t:"Katastrophen"},{id:550,q:"Was ist die GAMS regel?",a:`* Gefahr erkennen\r
	* Absichern\r
	* Menschenrettung (unter Selbstschutz)\r
	* Sicherheitskr??fte informieren`,t:"Katastrophen"},{id:551,q:"Was ist bei Gefahrengutunf??llen zu beachten?",a:`* 60m Sicherheitsabstand\r
	* 100-200m absperren\r
	* Bergung nur durch Fachkr??fte`,t:"Katastrophen"},{id:552,q:"Was sind die Aufgaben des ersteintreffenden Fahrzeugs?",a:`* Melden wann da\r
	* Melden was los\r
	* Lage beurteilen\r
	* FW/LPD informieren\r
	* Updates an Leitstelle\r
	* Patientenablage u Wagenhalteplatz festlegen\r
	* RS: vorl??ufiger Leiter Rettung\r
	* Fahrer: vorl??ufiger Leiter Wagenhalteplatz`,t:"Katastrophen"},{id:553,q:"Was ist wichtig zu melden?",a:`* Ausma?? des Schadens \r
	* Welche Verletzungen, wie schwer\r
	* wie viel/welches Material noch ben??tigt wird + extra Fahrzeuge\r
	* Feuerwehr? \r
	* Noch Gefahr?\r
	* Wie Zufahren, Welche Infra exisitiert\r
	* Heli landung m??glich?\r
	* Nicht alles auf einmal sondern laufend berichten w??hrend der beurteilung/erkundung`,t:"Katastrophen"},{id:554,q:"Was wird in der SanHist gemacht?",a:`* Triage\r
	* Erste Hilfe (va Lebensrettende Sofortma??nahmen)\r
	* Organisation von Transport + Patienten Transportf??hig machen`,t:"Katastrophen"},{id:555,q:"Was sind die Triagestufen?",a:`* I: Nicht transportf??hig, sofort behandelm\r
	* II: Transportf??hig\r
		. a: erste Prio (muss sofort abgekl??rt werden)\r
		. b: 2. prio (baldm??glichst abzukl??ren)\r
	* III: Sp??tere Behandlung (leicht verletzte)\r
	* IV: Abwartende Behandlung (zu schwer verletzte)`,t:"Katastrophen"},{id:556,q:"Was m??ssen wir beim PLS ausf??llen?",a:`* B-sein, Atmung, Kreislauf, Name, Triage, gesetzte Ma??nahmen, Lagerung\r
	* Zielspital\r
		. Unterer abriss an Leiter Transport\r
		. Oberer an Zielspital\r
	* Behandlungsprotokol (Meds)`,t:"Katastrophen"},{id:557,q:"Wie schaut der Weg eines Patienten aus?",a:`* In Schadenszone: Bei bergetriage zur bergung ausgew??hlt\r
	* PLS schein erhalten\r
	* Bei Triagestelle: Identifikation, Grobdiagnose, Einstufung, evtl Behandlungsauftr??ge\r
	* Behandlungsstelle (je nach Triagestufe): Behandlungsauftr??ge durchf??hren, Pat. Lagern, Effektenverzeichniss, ...\r
	* Verladestelle: Zielspital eintragen, unterer Abriss abrei??en\r
	* Zielspital: oberer abriss`,t:"Katastrophen"},{id:558,q:"Was sind Beispiele wann die ABW verst??ndigt werden kann?",a:`* Notfall/krisenereignisse: Kindertod, .. \r
	* Gro??schadenereignisse\r
	* Katastrophen\r
	* Geplante Ereignisse (Gro??veranstaltungen)`,t:"Katastrophen"},{id:559,q:"Was sind endogene/exogene Infektion?",a:"* Erreger aus Umgebung/ eigenem K??rper (an anderer Stelle)",t:"Hygene"},{id:560,q:"Was sind besiedlung/infektion?",a:"* Mikroorg vermehren sich ohne erkrankung auszul??sen/dringen in k??rper ein und verursachen Krankheitssymptome",t:"Hygene"},{id:561,q:"Wie k??nnen sich Erreger bewegen?",a:`* lymphogen\r
	* in Hohlr??umen/Gewebe\r
	* H??matogen (im Blut)\r
		. Sepsis\r
		. Septischer Schock`,t:"Hygene"},{id:562,q:"Was ist eine systematische Infektion?",a:"* Ganzer K??rper betroffen (h??matogen)",t:"Hygene"},{id:563,q:"Was ist Sepsis?",a:`* Fehler des Immunsystem -> greift K??rpereigene Zellen an\r
	* Sepsis immer wenn infekt + Organversagen`,t:"Hygene"},{id:564,q:"Wie l??sst sich Sepsis pre??klinisch diagnostizieren?",a:`* sehr schwer\r
	* Verdacht von Infekt\r
	* qSOFA (quick sequential organ failiure assessment score) [2/3 out of 3 -> Kritisch]\r
		. GCS < 15\r
		. RR < 100\r
		. AF > 22\r
	* Petechien (fleckenh??matome als Symptom von Organversagen)`,t:"Hygene"},{id:565,q:"Welche Gefahren k??nnen Schutz von Handschuhen aufheben?",a:`* Penetration\r
	* Permeabiit??t (nie 100% dicht)\r
	* Kontamination beim Ausziehen`,t:"Hygene"},{id:566,q:"Welche Arten von Infektionstransporte gibt es im RD?",a:`* IInfektion ??ber Blut (Hep B, C, HIV)\r
		. nicht unbedingt einzeltransport\r
		. handschuhe\r
	* Kontakt/Schmierinfekt (Hep A, MRE, Clostridien, Brechdurchfall)\r
		. Einzeltransport\r
		. handschuhe\r
		. Kittel/Sch??rze\r
	* Tr??pfcheninfekt (Meningitis, Tbc, Grippe, Covid)\r
		. Einzeltransport\r
		. handschuhe\r
		. sch??rze/kittel\r
		. ffp3 maske`,t:"Hygene"},{id:567,q:"Was ist Meningitis?",a:`* Entz??ndung Hirn- u R??ckenmarkshaut\r
	* Meist durch Meningokokken (bakterielle Mening.)\r
		. ansteckend\r
		. va 1-4j 15-19j\r
		. Tr??pcheninfekt + enger Kontakt`,t:"Hygene"},{id:568,q:"Was sind Symptome von bakterieller Meningitis?",a:`* Fieber, Sch??ttelfrost\r
	* Kopfweh\r
	* Meningismus\r
	* Licht- und L??rmempfindlich\r
	* B-tr??bung\r
	* Kr??mpfe\r
	* Petechien`,t:"Hygene"},{id:569,q:"Ma??nahmen bakt Meningitis?",a:`* Handschuhe, Kittel, Maske\r
	* Lagerung nach Zustand\r
		* OK 30??\r
		* wenn eingetr??bt SSL\r
	* O2 bei bedarf\r
	* Neurochekc + Meningismustest\r
	* ??berwachen Vitalwerte\r
	* NA je nach Zustand \r
	* Meldung JUH\r
	* KH voranmelden\r
	* wenn tats??chlich bakt. meningitis: RS nimmt 750mg Ciproxin`,t:"Hygene"},{id:570,q:"Was sind Ausl??ser von Brechdurchfall?",a:`* viral (Rota/Norovirus) -> Tr??pfcheninfekt\r
	* bakteriekk (Salmonellen) -> Leb??nsmittel\r
	* Symptome:\r
		. ??belkeit\r
		. Erbrechen\r
		. evtl. Durchfall\r
		. evtl. Fieber\r
	* Achtung: Dehydration!!`,t:"Hygene"},{id:571,q:"Was ist TB?",a:`* 1/3 aller menschen infiziert, 5-10% krank\r
	* Therapie: Antibiotika\r
	* Zunahme von Multiresistentem TB\r
	* offene Lungen-TB:\r
		. Tr??pfcheninfekt.\r
		. infektionswahrscheinl. trotzdem gering`,t:"Hygene"},{id:572,q:"Symptome bei TB?",a:`* Fieber, Nachtschwei??\r
	* Husten\r
	* Brustweh\r
	* Dyspnoe\r
	* Gewichtsabnahme\r
	* Wenn schlechtes Immmunsystem: Organ-TB`,t:"Hygene"},{id:573,q:"Was ist MRSA?",a:`* multiresistenter staphylococcus aureus\r
	* auf Haut, schleimhait, nasenvorhof besiedlung bei 30% d Leute, davon 1-3% MRSA\r
	* Infektionen va in Wunden -> Pneumonie, Sepsis`,t:"Hygene"},{id:574,q:"Was ist MRGN?",a:`* multiresistenter gramnegativer erreger\r
	* normalerweise besiedlung in Darm\r
	* Infektion:\r
		. HWI\r
		. Wunde\r
		. Pneumonie\r
		. Sepsis`,t:"Hygene"},{id:575,q:"Schutzma??nahmen multiresistenter erreger?",a:`* Handschuhe, Kittel\r
	* Wunden Verbinden\r
	* Masken\r
	* Einzeltransport\r
	* H??ndedesinfekt (auch Patient)\r
	* PSA ablegen`,t:"Hygene"},{id:576,q:"Was ist Clostridium difficile?",a:`* Darmerkrankung nach Antibiotika-einnahme\r
	* Symptome: \r
		. milder Durchfall\r
		. m??glw Darmentz??ndung\r
		. bishin zu Perforation\r
		. Schmierinfektion\r
	* Nur schwere und Todesf??lle meldepflichtig`,t:"Hygene"},{id:577,q:"Was ist Hepatitis?",a:`* Virus A,B,C\r
	* Leberentz??ndung\r
	* Symptome:\r
		* keine\r
		* ??berleit, erbrechen, krank f??hlen, temp erh??hung\r
		* Lebervergr????erung, Ikterus, dunkler harn`,t:"Hygene"},{id:578,q:"Was ist Hep A/B/C?",a:`* A: \r
		. weltweit, aber Europa selten\r
		. Schmierinfekt\r
		. nur wenn akut ansteckend\r
		. Impfbar\r
	* B:\r
		. ??berall\r
		. infekt ??ber blut\r
		. 5-10% der f??lle leberzirrhose, karzinom\r
	* C:\r
		. ??berall\r
		. k??rperfl??ssigkeiten aber serlten\r
		. mehr als 70% der f??lle leberzirrhose, karzinom`,t:"Hygene"},{id:579,q:"Was ist HIV/AIDS?",a:`* Symptome:\r
		. akute phase: grippesymptome\r
		. latenzphase (~10j): keine\r
		. Krankheitsphase: wie Akut nur zus??tzlich kein Immunsystem\r
	* Infekt ??ber Blut, Sperma, Vaginalfl??ssigkeit\r
	* Lebenslang infekti??s\r
	* keine Impfung`,t:"Hygene"},{id:580,q:"Ma??nahmen Nadelstichverletzung?",a:`* Wunde auspressen (4-5min)\r
	* Desinfekt 30s\r
	* Wenn blut im mund: octenisept 30s sp??len, 1m wirken\r
	* Journal melden\r
	* Nach dienst ins KH\r
	* Patientendaten mitnehmen`,t:"Hygene"}];class ye{constructor(){K(this,"totalVal",0);K(this,"vals",[])}getRand(){let e=0,t=Math.random()*this.totalVal;for(const r of this.vals)if(e+=r.Weight,e>=t)return r.Value}getItem(e){return this.vals[this.vals.findIndex(t=>t.Value===e)]}push(e,t){this.vals.push(new Ae(r=>{this.totalVal+=r,console.log("Changed total by "+r)},e,t))}clear(){this.totalVal=0,this.vals=[]}remove(e){const t=this.vals.findIndex(r=>r.Value===e);this.totalVal-=this.vals[t].Weight,this.vals.splice(t,1)}get length(){return this.vals.length}}class Ae{constructor(e,t,r=1){K(this,"_weight",0);K(this,"WeightChangedCallback");K(this,"Value");this.WeightChangedCallback=e,this.Value=t,this.Weight=r}get Weight(){return this._weight}set Weight(e){if(e<=0)throw Error("Weight of an element can never be smaller or equal to 0");this.WeightChangedCallback(e-this.Weight),this._weight=e}}function qe(n){let e,t;return e=new We({props:{Question:n[0],Callback:n[3]}}),{c(){me(e.$$.fragment)},m(r,i){ne(e,r,i),t=!0},p(r,i){const a={};i&1&&(a.Question=r[0]),e.$set(a)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){te(e,r)}}}function Be(n){let e;return{c(){e=b("p"),e.textContent="No questions left, you answered all of them"},m(t,r){P(t,e,r)},p:w,i:w,o:w,d(t){t&&B(e)}}}function Ee(n){let e,t,r,i,a,l,c,h,s,f,d;const y=[Be,qe],o=[];function z(g,v){return g[1]==0?0:1}return t=z(n),r=o[t]=y[t](n),{c(){e=b("div"),r.c(),i=O(),a=b("button"),l=S("Reset ("),c=S(n[1]),h=S(" remain)"),W(e,"class","svelte-ymc6rc")},m(g,v){P(g,e,v),o[t].m(e,null),u(e,i),u(e,a),u(a,l),u(a,c),u(a,h),s=!0,f||(d=M(a,"click",n[2]),f=!0)},p(g,[v]){let A=t;t=z(g),t===A?o[t].p(g,v):(oe(),_(o[A],1,1,()=>{o[A]=null}),ge(),r=o[t],r?r.p(g,v):(r=o[t]=y[t](g),r.c()),F(r,1),r.m(e,i)),(!s||v&2)&&V(c,g[1])},i(g){s||(F(r),s=!0)},o(g){_(r),s=!1},d(g){g&&B(e),o[t].d(),f=!1,d()}}}function Pe(n,e,t){const r=new ye;let i,a;function l(){t(0,i=r.getRand()),t(1,a=r.length)}function c(s=void 0){r.clear();for(const f of Se)r.push(f,10);l()}c();function h(s){i!=null&&s&&r.remove(i),r.length>0&&l()}return[i,a,c,h]}class Ke extends ie{constructor(e){super(),re(this,e,Pe,Ee,Y,{})}}new Ke({target:document.getElementById("app")});
