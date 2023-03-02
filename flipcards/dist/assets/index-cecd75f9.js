var ae=Object.defineProperty;var se=(n,e,t)=>e in n?ae(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var K=(n,e,t)=>(se(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function w(){}function Q(n){return n()}function j(){return Object.create(null)}function L(n){n.forEach(Q)}function X(n){return typeof n=="function"}function Y(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function le(n){return Object.keys(n).length===0}function u(n,e){n.appendChild(e)}function P(n,e,t){n.insertBefore(e,t||null)}function B(n){n.parentNode&&n.parentNode.removeChild(n)}function b(n){return document.createElement(n)}function S(n){return document.createTextNode(n)}function O(){return S(" ")}function M(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function W(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function ue(n){return Array.from(n.childNodes)}function V(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}let x;function R(n){x=n}const G=[],$=[],C=[],J=[],he=Promise.resolve();let T=!1;function de(){T||(T=!0,he.then(ee))}function Z(n){C.push(n)}const I=new Set;let H=0;function ee(){if(H!==0)return;const n=x;do{try{for(;H<G.length;){const e=G[H];H++,R(e),ce(e.$$)}}catch(e){throw G.length=0,H=0,e}for(R(null),G.length=0,H=0;$.length;)$.pop()();for(let e=0;e<C.length;e+=1){const t=C[e];I.has(t)||(I.add(t),t())}C.length=0}while(G.length);for(;J.length;)J.pop()();T=!1,I.clear(),R(n)}function ce(n){if(n.fragment!==null){n.update(),L(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Z)}}const N=new Set;let E;function oe(){E={r:0,c:[],p:E}}function ge(){E.r||L(E.c),E=E.p}function F(n,e){n&&n.i&&(N.delete(n),n.i(e))}function _(n,e,t,r){if(n&&n.o){if(N.has(n))return;N.add(n),E.c.push(()=>{N.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function me(n){n&&n.c()}function ne(n,e,t,r){const{fragment:i,after_update:a}=n.$$;i&&i.m(e,t),r||Z(()=>{const l=n.$$.on_mount.map(Q).filter(X);n.$$.on_destroy?n.$$.on_destroy.push(...l):L(l),n.$$.on_mount=[]}),a.forEach(Z)}function te(n,e){const t=n.$$;t.fragment!==null&&(L(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function be(n,e){n.$$.dirty[0]===-1&&(G.push(n),de(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function re(n,e,t,r,i,a,l,c=[-1]){const h=x;R(n);const s=n.$$={fragment:null,ctx:[],props:a,update:w,not_equal:i,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:j(),dirty:c,skip_bound:!1,root:e.target||h.$$.root};l&&l(s.root);let f=!1;if(s.ctx=t?t(n,e.props||{},(d,y,...o)=>{const z=o.length?o[0]:y;return s.ctx&&i(s.ctx[d],s.ctx[d]=z)&&(!s.skip_bound&&s.bound[d]&&s.bound[d](z),f&&be(n,d)),y}):[],s.update(),f=!0,L(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const d=ue(e.target);s.fragment&&s.fragment.l(d),d.forEach(B)}else s.fragment&&s.fragment.c();e.intro&&F(n.$$.fragment),ne(n,e.target,e.anchor,e.customElement),ee()}R(h)}class ie{$destroy(){te(this,1),this.$destroy=w}$on(e,t){if(!X(t))return w;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!le(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function fe(n){let e,t=n[0].a+"",r;return{c(){e=b("p"),r=S(t)},m(i,a){P(i,e,a),u(e,r)},p(i,a){a&1&&t!==(t=i[0].a+"")&&V(r,t)},d(i){i&&B(e)}}}function ke(n){let e,t=n[0].q+"",r;return{c(){e=b("p"),r=S(t)},m(i,a){P(i,e,a),u(e,r)},p(i,a){a&1&&t!==(t=i[0].q+"")&&V(r,t)},d(i){i&&B(e)}}}function pe(n){let e,t,r,i,a,l;return{c(){e=b("div"),t=b("button"),t.textContent="Correct",r=O(),i=b("button"),i.textContent="Wrong",W(t,"class","svelte-t3i3ac"),W(i,"class","svelte-t3i3ac"),W(e,"class","card-rate svelte-t3i3ac")},m(c,h){P(c,e,h),u(e,t),u(e,r),u(e,i),a||(l=[M(t,"click",n[4]),M(i,"click",n[5])],a=!0)},p:w,d(c){c&&B(e),a=!1,L(l)}}}function we(n){let e,t,r;return{c(){e=b("p"),e.textContent="Press to flip",W(e,"class","svelte-t3i3ac")},m(i,a){P(i,e,a),t||(r=M(e,"click",n[3]),t=!0)},p:w,d(i){i&&B(e),t=!1,r()}}}function ze(n){let e,t,r,i,a=n[0].t+"",l,c,h=n[0].id+"",s,f,d,y,o,z,g;function v(m,q){return m[2]?ke:fe}let A=v(n),k=A(n);function U(m,q){return m[2]?we:pe}let D=U(n),p=D(n);return{c(){e=b("div"),t=b("div"),r=b("p"),i=b("b"),l=S(a),c=S(" Question nr. "),s=S(h),f=O(),d=b("div"),k.c(),y=O(),o=b("div"),p.c(),W(t,"class","card-header"),W(d,"class","card-top svelte-t3i3ac"),W(o,"class","card-bottom svelte-t3i3ac"),W(e,"class","card svelte-t3i3ac")},m(m,q){P(m,e,q),u(e,t),u(t,r),u(r,i),u(i,l),u(r,c),u(r,s),u(e,f),u(e,d),k.m(d,null),u(e,y),u(e,o),p.m(o,null),z||(g=M(d,"click",n[3]),z=!0)},p(m,[q]){q&1&&a!==(a=m[0].t+"")&&V(l,a),q&1&&h!==(h=m[0].id+"")&&V(s,h),A===(A=v(m))&&k?k.p(m,q):(k.d(1),k=A(m),k&&(k.c(),k.m(d,null))),D===(D=U(m))&&p?p.p(m,q):(p.d(1),p=D(m),p&&(p.c(),p.m(o,null)))},i:w,o:w,d(m){m&&B(e),k.d(),p.d(),z=!1,g()}}}function ve(n,e,t){let{Question:r}=e,{Callback:i}=e,a=!0;function l(s){t(2,a=!a)}const c=()=>{i(!0)},h=()=>{i(!1)};return n.$$set=s=>{"Question"in s&&t(0,r=s.Question),"Callback"in s&&t(1,i=s.Callback)},n.$$.update=()=>{n.$$.dirty&1&&r&&t(2,a=!0)},[r,i,a,l,c,h]}class We extends ie{constructor(e){super(),re(this,e,ve,ze,Y,{Question:0,Callback:1})}}const Se=[{id:0,q:"Was ist die Abgrenzung zwischen Oberem und Unteren Atemweg?",a:"* Der Kehlkopf, auch Larynx genannt. Er wird zu den Unteren Atemwegen gezählt, alles darüber ist beim oberen Atemweg",t:"Airway"},{id:1,q:"Wie werden Luftröhre, Kehlkopf, Kehldeckel, Speiseröhre und Rachen mit Fachbegriff genannt?",a:"* Trachea, Larynx, Epiglottis, Ösophargus, Pharynx",t:"Airway"},{id:2,q:"Was sind die Aufgaben der Nase?",a:`* Befeuchten\r
	* Erwärmen\r
	* Reinigen`,t:"Airway"},{id:3,q:"Wie ist die Nase aufgebaut?",a:`* 2 Teile (links und rechts) durch Nasenscheidewand getrennt\r
	* 3 Gänge/Muscheln:\r
		. Untere Nasenmuschel: Atemgang\r
		. Mittlere Nasenmuschel: Sinusgang\r
		. Obere Nasenmuschel: Riechgang`,t:"Airway"},{id:4,q:"Woraus besteht der Larynx und wie ist er aufgebaut?",a:`* Besteht aus Knorpeln\r
	* Aufbau:\r
		. Epiglottis: Verschließt Trachea beim Schlucken\r
		. Stimmbänder im Kehlkopf (Engste Stelle im Kehlkopf bei Erwachsenen, Bei Kindern direkt darunter)\r
		. Anfang Trachea`,t:"Airway"},{id:5,q:"Wie sind die unteren Atemwege aufgebaut",a:`* Larynx\r
	* Trachea (Hufeisenknorpel nach hinten offen damit Ösophargus platz zum ausdehnen hat)\r
	* Hauptbronchien\r
	* Bronchien\r
	* Bronchiolen\r
	* Alveolen (Hier Gasaustausch)`,t:"Airway"},{id:6,q:"Was bezeichnet man als anatomischen Totraum?",a:"* Alle Atemwege bis auf die Alveolen, da dort kein Gasaustausch",t:"Airway"},{id:7,q:"Wie sind die Alveolen aufgebaut? Wie funktionieren sie?",a:`* Kleine Ballons die von Bronchiolen gefüllt werden -> Expandieren\r
	* Umgeben von Kapillarnetz für Gasaustausch durch Diffusion, kommen von Lungenarterie (-O2) führen zu Lungenvene (+O2)`,t:"Airway"},{id:8,q:"Wie ist die Lunge selber aufgebaut? Wie kann man sie unterteilen?",a:`* 2 Lungenflügel: L, R\r
	* L: 2 Lappen (Platz fürs herz)\r
	* R: 3 Lappen`,t:"Airway"},{id:9,q:"Wie viel Luft Atmet man bei einem Atemzug ein?",a:"* 0,5 L, davon 0,15L nur in Totraum",t:"Airway"},{id:10,q:"Wie viel % O2 hat die umgebungsluft? Wie viel die Ausatemluft?",a:`* Umgebung: 21%\r
	* Ausatem: 17%`,t:"Airway"},{id:11,q:"Wie kann der Atemweg sein?",a:`* Frei\r
	* Gefährdet\r
	* Verlegt`,t:"Airway"},{id:12,q:"Wann ist der Atemweg gefährdet?",a:`* B-Los\r
	* Anfang Allergische Reaktion\r
	* Anfang Schwellung v. Insektenstich\r
	* ...`,t:"Airway"},{id:13,q:"Wann ist er verlegt?",a:`* Zunge fällt bei bewusstlosen zurück\r
	* Zugeschwollen (insekt/allergie)\r
	* Bolus (Fremdkörper)`,t:"Airway"},{id:14,q:"Was für Kategorien von Maßnahmen gibt es um den Atemweg frei zu halten/frei zu machen?",a:`* Einfache Atemwegssicherung (SSL, Esmarch, Kopf Überstrecken)\r
	* Atemwegshilfen (Tubus)\r
	* Fremdkörperentfernung\r
	* Flüssigkeit absaugen`,t:"Airway"},{id:15,q:"Warum ist bei bewusstlosen der Atemweg gefährdet?",a:`* Patient hat keine Schutzreflexe und Muskelspannung mehr -> Zunge kann zurückfallen und A-way verlegen\r
	* Außerdem Mageninhalt mögl. nicht mehr in Magen gehalten (regurgitation) -> Fließt heraus und in trachea -> Aspiration`,t:"Airway"},{id:16,q:"Was sind Möglichkeiten für einfache Atemwegsicherung?",a:`* Kopf Überstrecken: \r
		. In Rückenlage Atemweg verengt\r
		. Kopf wird nach hinten gedreht, dafür 1ne hand auf der stirn, andere drückt am unterkiefer/kinn an\r
		. Bereit Atemweg, Spannt Auch zunge\r
	* Esmarch:\r
		. Auch in Rückenlage\r
		. Angewendet wenn überstrecken nicht möglich weil HWS gefährdet\r
		. Kiefer nach unten und nach vorne Gedrückt, Hände von Oben am Patienten links und rechts, Finger graifen Kiefer (Nur Knochen!) von unten, Daumen Drückt Unterkiefer weg und öffnet mund\r
	* Stabile Seitenlage:\r
		. Immer anzuwenden wen Patient B-los ist und gerade keine Maßnahmen durchgeführt werden die Rückenlage erfordern\r
		. Mund soll niedrigster Punkt sein -> Mageininhalt bei regurgitation soll abfließen können`,t:"Airway"},{id:17,q:"Welche Atemwegshilfen gibt es?",a:`* Guedeltubus\r
	* Wendltubus\r
	* Larynxtubus\r
	* Endotrachealtubus`,t:"Airway"},{id:18,q:"Was ist der Guedeltubus?",a:"* Eine Röhre welche wenn eingesetzt von mund bis zum pharynx führt und die Zunge zurückhält",t:"Airway"},{id:19,q:"Wann setzt man einen Guedeltubus? Wann nicht?",a:`* Über 8 Jahre\r
	* Bewusstlos (Keine Würgereflexe!!)`,t:"Airway"},{id:20,q:"Wie wählt man die richtige Größe von Guedeltubus?",a:"* Anlegen des Tubus außen am Gesicht des Patienten: Soll von Mund bis Ohrläppchen reichen",t:"Airway"},{id:21,q:"Wie wird der Guedeltubus gesetzt?",a:"* Zuerst mit beigung nach oben ohne Spray eingeführt bis Widerstand, dann nach unten gedreht",t:"Airway"},{id:22,q:"Was ist der Wendltubus?",a:"* Röhre die von der nase bis in den Rachen führt",t:"Airway"},{id:23,q:"Wann? Wann nicht?",a:`* Eingetrübt, möglw. noch Würgereflex vorhanden\r
	* Nicht wenn: \r
		. Reanimationspflichtig\r
		. Verletzungen im Gesichtsschädel\r
		. nicht Erwachsen`,t:"Airway"},{id:24,q:"Wie ist vorzugehen wenn eine nicht person nicht auf ansprache oder berührung reagiert (bewusstlos ist)?",a:`* Brust entblößen (so das Atembewegungen erkennbar sind -> T-Shirt ok)\r
	* Atemcheck: Kopf überstrecken, 10s Hören, sehen, Fühlen\r
		. keine Atmung/ineffektive atmung: Reanimieren\r
	* Stabile Seitenlage!\r
	* 15L O2 über MASKE\r
	* Notarzt!\r
	* SpO2, HF, RR, BZ, T messen und Überwachen\r
	* Auf 97% zielsättigen\r
	* Reanim. Bereitsch (Defi, Beatmungsbeutel, Absaugeeinh)\r
	* Bodycheck\r
	* !!!Wärmeerhalt!!!`,t:"Airway"},{id:25,q:"Wie saugt ein RS ab?",a:`* Immer nur auf sicht (so tief ie wie guedeltubus)\r
	* Kein UDruck beim Reingehen, UDruck beim Rausnehmen d. Katheters\r
	* Kathetergrößen absteigend: Wie ampel (rot gelb grün schwarz[erde])\r
	* Achtung bei Würgereflex`,t:"Airway"},{id:26,q:"Wie passiert eine FK-Verlegung meistens?",a:`* Beim Essen\r
	* Oft von anderen Beobachtet`,t:"Airway"},{id:27,q:"Was tun wenn patient nicht ansprechbar beim Eintreffen der Rettung?",a:"* Sofort NA alamieren und Reanimation (mit mundraumkontrollen vorm beatmen) starten",t:"Airway"},{id:28,q:"Wie lässt sich die Atemwegsverlegung allgemein einteilen?",a:`* Leichte A-verleg.:\r
		. effektives husten (luft kommt noch durch)\r
		. -> Anregen zum husten, leichte Rückenschläge\r
		. kein NA notwendig\r
	* Schwere A-verleg. (ineffektives husten)`,t:"Airway"},{id:29,q:"Was tun bei einer Schweren A-verleg?",a:`* NA Alamieren\r
	* 5 Rückenschläge (patient nach vorne gebeugt zwischen die Schultern fest durchziehen, auf WS aufpassen)\r
	* 5 Oberbauchkompressionen (hinter patienten gehen u ruckartig unter den rippen nach oben drücken) [Sobald min eine Oberbauchkomp. durchgeführt wurde ist der Patient immer zu hospitalisieren!!! (Organschäden mögl)]`,t:"Airway"},{id:30,q:"Was tun wenn der Patient bewusstlos wird?",a:"* Reanimieren! (immer vor Beatmung mundraumkontrolle!)",t:"Airway"},{id:31,q:"Wodurch könnte eine Schwellung der Atemwege verursacht werden?",a:`* Insektenstiche\r
	* Anaphylaxie\r
	* Infektionen`,t:"Airway"},{id:32,q:"Was ist zu tun falls eine SChwellung atemnot verursacht?",a:`* O2\r
	* Vitalzeichen kontrollieren\r
	* immer NA\r
	* Von Außen Kühlen\r
	* Möglw. Allergene entfernen, etc.`,t:"Airway"},{id:33,q:"Was ist ein Tracheostoma?",a:"* Künstlicher Zugang zur Luftröhre im Kehlkopf unter den Stimmbändern",t:"Airway"},{id:34,q:"Was sind Ursachen für eine Verlegung der Tracheostomas?",a:"* Meist SChleim",t:"Airway"},{id:35,q:"Was tun?",a:`* Notarzt\r
	* OK erhöht lagern\r
	* Tracheostoma Aussaugen\r
	* O2 druch Anhalten v Makse ans tracheostoma verabreichen\r
	* Atemstillstand: CPR (Beatmung mit Babymaske)`,t:"Airway"},{id:36,q:"Wie viele Rippen hat der Mensch?",a:`* 12 Paare, davon\r
		. 7 echte Rippen (1-7)\r
		. 5 unecte Rippen, davon (8-12)\r
			~ 2 fliegende Rippen (11,12)`,t:"Breathing"},{id:37,q:'Was unterscheidet "echte" von "unechten" rippen?',a:"* Echte sind direkt mit dem Brustbein (Sternum) verbunden, während 7-10 nur mit über andere Rippen und 11,12 garnicht mit dem sternum verbunden sind.",t:"Breathing"},{id:38,q:"Warum sind 11,12 fliegende Rippen?",a:"* Weil sie nicht teil des geschlossenen Brustkorbs sind, sie verbinden weder direkt noch indirekt zum sternum",t:"Breathing"},{id:39,q:"Woraus bestehen die Rippen?",a:"* Knochen die aus der Wirbelsäule entspringen und dann in Knorpel übergehen die zum Sternum verbinden (damit sich der Brustkorb auch ausdehnen kann)",t:"Breathing"},{id:40,q:"Wie erden Die Räume zwischen den Rippen genannt? Wie viele gibt es?",a:"* Sie heißen Zwischenrippenräume oder Intercostalräume und es gibt 9 pro seite",t:"Breathing"},{id:41,q:"Wo findet man das Atemzentrum?",a:"* Verlängertes Mark",t:"Breathing"},{id:42,q:"Was ist die Aufgabe des Atemzentrums?",a:"* Steuert die Atemfrequenz, Atemtiefe, ... in Reaktion auf gewisse werte",t:"Breathing"},{id:43,q:"Welche Werte nimmt das Atemzentrum in erwägung beim bestimmen der Atemfrequenz/ -tiefe?",a:"* Blut-02-gehalt, Blut-Co2-gehalt, Blut-pH",t:"Breathing"},{id:44,q:"Was ist der für Menschen normale BLut-pH?",a:"* 7.35-7.45",t:"Breathing"},{id:45,q:"Wie nennt man es wenn es zu sauer/basisch wird?",a:"* Azidose/Alkalose",t:"Breathing"},{id:46,q:"Was sind die pH grenzen welche sicher Tödlich sind wenn überschritten?",a:"* 6.8 / 8.0",t:"Breathing"},{id:47,q:"Wodurch könnte der pH wert im blut außer kontrolle geraten?",a:`- respiratorische \r
		. Azidose: zu wenig Atmung -> zu viel CO2 im Blut -> zu viel Kohlensäure -> pH sinkt\r
		. Alkalose: zu viel Atmung (Hypervent.) -> zu wenig CO2 im Blut -> zu wenig Kohlensäure -> pH steigt\r
	- metabolische\r
		. Azidose: Milchsäuregärung im dekompensierten Schock, Hyperglykämie führt zu Ketoazidose -> pH sinkt\r
		. Alkalose: Magensäureverlust -> weniger Säure -> pH steigt`,t:"Breathing"},{id:48,q:"Wie kann der pH wert im Blut wieder normalisiert werden?",a:`* bei einer respiratorischen Azidose/Alkalose versucht der Stoffwechsel im Körper den pH wert auszugleichen\r
	* bei einer metabolsichen (vom Stoffwechsel ausgelösten) Azid/Alka wird die atmung verlangsamt/beschleunigt um es respiratorisch zu kompensieren`,t:"Breathing"},{id:49,q:"Welche 2 Teile der Pleura werden unterschieden?",a:`* Brustfell (an den Rippen)\r
	* Lungenfell (an der Lunge)`,t:"Breathing"},{id:50,q:"Was ist der Pleuraspalt?",a:"* Raum zwischen Brust- und Lungenfell, gefüllt mit Flüssigkeit mit Unterdruck -> Lungenfell folgt bewegungen des Rippenfells",t:"Breathing"},{id:51,q:"Wie nennt man den Einatem/Ausatemprozess mit Fachbegriff?",a:"* Inspiration/Expiration",t:"Breathing"},{id:52,q:"Welcher der beiden ist normalerweise aktiv?",a:"* Inspiration",t:"Breathing"},{id:53,q:"Welche Muskeln machen die Atemmuskulatur aus?",a:"* Zwischenrippen, Zwerchfell",t:"Breathing"},{id:54,q:"Atemhilfsmuskulatur?",a:"* Schultergürtel Halsmuskeln, ...",t:"Breathing"},{id:55,q:"Wie funktioniert das Einatmen?",a:"* Atemmuskeln angespannt (Rippen nach außen (durch äußere Zwischenrippenmuskulatur), Zwerchfell strafft sich -> nach unten)",t:"Breathing"},{id:56,q:"Ausatmen?",a:"* Atemmuskeln entspannen; normalerweise rein passiv kann aber willkürlich aktiv getan werden -> innere Zwischenmuskulatur spannt an (antagonist zur äußeren)",t:"Breathing"},{id:57,q:"Welche 2 Arten der Atmung unterscheidet man?",a:"* Innere (Zellen gasaustausch mit BLut) und Äußere (blut gasaustuasch mit luft in alveolen)",t:"Breathing"},{id:58,q:"Was ist der normbereich der Atemfrequenz bei Erwachsenen?",a:"* 12-20/min",t:"Breathing"},{id:59,q:"-//- bei Neugeborenen?",a:"* 40-60/min",t:"Breathing"},{id:60,q:"-//- kindern?",a:"* 16-20/min",t:"Breathing"},{id:61,q:"Wie sagt man wenn die AF außerhalb des Normbereichs liegt?",a:"* Tachy (zu schnell) / Bradypnoe (zu langsam)",t:"Breathing"},{id:62,q:"Wie sagt man wenn jemand schwierigkeiten beim Atmen hat?",a:"- Dyspnoe",t:"Breathing"},{id:63,q:"Wie lässt sich die Atmung beurteilen?",a:`* Atemfrequenz\r
	* Atemtiefe\r
	* Atemarbeit -> Hat schwierigkeiten beim Atmen? Verwendet Atemhilfsmuskulatur (vorgebeugt?) \r
	* Atemgeräusche -> abnormale Geräusche beim atmen: beim einatmen/ausatmen -> inspiratorisch/expiratorisch ... Stridor (Pfeifen), Rasseln, Brodeln\r
	* Zyanose\r
	* SpO2\r
	* Qualität / Atemmuster`,t:"Breathing"},{id:64,q:"Was sind die wichtigsten Atemmuster?",a:`- normale Atmung 12-20/min\r
	- Atemdepression (-AF, -Atemtiefe) -> Symptom von Opiat-OD\r
	- Kußmaul Atmung\r
	- Biot-Atmung\r
	- Cheyne-Stokes-Atmung`,t:"Breathing"},{id:65,q:"Was ist die Kußmaul-Atmung?",a:`* Tiefere Atmung, evtl. auch schneller\r
	* Möglw. Respiratorische Kompensation für metabilische Azidose (Hyperglykämie)`,t:"Breathing"},{id:66,q:"-//- Biot-Atmung?",a:`* Immer wieder sekundenlange Atempausen\r
	* Kann Symptom für erhöhten Hirndruck sein\r
	* Atemzentrum kann evtl nicht mehr auf CO2-Gehalt reagieren, nur O2 -> O2 ok -> hört auf zu Atmen obwohl CO2 nicht ok`,t:"Breathing"},{id:67,q:"-//- Cheyne-Stokes-Atmung?",a:`* So wie Biot, nur stark beschleunigt\r
	* Kann Symptom für Schlaganfall, Hirntumor, CO-Vergiftung sein`,t:"Breathing"},{id:68,q:"Was ist eine Zyanose?",a:"* Blaufärbung der Haut weil zu wenig O2 im blut (Wenn hämoglobin nix gebunden hat schimmert es blau, sonst rot)",t:"Breathing"},{id:69,q:"Welche formen der Zyanose unterscheidet man",a:`* Zentrale\r
	* Periphere`,t:"Breathing"},{id:70,q:"Woran erkennt man Zentrale/Periphere Z. + wodurch wird sie ausgelöst?",a:`* Zentrale\r
		. erkennbar an \r
			~ Mundschleimhaut\r
			~ Zunge\r
			(~ Lippen)\r
		. AUsgelöst durch ein A/B-Problem -> Lungen-Problem -> Lunge kann nicht genug O2 aufnehmen\r
	* Periphere\r
		. erkannbar an\r
			~ Finger/Zehen			\r
			~ Hände\r
			~ Nase\r
			~ Andere Extremitäten\r
		. ausgelöst durch erhöhte O2-Ausschöpfung in peripherie -> zu wenig Blutfluss -> C-Problem (Herzinsuffizienz, Hypovlämer Schock, ...)`,t:"Breathing"},{id:71,q:"Sind beide Formen gleichzeitig möglich?",a:"* JA",t:"Breathing"},{id:72,q:"Was misst das Pulsoxymeter?",a:"* Herzfrequenz und Sauerstoffsättigung",t:"Breathing"},{id:73,q:"Wie funktioniert das Pulsoxymeter?",a:"* Es schickt 2 Lichter mit 2 Unterschiedlichen Wellenlängen durch den Finger. Auf der anderen Seite trifft das Licht auf einen Sensor wo eine Spektralanalyse durchgeführt wird. Da gebundenes Hämoglobin andere Wellenlängen absorbiert als ungebundenes lässt sich daraus ein Wert errechnen",t:"Breathing"},{id:74,q:"Was sind typische Fehlerquellen beim Pulsoxymeter?",a:`* SChmutzige/Lackierte Fingernägel\r
	* Schlechte Periphere Durchblutung (Schock, kälte, ...)\r
	* Patient bewegt sich zu viel\r
	* CO!! weil CO-gebundenes Hb absorbiert auch gleiche Wellenlängen wie O2-Gebundenes Hb \r
	* Helles umgebungslicht`,t:"Breathing"},{id:75,q:"Wie misst das Pulsoxymeter die Herzfrequenz?",a:"* Es errechnet sie indirekt aufgrund des Blutvolumens in den Kapillaren",t:"Breathing"},{id:76,q:"Welche Maßnahmen kann man generell setzen wenn man ein B Problem vermutet?",a:`* O2-Gabe\r
	* OK Erhöht Lagern (Atemmuskulatur wird aktiviert)\r
	* Beatmung`,t:"Breathing"},{id:77,q:"Wie kann man O2 verabreichen?",a:`* Brille (<4L/min)\r
	* Maske (>6L/min)\r
	* Sauerstoffdusche (Maske 1cm über Patienten halten)`,t:"Breathing"},{id:78,q:"Welche Arten der Beatmung gibt es?",a:`* Assistierte Beatmung:\r
		. Selbständige Atmung des Patienten nicht suffizient, dh wird Nachgeholfen\r
		. Patient bestimmt wann er ein/ausatmet\r
		. aber maschine/(mensch) hilft nach -> drückt mehr Luft hinein\r
		. Sehr schwer zu timen, dh meist nur an der Maschine\r
	* Kontrollierte Beatmung:\r
		. Patient atmet gar nicht mehr von alleine -> Reanimationspflichtig!!!\r
		. Atem-timing und Atem-tiefe von außen "kontrolliert"\r
		. Ambubeutel\r
	* Maschinelle Beatmung\r
		. Ventilator`,t:"Breathing"},{id:79,q:"Wann ist eine Große Flasche am Auto zu wechseln?",a:`* Falls nur 1ne Flasche am Auto: <70 bar\r
	* Falls 2: <10 bar`,t:"Breathing"},{id:80,q:"Wann die kleine im Oxybag?",a:"* <50 bar",t:"Breathing"},{id:81,q:"Wie nennt man astma mit Fachbegriff?",a:"* Astma bronchiale",t:"Breathing"},{id:82,q:"Was ist Asthma?",a:`* chronische entzündbarkeit der unteren Atemwege\r
	* dauerhaft Überempfindlich\r
	* Häufig ab Kindheit/Jugend\r
	* Ausgelöst durch extrinsische (von außen kommende -> allergene) oder intrinsische (andere) Faktoren\r
	* Mit guter Medikamenteneinstellung meist komplett beschwerdefrei`,t:"Breathing"},{id:83,q:"Was ist ein akuter Asthma anfall?",a:"* Plötzliche Verengung der Atemwege bei einem Asthma Patienten",t:"Breathing"},{id:84,q:"Durch was kann ein Anfall ausgelöst werden?",a:`* Allergene\r
	* Infekte\r
	* Körperliche Antrengung\r
	* Feinstaub\r
	* Kalte/Trocjente Luft\r
	* Meds\r
	* Psychische Faktoren\r
	* ...`,t:"Breathing"},{id:85,q:"Welche genauen Faktoren führen bei einem Anfall zu einer Verengung der Atemwege?",a:`* Bronchospasmus -> unwillkürliches Zusammenziehen der Muskeln welche die Bronchien umgeben -> verengung\r
	* SChleimhautödem -> Schwellung der Schleimhaut in den Bronchien durch Flüssigkeit -> weitere verengung\r
	* Hypersekretion -> ganz viel sekret wird abgegeben -> noch verengter\r
	* Schleim wird dickflüssiger -> nicht abhustenbar`,t:"Breathing"},{id:86,q:"Wofür steht COPD?",a:"* Chronic Obstructive Pulminary Disease, Chronisch obstruktive Lungenerkrankung",t:"Breathing"},{id:87,q:"Was sind die tatsächlichen Probleme die unter COPD vorkommen?",a:`* chonische Bronchitis -> Entzündung der Bronchien -> produktives Husten, verengte Bronchien\r
	* Emphyseme -> Überausdehnung und Schädigung der Alveolen -> Verlieren stark an elastizität -> Ausatmen weniger effektiv`,t:"Breathing"},{id:88,q:"Was sind Risikofaktoren für COPD?",a:`* Hauptsächlich Rauchen\r
	* begünstigend sind auch\r
		. feinstaub\r
		. chemikalien\r
		. wiederkehrende (rezividierende) Infekte`,t:"Breathing"},{id:89,q:"Mit welchem Lebensalter tritt COPD normalerweise frühestens auf?",a:"* 40 j",t:"Breathing"},{id:90,q:"Wie lässt sich COPD einteilen?",a:`* Je nach stärke durch GOLD-Skala\r
		. Einteilung durch Spirometrie-Test -> 1-4 nach schwere aufsteigend\r
		. Einteilung nur durch Symptomatik -> A-D nach schwere aufsteigend`,t:"Breathing"},{id:91,q:"Was sind die Beschwerden bei COPD?",a:`* Husten mit Auswurf\r
	* Dispnoe (je nach GOLD nur bei Belastung oder auch in Ruhe)\r
	* Müdigkeit, Abgeschlagenheit`,t:"Breathing"},{id:92,q:"Wie nennt man eine Akute Verschlechterung von COPD?",a:"* COPD- Exacerbation",t:"Breathing"},{id:93,q:"Was löst eine Exacerbation aus?",a:"* meist Infekte d Atemwege (Pneumonie), manchmal auch Überanstrengung",t:"Breathing"},{id:94,q:"Was sind die Symptome von Asthmaanfall/COPD-E?",a:`* Dyspnoe\r
	* Tachypnoe\r
	* Erhöhte Atemarbeit\r
	* Expiratorischer Stridor\r
	* Husten\r
	* Zyanose\r
	* Blässe\r
	* Kaltschweißig\r
	* Tachykardie`,t:"Breathing"},{id:95,q:"Was sind zu setzende Maßnahmen bei Asthma-Anfall/COPD-E?",a:`* Notarzt\r
	* OK Erhöht lagern -> Atemmuskulatur einsetzen\r
	* 6L O2 geben\r
	* Vitalwerte ständig überwachen\r
	* Zielsättigung \r
		. Asthma: 92-95%\r
		. COPD: 88-92%\r
	* Bewegungsverbot, auch Patienten sagen er soll sich nicht bewegen\r
	* Reanimationsbereitschaft`,t:"Breathing"},{id:96,q:"Warum ist bei COPD die Zielsättigung nur 92%?",a:"* Körper an erhöhten CO2 gehalt gewöhnt -> regelt nur über O2 -> genug O2 -> hört auf zu atmen -> CO2 viel zu hoch",t:"Breathing"},{id:97,q:"Was ist ein Lungenödem?",a:"* Ansammlung von Flüssigkeit im Lungengewege und in den Alveolen",t:"Breathing"},{id:98,q:"Welche arten von Lungenödemen unterscheidet man und wie entstehen sie?",a:`* Hypertensives Lungenödem\r
		. Generell erhöhter Blutdruck\r
		. Blutdruck auch in Lungenkreislauf erhöht\r
		. Drückt Flüssigkeit durch Kapillarwand\r
	* Kardiales Lungenödem\r
		. Linksherzinsuffizienz\r
		. Blut staut in Lungenkreislauf zurück\r
		. Lungenkreislaufdruck steigt\r
		. Flüssigket wieder durch Kapillarwände gedrückt\r
	* toxisches Lungenödem\r
		. Ausgelöst durhc Rauch/Reizgase\r
		. Alveolen geschädigt -> Flüssigkeitsdurchtrutt\r
		. Symptomfreies intervall (bis zu 24h nach kontakt mit gas)`,t:"Breathing"},{id:99,q:"Symptome für Lungenödem",a:`* Dyspnoe\r
	* Tachypnoe\r
	* Brodelndes Atemgeräusch\r
	* Schaumige, rot/pinke Flüssigkeit hochgehustet\r
* Blass/kaltschweißig\r
* Möglw. Bewusstseinstrübung	\r
* KEINE ATEMABHÄNGIGEN SCHMERZEN??`,t:"Breathing"},{id:100,q:"Maßnahmen bei Lungenödem?",a:`* Notarzt\r
	* Sauerstoff 15 bis SpO2 97%\r
	* OK Erhöht lagern\r
	* Vitalwerte überwachen\r
	* Wärmeerhalt\r
	* Reanimationsbereitschaft`,t:"Breathing"},{id:101,q:"Was ist eine Lungenembolie?",a:"* Verlegung der Blutstrombahn durch die Lunge",t:"Breathing"},{id:102,q:"Wodurch wird eine Lungenembolie verursacht?",a:`* Blutgerinsel (entsteht bei Venösen Verschluss in den Beinen, Löst sich und Bleibt in Lungenkapilaren stecken)\r
	* Manchmal auch\r
		* Fett\r
		* Luft (wenn Luft in spritze/IV)\r
		* Fruchtwasser`,t:"Breathing"},{id:103,q:"Symptome der Lungenembolie?",a:`* Atemabhängige Brustschmerzen (v.a. beim Einatmen)\r
	* niedrige SpO2\r
	* Dyspnoe\r
* möglw. Zyanose\r
	* Bluthusten\r
	* Blass, kaltschweißig\r
	* Tachykardie\r
	* Todesangst, UNruhe\r
	* Möglw. Symptome Venöser Verschluss im Bein`,t:"Breathing"},{id:104,q:"Was sind die Folgen bei einer Lungenembolie?",a:`* Hypoxia\r
	* Rechtsherzinsuffizienz (Rechte Herzkammer kann blut nicht mehr durchdrücken weil weg verstopft)`,t:"Breathing"},{id:105,q:"Was sind Risikofaktoren für eine Lungenembolie?",a:`* Risikofaktoren Venöser Gefäßverschluss\r
	* An Infusion hängend`,t:"Breathing"},{id:106,q:"Was sind die Maßnahmen bei einer Lungenembolie?",a:`* Lagerung mit erhöhtem Oberkörper (außer eingetrübt dann ssl)\r
* 15L O2 bis auf 97% Zielsättigen\r
* Vitalzeichen überwachen\r
* Notarzt\r
* Reanimationsbereitschaft\r
* Bewegungsverbot\r
* Wärmeerhalt`,t:"Breathing"},{id:107,q:"Was ist eine Lunngenentzündung?",a:"* Entzündung der Lunge (AHAHHA)",t:"Breathing"},{id:108,q:"Wie nennt man eine Lungenentzündung noch?",a:"* Pneumonie",t:"Breathing"},{id:109,q:"Was kann eine Lungenentzündung auslösen?",a:`* Infektion (meist Baktierien wie Pneumokokken)\r
	* Aspiration (Erbrochenes, Nahrung)`,t:"Breathing"},{id:110,q:"Wer ist besonders gefährdet für Lungenentzündungen?",a:`* Alte Menschen\r
	* Vorerkrankungen (zb COPD)\r
	* Bettlägrige\r
	* Immuno-compromised`,t:"Breathing"},{id:111,q:"Was sind die Typischen Symptome einer Lungenentzündung?",a:`* Dyspnoe\r
	* erhöhte Atemfrequenz\r
	* Atemabhängige Brustschmerzen\r
	* Möglw. brodelndes Atemgeräusch\r
	* Fieber\r
	* Husten mit auswurf (wenn gelb -> bakterien, klar -> viren)\r
	* Schüttelfrost\r
	* Möglw. Bewusstseinstrübung wegen hohem Fieber`,t:"Breathing"},{id:112,q:"Bei welchen Patienten sind atypische Verläufe häufig?",a:"* Alten menschen",t:"Breathing"},{id:113,q:"Wie schauen diese Atypischen Verläufe aus?",a:`* Viele Symptome können teilweise oder ganz fehlen\r
	* Oft nur schlechterer Allgemeinzustand`,t:"Breathing"},{id:114,q:"Was ist zu tun bei einer Lungenentzümdung?",a:`* Erhöhter OK -> Atemhilfmuskulatur\r
	* 6L initial O2\r
	* Vitalwerte Kontrollieren\r
	* Notarzt je nach Patientenzustand`,t:"Breathing"},{id:115,q:"Was ist das Hyperventilationssyndrom?",a:"* Unwillkürlich stark erhöhte Atemfrequenz und Tiefe",t:"Breathing"},{id:116,q:"Was sind Auslöser des Hyperventilationssyndrom?",a:"* psychische Faktoren wie Angst/Aufregung",t:"Breathing"},{id:117,q:"Was sind mögliche Komplikationen von Hyperventilation?",a:"* wegen erhöhter Atmung zu viel CO2 abgeatmet -> respiratorische Alkalose",t:"Breathing"},{id:118,q:"Was ist bei der Diagnose von Hyperventilation zu beachten?",a:`* Andere Diagnosen zuerst ausschließen, z.B. Hyperglykämie (Acetongeruch in ausatemluft) -> BZ messen\r
	* Beschleunigte, aber nicht vertiefte atmung auch bei\r
		. Hohem Fieber\r
		. Hypoxie (Asthma-Anfall, COPD-E)\r
		. Schonatmung`,t:"Breathing"},{id:119,q:"Was sind die Symptome von Hyperventilation?",a:`* subjektive Dyspnoe\r
	* schnelle, tiefe Atmung\r
	* Kribbeln in Händen\r
	* Taube Lippen/Zunge\r
	* Tetanie (Muskelverkrampfung) \r
		. in Unterarmen -> symmetrische Pfötchenstellung \r
		. des Munds -> Karpfenmund\r
	* Kopfweh, Schwindel, Sehstörungen`,t:"Breathing"},{id:120,q:"Maßnahmen bei Hyperventilation?",a:`* Zuerst versuchen Patienten zu beruhigen\r
	* "Nur eine Harmlose störung"\r
	* Angeleitetes Atmen\r
	* Rückatmung der Ausatemluft (O2 Maske nicht anschließen)\r
	* Wenn nix funktioniert: NA Rufen`,t:"Breathing"},{id:121,q:"Was ist zu beachten bevor der Patient rückatmet?",a:"* Andere Diagnosen Ausschließen: BZ messen (Schließt aus Hyperglykämie)",t:"Breathing"},{id:122,q:"Was sind typische Gasvergiftungen?",a:`* CO\r
	* CO2\r
	* Rauch/Reizgase`,t:"Breathing"},{id:123,q:"Was ist wichtig bei Verdacht auf Gasvergiftung?",a:`* Selbstschutz!\r
	* MA70 über Journal verständigen lassen -> Feuerwehr und Einsatzfahrzeuge zur behandlung von uns JUH und anderen leuten in umgebung kommen\r
	* NA wenn nötig muss extra angefordert werden!`,t:"Breathing"},{id:124,q:"Welche infos sollen an diw MA70 weitergegeben werden?",a:`* Bei CO: Messwert am display\r
	* Größe des Wohnhauses\r
		. wie viele stockwerke\r
		. wie viele wohneinheiten`,t:"Breathing"},{id:125,q:"Wie entsteht CO? Was sind häufige quellen?",a:`* Verbrennung mit zu wenig O2\r
	* Alte Gasthermen\r
	* Wohnungsbrände\r
	* SHisha\r
	* Pelletlager`,t:"Breathing"},{id:126,q:"Was sind wichtige eigenschaften von CO? warum ist es gefährlich?",a:`* Farblos\r
	* Geruchlos\r
	* Diffundiert durch wände\r
	* Ähnlich schwer wie O2 -> vermischt sich gut \r
	* Bindet 200x stärker an Hb als O2`,t:"Breathing"},{id:127,q:"Welche Kategorien von Symptomen treten meist bei CO-Intox in Kombi auf?",a:`* Neurológisch\r
	* Kardial`,t:"Breathing"},{id:128,q:"Was sind Symptome einer CO-Intoxikation?",a:`* Neurologische\r
		. Kopfweh\r
		. Schwindel\r
		. Übelkeit\r
		. Sehstörungen\r
		. Bewusstseinseintrübung\r
	* Kardiale\r
		* Brustenge (AP)\r
		* Tachykardie\r
	* Pulsoxy zeigt falsche hohe werte an (kann nicht zwischen CO und O2 unterscheiden)\r
	* Blasse Hautfarbe (keine Zyanose), bei sehr hoher Belastung evtl. leicht rosig`,t:"Breathing"},{id:129,q:"Was sind die Grenzen beim CO Messgerät? Welche Maßnahmen sind zu ergreifen?",a:`* >30ppm: Alarmgrenze 1\r
		. Fenster auf\r
		. Wenn möglich mit Patient weggehen\r
	* >60ppm: Alarmgrenze 2\r
		. Sofort Ort verlassen\r
		. Crashrettung nur wenn möglich: Wenn patient am weg mitnehmen und so schnell wie möglich raus`,t:"Breathing"},{id:130,q:"Was heißt OL am display?",a:"* OVER LIMIT -> >300ppm SOFORT RAUS!!!!!!!!!!!",t:"Breathing"},{id:131,q:"Welche Maßnahmen sind zu ergreifen bei einer CO Intox?",a:`* Lagerung\r
		. wenn B-los: SSL\r
		. sonst OK erhöht\r
	* 15L O2 -> CO rausspülen\r
	* Vitalzeichen je nach Patientenzustand Kontrollieren oder ständig überwachen\r
	* Bewegungsverbot\r
	* Notarzt je nach Zustand`,t:"Breathing"},{id:132,q:"Wie entsteht CO2? Wo treten manchmal gefährliche Konzentrationen auf?",a:`* Verbrennungs und Gährprozesse\r
	* Weinkellern\r
	* Silos\r
	* Güllegruben\r
	* ...`,t:"Breathing"},{id:133,q:"Was sind wichtige Eigenschaften von CO2?",a:`* Farblos\r
	* Geruchlos\r
	* Ungiftig\r
	* Schwerer als Luft -> sammelt sich in bodennähe an (keller); kann aber verwirbelt werden und sich so ausbreiten`,t:"Breathing"},{id:134,q:"Symptome CO2-Intox?",a:`* Schläfrigkeit\r
	* Schwindel\r
	* Kopfweh\r
	* Dyspnoe\r
	* Zyanose\r
	* Tachykardie\r
	* Krämpge\r
	* Bewusstseinstrübung bis B-los (kann sofort passieren bei sehr hohen Konzentrationen)`,t:"Breathing"},{id:135,q:"Maßnahmen CO2-Intox?",a:`* MA70\r
	* Nur Feuerwehr darf patienten holen\r
	* Lagerung nach zustand\r
		. B-los: SSL\r
		. OK erhöht\r
	* O2 je nach SpO2 -> (Ziels. >95%?)\r
	* Kontrolle/Überwachung d. Vitalzeichen je nach Zustand\r
	* Bewegungsverbot\r
	* NA je nach Zustand`,t:"Breathing"},{id:136,q:"Wo treten Rauch oder Reizgase möglicherweise auf?",a:`* Brände\r
	* Chlor: Schwimmbäder`,t:"Breathing"},{id:137,q:"Was sind Symptome für Rauch/Reizgasintox?",a:`* Rußpartikel um Mund\r
	* Husten\r
	* Dyspnoe\r
	* Rote/trändende Augen\r
	* Hypoxie\r
	* zeitverzögert toxisches Lundenödem`,t:"Breathing"},{id:138,q:"Maßnahmen Rauch/Rezigasintox?",a:`* MA70\r
	* Bergung nur durch Feuerwehr\r
	* Lagerung nach patientenzustand\r
		. B-Los: SSL\r
		. Sonnst OK erhöht\r
	* O2 je nach SpO2\r
	* Kontrolle/Überwachung Vitalz. je nach Zustand\r
	* NA je nach Zustand\r
	* Bewegungsverbot`,t:"Breathing"},{id:139,q:"Wodurch kommt es zu einer Rippenfraktur/Prellung?",a:"* Stumpfe Gewalteinwirkung",t:"Breathing"},{id:140,q:"Wie kann eine Rippenfraktur von einer -prellung unterschieden werden?",a:"* Präklinisch meist nur sehr schwer",t:"Breathing"},{id:141,q:"Was sind Symptome eines solchen Thorax-Traumas?",a:`* starke stechende Atemabhängige Brustschmerzen\r
	* Hämatome\r
	* Schonatmung\r
	* Druckempfindlichkeit`,t:"Breathing"},{id:142,q:"Was ist die größte Gefahr bei Thoraxtraumas im bereich der Unteren rippen?",a:"* Verletzungen von Organen im Bauchraum wie Milz, Niere, Leber",t:"Breathing"},{id:143,q:"Wann spricht man von einer Serienrippenfraktur?",a:`* > 2 Anliegende Rippen oder\r
	* > 3 Rippen`,t:"Breathing"},{id:144,q:"Was sind Symptome einer Serienrippenfraktur?",a:`* Paradoxische atmung im betroffenen Bereich -> zu wenig O2\r
	* Zyanose\r
	* Dispnoe\r
	* Alles von Rippenfraktur`,t:"Breathing"},{id:145,q:"Was ist ein Pneumothorax?",a:`* Kompletter oder Teilweiser Kollaps eines Lungenflügels\r
	* Pleura geöffnet -> Unterdruck ausgeglichen -> Lungenflügel kollabiert und fällt für atmung aus`,t:"Breathing"},{id:146,q:"Welche Kategorien von Pneumothorax gibt es?",a:`* Geschlossen\r
		. spontan\r
	* Offen\r
	* Spannungspneumothorax`,t:"Breathing"},{id:147,q:"Wie kommt ein geschlossener Pneumothorax zustande",a:`* Lungenfell verletzt (z.B. durhc gebrochene Rippe)\r
	* Luft strömt von Lunge in Pleuraspalt\r
	* Spontaner Pneum.:\r
		. im Wachstom manchmal einfach Riss des Lungenfells`,t:"Breathing"},{id:148,q:"Wie ein offener?",a:`* Rippenfell von außen durchstoßen (Stich-, SChusswinde, ...)\r
	* Außenluft gelangt in Pleuraspalt`,t:"Breathing"},{id:149,q:"Wie ist die Wunde eines offenen Pneumothorax zu versorgen?",a:"* Sterile Wundauflage darauf und an 3 der 4 Seiten mit Leukoplast fixieren, darf aber nicht Luftdicht sein, sonst Spannungspneum. möglich!!",t:"Breathing"},{id:150,q:"Was sind Symptome eines Pneumothorax?",a:`* Dyspnoe\r
	* Tachypnoe\r
	* Nicht-Seitengleiche Atmung\r
	* Atemabhängiger stechender Schmerz`,t:"Breathing"},{id:151,q:"Wie nennt man die Trennwand zischen den beiden Lungenflügeln?",a:"* Mediastinum",t:"Breathing"},{id:152,q:"Was passiert bei einem Spannungspneum.?",a:`* Immer mehr Luft strömt beim Einatmen in Pleuraspalt, öffnung verschließt sich beim ausatmen\r
	* Druck im Pleuraspalt wächst an`,t:"Breathing"},{id:153,q:"Was sind die Symptome eines Spannungspneum.?",a:`* Dyspnoe\r
	* Zyanose\r
	* Tachypnoe\r
	* Asym. Atembewegungen\r
	* Hautemphysem (Gas unter der Haut)\r
		. Schwellungen\r
		. Unter "Schneeballknirschen" wegdrückbar\r
	* Blutdruckabfahl weil nicht mehr so viel Blut zu Herz fließen kann\r
	* Halsvenenstauung\r
	* Verschiebung der Trachea zur gesunden Seite (sehr spät)\r
	* Mediastinum zur Gesunden seite verlagert ->\r
		. Hohlvenenkompression -> weiterer RR abfall\r
		. massive Atemnot (keiner der Beiden Lungenflügel funktioniert noch gut)\r
		. Gefahr auf Pneumothorax beim gesunden Lungenflügel\r
	* bei offenen Spannungspneum. zusätzlich möglich:\r
		. Schaumiges Blut aus der Wunde\r
		. atemsynchrones saugendes Geräusch`,t:"Breathing"},{id:154,q:"Was tun bei Spannungspneu?",a:`* SSL\r
	* Absaugen von Blut bei Verletzungen\r
	* 15L O2\r
	* Vital städnig überwachen\r
	* Notarzt\r
	* Bodycheck\r
	* Reanimationsbereitschaft\r
	* Wärmeerhalt`,t:"Breathing"},{id:155,q:"Beschreibe den Weg den das Blut nimmt, ausgehend von der Lunge",a:`1. Sauerstoffreiches Blut fließt über die Lungenvene in den linken Vorhof\r
	2. Linke Kammer\r
	3. Aorta transportiert Blut in den Körperkreislauf\r
	4. Im Körper gibt BLut O2 ab\r
	5. Blut fließt über venen zu rechtem Vorhof\r
	6. Rechte Kammer\r
	7. Lungenarterie\r
	8. Blut nimmt in Lungenkapillaren O2 auf\r
	9. wieder 1.`,t:"Circulation"},{id:156,q:"Wie viel Blut hat ca ein Erwachsener?",a:`* 5-6L\r
	* 70 ml/kg Körpergewicht\r
	* 10 mal das Atemvolumen hahaha`,t:"Circulation"},{id:157,q:"Wie viel Blutverlust ist akut lebensgefährlich?",a:"* >1L",t:"Circulation"},{id:158,q:"Was sind die Aufgaben des Bluts?",a:`* Transport von Nährstoffen, Gasen, Hormone, Abfälle\r
	* Flüssigkeitshaushalt\r
	* Wundverschließung\r
	* pH Gehalt regeln\r
	* Infektionsabwehr`,t:"Circulation"},{id:159,q:"Was sind die 3 wichtigsten Zellentypen im BLut?",a:`* Erythrozyten: ROte BLutkörperchen, Transpotieren O2 (Hb)\r
	* Leukozyten: Weiße BK, Imunabwehr\r
	* THrombozyten: Blutplättchen, gerinnung`,t:"Circulation"},{id:160,q:"Welche 2 Komponenten führen zur Blutgerinnung?",a:`* Gerinnungsfaktoren (Proteine)\r
	* Blutplättchen (Thrombozyten0)`,t:"Circulation"},{id:161,q:"Wie sind Arterien aufgebaut?",a:`* außen glatte Muskelzellen\r
	* Elastische Fasern\r
	* Endothelzellen`,t:"Circulation"},{id:162,q:"Was sind die aufgaben der Kapillaren?",a:"* Gasaustausch und Stoffaustausch mit der Zelle",t:"Circulation"},{id:163,q:"Warum ist die Venenwand dünner als die Arterienwand?",a:"* Niedriger blutdruck (nur so 10 mmHg)",t:"Circulation"},{id:164,q:"Welche Mechanismen bewegen das Blut in den Venen trotz niedrigem Blutdruck?",a:`* Muskelpunpe kontrahiert teile des gefäß -> Drückt blut nach oben und unten\r
	* Venenklappen verhindern Rückfluss -> Blut kann nur nach oben fließen`,t:"Circulation"},{id:165,q:"Wie heißen Hals-, Speichen-, Oberarm-, Oberschenkel- und Fußrückenarterie auf Latein?",a:`* A. Carotis\r
	* A. Radialis\r
	* A. Brachialis\r
	* A. Femoralis\r
	* A. dorsalis pedis`,t:"Circulation"},{id:166,q:"Wie heißen Hohl- und Oberschenkelvene auf latein?",a:`* V. cava\r
	* V. femoralis`,t:"Circulation"},{id:167,q:"Welche informationen können beim Puls-tasten erfasst werden?",a:`* Tastbar peripher/zentral/garnicht\r
	* Leicht/Stark\r
	* Frequenz\r
	* Rhytmisch/Arrhytmisch`,t:"Circulation"},{id:168,q:"Was bezeichnet man als Schock?",a:`* Durchblutungsproblem -> O2-Mangel der Organe\r
	* Kann bis zu Zelltod führen\r
	* Lebensbedrohlich`,t:"Circulation"},{id:169,q:"Was sind 3 möglichkeiten die zu einem massiven Durchblutungsproblem und damit zum Schock führen können?",a:`* absoluter Volumensmangel (zu wenig Blut im Kreislauf; Blutverlust): absoluter hypovolämer Schock\r
	* relativer Volumensmangel (Gefäße zu weit festellt, z.B. anaphylaxie): relativer hypovolämer Schock\r
	* Herzstörung (z.B. ausgedehnter MCI): kardiogener Schock`,t:"Circulation"},{id:170,q:"Wie reagiert der Körper im Schock?",a:`* Sympathicus wird aktiv ->\r
	* Adrenalin`,t:"Circulation"},{id:171,q:"Was bewirkt Adrenalin?",a:`* AF erhöht\r
	* Bronchien erweitert\r
	* Zentralisierung (Periphere Gefäße enggestellt)\r
	* +HF\r
	* +Schlagkraft\r
	* Zuckermobilisierung`,t:"Circulation"},{id:172,q:"Welche 3 Stadien lässt sich Schock einteilen? Wie schauen die aus? (Am Beispiel von absolutem hypovolämen schock)",a:`* kompensiert\r
		* Maßnahmen des Körpers funktionieren -> Organe noch gut versorgt\r
		* RR noch normal weil HF und Schlagkraft erhöht\r
		* Kann nicht endlos aufrecht erhalten werden, wenn Situation sich verschlechtert nächstes Stadium\r
	* dekompensiert\r
		* HF noch mehr angehoben, reicht aber nicht\r
		* RR sinkt\r
		* Bewusstheitseintrübung\r
		* Gefäße enger gestellt -> Versorgung schlechter\r
		* Zellen nicht mehr ordentlich versorgt -> beginnen mit Milchsäuregährung -> metablische Azidose\r
	* irreversibel\r
		* Wenn dekompensiertes Stadium nicht schnellstens repariert -> Zellen sterben ab\r
		* Nun nicht mehr reversibel\r
		* Multiples Organversagen\r
		* Tod`,t:"Circulation"},{id:173,q:"Was sind Typische Schocksymptome?",a:`* stark Erhöhte HF\r
	* blasse, Kaltschweißige haut\r
	* RR sinkt ab (bei Hypovoläm)\r
	* Bewusstseinstrübnug`,t:"Circulation"},{id:174,q:"Was tun bei Schock?",a:`* Lagerung nach zustand\r
		. wenn B-Los: SSL\r
		. sonst flach oder OK leicht erhöht\r
	* Wenn möglich Ursache beheben (Blutung stillen)\r
	* 15L O2 -> 97% Zielsättigung\r
	* Überwachen der Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft\r
	* Bodycheck (vor allem Bauch)\r
	* Wärmeerhalt`,t:"Circulation"},{id:175,q:"Was sind Sofortmaßnahmen zur Blutstillung?",a:`* Verletzte sollen sitzen oder liegen\r
	* Blutung mit Wundauflage zudrücken\r
	* Druckverband wenn möglich\r
	* Abbinden wenn Notwendig und möglich`,t:"Circulation"},{id:176,q:"Wie ist ein Druckverband aufgebaut?",a:`* Sterile Wundauflage\r
	* Festgebunden mit Mullbinde/PEHA-Haft\r
	* Druckkörper\r
		. Größer als die Wunde\r
		. Fest\r
		. Saugfähig\r
	* Druckkörper wiederum festgebunden`,t:"Circulation"},{id:177,q:"Wann kann kein Druckverband angelegt werden?",a:`* Kein Knochen gegen den gedrückt werden kann\r
	* Hals, Bauch\r
	* Wunde zu groß`,t:"Circulation"},{id:178,q:"Wann darf Abgebunden werden?",a:`* Wunde zu Groß für druckverband\r
	* Gliedmaßen sind Abgetrennt/Teilabgetrennt\r
	* Extreme Innere Blutungen\r
	* Arm/Bein eingeklemmt -> man kommt nicht zur Blutung\r
	* Sehr viele Verletzte (kann nicht so viel Zeit investieren)`,t:"Circulation"},{id:179,q:"Was ist wichtig sobald abgebunden wurde?",a:"* Zeit notieren",t:"Circulation"},{id:180,q:"Was ist ein anaphylaktischer Schock?",a:"* schwerstmögliche allergische Reaktion",t:"Circulation"},{id:181,q:"Was löst einen anaphylaktischen Schock aus?",a:`* Allergische REaktion führt zu Histaminausschüttung\r
	* Gefäße werden Weitgestellt -> relativer hypovoläm.\r
	* Gefäßwand wird durchlässiger -> noch mehr Blutverlust\r
	* Bronchien stellen sich eng -> Dysnpoe`,t:"Circulation"},{id:182,q:"Was im Körper ist bei einem anaphylaktischem Schock direkt betroffen?",a:`* Lunge\r
	* Herz-Kreislauf\r
	* Haut/Schleimhaut\r
	* Kombinationen davon`,t:"Circulation"},{id:183,q:"Was sind Symptome für einen Anaphylaktischen SChock?",a:`* Haut/Schleimhaut:\r
		. Rötung\r
		. Juckreiz\r
		. Schwellungen\r
		. Quaddeln (Hebungen)\r
	* Atemwege:\r
		* Asthma-Anfall\r
	* Kreislauf\r
		* anaphylaktischer schock -> relativer hypovolämer schock\r
	* Nicht unbedingt alle 3 Systeme betroffen`,t:"Circulation"},{id:184,q:"Was tun bei einem Anaphylaktischen Schock?",a:`* Lagerung je nach Zustand\r
		. B-Los: SSL\r
		. sonst: Flach oder OK leicht erhöht\r
	* Allergene entfernen wenn möglich\r
	* initial 15L O2 auf 97% Zielsättigen\r
	* Vitalzeichen Ständig überwachen\r
	* Notarzt\r
	* Reanimationsbereitschaft\r
	* Wärmeerhalt`,t:"Circulation"},{id:185,q:"Was ist eine Hypertensive Krise?",a:"* Blutdruck ploötzlich viel zu hoch + Symptome",t:"Circulation"},{id:186,q:"Was kann eine Hypertensive Krise auslösen?",a:`* Bei bekannten Hypertonikern manchmal auch einfach so\r
	* Blutdruckmittel nicht eingenommen\r
	* Psychisch/Körperliche belastung\r
	* Aufputschende Drogen`,t:"Circulation"},{id:187,q:"Welche Symptome können bei einer Hypertensiven Krise auftreten?",a:`* RR > 200mmHg\r
	* Druckgefühl in der Brust\r
	* Herzklopfen spürbar\r
	* Schwindel\r
	* Kopfweh\r
	* Sehstörungen\r
	* Ohrensausen\r
	* Überlkeit\r
	* Erbrechen\r
	* Verwirrtheit\r
	* Nasenbluten\r
	* Rotes Gesicht`,t:"Circulation"},{id:188,q:"Was tun bei einer Hypertensiven Krise?",a:`* OK erhöht lagern\r
	* pot. Nasenbluten stillen\r
	* Je nach Zustand Kontrolle/Überwachung der Vitalzeichen\r
	* Neurocheck durchführen\r
	* Notarzt wenn eines Zutrifft\r
		. >200mmHg Systole + Symptome\r
		. >220mmHg\r
		. Druckgefühl in der Brust`,t:"Circulation"},{id:189,q:"Was sind mögliche Komplikationen einer Hypertensiven Krise?",a:`* Agina Pectoris od MCI\r
	* Linksherzinsuffizienz -> Lungenödem, kardiogener Schock\r
	* Hirnblutung`,t:"Circulation"},{id:190,q:"Was ist der Fachbegriff für Nasenbluten?",a:"* Epistaxis",t:"Circulation"},{id:191,q:"Was kann Epistaxis verursachen?",a:`* Hypertonie / Hypertensive Krise\r
	* Verletuzungen\r
	* Infekte\r
	* Blutverdünner`,t:"Circulation"},{id:192,q:"Was tun bei Nasenbluten?",a:`* OK erhöht, Kopf nach vorne (kein Blut soll in Magen rinnen)\r
	* Nasenflügel zusammenpressen\r
	* Nicht tamponieren!\r
	* Nacken kühlen\r
	* Vitalzeichen kontrollieren\r
	* Bodycheck durchführen`,t:"Circulation"},{id:193,q:"Was kann einen Arteriellen Gefäßverschluss verursachen?",a:`* Eingeschwemmter Thrombus (entsteht in Tasche in linker Herzhälfte)\r
		. bei Vorhofflimmern noch wahrscheinlicher\r
	* Ateriosklerose`,t:"Circulation"},{id:194,q:"Was sind Risikofaktoren für ateriosklerose?",a:`* Rauchen\r
	* erhöhter Blutfettgehalt\r
	* hoher blutdruck\r
	* hoher Cholesterin\r
	* Diabetes`,t:"Circulation"},{id:195,q:"Was sind die Klassischen 5 Symptome eines arteriellen Gefäßverschlusses?",a:`* Pulseless - an der Betroffenen Gliedmaße ist kein Puls tastbar\r
	* Pain - art. Verschluss extrem Schmerzhaft (8-10 auf skala)\r
	* Pale - betroffene Stelle und darunter blass weil zu wenig blut\r
	* Parastheisa - Betroffene Stelle Taub\r
	* Paralysis - Betroffene stelle gelähmt`,t:"Circulation"},{id:196,q:"Was ist zu tun bei einem Arteriellen Gefäßverschluss?",a:`* Extremität tief, warm und weich lagern\r
	* Vitalzeichen kontrollieren\r
	* MDS zum Abchecken durchführen\r
	* Notarzt nach PAtientenwunsch (Schmerztherapie)`,t:"Circulation"},{id:197,q:"Welche Station ist anzufahren mit einem art. verschluss?",a:"* Gefäßchirugie",t:"Circulation"},{id:198,q:"Was sind Risikofaktoren für einen Venösen Verschluss?",a:`* Rauchen\r
	* Krampfandern\r
	* Übergewicht\r
	* Östrogen (also auch Frauen unter 60j)`,t:"Circulation"},{id:199,q:"Was sind Ursachen eines venösen Verschlusses?",a:`* Lange immobilisierung\r
	* mechanische Reizung (verengung der venen)\r
	* zu wenig getrunken`,t:"Circulation"},{id:200,q:"Was sind Symptome eines Gefäßverschluss?",a:`* Schmerzen (ziehend) aber weniger stark als bei art. Gefäßv.\r
	* Spannungs- und Schweregefühl\r
	* Druck und Bewegungsschmerz\r
	* Schwellungen Ödeme\r
	* Rötung oder Blaufärbung d. Extremität\r
	* deutlich wärmer`,t:"Circulation"},{id:201,q:"Was tun?",a:`* weich und flach -> thrombus soll sich nicht lösen\r
	* Kontrolle Vitalzeichen\r
	* MDS\r
	* Bewegungsverbot -> thrombus soll sich nicht lösen`,t:"Circulation"},{id:202,q:"Welche Station fährt man damit an?",a:"* Dermatologie",t:"Circulation"},{id:203,q:"Wie groß und schwer ist das herz?",a:`* geballte Faust\r
	* 250-350g`,t:"Circulation"},{id:204,q:"Was ist ein durschnittliches Herminutenvolumen und wie lässt es sich berechnen?",a:`* Schlagvolumen * Herzfrequenz\r
	* 5-30L (bei anstrenugn mehr)`,t:"Circulation"},{id:205,q:"Wie heißen Vorhof, Kammer mit Fachbegriff?",a:`* Atrium\r
	* Ventrikel`,t:"Circulation"},{id:206,q:"Wie heißen die Klappen zwischen Vorhof und Kammer?",a:"* Segelklappen",t:"Circulation"},{id:207,q:"Wie heißen die Klappen zwischen Kammer und Aorta/Lungenarterie?",a:"* Taschenklappen",t:"Circulation"},{id:208,q:"Was ist die Aufgabe der Klappen?",a:"* Rückstrohm verhindern",t:"Circulation"},{id:209,q:"Wie funktioniert das Herz beim Schlag?",a:`* Segelklappen geschlossen (kein Blut fließt aus Kammer zu vorhof)\r
	* Kammern kontrahieren\r
	* Taschenklappen offen`,t:"Circulation"},{id:210,q:"In der Entspannung?",a:`* Segelklappen offen\r
	* Taschenklappen verhindern rückstrom\r
	* Atrien kontrahieren\r
	* Blut aus atrium strömt in kammer`,t:"Circulation"},{id:211,q:"Wie wird der Herzmuskel selbst versorgt?",a:`* Herzkranzgefäße / Koronargefäße\r
	* Entspringen direkt aus der Aorta über der Aortenklappe`,t:"Circulation"},{id:212,q:"Welche Stationen nimmt der Reiz bei der Herz-Kontraktion?",a:`* Erzeugt im Sinusknoten\r
	* Geht zu AV-Knoten -> Atrien Kontrahieren\r
	* Nach unten zu Kammer -> Kammern kontrahieren`,t:"Circulation"},{id:213,q:"Was für Zellen erzeugen den reiz/geben ihn wieter?",a:"* spezifische Muskelfasern",t:"Circulation"},{id:214,q:"Wie wird die Herzfrequenz bestimmt?",a:"* Sinusknoten löst normalerweise 60-80/min aus, moduliert durch Sympathicus",t:"Circulation"},{id:215,q:"Was passiert wenn der Sinusknoten keinen Reiz erzeugen/weitergeben kann?",a:`* Der av knoten schwingt mit 40-60/min\r
	* restliches System wenn auch av knoten kaputt: 20-40/min`,t:"Circulation"},{id:216,q:"Wie funktioniert hier ein Defi?",a:`* wenn unkontrollierte impulse bei kammern:\r
		. Alle Zellen gelichzeitig angeregt -> reset`,t:"Circulation"},{id:217,q:"Wofür steht MCI?",a:"* Myokardinfarkt -> Herzinfarkt",t:"Circulation"},{id:218,q:"Was löst einen MCI aus?",a:`* Ateriosklerose\r
		. Blutfett erhöht\r
		. Übergeweicht\r
		. Diabetes\r
		. Nikotin\r
		. Bluthochdruck`,t:"Circulation"},{id:219,q:"Was ist AP?",a:`* Angina Pectoris\r
	* Brustenge\r
	* Minderdurchblutung des Herzens`,t:"Circulation"},{id:220,q:"Was löst AP aus?",a:`* Arteriosklerose -> Gefäße verengt aber noch nicht verschlossen (das wäre MCI)\r
	* Verkrampfung der Gefäße`,t:"Circulation"},{id:221,q:"Ursachen?",a:`* Belastung\r
	* Nikotin\r
	* Kälte`,t:"Circulation"},{id:222,q:"Was passiert bei einem MCI?",a:`* manche Koronargefäße ganz verschlossen\r
	* Teil des muskels nicht versorgt -> stirbt ab`,t:"Circulation"},{id:223,q:"Was deutet einen MCI im vorhinein an?",a:"* AP, wenn durch ASKL ausgelöst, da ASKL platzt und Gefäß nun ganz verschlossen",t:"Circulation"},{id:224,q:"Was sind überlebenschancen bei MCI?",a:"* 30% Tödlich, davon 50% innerhalb der ersten 60 min nach Symptombeginn",t:"Circulation"},{id:225,q:"Was sind Symptome eines MCI?",a:`* Blass, Kaltschweißig\r
	* Druckgefühl in der Brust\r
	* Thorax-Schmerz (retrosternal, brennend)\r
	* Ausstrahlung der Schmerzen\r
	* Vernichtungsgefühl, Todesangst\r
	* Überlkeit\r
	* Erbrechen\r
	* Kombination von mehreren davon\r
	* Abnormale Herzfrequenz\r
	* erhöhte AF`,t:"Circulation"},{id:226,q:"Wann können MCIs mit sehr wenigen Symptomen auftreten?",a:"* Diabetikern, da Nerven in der Brust abgestorben -> kein schmerz",t:"Circulation"},{id:227,q:"Was sind Maßnahmen bei einem MCI?",a:`* OK 45° lagern\r
	* O2 wenn SpO2 unter 90 [außer wenn Schock, Zyanose, ... dann auch über 90%]\r
	* Vitalzeichen Überwachen\r
	* Notarzt\r
	* Reanimationbereitschaft\r
	* Bewegungsverbot\r
	* Wärmeerhalt`,t:"Circulation"},{id:228,q:"Was ist ein kardiogener Schock?",a:"* Herz kann nicht genug Blut pumpen -> schlechte Versorgung trotz außreichendem Volumen",t:"Circulation"},{id:229,q:"Was sind Ursachen eines kardi. SChock?",a:`* MCI wenn arg\r
	* Herzrhytmusstörungen`,t:"Circulation"},{id:230,q:"Was sind Symptome eines kardiogenen Schocks?",a:`* blässe\r
	* kaltschweißig\r
	* niedriger Blutdruck\r
	* möglw. MCI symptome\r
	* möglw. Lungenödemsymptome\r
	* bewusstseinstrübung`,t:"Circulation"},{id:231,q:"Was tun beim kardiogenen Schock?",a:`* SSL\r
	* 15L O2\r
	* Überwachung d Vitalzeichen\r
	* Notarzt\r
	* Wärmeerhalt\r
	* REanimationsbereitschaft`,t:"Circulation"},{id:232,q:"Was ist der Normbereich der HF?",a:"* 60-100",t:"Circulation"},{id:233,q:"Was sind normale Gründe für niedrige HF?",a:`* in ruhe sein\r
	* Sportler haben generell niedrigeren ruhepuls\r
	* Medikamente`,t:"Circulation"},{id:234,q:"Wann ist -HF ein symptom?",a:`* beruhigungsmittel (opiate)\r
	* Hirnblutung/Hirndruck -> Druckpuls \r
	* Erregungsleitungsstörungen (unterversorgung Sinus/Av knoten):\r
		. mit Schwindel\r
		. Synkopen`,t:"Circulation"},{id:235,q:"Wann ist Tachykardie normal?",a:"* Anstrengung, Aufregung",t:"Circulation"},{id:236,q:"Wann ist es ein Symptom?",a:`* AUfputschmittel\r
	* Sympathikus\r
	* Fieber\r
	* Erregungsleitungsstörungen: Vorhofflimmern, MCI\r
		. arrhytmischer puls\r
		. schwindel\r
		. Atemnot`,t:"Circulation"},{id:237,q:"Was tun bei verdacht auf Erregungsleitungsstörungen?",a:`* Lagerung nach Patientenzustand\r
		. B-Los SSL\r
		. Ok erhöht\r
	* O2 wenn benötigt (97% Zielsättigung)\r
	* Vitalwerte überwachen\r
	* Notarzt\r
	* Reanimationsberreitschaft\r
	* Bewegungsverbot`,t:"Circulation"},{id:238,q:"Was kann zu einer Linksherzinsuffizienz führen?",a:`* Chronisch\r
		. Hypertonie\r
		. St. p. MCI\r
		. virale Infekte (Herzmuskelinsuffizienz)\r
	* akut\r
		. MCI\r
		. Hypertensive Krise\r
		. Rhytmusstörungen`,t:"Circulation"},{id:239,q:"Was sind beschwerden bei einer Chronischen Linksherzinsuffizienz?",a:`* Lungenstauung: Bronchialschleimhäute geschwollen -> Dispnoe (v.a. im Liegen)\r
	* O2 je nach Zustand geben`,t:"Circulation"},{id:240,q:"Wie kommt es zu einer rechtsherzinsuffizienz?",a:`* akute\r
		. MCI\r
		. Lungenembolie\r
	* chronische\r
		. lange ASthma/COPD (Blutgefäße abgedrückt)\r
		. chronische Linksherzinsuffizient`,t:"Circulation"},{id:241,q:"Was sind symptome einer akuten rechtsherzinsuffizienz?",a:"* -RR",t:"Circulation"},{id:242,q:"Was ist zu tun?",a:"* Ursache (MCI/Lungenembolie behandeln)",t:"Circulation"},{id:243,q:"was sind Symptome einer Chronischen Rechtsherzinsuffizienz?",a:`* Wegdrückbare Ödeme in beiden Beinen\r
	* Aszites (Bauchwassersucht, also Wasser in der Bauchhöle)`,t:"Circulation"},{id:244,q:"Was ist die Aufgabe des Kleinhirns?",a:"* Inverse Kinematik",t:"Disability"},{id:245,q:"Wie sind die Hirnhäute aufgebaut, von oben nach unten?",a:`* Knochen\r
	* Dura Mater - Harte Hirnhaut\r
	* Arrachnoidea - Spinnwebenhaut\r
	* Pia mater - Weiche Haut`,t:"Disability"},{id:246,q:"Wie lässt sich das Nervensystem anatomisch einteilen?",a:`* Zentral\r
	* Peripher`,t:"Disability"},{id:247,q:"Wie funktionel?",a:`* somatisch -> willkürlich\r
	* autonom -> unwillkürlich`,t:"Disability"},{id:248,q:"Welchen einfluss haben Sympathicus/Parasympathicus?",a:`* +HF/HF\r
	* +Herzkraft/-Herzkraft\r
	* +Bronchienweite/-Bronchienweite\r
	* +Pupillenweite/-Pupillenweite\r
	* -Verdauung/+Verdauung`,t:"Disability"},{id:249,q:"Wie lässt sich die Bewusstseinslage mit Fachbegriffen einteilen?",a:`* Solomnenz: leicht schläfirg/eingetrübt\r
	* Sopor: starke eintrübung, nicht ansprechbar, nur auf Schmerzreize reagieren\r
	* Koma: gar keine Reaktionen mehr, keine Schutzreflexe`,t:"Disability"},{id:250,q:"Wie kann man orientiert sein?",a:`* Z\r
	* O\r
	* P\r
	* S`,t:"Disability"},{id:251,q:"Was ist eine Synkope?",a:"* Plötzliche Bewusstlosigkeit die aber schnell wieder vorbeigeht",t:"Disability"},{id:252,q:"Wodurch wird sie ausgelöst?",a:"* Minderdurchblutung",t:"Disability"},{id:253,q:"Was sind Präsynkope-symptome?",a:`* Schwindel\r
	* Flimmern\r
	* Schwarz for Augen\r
	* Blässe\r
	* Übelkeit\r
	* Pupillen nach oben`,t:"Disability"},{id:254,q:"Was tun bei Präsynkopesymptomen?",a:"* Hinlegen/Hinsetzen",t:"Disability"},{id:255,q:"Was für Ursachen können zu einer Synkope führen?",a:`* Kreislauf\r
		. Lageänderung\r
		. Schreck\r
		. Vena Cava Kompressionsyndrom\r
		. ...\r
	* Kardiale\r
		. Abmormale herzfrequenz\r
		. Herzinsuffizienz\r
		. Rhytmusstörungen\r
		. Herzklappen kapput`,t:"Disability"},{id:256,q:"Welche 2 Symptome werden oft unter Schwindel zusammengefasst?",a:`* systematischer Schwindel (Vertigo, Dreh- oder Wankschwindel)\r
	* unystematischer Schwindel (Eng.: Dizziness)`,t:"Disability"},{id:257,q:"Wie kommt es zu Vertigo?",a:`* 3 Lgeichgewichtssysteme (Innenohr, Auge, Information über muskellage im raum) stimmen nicht überein\r
	* zB Karussel: Innenohrflüssigkeit dreht sich weiter obwohl auge sieht dass sich nicht mehr dreht`,t:"Disability"},{id:258,q:"Wie kommt es zu unsystematischem Schwindel",a:`* Sensoren unterversorgt\r
	* Symptom bei\r
		. Hypoglykämie\r
		. Herzrhytmusstörungen\r
		. Präsynkope\r
		. Hypotonie`,t:"Disability"},{id:259,q:"Welche formen kann systematischer Schwindel annehmen?",a:`* Dreh-\r
	* Wank-\r
	* Liftschwindel`,t:"Disability"},{id:260,q:"Wo ist systematischer Schwindel unter anderem ein Symptom?",a:`* gutatiger Lagerungsschwindel\r
	* Entzündung d. Gleichgewichtnervs\r
	* Altersschwindel\r
	* ....`,t:"Disability"},{id:261,q:"Was verursacht gutartigen Lagerungsschwindel?",a:"* Steinchen im Gleichgewichtsorgan brauchen sehr lange um nach Lagerungsänderung zu Ruhe zu kommen",t:"Disability"},{id:262,q:"Was sind Symptome für gutartigen Lagerungsschwindel?",a:`* tritt immer bei Lagerungsänderungen auf\r
	* dauert sekunden bis zu mehrere minzten\r
	* Oft Übelkeit, Erbrechen\r
	* Auch Kleinste Kopfbewegungen lösen Drehschwindel aus`,t:"Disability"},{id:263,q:"Was sind symptome für eine Entzüdnung des Gleichgewichtnervs?",a:`* Krankheitsgefühl\r
	* Starke Überlkeit und Erbrechen\r
	* Heftiger Drehschwindel, verstärkt durch Lagerungsänderung`,t:"Disability"},{id:264,q:"Was ist Morbus Meniere? Welche Symptome sind typisch?",a:`* seltene, noch nicht ganz erforschte Erkrankung\r
	* Drehschwindelattacken\r
		. mehrere male pro Woche\r
		. 20 mintuen - Stunden andauendt\r
	* Übelkeit\r
	* Erbrechen\r
	* Ohrgeräusche, schwerhörigkeit, Druckgefühl auf betroffenen Ohr`,t:"Disability"},{id:265,q:"Was kann sonst SChwindel auslösen?",a:`* Angst, Psychische Belastung va bei Depression/Angeststörung\r
	* Intoxikationen\r
	* Seekrank, Reisekrank, ...`,t:"Disability"},{id:266,q:"Was versteht man unter Alterschwindel?",a:`* Schwindel der im Alter auftritt wegen Veränderungen im Gleichgewichtsorgan, Augen oder Bewegungsaparat\r
	* Unterschiedleicher Schwindel/Dauer\r
	* Zunahme im Dunkeln\r
	* Gangunsicher`,t:"Disability"},{id:267,q:"Was ist Diabetes mellitus?",a:"* Stoffwechsel-Störung im Zuckerhaushalt",t:"Disability"},{id:268,q:"Was ist die Aufgabe von insulin?",a:"* Transportiert Zucker aus dem Blut in die Körperzellen",t:"Disability"},{id:269,q:"Wo wird Insulin normalerweise Hergestellt?",a:"* Pankreas in den Beta-Zellen",t:"Disability"},{id:270,q:"Was ist Diabetes mellitus Typ 1?",a:`* Meißt schon im Kinder/Jugendalter\r
	* Autoimmunerkrankung, Beta-Zellen zerstört\r
	* Insulin muss von außen zugeführt werden`,t:"Disability"},{id:271,q:"Was ist Diabetes mellitus Typ 2?",a:`* im alter und bei ungesunden Lebensstil\r
	* zu viel Zucker aufgenommen -> viel Insulin produziert\r
	* Immer mehr insulin notwendig weil Zellen daran gewöhnt (Insulinrezeptoren weniger Empfindlich)\r
	* Irgendwann kann nicht mehr Insulin produziert werden -> muss zugeführt werden`,t:"Disability"},{id:272,q:"Was ist Hypoglykämie",a:"* BZ unter 70",t:"Disability"},{id:273,q:"Was kann Hypoglykämie auslösen?",a:`* zu viel Insulin/Antidiabetika\r
	* nichts gegessen\r
	* Starke Anstregung (Fieber)\r
	* Alkoholkonsum`,t:"Disability"},{id:274,q:"Was passiert bei Hypoglykämie?",a:"* Gehrin zu wenig zucker -> aktiviert Sympathikus",t:"Disability"},{id:275,q:"Was sind Symptome bei Hypoglykämie?",a:`* blass, kaltschweißig\r
	* +HF\r
	* Hunger\r
	* Unkonzentriertheit\r
	* Müdigkeit\r
	* Abnormales Verhalten (Verwirrt, Agressiv)\r
	* Abnormale Sprache\r
	* Motorik eingeschränkt\r
	* Krampfanfälle\r
	* Bewusstseinseintrübung bis zu Koma`,t:"Disability"},{id:276,q:"Maßnahmen bei Hypo?",a:`* Lagerung nach zustand, wenn nicht eingetrübt OK erhöht\r
	* O2 wenn benötigt\r
	* Kontrolle/überwachung je nach Zustand\r
	* Neurocheck\r
	* Notarzt wenn eingetrübt oder B-Los\r
	* Wenn nicht stark Bewusstseinsauffällig:\r
		. Zuckerzufuhr (Zucker, dann Langkettige KH)\r
	* Immer Hospitalisieren!`,t:"Disability"},{id:277,q:"Was ist Hyperglykämie?",a:`* Blutzucker zu hoch (>250)\r
	* Passiert langsam`,t:"Disability"},{id:278,q:"Was sind Ursachen für Hyperglykämie?",a:`* undiagnostiziertes Diabetes\r
	* falsche/fehlende Medikamente\r
	* zu wenig Insulin\r
	* zu viel Zucker\r
	* Infektion`,t:"Disability"},{id:279,q:"Was passiert bei Hyperglykämie?",a:`* zu wenig Insulin um Zucker in Körperzellen zu verfrachten\r
	* mobilisieren mehr Zucker weil Unterversorgt\r
	* BZ steigt weiter\r
	* Fettsäuren abgebaut -> ketose`,t:"Disability"},{id:280,q:"Was sind Symptome von Hyperglykämie?",a:`* Tachypnoe\r
	* Acetongeruch in Ausatemluft\r
	* Viel Urinieren\r
	* HF erhöht\r
	* Trockene Haut/Schleimhaut\r
	* starker Durst\r
	* Bewusstseinstrübung/Koma`,t:"Disability"},{id:281,q:"Amßnahmein bei Hyperglykämie?",a:`* Lagerung nach Zustand\r
	* O2 wenn benötigt\r
	* Vitalwerte überwachen wenn eingetrübt\r
	* Notarzt wenn eingetrübt\r
	* Flüssigkeit geben wenn nicht Bewusstseinsauffällig`,t:"Disability"},{id:282,q:"Wie sagt man zu einem Schlaganfall mit Fachbegriff?",a:"* Insult",t:"Disability"},{id:283,q:"Welche 2 Ursachen kann ein Insult haben?",a:`* Minderdurchblutung (Hirnischämie)\r
	* Hirnblutung`,t:"Disability"},{id:284,q:"Was ist ein TIA?",a:`* Transitorische ischämische attacke -> Vorrübergehende Minderdurchblutung\r
	* 12 minuten symptome\r
	* Vorbote für Hirninfarkt`,t:"Disability"},{id:285,q:"Welche Blutungstypen können zu einem Insult fürhen?",a:`* Subarachnoedalblutung\r
	* Intercerebralblutung`,t:"Disability"},{id:286,q:"Wie lässt sich eine TIA präklinisch von einem Infarkt unterscheiden?",a:"* Nicht",t:"Disability"},{id:287,q:"Was verursacht einen ischämischen Insult?",a:`* Embolus eingeschwemmt von Vorhofflimmern, Herzklappenerkrankung, Carotis\r
	* ASKL vor ort\r
	* Verengung der Halsschlagader`,t:"Disability"},{id:288,q:"Was kann eine Intercerebralblutung verursachen?",a:`* ASKL\r
	* Hypertonie\r
	* Blutverdünner\r
	* Drogen\r
	* Gefäßmissbildung`,t:"Disability"},{id:289,q:"Was kann zusätzlich eine Subarachnoidalblutung auslösen?",a:"* Aneurisma (Gefäßwand verdünnt sich)",t:"Disability"},{id:290,q:"Welche Symptome träten bei einem Insult auf?",a:`* Unterschiedlcih \r
	* Alle neurologisch\r
	* abhängig von betroffenem Areal\r
	* Typische Symptome:\r
		. motorische Schwächen\r
		. Hemiparese\r
		. Gesichtslähmungen\r
		. Kopfweh\r
		. Sprachstörungen\r
		. Sehstörungen\r
		. Gleichgewichtsstörung\r
		. selten Cheyne Stokes`,t:"Disability"},{id:291,q:"Wie lässt sich eine Ischämie und eine Hirnblutung unterscheiden?",a:`* Bei Ischämie Symptome plötzlich und unverändert\r
	* Bei Blutung auch plötzlich aber immer schlimmer werdend`,t:"Disability"},{id:292,q:"Was sind Maßnahmen bei Ischämie?",a:`* OK 30° erhöht\r
	* O2 auf 94-98% Zielsättigen\r
	* BZ messen (Hypoglykämie)\r
	* Vitalzeichen + GCS überwachen -> wenn verschlechterung eher Hirnblutung\r
	* Neurocheck\r
	* NA nur wenn wirklich Vitalparameter extrem problematisch (RR bis 220 tolerierbar)\r
	* Stroke Unit so schnell wie möglich`,t:"Disability"},{id:293,q:"Was sind innerklinische Therapieformen für Ischämie?",a:`* <4.5h Lyse\r
	* Thrombektomie (entfernen von THrombus) bei schweren Anfällen`,t:"Disability"},{id:294,q:"Wie lässt sich ein schwerer SChlaganfall von einem leichten unterscheiden?",a:`* APSS < 4 -> leicht\r
	* APSS >= 4 -> schwer`,t:"Disability"},{id:295,q:"Was ist wichtig zu merken beim APSS?",a:"* nicht für diagnose geeignet",t:"Disability"},{id:296,q:"Was sind symptome bei einer Blutung?",a:`* Gleiche wie bei Ischämie\r
	* Folgende Symptome erhöhen wahrscheinlichkeit für Blutung:\r
		. Pupillendifferenz\r
		. Unruhe\r
		. Übelkeit, Erbrechen\r
		. Biot\r
		. BEwusstseinstrübung/Koma\r
		. Druckpuls\r
		. Verschlechterung\r
		. Bei Subarachnoidalblutung: Nackensteife`,t:"Disability"},{id:297,q:"Was sind Maßnahmen bei einer Blutung?",a:`* Lagerung nach zustand\r
		. Wenn B-Los SSL\r
		. sonnst 30°\r
	* O2 94-98\r
	* BZ messen\r
	* Vitalzeichen + GCS überwachen\r
	* Nerocheck und Meningismustest\r
	* Notarzt\r
	* Reanimationsbereitschaft`,t:"Disability"},{id:298,q:"Wodurch können Krampfanfälle ermöglicht werden?",a:`* genetisch\r
	* symptomatisch\r
		- SHT, Blutungen, St. p. Insult, Tumor\r
		- Hypoglykämie\r
		- Meningitis\r
		- Eklampsie\r
		- Fieberkrampf`,t:"Disability"},{id:299,q:"Welche Art von Krampf ist für uns relevant?",a:"* tonisch-klonischer Krampfanfall / Grand Mal",t:"Disability"},{id:300,q:"Welche Faktoren können einen Krampfanfall auslösen?",a:`* Alkoholentzug\r
	* visuelle Reize\r
	* Schlafentzug\r
	* Absetzen von Antiepileptiker`,t:"Disability"},{id:301,q:"Was ist der Unterschied zwischen fokalem und generalisierten Anfall?",a:`* Fokal betrifft nur eine einzige Hirnregion\r
	* Generalisiert ist ganzes Hirn betroffen -> tonisch-klonischer Anfall\r
	* Vor generalisiertem Anfall meist fokaler`,t:"Disability"},{id:302,q:"Was ist die Aura?",a:`* Fokaler Anfall als Vorbote für einen Generalisierten\r
	* Symptome: Sinnestäuschungen (Seh- Hör- Geruchs- Geschmacksstörungen, Kribbeln, Taubheitsgefüghl, Wärmegefühl)`,t:"Disability"},{id:303,q:"Wie ist die Tonische Phase?",a:`* Streck oder Beugekrampf\r
	* 10-30 sek\r
	* möglw. Inertialschrei\r
	* Patient stürzt zu boden\r
	* Bewzusstseinstrübung\r
	* Atemstillstand`,t:"Disability"},{id:304,q:"Klonische Phase",a:`* 3-5 Minuten\r
	* rhytmisches Zucken\r
	* Zungenbiss\r
	* SChaum vorm Mund\r
	* Lichtstarre Pupillen, gerader/Schräger starrer Blick\r
	* Harn- oder Stuhlabgang`,t:"Disability"},{id:305,q:"Maßnahmen während Anfall",a:`* Patient vor verletzungen schützen (spitze Gegenstädne weg, evtl mit Decke abpolstern)\r
	* Anfall abwarten\r
	* O2 Dusche 15L\r
	* Notarzt\r
	* Reanimationsbereitschaft`,t:"Disability"},{id:306,q:"Was ist die Nachschlafphase?",a:`* Person schwer erqweckbar/schläfrig/verwirrt/abwesend/wach\r
	* Dauert Minuten bis Stunden\r
	* Während Phase Krampfanfall nicht erinnerlich (retrograde Amnesie)\r
	* Unterschiedlich Person zu Person`,t:"Disability"},{id:307,q:"Maßnahmen nach Kramnpfanfall?",a:`* Lagerung nach Zustand\r
		. B-klar: OK erhöht\r
		. sonst SSL\r
	* O2 bei Bedarf\r
	* Vitalwerte krontrollieren\r
	* BZ messen (Hypo)\r
	* BC, NC\r
	* Notarzt eig nicht notwendig`,t:"Disability"},{id:308,q:"Was sind wichtige Anamnesefragen bei Krampfanfall?",a:`* Durch Krampfanfall gestürzt?\r
	* Krampfanfall bekannt?\r
	* Medikammente? Eingenommen?\r
	* Drogen, Alk, andere provozierende Faktoren?`,t:"Disability"},{id:309,q:"Was ist Status Epilepticus?",a:`* Krampf länger als 5 min\r
	* Mehrere Anfälle ohne zu Bewusstsein zu kommen\r
	* Lebensbedrohlich!!\r
	* NA!`,t:"Disability"},{id:310,q:"Wie wird die Körpertemp geregelt?",a:`* Hypothalamus: Thermostat d Körpers\r
	* Schwitzen\r
	* Eng/Weitstellung peripherer Gefäße\r
	* Zittern\r
	* Bewegung\r
	* Bei Neugeborenen: Wärmererzeugung in Braunen Fettgewebe`,t:"Disability"},{id:311,q:"Was ist ein Sonnenstich? Symptome?",a:`* Intensive Sonnenenstrahlung\r
	* Reizung von Hirnhaut und -gewebe\r
	* Schwindel\r
	* Übelkeit\r
	* Rötung, heiße haut\r
	* Meningismus\r
	* Übelkeit, Erbrechen, Schwindel\r
	* Körpertemp evlt leicht erhöht\r
	* Symptome möglw. stunden nach einstrahlung bei kindern und säuglingen`,t:"Disability"},{id:312,q:"Maßnahmen Sonnenstich?",a:`* kühler ort ohne Sonne\r
	* Kalte Wickel an Kopf und Nacken\r
	* OK Erhöht\r
	* NC + Meningismus\r
	* Vitalkontrolle`,t:"Disability"},{id:313,q:"Welche typen von Hitzenotfall unterscheidet man?",a:`* Hitzeerschöpfung (<40°C)\r
	* Hitzeschlag (>40°C)`,t:"Disability"},{id:314,q:"Was ist Hitzeerschöpfung? Symptome?",a:`* Wasser, Elektrolytverlust durch Schwitzen\r
	* Thermoregulation noch normal\r
	* Möglw. Vorstufe Hitzeschlag\r
	* Symptome\r
		. Übelkeit\r
		. Schwindel\r
		. Erbrechen\r
		. Kopfweh\r
		. Schweißige haut\r
		. + AF, + HF\r
		. T normal bis 40°`,t:"Disability"},{id:315,q:"Maßnahmen Hitzeerschöpfung?",a:`* kühle Umgebung\r
	* Lagerung nach Zustand\r
	* kontrolle/überwachung Vitalzeichen (überwachung wenn richtung hitzeschlag)\r
	* NA nach Zustand`,t:"Disability"},{id:316,q:"Was ist Hitzeschlag?",a:`* Temp über 40\r
	* Thermoregulation funktioniert nicht mehr\r
	* Organdysfunktion bis zu Versagen (immer ZNS betroffen)\r
	* akute Lebensgefahr\r
	* 2 Typen\r
		. klassischer Hitzeschlag: (klein)kinder + ältere bei hoher umgebungstemp\r
		. anstrengungshitzeschlag: extreme Anstrengung bei hoher temp`,t:"Disability"},{id:317,q:"Symptome Hitzeschlag?",a:`* Körpertemp > 40\r
	* evtl trockene Haut\r
	* Kopfweh, Übelkeit, Erbrechen\r
	* -RR, Arrhytmia\r
	* Bewusstseinstrübung bis koma\r
	* Krampfanfälle\r
	* Andere Organe versagen`,t:"Disability"},{id:318,q:"Maßnahmen Hitzeschlag?",a:`* Kühlere Umgebung\r
	* Abkühlen (Ziel <39°, Coolpack achsel/leisten)\r
	* SSL\r
	* 15L O2\r
	* Überwachung Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft`,t:"Disability"},{id:319,q:"Wann spricht man von Unterkühlung?",a:"* < 35°",t:"Disability"},{id:320,q:"Wie lässt sich UNterkühlungssymptomatik unterteilen?",a:`* leicht\r
		. Vasokonstriktion -> Zentralisierung\r
		. periphere Zyanose\r
		. +FH, +AF\r
		. Zittern\r
		. Bewusstsein normal\r
	* moderat\r
		. Vasodilatation\r
		. -HF, -AF, -RR\r
		. kein Zittern, sondern Starre\r
		. B-trübung\r
	* schwere\r
		. minimaler Kreislauf/Kreislaufstillstand\r
		. Scheintod\r
		. keine Schmerz-/Pupillenreflexe`,t:"Disability"},{id:321,q:"Maßnahmen leichte Unterkühlung?",a:"* Aktives Aufwärmen",t:"Disability"},{id:322,q:"Maßnahmen moderat/schwer?",a:`* Patient mögl wenig bewegen\r
	* SSL\r
	* 15L O2\r
	* Vitalparam Überwachen\r
	* NA\r
	* Reanimtionsbereitschaft\r
	* Wärmeerhalt (kein Aufwärmen!)`,t:"Disability"},{id:323,q:"Was sind häufige Vergiftungen?",a:`* Schlaf/Beruhingungsmittel\r
	* Schmerzmittel\r
	* Neuroleptika\r
	* Antidepressiva\r
	* Alk + Med\r
	* Alkohol\r
	* Andere Drogen`,t:"Disability"},{id:324,q:"Was sind die 4 stadien einer Alkoholvergiftung?",a:`* Exzitationsstadium (0.2-2 prom)\r
		. Enthemmung\r
		. verlängerte Reaktionszeit\r
		. verminderte Schmezrwahrnehmung\r
		. Gleichgewichtsstörung\r
		. undeutliche Sprache\r
	* Rauschstadium (2-2,5 prom)\r
		. Muskelschlaffheit\r
		. evtl. aggressiv\r
		. Erbrechen\r
		. Übelkeit\r
		. Amnesie\r
		. Sprachstörung\r
		. enge Pupillen\r
	* Narkose (2,5-4 prom)\r
		. B-Los\r
		. keine Schmerzreaktion\r
		. Puillen unterschiedlich, träge reaktiv\r
		. -RR\r
	* Asphyxie (>4 prom)\r
		. Koma\r
		. Keine Reaktionen/reflexe mehr\r
		. Ateminsuffizienz\r
		. pupillen nicht reaktiv, weit geöfnet`,t:"Disability"},{id:325,q:"Maßnahmen Alk intox",a:`* Lagerung nach zustand\r
		. klar: flach/leiucht ok erhöht\r
		. eingetrübt: SSL\r
	* O2 wenn benötigt\r
	* BZ (Hypoglyk)\r
	* Überwachung Vitalzeichen + GCS\r
	* NC, BC\r
	* NA wenn B-Los\r
	* Wärmeerhalt`,t:"Disability"},{id:326,q:"Was sind Typische Abdomensymptome?",a:`* Übelkeit\r
	* Erbrechen\r
	* Durchfall\r
	* Fieber\r
	* Gastrointestinale Blutungen`,t:"Environment"},{id:327,q:"Wie lääst sich die Location einer Blutung bei Blut im Erbrochenen feststellen?",a:`* "Dunkelheit" d Blutes -> je dunkler desto Verdauter -> niedriger\r
	* Schwarzes Erbrechen / Kaffeesatz -> Magenblutung\r
	* Helles Blut -> Ösophargusvarizenblutung`,t:"Environment"},{id:328,q:"Was ist die große Gefahr bei Gastrointestinalen Blutungen?",a:"* Hypovolämer Schock",t:"Environment"},{id:329,q:"Was ist der Fachbegriff für das Bauchfell?",a:"* Peritonem",t:"Environment"},{id:330,q:"Was ist eine akutes Abdomen?",a:`* Entzündung/Reizung d Bauchfells -> Bretthart\r
	* potentiel Lebensbedrohlich\r
	* Entzündung, Blutungen, ....\r
	* Bildet sich über Stunden/Tage`,t:"Environment"},{id:331,q:"Wie ist der Verlauf bei einer Perforation eines Hohlorgans?",a:`* Bildet Über Stunden-Tage\r
	* Bakterien in Bauchraum -> Entzündung\r
	* Möglw. Sepsis/Spetischer Schock als folge`,t:"Environment"},{id:332,q:"Was kann ein akutes Abdomen auslösen?",a:"* Blutung im Bauchraum reizt Peritonem",t:"Environment"},{id:333,q:"WIe ist der Verlauf bei einer Gastrointestinalen/Gynäkologischen Blutungen",a:"* Schnelle Entwicklung",t:"Environment"},{id:334,q:"Was sind Symptome eines akuten Abdomen?",a:`* Anfänglich Abwehrspannung\r
		. Bei perforationen möglw. nur in einem Segment\r
	* Später Brettharte Bauchdecke\r
	* Heftige Schmerzen\r
	* Schonhaltung\r
	* Möglw. Übelkeit\r
	* Möglw. Erbrechen\r
	* Tachypnoe\r
	* RR niedrig\r
	* Tachykard\r
	* Eintrübung\r
	* Andere Symptome Hypovolämer Schock\r
	* wenn Blutung: blass, kaltschweißig`,t:"Environment"},{id:335,q:"Was tun bei akutem Abdomen?",a:`* Lagerung nach Zustand\r
		. klare Bewusstseinslage: flach\r
		. eingetrübt: SSL\r
	* O2 auf 97% sättigen\r
	* Überwachen der Vitalzeichen\r
	* Wärmeerhalt\r
	* Keine Nahrung- oder Flüssigkeit (OP!)\r
	* NA\r
	* Reanimationsbereitschaft`,t:"Environment"},{id:336,q:"Welche Organe findet man im Oberen rechten quadranten?",a:`* Leber\r
	* Gallenblase\r
	* 12 Finger Darm\r
	* Dickdarm`,t:"Environment"},{id:337,q:"Welche oben links?",a:`* Milz\r
	* Magenblutung\r
	* Pankreas\r
	* Ösophargus\r
	* Dickdarm`,t:"Environment"},{id:338,q:"Links unten?",a:`* Vorne\r
		. Dünndarm\r
		. Dickdarm\r
		. Eileiter\r
	* Hinten\r
		. Niere\r
		. Harnleiter`,t:"Environment"},{id:339,q:"Rechts Unten?",a:`* Vorne\r
		. Appendix\r
		. Dünndarm\r
		. Dickdarm\r
		. Eileiter\r
	* Hinten\r
		. Niere\r
		. Harnleiter`,t:"Environment"},{id:340,q:"Was ist in der mitte?",a:`* Pankreas\r
	* Bauchaorta\r
	* Harnblase\r
	* Uterus`,t:"Environment"},{id:341,q:"Was verursacht Gastritis?",a:`* Bakterien\r
	* Kaffe, Nikotin, Alkohol\r
	* Ernährung (Scharf, Fettig, gebraten)\r
	* Stress\r
	* Meds`,t:"Environment"},{id:342,q:"Was sind Symptome für Gastritis?",a:`* Völlegefühl\r
	* Apetitlosigkeit\r
	* Erbrechen\r
	* Druckempfindlichkeit d Magens\r
	* Schmerzen nach dem Essen`,t:"Environment"},{id:343,q:"Was sind Ursachen für ein Magengeschwür?",a:"* Wie Gastritis",t:"Environment"},{id:344,q:"Was sind Symptome für ein Magengeschwür (Ulcus ventriculi/duodeni)?",a:`* Oberbauchschmeruen\r
		. Nach der Nahrungsaufnahme: Magen\r
		. Nüchtern: 12-Finger-Darm\r
		. Druck\r
		. Völlegefühl\r
		. Übelkeit`,t:"Environment"},{id:345,q:"Was sind mögliche Komplikationen eines Magengeschwürs?",a:`* Blutungen (Kann auch lebensbedrohlich sein!)\r
	* Ulcusperforationen -> Akutes Abdomen`,t:"Environment"},{id:346,q:"Welche Schmerztypen unterscheidet man bei Abdominelen Notfällen?",a:`* Perforation: Schmerzspitze am Anfang, dann immer stärker werdender Schmerz\r
	* Kolik: Auf- und abwallender Schmerz\r
	* Entzündung: Immer stärker werdender aber auch schwankender Schmerz`,t:"Environment"},{id:347,q:"Was tun bei Magengeschwür?",a:`* Lagerung nach Patientenwunsch\r
	* Vitalzeichen kontrollieren\r
	* Bodycheck\r
	* Notarzt bei verdauch auf Perforation/Blutung (akut. Abdomen)\r
	* Nahrungs/Flüssigkeitskaren`,t:"Environment"},{id:348,q:"Wie nennt man einen Darmverschluss mit Fachbegriff?",a:"* Illeus",t:"Environment"},{id:349,q:"Welche arten von Illeus unterscheidet man? Was löst die aus?",a:`* mechanischer Illeus\r
		. Verwachsung\r
		. Tumor\r
		. Gallensteine\r
	* paralytischer Illeus\r
		. Entzündungen\r
		. Nervenschädigung\r
		. Mesentrialinfarkt\r
		. Vergiftung (va Opiate)`,t:"Environment"},{id:350,q:"Was sind Symptome eines Illeus?",a:`* krampfartige (kolische) Bauchschmerzen\r
	* kein Stuhl\r
	* Übelkeit, Erbrechen (möglw. Stuhl im Erbrochenen)\r
	* Völlegefühl, Appetitlosigkeit\r
	* Meteorismus -> evtl Dyspnoe`,t:"Environment"},{id:351,q:"Was sind mögliche Komplikationen bei einem Illeus?",a:"* Bakterien gelangen in Bauchraum -> akutes Abdomen",t:"Environment"},{id:352,q:"Was tun bei Illeus?",a:`* Lagerung nach Patientenwunsch\r
	* O2 bei bedarf\r
	* Kontrulle/Überwachung je nach zustand\r
	* NA bei akutem Abdomen\r
	* Bodycheck\r
	* Nahrungs- Flüssigkeitskarenz`,t:"Environment"},{id:353,q:"Appendizitis Symptome",a:`* anfang: Oberbauchschmerzen\r
	* später: rechter Unterbauch SChmerzen\r
	* Entzündungsschmerz\r
	* McBurney Punkt, Blumberg-Zeichen\r
	* Übelkeit\r
	* Erbrechen\r
	* Fieber`,t:"Environment"},{id:354,q:"Wie lässt sich für Appendizitis testen?",a:`* 3-Eck Zwischen Nabel und Hüftschaufeln\r
	* unteres 3. auf der rechten Seite: McBurney Punkt, Schmerz`,t:"Environment"},{id:355,q:"Was tun bei Appendizitis?",a:`* Lagerung nach Patientenwunsch\r
	* Kontrolle der Vitalzeichen\r
	* Bodycheck\r
	* Nahrungs- und Flüssigkeitskarenz`,t:"Environment"},{id:356,q:"Was sind die Aufgaben der Leber?",a:`* Gallensäure produktion\r
	* Gerinnungsfaktoren produktion\r
	* Speichert Glykogen \r
	* Entgiftet`,t:"Environment"},{id:357,q:"Wie nennt man Leber mit Fachbegriff?",a:"* Hepar",t:"Environment"},{id:358,q:"Was ist die Pfortader?",a:`* Bringt Blut von Bauchorganen zur Leber -> reinigt\r
	* Vene\r
	* Alle einzelnen Bauchorgane angeschlossen`,t:"Environment"},{id:359,q:"Symptome einer Gallenkolik",a:`* kolik schmerzen rechter Oberbauch\r
	* evtl ausstrahlend in rechte Schulter\r
	* oft nach fettreicher Nahrung\r
	* Völlegefühl\r
	* Blähungen\r
	* Übelkeit\r
	* Erbrechen\r
	* evtl weißer Stuhl\r
	* evtl. Ikterus (gelbe augen)`,t:"Environment"},{id:360,q:"Was sind mögliche Komplikationen?",a:`* Entzünung\r
	* Pankreatitis\r
	* Perforation d Gallenblase (Akutes Abdomen)`,t:"Environment"},{id:361,q:"Was tun Gallenkolik?",a:`* Lagerung nach patientenwunsch\r
	* Kontrolle Vitalzeichen\r
	* Bodycheck\r
	* NA nach Patientenwunsch\r
	* Nahrungs und Flüssigkeitskarenz`,t:"Environment"},{id:362,q:"Was sind Aufgaben des Pankreas?",a:`* Herstellung von Verdauungsenzymen\r
	* Herstellung von Hormonen (Insulin, Glucagon)`,t:"Environment"},{id:363,q:"Was kann zu einer Pankreatitis führen?",a:`* vorbestehende Gallensteine\r
	* Chronischer Alkoholkonsum\r
	* -> Löst selbstverdauung aus`,t:"Environment"},{id:364,q:"Was sind Symptome einer Pankreatitis",a:`* Gürtelförmige (li u re) Schmerzen im Oberbauch \r
	* Übelkeit, Erbrechen\r
	* elastische Abwehrspannung (Gummibauch -> Abwehrspannung + Meteorismus)\r
	* Meteorismus -> evtl Atemnot`,t:"Environment"},{id:365,q:"Maßnahmen Pankreatitis?",a:`* Lagerung nach Patientenwunsch\r
	* O2 nur wenn <90% (wegen MCI!)\r
	* Kontrolle Vitalzeichen\r
	* Bodycheck\r
	* Notarzt wenn keine eindeutigen Symptome (DD MCI)\r
	* Nahrungs und Flüssigkeitkarenz`,t:"Environment"},{id:366,q:"Ösophargusvarizenblutung",a:`* Erkrankung d Leber \r
	* Leber kann nicht mehr so viel Blut aus der Pfortader verarbeiten\r
	* Blut weicht über Venen in Ösophagus, ...\r
	* Krampfadern bilden sich\r
	* Harte nahrung reißt krampfaden auf\r
	* Starke blutung`,t:"Environment"},{id:367,q:"Symptome Ösophargusvaritzenblutung",a:`* Übelkeit\r
	* Erbrechen (mit Blut, eher rot)\r
	* Gefährdung der Atemwege\r
	* hypovolämer Schock`,t:"Environment"},{id:368,q:"Ösophargusvarizenblutung Maßnahmen?",a:`* SSL\r
	* Absaugebereitschaft\r
	* 15L O2 !DUSCHE!\r
	* Überwachung der Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft\r
	* Wärmeerhalt`,t:"Environment"},{id:369,q:"Wo liegt die Milz? Was sind ihre Aufgaben?",a:`* linker Oberbauch\r
	* Umgeben von Gewebskapsel\r
	* Immunabwehr\r
	* Erythrozyten\r
	* Sehr stark durchblutet`,t:"Environment"},{id:370,q:"Was sind die Aufgaben der Niere?",a:`* Ausscheidung\r
	* Harnproduktion\r
	* Wasser- Elektrolyt- Säure-Basen-Haushalt\r
	* RR Regulation\r
	* In Nebennieren: Hormonproduktion`,t:"Environment"},{id:371,q:"Wie sind die Ableitenden Harnwege aufgebaut?",a:`* Nierenbecken: Sammelt Harn in Niere\r
	* Harnleiter\r
	* Harnblase\r
	* Harnröhre`,t:"Environment"},{id:372,q:"Wie wird akute bzw chronische Niereninsuffizienz abgekürzt?",a:"* ANV (akutes Nierenversagen) bzw CNI (Chronische Niereninsuffizeinz)",t:"Environment"},{id:373,q:"Nierenkolik?",a:"* Nierensteine im Harnleiter",t:"Environment"},{id:374,q:"Symptome Nierenkolik?",a:`* kolik schmerzen in der Flanke oder seitlicher Unterbauch, evtl. bis in Genitalbereich\r
	* oft besser beim Gehen\r
	* Übelkeit\r
	* Erbrechen\r
	* Harndrang, evtl. Blut im Harn / wenig / kein Harn`,t:"Environment"},{id:375,q:"Maßnahmen Nierenkolik?",a:`* Lagerung nach Patientenwunsch\r
	* T messen (DD Nierenbeckenentzündung/HWI)\r
	* Vitalkontrolle\r
	* NA (Schmerztherapie)`,t:"Environment"},{id:376,q:"HWI",a:`* Infektion der Harnröhre\r
	* Aufstieg der Erreger`,t:"Environment"},{id:377,q:"Symptome HWI",a:`* Schmerzen beim Urinieren (Brennen)\r
	* häufiger Harndrang, evtl nur wenig\r
	* evtl. Blut im Harn\r
	* evtl. Fieber`,t:"Environment"},{id:378,q:"Was kann einen HWI bei alten Leuten auslösen?",a:`* Wenig getrunken\r
	* Hygene WC\r
	* Katheter\r
	* schwaches Immunsystem`,t:"Environment"},{id:379,q:"Wie können sich die Symptome eines HWI bei alten Leuten unterscheiden?",a:`* fehlen/abgeschwächt sein\r
	* Va Verschlechterung Allgemeinzustand\r
		. Inkontinenz\r
		. Appetitlosigkeit\r
		. Verwirrtheit`,t:"Environment"},{id:380,q:"Welche Abschnitte hat die Wirbelsäule?",a:`* HalsWS (7, C1-C7)\r
	* BrustWS (12, Th1...)\r
	* LendenWS (5, L1)\r
	* Kreuzbein (5 verwachsene)\r
	* Steißbein (5 verwachsene)`,t:"Environment"},{id:381,q:"Wie  nennt man C1, C2 und was bilden sie?",a:`* Kopfgelenk/Genick\r
	* C1: Atlas\r
	* C2: Axis`,t:"Environment"},{id:382,q:"Wie ist ein Wirbel aufgebaut?",a:`* innen hohl (Rückenmarkskanal)\r
	* Dornenfortsatz (hi)\r
	* Querfortsätze (hi l/r)`,t:"Environment"},{id:383,q:"Aus was bestehen die bandscheiben? Was ist die Aufgabe?",a:`* Fasriger Ring mit Gallertkern\r
	* Stoßdämpfer\r
	* Wenn Kern herausrutscht: Bandscheibenvorfall`,t:"Environment"},{id:384,q:"Was ist eine Prellung?",a:`* Gewebe durch stumpfe Gewalt gequetscht\r
	* Schmerzen\r
	* Hämatom\r
	* Bewegungseinschränkung`,t:"Environment"},{id:385,q:"Wie kann man eine Prellung präklinisch von Fissuren unterscheiden?",a:"* gar nicht",t:"Environment"},{id:386,q:"Was ist eine Verstauchung?",a:`* gelenk aus pfanne raus und gleich wieder rein\r
	* Gelenkskapsel/Bänder gezerrt/gerissen\r
	* Gleiche Symptome wie Prellung nur bei Gelenk`,t:"Environment"},{id:387,q:"Wie nennt man eine Verrenkung mit Fachbegriff?",a:"* Luxation",t:"Environment"},{id:388,q:"Was ist eine Luxation?",a:`* Gelenk aus pfanne raus, kehrt nicht zurück\r
	* Optisch sichtbar (fehlstellung des Gelenks)\r
	* Aktive Bewegung nicht möglich\r
	* Außerdem wie bei Verstauchung`,t:"Environment"},{id:389,q:"Was tun bei Luxation?",a:`* Kleidung weg wenn beengend\r
	* evtl Kühlen\r
	* Schienen (MDS!!)\r
	* NICHT REPONIEREN\r
	* Kontrolle Vitalzeichen\r
	* Bodycheck\r
	* NA für Schmerztherapie oder Reposition wenn durchblutung gefährdet (MDS nicht gut)`,t:"Environment"},{id:390,q:"Welche arten von Knochenbrüchen unterscheidet man?",a:`* Fissur -> nur eingerissen\r
	* geschlossene Fraktur\r
	* offene Fraktur\r
	* Grünholzfraktur\r
		. bei Kindern/Jugendlich\r
		. Knochen bricht, aber Knochenhaut intakt`,t:"Environment"},{id:391,q:"Was sind die Symptome einer Fraktur?",a:`* Unsicher: Prellungssymptome\r
	* Sicher:\r
		. Achsenfehlstellung\r
		. Knochenreiben bei bewegung\r
		* Knochenfragmente sichtbar (offene Fraktur)`,t:"Environment"},{id:392,q:"Wo ist auch bei geschlossenen Frakturen ein Hypovolämer schock möglich? Ändert das die Maßnahmen?",a:`* Becken\r
	* Oberschenkel\r
	* JA, immer NA und RR überwachen`,t:"Environment"},{id:393,q:"Was sind Symptome für einen Oberschenkelhalsbruch?",a:`* Schmerzen\r
	* verkürztes bein\r
	* nach außen rotiert\r
	* nicht gestreckt abhebbar`,t:"Environment"},{id:394,q:"Wohin mit dem Oberschenkelhals?",a:"* OSH-Bett auf unfall abbuchen",t:"Environment"},{id:395,q:"Was sind die symptome bei einem eingestauchten OSH?",a:`* schmerzen bei belastung werden immer schlimmer -> Rettung oft erst nach tagen\r
	* Bein nur leicht nach außen geneigt`,t:"Environment"},{id:396,q:"Was sind die Schweregrade einer offenen Fraktur?",a:`* Haut durchstochen nur durch knochen\r
	* Hautwunden durch gewalt von außen\r
	* (Teil)amputation`,t:"Environment"},{id:397,q:"Maßnahmen offene Fraktur?",a:`* kleidung Weg\r
	* OP-Folie drüber\r
	* Schienen\r
	* Kontrolle/Überwachung je nach Ausmas\r
	* Bodycheck\r
	* Wärmeerhalt\r
	* O2 bei bedarf\r
	* NA!`,t:"Environment"},{id:398,q:"Was sind die Notarztkriterien bei Frakturen?",a:`* Schmerztherapie (abstimmen mit Patienten)\r
	* Blutverlust -> hypovoläm\r
	* Becken, Oberschenkel gebrochen\r
	* Bei Luxation mit beeinträchtiger Durchblutung\r
	* Alle offenen Frakturen`,t:"Environment"},{id:399,q:"Was ist ein HWS Schleudertrauma?",a:`* Zuerst schnell in die eine dann in die andere Richtung (Autounfall)\r
	* Bänderzerrung C3-C7`,t:"Environment"},{id:400,q:"Was sind Symptome eines Wirbelkörper-Bruchs?",a:`* Oft Osteoporose\r
	* "Knacken" bei Bagatelltrauma gehört\r
	* Verletztung im bereich der WS\r
	* Schonhaltung -> Verspannte Muskeln\r
	* Neurologische Probleme je nach nhöhe\r
		. Stuhl/Harnabgang \r
		. Parallysis/Parastesia ab einer gewissen höhe + beidseitig`,t:"Environment"},{id:401,q:"Maßnahmen WS verletzung",a:`* Vakuum/Stifneck va wenn Neurologische Symptome / Verspannungen / Intoxikiert\r
	* Kontrolle/Überwachung\r
	* Neurocheck + Bodycheck\r
	* NA wenn ...\r
	* Wärmeerhalt\r
	* BZ\r
	* wenn B-Los/Eingetrübt -> Checkliste`,t:"Environment"},{id:402,q:"Welche typen von Beckenfrakturen unterscheidet man?",a:`* Stabile\r
		. nur Randbereich (häufig Schambein) betroffen\r
		. Schmerz in der Leiste\r
		. Bewegungseinschränkung\r
	* Instabile\r
		. Becken gibt bei druck nach\r
		. gehen, stehen unmöglich\r
		. möglw. Blutverlust -> hypovoläm\r
		. Nervenverletzungen`,t:"Environment"},{id:403,q:"Maßnahmen Beckenfraktur?",a:`* Wenn Bewusstseinsklar: Vakuummatratze, sonst SSL\r
	* O2 nach bedarf\r
	* Vitalzeichen überwachen\r
	* Neurocheck, Bodycheck\r
	* NA\r
	* Reanimationsbereitschaft\r
	* Wärmeerhalt`,t:"Environment"},{id:404,q:"Definition Polytrauma:",a:"* mehrere gleichzeitig entstandene Verletzungen wo min eine oder die kombi Lebensbedrohlich ist",t:"Environment"},{id:405,q:"Welche formen von Bauchtrauma unterscheidet man?",a:`* stumpfes\r
		. häufiger\r
		. innere Blutungen (va Milz, Leber) -> Hypovoläm\r
		. UHG wichtig\r
	* penetrierendes/offenes`,t:"Environment"},{id:406,q:"Was sind Symptome eines stumpfen Bauchtraumnas?",a:`* Bauchschmerzen\r
	* Prellmarken\r
	* Zuerst Abwehrspannung dann Brettharte Bauchdecke (akut Abdomen)\r
	* Schonhaltung\r
	* Bauch wird größer\r
	* Hypovolämer Schock`,t:"Environment"},{id:407,q:"Was tun bei Bauchtrauma?",a:`* Lagerung je nach Zustand\r
		. SSL wenn eingetrübt\r
		. sonst OK erhöht, Knierolle\r
	* O2 bei Bedarf\r
	* Überwachung Vital\r
	* BC\r
	* NA\r
	* Reanimationsbereitschaft\r
	* Wärmeerhalt\r
	* Nahrungs- u Flüssigkeitskarenz`,t:"Environment"},{id:408,q:"Was tun wenn Darm etc austreten?",a:`* Kompressen mit NaCl befeuchten\r
	* Trocken abdecken\r
	* Wärmeerhalt!`,t:"Environment"},{id:409,q:"Was tun wenn Gegenstand noch in Bauch?",a:`* nicht entfernen oder bewegen\r
	* Fixieren\r
	* Verbinden`,t:"Environment"},{id:410,q:"Wie ist die Haut aufgebaut?",a:`* Oberhaut (2mm)\r
	* Lederhaut (4mm)\r
	* unterhaut (2mm)`,t:"Environment"},{id:411,q:"Was sind die Aufgaben der Haut?",a:`* schutz vor Infektionen, Umwelteinflüssen, Substanzen\r
	* Wärmeerhalt/Temperaturregulation\r
	* Wasser u Elektrolythaushalt\r
	* Sinnesfunktion`,t:"Environment"},{id:412,q:"Was kann zu Wunden führen?",a:`* mechanisch\r
	* chemisch\r
	* thermisch`,t:"Environment"},{id:413,q:"Welche arten von mechanischen Wunden gibt es?",a:`* Schürfwunde (Excoratio)\r
		. nur kapillaren geöffnet -> punktförmige blutungen\r
		. schmerzhaft\r
	* RQW\r
		. stumpfe Gewalt wo knochen dahinter\r
		. oberflächlich, wundränder zerfetzt \r
	* Schnittwunde\r
		. glatte Ränder\r
		. möglw tief\r
		. Sehnen, Muskel, Nervenverletzungen\r
		. Möglw infektionsrisiko -> Gegenstand ermitteln\r
	* Stichwunde\r
		. äußere Verletzung oft sehr klein\r
		. innere Verletzungen gut möglich\r
	* Bisswunde\r
		. Wundrand je nachdem wie spitz zähne\r
		. infektiös\r
		. HIV, Hep B/C\r
		. Besitzer von Tier Notieren/LPD \r
	* Schusswunde\r
		. oft starke innere verletzungen\r
		. Austrittswunde mögl.\r
	* Pfählung\r
		* Pfahlartige gegenstände (Stahlstangen, Zaun, ...) dringen ein\r
		* sehr tief (möglw wiederaustritt)\r
		* schwere innere Verletzungen möglich\r
	* Fremdkörper\r
		. Gegenstand steckt noch -> nicht entfernen/bewegen\r
		. Gegenstand stabilisieren\r
	* Ablederung\r
		. Scherkräfte reißen haut\r
		. Große fläche\r
		. möglw starke Blutung\r
		. bei alten Leuten recht einfach (dünne Haut)\r
	* Skalpierung\r
		. Haare in Maschine gefangen, ...\r
		. sehr viel Blutverlust\r
	* Amputation\r
		. Abtrennung v (teil)gliedmaßen\r
		. total/subtotal (hängt noch iwo)\r
		. immer nach abgetrenntem stück suchen\r
		. in sterile Kompressen verpacken\r
		. NA + Schockraum!`,t:"Environment"},{id:414,q:"Was sind Maßnahmen bei mechanischen Wunden?",a:`* Verbinden/abdecken (steril)\r
	* MDS\r
	* Kontrolle/überwachung\r
	* Blutstillung wenn starke blutung\r
	* Notarzt (hypovoläm, schockraum, ...)`,t:"Environment"},{id:415,q:"Welche Verbrennungsgrade unterscheidet man?",a:`* 1: Rötung, schwellung, schmerz | betrifft nur oberhaut\r
	* 2: BLASENBILDUNG, abheilung nur wenn oberflächlich (sonst narben) | betrifft ober- und lederhaut\r
	* 3: SCHORF, KEINE SCHMERZEN, VERKOHLUNG, narbenbildung | betrifft alle hautschichten`,t:"Environment"},{id:416,q:"Was sind die Gefahren bei Stromunfällen?",a:`* Stromkreis immer vor annäherung von Fachpersonal unterbrechen lassen\r
	* unter 1000V (niederspannungsunfall)\r
		. Herzrhytmusstörungen\r
		. lokale Verbrennungen\r
	* über 1000V (hochspannungsunfall)\r
		. tiefe Verbrennungen`,t:"Environment"},{id:417,q:"Was tun bei Verbrennungen?",a:`* Kleidung vorsichtig entfernen\r
	* Ausmaß, Grad abschätzen (eine Patientenhandfläche ~ 1%)\r
	* Mit lauwarmen wasser spülen (10-20min); ACHTUNG: UNTERKÜHLUNG\r
	* steril abdecken (Wundauflage od Verbrennungstuch) & Verbinden (Finger einzeln!)\r
	* Kontrolle/Überwachung nach zustand\r
	* O2 bei Bedarf\r
	* Bodycheck\r
	* NA für SChmerztherapie oder wenn großflächige Verletzungen\r
	* Wärmeerhalt\r
	* Verbrennungsbett wenn\r
		. Kinder: >10% 2. Grad oder >5% 3. Grad\r
		. Erwachsene: >15% 2. Grad oder >10% 3. Grad\r
		. Hände, Füße, Gesicht, Genitalbereich mit grad 2`,t:"Environment"},{id:418,q:"Was sind Erfrierungen? Wie unterscheiden sie sich von Unterkühlung?",a:`* Körperkerntemp noch normal\r
	* Lokaler Kälteschaden\r
	* Meist sehr peripher (Füße, Hände, Nase, Ohren)\r
	* 3 Grade\r
		. 1: blasse haut, Gefühlslos oder prickelnde Schmerzen\r
		. 2: Rötung, schwellung, BLASENBIDLUNG, STARKE Schmerzen\r
		. 3: weiß, gefühllos, nach Zeit blau-schwarz`,t:"Environment"},{id:419,q:"Maßnahmen Erfrierung?",a:`* weitere Kälte verhindern\r
	* Temp messen\r
	* Grad 1:\r
		. aktiv	es Aufwärmen (warmes wasser)\r
	* Grad 2, 3:\r
		. wunden möglichst wenig berühren\r
		. Wundauflage/Verbrennungstuch\r
		. Kontrolle Vitalzeichen`,t:"Environment"},{id:420,q:"Bei Chemischen Wunden - Unterschied Säure-/Basenverätzung?",a:`* Säure entzieht wasser -> schorf -> dring nicht so tief ein\r
	* Base dringt tief ein, perforation Ösoph, Magen möglich (orale einnahme)`,t:"Environment"},{id:421,q:"Maßnahmen Chemische Wunden?",a:`* Selbstschutz (Fachpersonal)\r
	* kleidung mit chem entfernen\r
	* mit Wasser ausspülen (nicht noch mehr kontaminieren)\r
	* abdecken wundauflage, verbrennungstuch\r
	* Vergiftunszentrale anrufen, art der substanz notieren\r
	* Kontrolle/Überwachung je nach Zustand\r
	* NA bei bedarf`,t:"Environment"},{id:422,q:"Was bei chem verletzungen der Augen zu beachten?",a:`* Kopf zur seite des Verletzen auges\r
	* Mit Elo-Mel/NaCl ausspühlen\r
	* Beide Augen locker Verbinden (verhindert viel bewegen von patienten)\r
	* NA für Schmerztherapie?`,t:"Environment"},{id:423,q:"Was bei chem Verletzungen des Verdauungstrakts?",a:`* nicht Ebrechen bringen\r
	* Mund ausspülen (Wasser)`,t:"Environment"},{id:424,q:"Was ist Dekubitus?",a:`* Druckwunde\r
	* Oft bei Immobilität -> Gefäße zugedrückt -> minderdurchblutung\r
	* 3 Ds: Druck (va nahe an Knochen, hohem gewicht), Dauer, Disposition (-RR, +Alter)`,t:"Environment"},{id:425,q:"In welche Stadien wird ein Dekubitus eingeteilt?",a:`* 1: Rötung\r
	* 2: Blase\r
	* 3: Offen + Sektret\r
	* 4: Nekrose, Tasche`,t:"Environment"},{id:426,q:"Maßnahmen Dekubitus?",a:`* Lagerung so dass stelle entlastet\r
	* Prophylaktisch: Hautpflege, Mobilisation, gute Ernährung`,t:"Environment"},{id:427,q:"Was ist ein Ulcus crusis (venosum/ateriosum)",a:`* Wunden durch Kreislaufstörung\r
	* CVI (chroniische venöse insuffzienz):\r
		. kaputte Venenklappen\r
		. Blut Staut sich -> Ödem\r
		. oft in Unterschenkel\r
	* pAVK (periphere Arterielle Verschluss Krankheit):\r
		. ASKL\r
		. oft in Zehen, Vorfuß, Ferse\r
		. führt zu Nekrose`,t:"Environment"},{id:428,q:"Was kann eine Bindehautentzündung auslösen?",a:`* Infektion\r
	* physk. reize (rauch, staub, ...)\r
	* Allergie`,t:"Environment"},{id:429,q:"Was sind Symptome einer Bindehautsentzündung?",a:`* Rötung\r
	* Lidspalte Verengt\r
	* mehr Tränen\r
	* Lichtscheu\r
	* Juckreiz, gefühl so als wäre Fremdkörper drinnen\r
	* Brennen, möglw. starke Schmerzen`,t:"Environment"},{id:430,q:"Was tun wenn Fremdkörper im Auge?",a:`* kleine FK mit Tupfer, Spülung entferen\r
	* große/scharfe FK oder Holz/glas/metall nicht entfernen\r
		. beide Augen abdecken -> Bewegung minimiert\r
		. NA für Analgesie?`,t:"Environment"},{id:431,q:"Was kann eine Blutung aus dem Ohr auslösen?",a:`* Entzündung\r
	* Verletzung (Trommelfellriss)\r
	* Schädelbasisfraktur`,t:"Environment"},{id:432,q:"Maßnahmen bei Blut aus Ohr?",a:"* Locker abdecken (nicht Tamponieren!)",t:"Environment"},{id:433,q:"Wie kommt es zu einer Mittelohrentzündung?",a:`* Erreger druch eustachische Röhre von Rachen zu Mittelohr\r
	* Symptome:	\r
		. pulsierender Ohrschmerz\r
		. Fieber\r
		. Hörminderung`,t:"Environment"},{id:434,q:"Wie kommt es zu einer Trommelfellperforation? Was sind symptome?",a:`* Wattestäbchen, andere direkte Verletzung\r
	* plötzlicher Überdruck (Ohrfeige, Explosion)\r
	* Mittelohrentzündung\r
	* Starke Druckschwankungen (Tauchen, Fliegen)\r
	* Symptome\r
		. stechender Schmerz\r
		. plötzliche Hörverschlechterung\r
		. Rauschen im Ohr\r
		. Übelkeit, Schwindel\r
		. möglw. leichte Blutung`,t:"Environment"},{id:435,q:"Wie lange dauert eine Schwangerschaft?",a:`* Meist 40 SSW\r
	* 38-42 SSW normal\r
	* Davor frühgeburt`,t:"Gynäkologie und Pädiatrie"},{id:436,q:"Ab welcher woche hat baby Überlebenschance?",a:"* 24 SSW",t:"Gynäkologie und Pädiatrie"},{id:437,q:"Was kann zu Frühgeburten führen?",a:`* Alk\r
	* Nikotin\r
	* Hypertonie\r
	* Infektion\r
	* Präeklampsie\r
	* Diabetes`,t:"Gynäkologie und Pädiatrie"},{id:438,q:"Wie lässt sich die Schwangerschaft einteilen?",a:`* Trimester\r
		. 1: (bis 13 SSW): Anlage wichtiger Organe\r
		. 2: (bis 26 SSW): Ausbildung organe, erste bewegungen, ab 24 lebensfähig\r
		. 3: (bis 40 SSW): Organe fertig ausgebildet, Mutter wird geburtsbereit`,t:"Gynäkologie und Pädiatrie"},{id:439,q:"Was ist eine Fehlgeburt? Symptome?",a:`* meist 10-12. SSW\r
	* nicht überlebensfähriges kind geboren\r
	* Symptome:\r
		. Wehenartige Schmerzen (Unterbauch/Kreuz)\r
		. Vaginale Blutung\r
		. Abgang v Gewebe/toter Frucht`,t:"Gynäkologie und Pädiatrie"},{id:440,q:"Was ist die Extrauteringravidität",a:`* Eizelle nistet außerhalb d Gebärmutter\r
	* meist Eileiter`,t:"Gynäkologie und Pädiatrie"},{id:441,q:"Was sind die Symptome einer Eileiterschwangerschaft?",a:`* Einsietige Unterbauchschmerzen\r
	* vaginale Blutung\r
	* Schwangerschaft möglich\r
	* -> Lagerung nach Patientenwunsch`,t:"Gynäkologie und Pädiatrie"},{id:442,q:"Was ist eine Tubenruptur? Symptome?",a:`* Komplikation Eileiterschwangerschaft\r
	* meist 6-9 SSW (6-9 W ohne Regel)\r
	* Eileiter reißt ein\r
	* Symptome:\r
		. sehr starke einseitige Unterbauchschmerzen\r
		. akutes Abdomen\r
		. Hypervolämer Schock\r
		. evtl. Vaginalblutung`,t:"Gynäkologie und Pädiatrie"},{id:443,q:"Maßnahmen Tubenruptur?",a:"* siehe Hypovoläm Schock",t:"Gynäkologie und Pädiatrie"},{id:444,q:"Was sind die Maßnahmen bei anderen Vaginalblutungen?",a:`* Lagerung nach Fritsch\r
	* Anamnese (Zyklus, Schwangerschaft, MuKi-Pass)\r
	* ggf. Maßnahmen hypovoläm. schock\r
	* ggf. NA\r
	* AVISO`,t:"Gynäkologie und Pädiatrie"},{id:445,q:"Was ist die Aufgabe der Plazentas?",a:`* Verbindet Kreislauf v Mutter und Kind\r
	* Stellt Kind nähstoffe zur verfügung\r
	* Blut trotzdem getrennt - kapillaren von mutter neben kapillaren von kind\r
	* Entsteht wo eizelle eingenistet`,t:"Gynäkologie und Pädiatrie"},{id:446,q:"Was ist die Nabelschnur?",a:`* Verbindung Plazenta-Kind\r
	* 2 Arterien (zur Mutter hin, entorgt Schadstoffe), 1 Vene (zu Kind hin, bringt Nährstoffe)`,t:"Gynäkologie und Pädiatrie"},{id:447,q:"Was ist die Fruchtblase?",a:`* Eiheute von Plazenta ausgehend, bilden Sack\r
	* Gefüllt mit Fruchtwasser\r
	* SChützt vor Stößen, Verletzungen, Infektionen`,t:"Gynäkologie und Pädiatrie"},{id:448,q:"Was ist eine vorzeitige Plazentalösung?",a:`* meist letztes trimester\r
	* Plazenta ganz oder Teilweise von Gebärmutter getrennt\r
	* Durch Stöße, Trauma, Zug, Gefäßverenderungen (Drogen, Präeklampsie, Hypertonie, Nikotin)`,t:"Gynäkologie und Pädiatrie"},{id:449,q:"Was sind Symptome einer Plazentalösung?",a:`* Blutverlust\r
	* Schmerzen\r
	* Brettharter Uterus\r
	* Hypovoläm\r
	* möglw leichte-starke vaginale blutung`,t:"Gynäkologie und Pädiatrie"},{id:450,q:"Wie nennt man es wenn plazenta vor ausgan?",a:"* Plazenta praevia",t:"Gynäkologie und Pädiatrie"},{id:451,q:"Was ist Placenta praevia? Symptome?",a:`* Plazenta vor Muttermund -> verlegt\r
	* Am ende d Schwangerschaft Plazenta verletzt -> blutungen\r
	* Meist in MuKi zu lesen\r
	* Symptome: \r
		* vaginale Blutung\r
		* keine Schmerzen\r
		* möglw. hypovoläm`,t:"Gynäkologie und Pädiatrie"},{id:452,q:"Was ist SIH?",a:`* Schwangerschafts-Induzierte Hypertonie\r
	* RR > 140/90\r
	* vor Schwangerschaft RR normal\r
	* 6-8% aller Schwangeren\r
	* meist weg 3 mo vor geburt\r
	* Wenn Organ-involement: Präeklampsie`,t:"Gynäkologie und Pädiatrie"},{id:453,q:"Was sind Symptome für Präeklampsie?",a:`* SIH + Organmanifest\r
	* RR > 140/90 + Proteine im Urin\r
	* Mögliche Symptome:\r
		. Ödeme\r
		. Kopfweh, Schwindel\r
		. Benommen\r
		. Ohrensausen\r
		. Sehstörungen\r
		. Übelkeit, Erbrechen\r
		. selten Ikterus\r
	* 2% aller schwangeren (25% aller mit SIH)`,t:"Gynäkologie und Pädiatrie"},{id:454,q:"Was sind Risikofaktoren für Präeklampsie?",a:`* Erstgeburt\r
	* Schwangere > 35\r
	* früher schon mal präeklampsie\r
	* Mehrlinge\r
	* Hypertonie vor Schwanger\r
	* Adipositas\r
	* Diabetes`,t:"Gynäkologie und Pädiatrie"},{id:455,q:"Was ist HELLP?",a:`* 0,1-0,2% aller Schwangerschaften, 10-20% von Präeklampsie\r
	* Auch nach geburt möglich\r
	* Hemolysis (Blut löst sich auf -> anämie)\r
	* Elevated Liver (schlechte Leber)\r
	* Low Platelet Count (wenig Blutplättchen)`,t:"Gynäkologie und Pädiatrie"},{id:456,q:"Symptome HELLP?",a:`* möglw. Präeklampsie\r
	* Starke SChmerzen rechter Oberbauch (Leber-Kapsel steht unter Spannugn)\r
	* Übelkeit, Erbrechen, Durchfall\r
	* Ikterus`,t:"Gynäkologie und Pädiatrie"},{id:457,q:"Komplikationen HELLP?",a:`* Leber immer kaputter\r
	* Leberkapselruptur -> akut Abdomen\r
	* Hirnblutungen	\r
	* ANV\r
	* Placentalösung\r
	* fetale Wachstumsstörung\r
	* Lethalität:\r
		. Mutter 3-5%\r
		. Kind 10-40%`,t:"Gynäkologie und Pädiatrie"},{id:458,q:"Was ist Eklampsie?",a:`* Präeklampsie + Krämpfe\r
	* Grand mal vor/während/bis zu 7 Tage nach Geburt`,t:"Gynäkologie und Pädiatrie"},{id:459,q:"Was sidn vorzeichen für Eklampsie?",a:`* starker RR anstieg\r
	* Sehstörungen (Flimmern, Doppelt sehen, verschwommen)\r
	* Verwirrtheit\r
	* fokale motorische ausfälle`,t:"Gynäkologie und Pädiatrie"},{id:460,q:"Was ist ein Nabelschnurvorfall?",a:`* sehr selten (0,2-0,6%)\r
	* bei Vorzeitigem Blasensprung\r
	* Nabelschnur vor kinderkopf\r
	* wird abgedrückt -> kind unterversorgt`,t:"Gynäkologie und Pädiatrie"},{id:461,q:"Was sind Präventivmaßnahmen gegen Nabelschnurvorfall?",a:`* Nach Blasensprung nicht stehen/gehen\r
	* Becken hochgelagert\r
	* Bis Hebame OK gibt`,t:"Gynäkologie und Pädiatrie"},{id:462,q:"Was sind akute Maßnahmen bei Nabelschnurvorfall?",a:`* NA\r
	* Becken hoch\r
	* Wehen verhecheln`,t:"Gynäkologie und Pädiatrie"},{id:463,q:"Was steht im MuKi-Pass?",a:`* SSW\r
	* Lageanomalien\r
	* Mehrlinge?`,t:"Gynäkologie und Pädiatrie"},{id:464,q:"Was ist sonst wichtig zur Doku nach Blasensprung?",a:`* wann Blasensprung?\r
	* Pat wie angetroffen?\r
	* Farbe Fruchtwasser`,t:"Gynäkologie und Pädiatrie"},{id:465,q:"Was ist das Vena Cava - Kompressionssyndrom? Symptome?",a:`* in Rückenlage gewicht von kind drückt Vena Cava inferior ab -> wenig rückfluss zum Herzen\r
	* Symptome (in Rückenlage):\r
		* -RR\r
		* Synkope\r
		* Blässe\r
		* +HF\r
		* Atemnot\r
		* Kollaps\r
		* Wenn zu lange: kind Unterversorgt`,t:"Gynäkologie und Pädiatrie"},{id:466,q:"Maßnahmen Vena-Cava-Kompressionssyndrom?",a:`* Seitenlage\r
	* Wenn sich zustand nicht bessert, andere Ursache!!`,t:"Gynäkologie und Pädiatrie"},{id:467,q:"Wie viel wiegt ein normales Neugeborenes?",a:"* 3,5-5kg",t:"Gynäkologie und Pädiatrie"},{id:468,q:"Wie könnte ein Kind liegen? Wann macht man einen Kaiserschnitt?",a:`* Schädellage (96%)\r
	* Beckenendlage (3%)\r
	* Querlage, Schräglage (beide <1%): Kaiserschnitt`,t:"Gynäkologie und Pädiatrie"},{id:469,q:"Welche Phasen der Geburt gibt es?",a:`* ERöffnungsphase\r
		. 6-12h (Erstgebärende)\r
		. Erröfnungswehen (Senkwehen): unregelmäßig, kurz -> kind weiter nach unten\r
		. Muttermund öffnet sich (10cm) -> Ende v. Eröffnungsph.\r
		. Blasensprung (wenn davor: vorzeitig, auch in Austreibungsphase möglich)\r
	* Austreibungsphase\r
		. von Muttermundöffnung bis kind draußen\r
		. Wehen im Abstand v 2-5min\r
		. Wehendauer 60-90s \r
		. Kind immer Tiefer, Presswehen\r
	* Nachgeburtsphase\r
		. Nachwehen (ca 15 min lang) -> Auswurf Placenta\r
		. bis zu 0.5l blutverlust normal`,t:"Gynäkologie und Pädiatrie"},{id:470,q:"Maßnahmen in der Nachgeburtsphase?",a:`* Kind an Brust von Mutter -> Hormonausschüttung -> zieht Gebärmutter zusammen\r
	* Lagerung Fritsch\r
	* Placenta an KH`,t:"Gynäkologie und Pädiatrie"},{id:471,q:"Was ist PPH?",a:`* postpartale Blutung -> Blutung nach Placenta-Ablösung zu stark\r
	* Schocksymptome`,t:"Gynäkologie und Pädiatrie"},{id:472,q:"Risikofaktoren PPH?",a:`* St. p. atone Blutung (MuKi-pass)\r
	* Mehrlingsschwangersch.  (MuKi)\r
	* zu schnelle Geburt\r
	* Plazenta unvollständig gelöst\r
	* Gerinnungsstörung\r
	* Verletzung bei Austreibung (Dammbruch?)`,t:"Gynäkologie und Pädiatrie"},{id:473,q:"Maßnahmen PPH?",a:`* über nabel kreisförmig streichen -> Wehe auslösen\r
	* Coolpack unterbauch \r
	* Kind stillen lassen -> oxytocin\r
	* Hypovoläm`,t:"Gynäkologie und Pädiatrie"},{id:474,q:"Wie schaut es mim NA bei der Geburt aus?",a:"* IMMER",t:"Gynäkologie und Pädiatrie"},{id:475,q:"Was fragen bei Geburtshilfe?",a:`* MuKi-Pass\r
	* wie vielte SChwangerschaft?\r
	* Wehen?\r
	* Blasensprung?\r
	* Termin?\r
	* Wunschklinik?\r
	* Wie gehts jtzt?`,t:"Gynäkologie und Pädiatrie"},{id:476,q:"Was ist bei APGAR inkludiert?",a:`* Atmung\r
	* Puls\r
	* Grund-tonus (bewegung)\r
	* Aussehen\r
	* Reflexe`,t:"Gynäkologie und Pädiatrie"},{id:477,q:"Was tun bei Geburt?",a:`* NA\r
	* Rückenlage, Beine Nach oben\r
	* OK leicht erhöht\r
	* Langsame geburt\r
		. sanft kopf zurückhalten/abbremsen (flache Hand)\r
		. zum Verhecheln auffordern\r
	* Kind bei geburt zur Seite mitdrehen\r
	* Schulteraustritt mithelfen\r
	* Wenn Körper vollständig draußen: Zeit notieren`,t:"Gynäkologie und Pädiatrie"},{id:478,q:"Was tun nach Geburt?",a:`* Wärmeverlust schützen\r
	* Abtrocknen\r
		. warme tücher\r
		. stimuliert kind -> sollte Atmen anfangen\r
		. danach zu Mutter an die Brust\r
	* Abnabeln\r
		. wenn Nabelschnur nicht mehr pulsiert (wenn baby stabil)\r
		. wenn nicht stabil: nach abtrocknen`,t:"Gynäkologie und Pädiatrie"},{id:479,q:"Wie wird abgenabelt?",a:`* 1 Klemmme 2 Handbreiten von Neugeborenen\r
	* 2. Klemme eine Handbreite nach 1. Klemme\r
	* Mit Steriler Schere durchtrennen\r
	* Neugebornen-Ende \r
		. mit WUndauflage bedeckt\r
		. mit mulbinde an babybauch fixiert\r
	* Mutter-Ende in Leistenbeuge, darauf Vorlage`,t:"Gynäkologie und Pädiatrie"},{id:480,q:"Wann macht man APGAR?",a:`* 1 / 5 / 10 min nach geburt\r
	* notieren!`,t:"Gynäkologie und Pädiatrie"},{id:481,q:"Wie unterscheidet sich die A-Anatomie von Säulginen zu Erwachsenen?",a:`* <5 mo: nur Nasenatmung\r
	* kurzer Hals, große Zunge/Epiglottis\r
	* Engste stelle nicht stimmritze sondern direkt darunter\r
	* Larynx höher`,t:"Gynäkologie und Pädiatrie"},{id:482,q:"B-Anatomie Säuglinge unterschied zu Erwachsenen?",a:`* l/r Hauptbronchien fast gleich steil\r
	* Atemwege generell eng\r
	* rel. O2 verbrauch doppelt so hoch\r
	* Thorax biegsamer\r
	* Rippen horizontal -> nicht guter schutz\r
	* atemmuskulatur noch in entwicklung -> Säuglinge sind Bauchatmer`,t:"Gynäkologie und Pädiatrie"},{id:483,q:"AF Neigeborener, Säugling, Kind?",a:`* 40-60, 30-40, 15-30\r
	* Weil Lungenvolumen viel kleiner`,t:"Gynäkologie und Pädiatrie"},{id:484,q:"Symptome Atemnot Säugling/Kind?",a:`* AF noch höher\r
	* Zyanose\r
	* Atemgeräusche\r
	* Nasenflügeln gehoben\r
	* Einziehungen am Hals (unterdruck ohne Atmung)\r
	* "Head-bobbing"\r
	* Schaukelatmung (Bauch/Thorax gegengleich)`,t:"Gynäkologie und Pädiatrie"},{id:485,q:"Wie wird Pseudokupp noch genannt?",a:"* Laryingitis",t:"Gynäkologie und Pädiatrie"},{id:486,q:"Was ist Pseudokrupp/Laryngitis?",a:`* meist viral\r
	* herbst, winter\r
	* Entzündung Larynx\r
	* verengung der Atemwege bei engster Stelle\r
	* wiederkehrende schübe va in der Nacht\r
	* betroffen meist 6mo-3j`,t:"Gynäkologie und Pädiatrie"},{id:487,q:"Was sind Symptome von Pseudokrupp/Laryngitis?",a:`* Atemnot\r
	* Zyanose\r
	* inspiratorischer Stridor\r
	* Heiserkeit\r
	* trockener, bellender Husten\r
	* möglw. Fieber`,t:"Gynäkologie und Pädiatrie"},{id:488,q:"Was ist Epiglottits?",a:`* bakteriell (HIB)\r
	* Schwellung v Epiglottis, umliegendes gewebe\r
	* plötzlich\r
	* 2-6j\r
	* impfung gegen HIB im Schema`,t:"Gynäkologie und Pädiatrie"},{id:489,q:"Symptome Epiglottitis?",a:`* Atemnot\r
	* Zyanose\r
	* Inspiratorischer Stridor\r
	* Schluck- und Sprachstörungen\r
	* deutlicher Speichelfluss\r
	* wenig/kein Husten\r
	* plötzliches, hohes Fieber\r
	* schwer Krank`,t:"Gynäkologie und Pädiatrie"},{id:490,q:"DD Epilgottitis/Laryngitis?",a:`* 1-7/0,5-3 J\r
	* keine Tageszeit/Abends\r
	* keine Jahreszeit/herbst o winter\r
	* hohes fieber/kein o  niedriges Fieber\r
	* speichelfluss: stark/kein\r
	* schuckstörung: stark/nein\r
	* husten: selten / bellend + trocken\r
	* sprache: hot potato voice / heiser\r
	* verlauf: schnell/langsam`,t:"Gynäkologie und Pädiatrie"},{id:491,q:"Maßnahmen Epiglottitis/Laryngitis?",a:`* beruhingen -> Eltern bei kind\r
	* O2 15 L (dusche)\r
	* Feuchte u Kalte umgebungsluft\r
	* Überwachung Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft`,t:"Gynäkologie und Pädiatrie"},{id:492,q:"HF biw kinder/saäuzgling?",a:`* Newborn: 130\r
	* 1-12 mo : 120\r
	* 1 jahr: 110\r
	* 2-6: 100\r
	* 6 - 10: 95\r
	* RR niedriger`,t:"Gynäkologie und Pädiatrie"},{id:493,q:"Was ist Gastroentritis?",a:`* viral\r
	* Brechfruchfal\r
	* Symptome: \r
		* Übelkeit, heftige Erbrechen\r
		* starker Durhcfall\r
		* bauchweh\r
		* Kopfweh\r
		* MAtt\r
		* evtl. Fieber\r
	* Komplikation: Dehydration`,t:"Gynäkologie und Pädiatrie"},{id:494,q:"Wie erkennt man Dehydration bei Baby?",a:`* trockener Mudn/Zunge\r
	* Kneiftest: Zwichek, wenn haut nicht glättet: positiv\r
	* Wenig urin (trockene windel >0,5d)\r
	* Gewichtsabnahme\r
	* Teilnahmslosigkeit\r
	* eingesunkene Augen, keine Tränen`,t:"Gynäkologie und Pädiatrie"},{id:495,q:"Was ist Fieberkrampf?",a:`* 3-5% aller Kinder \r
	* 6mo-5j (meist 1-3j)\r
	* rascher Anstieg d Körpertemp (oft viraler infekt)\r
	* KRampf meist <1 min max 5 min`,t:"Gynäkologie und Pädiatrie"},{id:496,q:"Symptome Fieberkrampf?",a:`* B-verlust\r
	* starre augen (evtl schräg oben)\r
	* Zyanose od Blässe\r
	* Kurzer Atemstillstand\r
	* Muskelverspannung\r
	* Zuckung\r
	* Schlaffheit`,t:"Gynäkologie und Pädiatrie"},{id:497,q:"Maßnahmen Fieberkramf?",a:`* Lagerung nach zustand\r
	* O2 dusche, möglw assistierte Beatmung (während Astillstand)\r
	* Überwachen Vitalzeichen\r
	* NA\r
	* Reanimationsbereitschaft\r
	* Anfall Dauer und ablauf notieren`,t:"Gynäkologie und Pädiatrie"},{id:498,q:"Was ist der Unterschied bei Wärmehaushalt von kindern/säuglingen zu erwachsenen?",a:`* mehr oberfläche/volumen -> unterkühlungsgefahr\r
	* weniger muskel(entwicklung) -> zittern ineffektiver`,t:"Gynäkologie und Pädiatrie"},{id:499,q:"Was ist Mumps? Symptome?",a:`* Schwellung einer Ohrspeicheldrüse\r
	* Schmerzen\r
	* Fieber\r
	* in Impfschema`,t:"Gynäkologie und Pädiatrie"},{id:500,q:"Was ist Keuchhusten? Symptome?",a:`* hochansteckende Kinderkrankheit\r
	* Auch Pertussis genannt\r
	* sehr lange dauer (100-Tage-husten)\r
	* Symptome: \r
		* 40% kein Husten, 40% akute Bronchitis, 20% typischer Keuchhusten\r
		* Hustenattacken mit herausgesteckter Zunge\r
		* Ziehendes einatemgeräusch\r
		* glasiger schleim + erbrechen`,t:"Gynäkologie und Pädiatrie"},{id:501,q:"Wie unterscheiden sich Kinderkrankheitsausschläge?",a:`* Masern: Gehäuft, überall\r
	* Röteln: einelne Punkte, überall\r
	* Scharlach: gehäuft, va achsel, genitalbereich, gesicht\r
	* Windpocken: einzeln, va achseln, genitalbereich`,t:"Gynäkologie und Pädiatrie"},{id:502,q:"Vorgehen Kinderkrankheiten?",a:`* hoch ansteckend\r
	* Hygene: handschuhe, kittel, maske\r
	* Kinderambulanz (eigener Eingang, sonst zuerst ohne patient nachfragen)`,t:"Gynäkologie und Pädiatrie"},{id:503,q:"Was ist SIDS?",a:`* Sudden Infant Death Syndrome\r
	* Ungeklärter Kindstod\r
	* 2.-4. mo`,t:"Gynäkologie und Pädiatrie"},{id:504,q:"Was sind die Aufgaben des Sanitätsdiensts?",a:"* Erste Hilfe/Sanitätshilfe (geht wsl noch ein bissi über erste hilfe hinaus), Rettungstechnik (Verladen, Transportieren, etc.) + Diagnostik und Therapeutik (erstdiagnose + präklinische Maßnahmen)",t:"Recht"},{id:505,q:"Was ist der Tätigkeitsbereich d. Rettungssanitäter?",a:"Präklinische, hauptsächlich nicht invasive Maßnahmen und Tests im Gesundheitlichen Interesse des Patienten, e.g. O2, BZ, .. ...",t:"Recht"},{id:506,q:"Was darf der Rettungssani?",a:`* Lebensrettende Sofortmaßnahmen\r
	* O2\r
	* Infusion Aufrechterhalten/Beenden\r
	* BZ Messen\r
	* Halbautom. Defi`,t:"Recht"},{id:507,q:"Was sind die Pflichten d. RS?",a:`* Allgemeine Pflichten\r
	* Dokupflicht\r
	* Verschwiegenheitspflicht\r
	* Auskunftspflicht\r
	* Fortbildungspflicht\r
	* Rezertifizierungspflicht`,t:"Recht"},{id:508,q:"Welche Algemeinen Pfilchten gibt es?",a:`. Ausübung "ohne Ansehen der Person" -> Egal wer es ist, er muss gleich behandelt werden!\r
		. Handeln nach Wissenschaftlicher Erkenntnis und Erfahrungen (lege artis)\r
		. NA Anfordern`,t:"Recht"},{id:509,q:"Was ist die Dokupflicht?",a:`. Gesetze Maßnahmen\r
		. Immer Objektiv und Genau\r
		. Dient der Qualitätssicherung, Nachvollziebarkeit und rechtl Schutz des RS\r
		. Nur Patient/gesetzl. Vertreter hat einsichtsrecht! Sonst immer explizite Erlaubnis des Patienten notwendig\r
		. 10 Jahre aufbewahrt durch JUH`,t:"Recht"},{id:510,q:"Was ist die Verschwiegenheitspflicht?",a:`. ALLE Geheimnisse die durch Ausübung der Tätigkeit in erfahrung gebracht wurden\r
		. Gegenüber JEDEM`,t:"Recht"},{id:511,q:"Welche Außnahmen der Verschwiegenheitspflicht gibt es?",a:`* Meldepflichtige Krankheiten\r
	* Sozialversicherung / Kostenträger\r
	* Explizite Endbindung v. d. Geheimhaltung\r
	* Höherwertige Interessen (ich habe eine Bombe plaziert!)\r
	* Anzeigepflicht`,t:"Recht"},{id:512,q:"Was ist die Auskunftspflicht?",a:`* gilt ggü \r
		. Patienten\r
		. Gesetzlichen Vertretern\r
		. als auskunftsberechtigt benannte Personen (meiner Schwester könnt ihr alles über meine Probleme sagen!)\r
		. Weiterversorgendes Personal`,t:"Recht"},{id:513,q:"Was ist die Fortblidungspflicht?",a:"* Jeder RS muss innerhalb v 2 Jahren mind 16h tätigkeitsrelevant fortgebildet werden",t:"Recht"},{id:514,q:"Wann muss man sich Rezertifizieren (Rezertifizierungspflicht)",a:"* 2 Jahre",t:"Recht"},{id:515,q:"Was sind die Voraussetzungen für eine Einwilligung zu einer Behandlung?",a:`* !Informed! Consent -> Aufklärung\r
	* Einwilligungsfähigkeit (!= Geschäftsfähigkeit) -> Einsichts + Urteilsfähigkeit\r
		. Patient muss Grund, mögl. Folgen, mögl. Alternativen kennen, einsehen und daraus dann eine Meinung dazu bilden können\r
		. ZOPS orientiert`,t:"Recht"},{id:516,q:"Wann kann auf ein Einholen einer Einwilligung verzichtet werden, unabhängig von Patientenalter, Einsichts-/Urteilsfähigkeit, ...?",a:"* Wenn Gefahr im Verzug ist, also das Einholen einer Einwilligung gefährlich für den Patienten wäre",t:"Recht"},{id:517,q:"Wann kann ein Minderjähriger alleine keine Einwilligung zu einer Behandlung geben?",a:"* Wenn keine Gafahr im Vorzug ist und keine Einwilligungsfähigkeit gegeben ist -> Gesetzliche Vertreter (Eltern) müssen einwilligen",t:"Recht"},{id:518,q:"Wie ermittelt man die Einwilligungsfähigkeit bei Minderjährigen?",a:"* Theoretisch nach Einsitsh- + Urteilsfähigkeit; aber wenn nicht eindeutig bestimmbar: <14j. Einwilligungsfäh. nicht gegeben, >14j schon (einzelfall jedoch möglw. anders!)",t:"Recht"},{id:519,q:"Was ist wenn ein Minderjähriger, der nach den bereits genannten Kriterien als Einwilligungsfähig eingestuft wurde, eine andere Meinung hat als seine Eltern/Gesetzliche Vertreter?",a:"* Die Meinung der Eltern/Vertreter ist zu ignorieren",t:"Recht"},{id:520,q:"Wann müssen RS auch bei Volljährigen die Einverständniss 3ter einholen?",a:`* Es ist keine Gefahr im Vollzug\r
	* Er ist offensichtlich nicht Einwilligungsfähig (Psych. Krank, Dement, Sucht, ...)`,t:"Recht"},{id:521,q:"Wer kann in so einem Fall eine Einwilligung für eine Behandlung geben?",a:`* Patientenverfügung\r
	* Gerichtliche Erwachsenenvertretung (z.B. Anwalt dem das früher schon Übertragen wurde)\r
	* Person mit Vorsorgevollmacht\r
	* Gesetzliche Erwachsenenvertretung (z.B. Ehepartner, nahe Angehörige)`,t:"Recht"},{id:522,q:"Was ist eine Gerichtliche Erwachsenenvertretung",a:"* Von Gericht bestimmte Person die wegen Geistiger Erkrankung, ... die Entscheidungen d Patienten in gewissen Bereichen übernimmt",t:"Recht"},{id:523,q:"Wann müssen RS Einwilligung d. Gerichtlichen Erwachsenenvertretenden einholen? Wann nicht?",a:`* Vorraussetzungen für die Bindung d. Sanis sind:\r
		. im Gerichtlichen Beschluss sind auch medizinische Behandlungen als Kompetenz inkludiert\r
		. Die Vertretung ist aktuell (muss alle 3 Jahre erneuert werden)\r
	* Nicht gültig wen\r
		. Gefahr im Verzug ist\r
		. Der Patient im Moment Einwilligungsfähig ist ("Luzides Interval")`,t:"Recht"},{id:524,q:"Was ist eine Patientenverfügung?",a:"* Ein Schriftliches Dokument wo der Patient seine Einwilligung zu gewissen med. Behandlungen schon im Vorhinein festlegt, falls er in der Zukunft nicht mehr Einwilligunsfähig seien sollte",t:"Recht"},{id:525,q:"Welche Vorraussetzung für die Gültigkeit gelten hier? Wann ist sie nicht anwendbar?",a:`* Vorraussetzungen: \r
		. Entspricht den gesetlichen Vorderungen Patienten Verfügungs Gesetz\r
	* Ungültig wenn:\r
		. Gefahr im Verzug ist\r
		. Es einen rechtsgültigen Widerruf gibt\r
		. Momentan Einwilligungsfähigkeit besteht ("Luzides Interval")`,t:"Recht"},{id:526,q:"Was ist die Gesetzliche Erwachsenenvertretung?",a:"* Eine nicht Einwilligungsfähige Person, für die keine Gerichtliche Erwachsenenvertretung bestimmt wurde und keinen anderen Gesetzlichen Vertreter hat, kann durch nächste Angehörige (eltern, volljähr. Kinder, Ehepartner, ..) vertreten werden",t:"Recht"},{id:527,q:"Gülting nur wenn? Wann nicht?",a:`* Nur gültig wenn die gesetzliche Erwachsenenvertretung beim ÖZVV registriert wurde und der Aufgabenbereich die Zustimmung zu med. Behandlungen inkludiert\r
	* Nicht gültig wenn\r
		. Gefahr im Verzug ist\r
		. Die Vertretung widerrufen wurde (selbst nach Verlust der Einwilligungsfähigkeit hahaha)\r
		. Mehrere Vertretungsbefugte Angehörige sich uneinig sind\r
		. Luzides Interval`,t:"Recht"},{id:528,q:"Was ist die Vorsorgevollmacht?",a:"* Eine Vollmacht welche erst dann wirksam wird wenn der Patient die Einsichts-, Urteils- oder Äußerungsfähigkeit verliert",t:"Recht"},{id:529,q:"Gültig nur wenn? Wann nicht?",a:`* Gültig nur wenn\r
		. Sie Registriert wurde im Zentralen Vertretungsverzeichniss\r
		. In der Urkunde sind med. Behandlungen inkludiert\r
	* Nicht Gültig wenn\r
		. Gefahr im Verzug ist\r
		. Es einen Widerruf gibt (auch wenn nicht Einwilligungsfähig)\r
		. Luzides Interval`,t:"Recht"},{id:530,q:"Was ist eine Belassung?",a:`. Patient wird aus Willen d. Sanis oder d. Patienten nicht ins KH mitgenommen\r
	. RS trägt hier mitverantwortung, falls Patient etwas passiert`,t:"Recht"},{id:531,q:"Was ist ein Revers?",a:`. Eine Schriftliche Urkunde die Dokumentiert dass es der eindeutige Wille d. Patienten war belassen zu werden\r
	. Nur auf Grundlage einer umfassenden Aufklärung\r
	. Verantwortung NUR bei Patienten\r
	. Wichtig das Revers immer rechtsgültig/korrekt ausgefüllt wird und GUT DOKUMENTIERT WIRD`,t:"Recht"},{id:532,q:"Wann kann kein Revers ausgestellt werden (Reversfähigkeit)?",a:". Wenn der Patient <18j alt ist oder nicht Einwilligungsfähig ist",t:"Recht"},{id:533,q:"Wofür ist eine Geschäftsfähigkeit nötig und was sind die Kriterien zur Beurteilung?",a:`* Nötig für den Abschluss eines Kranken- oder Rettungstransportvertrags\r
	* <7 nie Geschäftsfähig\r
	* 7-18 beschränkt\r
	* >18 grunsätzlich Fähig`,t:"Recht"},{id:534,q:"Wie ist Vorzugehen bei Geschäftsunfähigen Patienten?",a:`* Wenn GEfahr im Verzug ist keine Einwilligung nötig\r
	* Gesetzl Vertreter`,t:"Recht"},{id:535,q:"Einwilligungsfähigkeit?",a:`* Zur Einwilligung bei med. Behandlung\r
	* <14 grundvermutung nicht efähig\r
	* 14-18 grundvermutung efähig\r
	* >18 grundsätzlich efähig`,t:"Recht"},{id:536,q:"Wenn Eunfähig?",a:`* Gefahr im Verzug\r
	* Gesetzlicher Vertreter, Patientenverfügung, ..`,t:"Recht"},{id:537,q:"Reversfähigkeit?",a:"* <18 nicht; >18 grundsätzlich schon",t:"Recht"},{id:538,q:"Wenn nicht?",a:`* Gesetzlicher Vertreter\r
	* Wenn ohne Revers belassen: HAFTUNG`,t:"Recht"},{id:539,q:"Was rechtfertigt eine Unterbringung nach dem Unterbringungsgesetz?",a:`* psych. Krankheit\r
	* Eigen- oder Fremdgefährdung\r
	* andere Behandlung/Betreuung nicht möglich`,t:"Recht"},{id:540,q:"Wann ist eine unfreiwillige Unterbringun möglich?",a:`* Untersuchung d. oberen Vorraussetzunhen dorch einen Amtsarzt od. Polizeiarzt\r
	* Oder wenn Gefahr im Verzug (Amtsarzt zu langsam): Polizei führt Vorläufige Unterbringung durch`,t:"Recht"},{id:541,q:"Was ist das Effektenverzeichniss?",a:`* Eine liste alles Persönlichen Besitzes das beim Patienten gefunden wurde\r
	* Rechtliches Dokument\r
	* Sollten Sachen fehlen/kaput gehen haftet der Austeller oder die Personen an die die Gegenstände weitergegeben wurde\r
	* Deshalb: immer auf Vollständigkeit (va Wertgegenstende) und Unversehrtheit prüfen`,t:"Recht"},{id:542,q:"Wie schauen die Vertragskonstruktionen beim Transport aus?",a:`- Der Patient hat einen Kranken- oder Rettungstranportvertrag mit der Einrichtung\r
	- Die Einrichtung hat einen Dienstvertrag/(Verpflichtung zum Zivildienst) mit den RS\r
	- Die RS Erfüllen die Pflicht des Transportvertrages der Einrichtung mit dem Patienten, führen also die Tätigkeit aus haben aber keinen direkten Vertrag!`,t:"Recht"},{id:543,q:"Welche Gesetze sind Relevant für unseren Rettungsdienst?",a:`Bundesgesetze: \r
		* Sanitätergesetz (SanG): Pflichten, Tätigkeitsbereich, Kompetenzen der Sanis\r
			. Sanitäter-Ausbildungsverordnung: Wie werden RS ausgebildet, ...\r
			. Sanitäter-Ausweiß- und Fortbildungsverordnung: Wie musst du dich Fortbilden...\r
		* Angestelltengesetz (AngG): Für Hauptberufliche, regelt das Dienstverhältnis (im Arbeitsvertrag dann auch: wer darf dir Weisungen erteilen)\r
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
	* Magistratsabteilungen`,t:"Katastrophen"},{id:547,q:"Wie funktioniert die Alarmierung der Bevölkerung im Katastrophenfall?",a:`* Bundeswarnzentrale\r
	* Landeswarnzentrale\r
	* kat. leitzentrale (im Ratshaus)\r
	* K-Kreis, wichtige Betriebe, Krankenhjäuzser, Sirene -> Bevölkerung`,t:"Katastrophen"},{id:548,q:"Über welche Kanäle wird die Bevölkerung gewarnt?",a:`* Radio, TV\r
	* Lautsprecher (auf Autos, in öffentl. Gebäuden)\r
	* Sirene\r
	* Presse`,t:"Katastrophen"},{id:549,q:"Was sind wichtige Sirenenzeichen?",a:`* 3 min an: Warnung -> TV, Radio an\r
	* 1 min auf/ab: Alarm\r
	* 1 min an: Entwarnung`,t:"Katastrophen"},{id:550,q:"Was ist die GAMS regel?",a:`* Gefahr erkennen\r
	* Absichern\r
	* Menschenrettung (unter Selbstschutz)\r
	* Sicherheitskräfte informieren`,t:"Katastrophen"},{id:551,q:"Was ist bei Gefahrengutunfällen zu beachten?",a:`* 60m Sicherheitsabstand\r
	* 100-200m absperren\r
	* Bergung nur durch Fachkräfte`,t:"Katastrophen"},{id:552,q:"Was sind die Aufgaben des ersteintreffenden Fahrzeugs?",a:`* Melden wann da\r
	* Melden was los\r
	* Lage beurteilen\r
	* FW/LPD informieren\r
	* Updates an Leitstelle\r
	* Patientenablage u Wagenhalteplatz festlegen\r
	* RS: vorläufiger Leiter Rettung\r
	* Fahrer: vorläufiger Leiter Wagenhalteplatz`,t:"Katastrophen"},{id:553,q:"Was ist wichtig zu melden?",a:`* Ausmaß des Schadens \r
	* Welche Verletzungen, wie schwer\r
	* wie viel/welches Material noch benötigt wird + extra Fahrzeuge\r
	* Feuerwehr? \r
	* Noch Gefahr?\r
	* Wie Zufahren, Welche Infra exisitiert\r
	* Heli landung möglich?\r
	* Nicht alles auf einmal sondern laufend berichten während der beurteilung/erkundung`,t:"Katastrophen"},{id:554,q:"Was wird in der SanHist gemacht?",a:`* Triage\r
	* Erste Hilfe (va Lebensrettende Sofortmaßnahmen)\r
	* Organisation von Transport + Patienten Transportfähig machen`,t:"Katastrophen"},{id:555,q:"Was sind die Triagestufen?",a:`* I: Nicht transportfähig, sofort behandelm\r
	* II: Transportfähig\r
		. a: erste Prio (muss sofort abgeklärt werden)\r
		. b: 2. prio (baldmöglichst abzuklären)\r
	* III: Spätere Behandlung (leicht verletzte)\r
	* IV: Abwartende Behandlung (zu schwer verletzte)`,t:"Katastrophen"},{id:556,q:"Was müssen wir beim PLS ausfüllen?",a:`* B-sein, Atmung, Kreislauf, Name, Triage, gesetzte Maßnahmen, Lagerung\r
	* Zielspital\r
		. Unterer abriss an Leiter Transport\r
		. Oberer an Zielspital\r
	* Behandlungsprotokol (Meds)`,t:"Katastrophen"},{id:557,q:"Wie schaut der Weg eines Patienten aus?",a:`* In Schadenszone: Bei bergetriage zur bergung ausgewählt\r
	* PLS schein erhalten\r
	* Bei Triagestelle: Identifikation, Grobdiagnose, Einstufung, evtl Behandlungsaufträge\r
	* Behandlungsstelle (je nach Triagestufe): Behandlungsaufträge durchführen, Pat. Lagern, Effektenverzeichniss, ...\r
	* Verladestelle: Zielspital eintragen, unterer Abriss abreißen\r
	* Zielspital: oberer abriss`,t:"Katastrophen"},{id:558,q:"Was sind Beispiele wann die ABW verständigt werden kann?",a:`* Notfall/krisenereignisse: Kindertod, .. \r
	* Großschadenereignisse\r
	* Katastrophen\r
	* Geplante Ereignisse (Großveranstaltungen)`,t:"Katastrophen"},{id:559,q:"Was sind endogene/exogene Infektion?",a:"* Erreger aus Umgebung/ eigenem Körper (an anderer Stelle)",t:"Hygene"},{id:560,q:"Was sind besiedlung/infektion?",a:"* Mikroorg vermehren sich ohne erkrankung auszulösen/dringen in körper ein und verursachen Krankheitssymptome",t:"Hygene"},{id:561,q:"Wie können sich Erreger bewegen?",a:`* lymphogen\r
	* in Hohlräumen/Gewebe\r
	* Hämatogen (im Blut)\r
		. Sepsis\r
		. Septischer Schock`,t:"Hygene"},{id:562,q:"Was ist eine systematische Infektion?",a:"* Ganzer Körper betroffen (hämatogen)",t:"Hygene"},{id:563,q:"Was ist Sepsis?",a:`* Fehler des Immunsystem -> greift Körpereigene Zellen an\r
	* Sepsis immer wenn infekt + Organversagen`,t:"Hygene"},{id:564,q:"Wie lässt sich Sepsis preäklinisch diagnostizieren?",a:`* sehr schwer\r
	* Verdacht von Infekt\r
	* qSOFA (quick sequential organ failiure assessment score) [2/3 out of 3 -> Kritisch]\r
		. GCS < 15\r
		. RR < 100\r
		. AF > 22\r
	* Petechien (fleckenhämatome als Symptom von Organversagen)`,t:"Hygene"},{id:565,q:"Welche Gefahren können Schutz von Handschuhen aufheben?",a:`* Penetration\r
	* Permeabiität (nie 100% dicht)\r
	* Kontamination beim Ausziehen`,t:"Hygene"},{id:566,q:"Welche Arten von Infektionstransporte gibt es im RD?",a:`* IInfektion über Blut (Hep B, C, HIV)\r
		. nicht unbedingt einzeltransport\r
		. handschuhe\r
	* Kontakt/Schmierinfekt (Hep A, MRE, Clostridien, Brechdurchfall)\r
		. Einzeltransport\r
		. handschuhe\r
		. Kittel/Schürze\r
	* Tröpfcheninfekt (Meningitis, Tbc, Grippe, Covid)\r
		. Einzeltransport\r
		. handschuhe\r
		. schürze/kittel\r
		. ffp3 maske`,t:"Hygene"},{id:567,q:"Was ist Meningitis?",a:`* Entzündung Hirn- u Rückenmarkshaut\r
	* Meist durch Meningokokken (bakterielle Mening.)\r
		. ansteckend\r
		. va 1-4j 15-19j\r
		. Tröpcheninfekt + enger Kontakt`,t:"Hygene"},{id:568,q:"Was sind Symptome von bakterieller Meningitis?",a:`* Fieber, Schüttelfrost\r
	* Kopfweh\r
	* Meningismus\r
	* Licht- und Lärmempfindlich\r
	* B-trübung\r
	* Krämpfe\r
	* Petechien`,t:"Hygene"},{id:569,q:"Maßnahmen bakt Meningitis?",a:`* Handschuhe, Kittel, Maske\r
	* Lagerung nach Zustand\r
		* OK 30°\r
		* wenn eingetrübt SSL\r
	* O2 bei bedarf\r
	* Neurochekc + Meningismustest\r
	* Überwachen Vitalwerte\r
	* NA je nach Zustand \r
	* Meldung JUH\r
	* KH voranmelden\r
	* wenn tatsächlich bakt. meningitis: RS nimmt 750mg Ciproxin`,t:"Hygene"},{id:570,q:"Was sind Auslöser von Brechdurchfall?",a:`* viral (Rota/Norovirus) -> Tröpfcheninfekt\r
	* bakteriekk (Salmonellen) -> Lebénsmittel\r
	* Symptome:\r
		. Übelkeit\r
		. Erbrechen\r
		. evtl. Durchfall\r
		. evtl. Fieber\r
	* Achtung: Dehydration!!`,t:"Hygene"},{id:571,q:"Was ist TB?",a:`* 1/3 aller menschen infiziert, 5-10% krank\r
	* Therapie: Antibiotika\r
	* Zunahme von Multiresistentem TB\r
	* offene Lungen-TB:\r
		. Tröpfcheninfekt.\r
		. infektionswahrscheinl. trotzdem gering`,t:"Hygene"},{id:572,q:"Symptome bei TB?",a:`* Fieber, Nachtschweiß\r
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
		. Sepsis`,t:"Hygene"},{id:575,q:"Schutzmaßnahmen multiresistenter erreger?",a:`* Handschuhe, Kittel\r
	* Wunden Verbinden\r
	* Masken\r
	* Einzeltransport\r
	* Händedesinfekt (auch Patient)\r
	* PSA ablegen`,t:"Hygene"},{id:576,q:"Was ist Clostridium difficile?",a:`* Darmerkrankung nach Antibiotika-einnahme\r
	* Symptome: \r
		. milder Durchfall\r
		. möglw Darmentzündung\r
		. bishin zu Perforation\r
		. Schmierinfektion\r
	* Nur schwere und Todesfälle meldepflichtig`,t:"Hygene"},{id:577,q:"Was ist Hepatitis?",a:`* Virus A,B,C\r
	* Leberentzündung\r
	* Symptome:\r
		* keine\r
		* Überleit, erbrechen, krank fühlen, temp erhöhung\r
		* Lebervergrößerung, Ikterus, dunkler harn`,t:"Hygene"},{id:578,q:"Was ist Hep A/B/C?",a:`* A: \r
		. weltweit, aber Europa selten\r
		. Schmierinfekt\r
		. nur wenn akut ansteckend\r
		. Impfbar\r
	* B:\r
		. überall\r
		. infekt über blut\r
		. 5-10% der fälle leberzirrhose, karzinom\r
	* C:\r
		. überall\r
		. körperflüssigkeiten aber serlten\r
		. mehr als 70% der fälle leberzirrhose, karzinom`,t:"Hygene"},{id:579,q:"Was ist HIV/AIDS?",a:`* Symptome:\r
		. akute phase: grippesymptome\r
		. latenzphase (~10j): keine\r
		. Krankheitsphase: wie Akut nur zusätzlich kein Immunsystem\r
	* Infekt über Blut, Sperma, Vaginalflüssigkeit\r
	* Lebenslang infektiös\r
	* keine Impfung`,t:"Hygene"},{id:580,q:"Maßnahmen Nadelstichverletzung?",a:`* Wunde auspressen (4-5min)\r
	* Desinfekt 30s\r
	* Wenn blut im mund: octenisept 30s spülen, 1m wirken\r
	* Journal melden\r
	* Nach dienst ins KH\r
	* Patientendaten mitnehmen`,t:"Hygene"}];class ye{constructor(){K(this,"totalVal",0);K(this,"vals",[])}getRand(){let e=0,t=Math.random()*this.totalVal;for(const r of this.vals)if(e+=r.Weight,e>=t)return r.Value}getItem(e){return this.vals[this.vals.findIndex(t=>t.Value===e)]}push(e,t){this.vals.push(new Ae(r=>{this.totalVal+=r,console.log("Changed total by "+r)},e,t))}clear(){this.totalVal=0,this.vals=[]}remove(e){const t=this.vals.findIndex(r=>r.Value===e);this.totalVal-=this.vals[t].Weight,this.vals.splice(t,1)}get length(){return this.vals.length}}class Ae{constructor(e,t,r=1){K(this,"_weight",0);K(this,"WeightChangedCallback");K(this,"Value");this.WeightChangedCallback=e,this.Value=t,this.Weight=r}get Weight(){return this._weight}set Weight(e){if(e<=0)throw Error("Weight of an element can never be smaller or equal to 0");this.WeightChangedCallback(e-this.Weight),this._weight=e}}function qe(n){let e,t;return e=new We({props:{Question:n[0],Callback:n[3]}}),{c(){me(e.$$.fragment)},m(r,i){ne(e,r,i),t=!0},p(r,i){const a={};i&1&&(a.Question=r[0]),e.$set(a)},i(r){t||(F(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){te(e,r)}}}function Be(n){let e;return{c(){e=b("p"),e.textContent="No questions left, you answered all of them"},m(t,r){P(t,e,r)},p:w,i:w,o:w,d(t){t&&B(e)}}}function Ee(n){let e,t,r,i,a,l,c,h,s,f,d;const y=[Be,qe],o=[];function z(g,v){return g[1]==0?0:1}return t=z(n),r=o[t]=y[t](n),{c(){e=b("div"),r.c(),i=O(),a=b("button"),l=S("Reset ("),c=S(n[1]),h=S(" remain)"),W(e,"class","svelte-ymc6rc")},m(g,v){P(g,e,v),o[t].m(e,null),u(e,i),u(e,a),u(a,l),u(a,c),u(a,h),s=!0,f||(d=M(a,"click",n[2]),f=!0)},p(g,[v]){let A=t;t=z(g),t===A?o[t].p(g,v):(oe(),_(o[A],1,1,()=>{o[A]=null}),ge(),r=o[t],r?r.p(g,v):(r=o[t]=y[t](g),r.c()),F(r,1),r.m(e,i)),(!s||v&2)&&V(c,g[1])},i(g){s||(F(r),s=!0)},o(g){_(r),s=!1},d(g){g&&B(e),o[t].d(),f=!1,d()}}}function Pe(n,e,t){const r=new ye;let i,a;function l(){t(0,i=r.getRand()),t(1,a=r.length)}function c(s=void 0){r.clear();for(const f of Se)r.push(f,10);l()}c();function h(s){i!=null&&s&&r.remove(i),r.length>0&&l()}return[i,a,c,h]}class Ke extends ie{constructor(e){super(),re(this,e,Pe,Ee,Y,{})}}new Ke({target:document.getElementById("app")});
