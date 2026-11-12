const A = id => 'https://claude.ai/artifact/' + id;
const GH = r => 'https://github.com/RocketLutzk/' + r;
const PG = r => 'https://rocketlutzk.github.io/' + r + '/';

/* h: [thumb bg, window, hero, accent, text, dim] ; m: mockup type ; L: links [kind, url] */
const P = [
  {id:'arkada', cat:'web', st:'live', m:'site', h:['#1D1A17','#F4EFE6','#2A241E','#C9A45C','#F4EFE6','#8C8170'],
   L:[['demo',A('2sXWzdhUBNz7gLMAdkKZGf')],['concept',A('UqsSpwYN2K6hUNEk9ZJG1b')],['code',GH('hetman')]],
   tags:['Multi-page app','Admin panel','SEO','Media library'],
   uk:{t:'Аркада — сайт бренду алкогольних напоїв з адмінкою', c:'Концепт для лікеро-горілчаного заводу «Гетьман»',
       d:'Повноцінний сайт виробника з каталогом, рецептами коктейлів і B2B-розділом. Бренд-айдентику витягнуто з PDF компанії, фото продукції очищено від фону.',
       f:['Адмінка: товари, блог, маркетинг, B2B/експорт, вхідні заявки','Медіабібліотека та SEO-інструменти','Окремий анімований дизайн-концепт і версія під бренд «Гетьман»']},
   en:{t:'Arkada — spirits brand site with admin panel', c:'Concept for the Hetman distillery',
       d:'A full producer website with catalog, cocktail recipes and a B2B section. Brand identity extracted from company PDFs; product photos cut out from backgrounds.',
       f:['Admin: products, blog, marketing, B2B/export, leads inbox','Media library and SEO tools','A separate animated design concept and a Hetman-branded version']}},
  {id:'arkada3d', cat:'web', st:'live', m:'site3d', h:['#0B1630','#0F1E40','#14285A','#E7C778','#EEF2FF','#5A6E9E'],
   L:[['demo',A('SwyB31B3BsgLms7wjJQ1JF')]],
   tags:['WebGL','3D','Scroll animation'],
   uk:{t:'Аркада 3D — WebGL-промосторінка', c:'Промо для горілчаного бренду',
       d:'Скляна 3D-пляшка, яка під час скролу наповнюється і рухається через етапи виробництва.',
       f:['3D-пляшка на WebGL','Сторітелінг через скрол','Етапи виробництва']},
   en:{t:'Arkada 3D — WebGL promo page', c:'Promo for a vodka brand',
       d:'A glass 3D bottle that fills up and moves through the production stages as you scroll.',
       f:['WebGL 3D bottle','Scroll storytelling','Production stages']}},
  {id:'kyiv', cat:'web', st:'wip', m:'site3d', h:['#2A0E14','#3A121B','#4A1823','#E8D3A2','#FFF3E6','#7A4B55'],
   L:[],
   tags:['3D / 360°','Promo page'],
   uk:{t:'«Київ Преміум» — 3D-промосторінка', c:'Горілчаний бренд клієнта',
       d:'Промосторінка з 3D-моделлю пляшки та оглядом на 360°, щоб продукт можна було покрутити просто в браузері.',
       f:['Обертання пляшки на 360°','Преміальна подача бренду','Адаптація під мобільні']},
   en:{t:'Kyiv Premium — 3D promo page', c:'A client\'s vodka brand',
       d:'A promo page with a 3D bottle and 360° view, so visitors can spin the product right in the browser.',
       f:['360° bottle rotation','Premium brand presentation','Mobile-ready']}},
  {id:'erp', cat:'erp', st:'live', m:'dash', h:['#3A2418','#FBF7F3','#F1E6DC','#B8642F','#3A2418','#C9B4A3'],
   L:[['demo',A('95bcBuQyrPSfmb3RDvmXH3')]],
   tags:['React','Django','PostgreSQL','ERP'],
   uk:{t:'«Мідний контур» — ERP для виробництва', c:'ТЗ та інтерактивне демо для лікеро-горілчаного заводу',
       d:'Детальне ТЗ і робоче демо системи, яка з\'єднує виробництво, склад, продажі та облік в одному інтерфейсі, з дашбордами й формальними звітами.',
       f:['Модулі: виробництво, склад, продажі/CRM, бухгалтерія','Дашборди та 4 формальні звіти','План етапів, команди й бюджету на Django + PostgreSQL + React']},
   en:{t:'Midnyi Kontur — manufacturing ERP', c:'Spec and interactive demo for a distillery',
       d:'A detailed spec and working demo that connects production, warehouse, sales and accounting in one interface, with dashboards and formal reports.',
       f:['Modules: production, warehouse, sales/CRM, accounting','Dashboards and 4 formal reports','Phase, team and budget plan on Django + PostgreSQL + React']}},
  {id:'eko', cat:'web', st:'live', m:'shop', h:['#DCE5D3','#FFFFFF','#EEF2E8','#4F7A3A','#22301A','#B9C7AE'],
   L:[['demo',A('BzQTmbmc4JA8dkgGUfNoeS')]],
   tags:['E-commerce','Catalog','Checkout'],
   uk:{t:'Eko Modda — інтернет-магазин меблів з масиву', c:'Меблевий бізнес',
       d:'Адаптивний магазин, де покупець обирає розмір і породу дерева, кладе меблі в кошик та оформлює замовлення з онлайн-оплатою.',
       f:['Каталог і картки товарів','Вибір розміру й породи','Кошик та оформлення з оплатою']},
   en:{t:'Eko Modda — solid-wood furniture store', c:'Furniture business',
       d:'A responsive store where buyers choose size and wood species, add to cart and check out with online payment.',
       f:['Catalog and product pages','Size and wood species picker','Cart and checkout with payment']}},
  {id:'rmauto', cat:'web', st:'live', m:'cars', h:['#141414','#1E1E1E','#2A2A2A','#E3342F','#F2F2F2','#555555'],
   L:[['demo',A('L6jLRaWzT8SNTtYSfSMG2f')],['code',GH('rmauto')]],
   tags:['Car listings','Credit calculator','TikTok feed'],
   uk:{t:'RMauto — сайт автомайданчика', c:'Автодилер, пропозицію надіслано',
       d:'Сайт з анімованим першим екраном, TikTok-стрічкою, каталогом із сортуванням і сторінками авто з галереєю та кредитним калькулятором.',
       f:['Каталог із сортуванням','Сторінка авто з галереєю','Кредитний калькулятор і TikTok-стрічка']},
   en:{t:'RMauto — used-car dealership site', c:'Car dealer, offer sent',
       d:'A site with an animated hero, TikTok feed, sortable inventory and car pages with gallery and a loan calculator.',
       f:['Sortable inventory','Car page with gallery','Loan calculator and TikTok feed']}},
  {id:'gal', cat:'web', st:'wip', m:'site', h:['#0E2A3B','#F5F8FA','#123B52','#2FB5C9','#F5F8FA','#93A9B6'],
   L:[],
   tags:['Landing','Cost calculator','Lead forms'],
   uk:{t:'Global Auto Logistic — сайт імпорту авто зі США', c:'Львівська компанія, прототип для пропозиції',
       d:'Сайт, що пояснює, як пригнати авто з аукціонів США: етапи, терміни, вартість і заявка на підбір.',
       f:['Етапи доставки та розмитнення','Блок довіри й кейси','Форма підбору авто']},
   en:{t:'Global Auto Logistic — US car import site', c:'Lviv company, pitch prototype',
       d:'A site that explains importing a car from US auctions: steps, timing, costs and a request form.',
       f:['Shipping and customs steps','Trust block and cases','Car search request form']}},
  {id:'leo', cat:'web', st:'live', m:'shop', h:['#E9E2D6','#FFFFFF','#F4EEE4','#8A5A2B','#2E2418','#CBBBA4'],
   L:[['demo',A('87kZ7mvwhDW6Xx4QkbR5jW')]],
   tags:['B2B catalog','Cutting map','Filters'],
   uk:{t:'Леоплит — сайт постачальника плитних матеріалів', c:'Львів, прототип для пропозиції',
       d:'Адаптивний каталог плит для меблярів з фільтрами, онлайн-картою розкрою, залишками та фасадами.',
       f:['Каталог плит із фільтрами','Онлайн-карта розкрою','Залишки, фасади й контакти']},
   en:{t:'Leoplyt — board materials supplier site', c:'Lviv, pitch prototype',
       d:'A responsive board catalog for furniture makers with filters, an online cutting map, offcuts and facades.',
       f:['Filtered board catalog','Online cutting map','Offcuts, facades and contacts']}},
  {id:'lyceum', cat:'web', st:'live', m:'site', h:['#E4ECF7','#FFFFFF','#1F4F9C','#F2C230','#FFFFFF','#A9BBD6'],
   L:[['demo',A('MQnJHVEZKK5j6YWSTqSpz4')]],
   tags:['School site','News','Team'],
   uk:{t:'Ліцей Стернюка — шкільний сайт', c:'Пустомитівський ліцей',
       d:'Сучасний сайт ліцею з новинами, розкладом, документами та розділом «Команда» з педагогами.',
       f:['Новини й оголошення','Документи та прозорість','Розділ «Команда»']},
   en:{t:'Sterniuk Lyceum — school website', c:'Pustomyty Lyceum',
       d:'A modern school site with news, schedule, documents and a Team section for teachers.',
       f:['News and announcements','Documents and transparency','Team section']}},
  {id:'lumen', cat:'app', st:'live', m:'casino', h:['#120B24','#1A1033','#24164A','#FF4FB0','#F2EAFF','#4A3A78'],
   L:[['demo',A('5QS8JvnKh1oiFabtmNMcEU')],['code',GH('lumen')]],
   tags:['18 games','Provably fair','Back office'],
   uk:{t:'Lumen Vault — демо крипто-казино', c:'Власний продукт для юрисдикцій, де це легально',
       d:'Демо з 18 ігор із перевірною чесністю: live Crash і Jackpot, власні ігри, слоти й настільні ігри, віртуальний гаманець та бек-офіс оператора.',
       f:['18 ігор, зокрема live Crash і Jackpot Draw','Віртуальний гаманець','Бек-офіс оператора']},
   en:{t:'Lumen Vault — crypto casino demo', c:'Own product for licensed jurisdictions',
       d:'A demo with 18 provably fair games: live Crash and Jackpot, originals, slots and table games, a virtual wallet and an operator back office.',
       f:['18 games incl. live Crash and Jackpot Draw','Virtual wallet','Operator back office']}},
  {id:'academy', cat:'app', st:'concept', m:'phones', h:['#1E1A16','#2A241E','#3A3128','#C9A45C','#F4EFE6','#6B5E4E'],
   L:[],
   tags:['E-learning','Mobile app','Bartending'],
   uk:{t:'Hetman Academy — навчальний застосунок для барменів', c:'Концепт для «Гетьман»',
       d:'Застосунок і сторінка на сайті бренду, де бармени вивчають продукти й коктейлі та проходять уроки й тести.',
       f:['Уроки й тести','Бібліотека коктейлів','Сторінка Academy на сайті']},
   en:{t:'Hetman Academy — bartender learning app', c:'Concept for Hetman',
       d:'An app and a brand-site page where bartenders learn the products and cocktails through lessons and quizzes.',
       f:['Lessons and quizzes','Cocktail library','Academy page on the site']}},
  {id:'rozvodka', cat:'app', st:'live', m:'plan', h:['#E3EEF6','#FFFFFF','#F6FAFD','#1C7CC7','#123','#C8DAE8'],
   L:[['demo',A('9RmYxEBycAxSSJy6TmAV63')],['code',GH('rozvodka')]],
   tags:['Plan editor','Calculator','B2B'],
   uk:{t:'«Розводка» — калькулятор сантехніки за планом', c:'Власний продукт для мереж сантехмагазинів',
       d:'Монтажник малює план об\'єкта, а застосунок рахує труби, фітинги й матеріали та формує замовлення в обраному магазині. До нього є презентація для мереж і план розсилки.',
       f:['Редактор плану розводки','Автопідрахунок матеріалів','Замовлення в магазині']},
   en:{t:'Rozvodka — plumbing materials calculator', c:'Own product for plumbing store chains',
       d:'An installer draws the floor plan, and the app counts pipes, fittings and materials and builds an order in the chosen store. Comes with a sales deck and outreach plan.',
       f:['Piping plan editor','Automatic materials count','Order in the store']}},
  {id:'bud', cat:'app', st:'live', m:'plan2', h:['#EFE7DA','#FFFFFF','#FBF7F0','#D9762B','#2B2116','#E2D3BD'],
   L:[['demo',A('NRQB7XVuqdKo2gGAb9vysk')]],
   tags:['Cost estimator','Plan by points','Materials'],
   uk:{t:'«Будкошторис» — кошторис будинку', c:'Власний продукт',
       d:'Користувач малює план по точках і вибирає матеріали, а застосунок рахує вартість будинку від фундаменту до даху.',
       f:['Креслення плану по точках','Вибір матеріалів','Кошторис по етапах']},
   en:{t:'Budkoshtorys — house cost estimator', c:'Own product',
       d:'Draw the plan point by point and pick materials; the app calculates the house cost from foundation to roof.',
       f:['Point-by-point plan drawing','Materials selection','Stage-by-stage estimate']}},
  {id:'sytno', cat:'app', st:'live', m:'phones', h:['#F6E7D4','#FFFFFF','#FCEBD8','#E2572B','#2A1A10','#EBD2B8'],
   L:[['demo',A('B5xZ1pwM3xZdcJTYE2DMsb')],['code',GH('sytno')]],
   tags:['Mobile prototype','Macros','Shopping list'],
   uk:{t:'«Ситно» — планувальник харчування', c:'Власний продукт',
       d:'Мобільний прототип: КБЖВ, меню під час на готування і продукти вдома, прогрес дня, заготовки, покупки та облік їжі за фото.',
       f:['Розрахунок КБЖВ і прогрес дня','Меню з того, що є вдома','Список покупок і облік їжі за фото']},
   en:{t:'Sytno — meal planner', c:'Own product',
       d:'A mobile prototype: macros, menus based on cooking time and food at home, daily progress, meal prep, shopping and photo food logging.',
       f:['Macros and daily progress','Menus from what\'s at home','Shopping list and photo food log']}},
  {id:'cutting', cat:'app', st:'concept', m:'cut', h:['#E6E9EE','#FFFFFF','#F7F8FA','#3D5AFE','#1A1F2B','#C9CFDA'],
   L:[],
   tags:['Optimization','Furniture','Calculator'],
   uk:{t:'Калькулятор розкрою меблевих плит', c:'Ідея власного продукту',
       d:'Застосунок, що розкладає деталі на листі ДСП чи МДФ з мінімумом відходів і рахує вартість матеріалів.',
       f:['Оптимальне розкладання деталей','Підрахунок відходів','Вартість матеріалів']},
   en:{t:'Board cutting-layout calculator', c:'Own product idea',
       d:'An app that lays parts out on chipboard or MDF sheets with minimum waste and prices the materials.',
       f:['Optimal part layout','Waste calculation','Materials cost']}},
  {id:'poly', cat:'data', st:'live', m:'line', h:['#101826','#151F30','#1B2740','#4BD1A0','#E6EDF7','#3A4A66'],
   L:[['dash',PG('polysim')],['code',GH('polysim')]],
   tags:['Python','GitHub Actions','GitHub Pages','Dashboard'],
   uk:{t:'Polysim — симулятор ставок Polymarket', c:'Власний проєкт',
       d:'Бот за розкладом збирає ринки, робить віртуальні ставки за стратегіями й показує на дашборді, скільки б вони заробили.',
       f:['Збір даних через GitHub Actions','Paper-trading кількох стратегій','Дашборд на GitHub Pages']},
   en:{t:'Polysim — Polymarket strategy simulator', c:'Own project',
       d:'A scheduled bot collects markets, places virtual bets by strategy and shows on a dashboard how much each would have earned.',
       f:['Data collection via GitHub Actions','Paper trading of several strategies','Dashboard on GitHub Pages']}},
  {id:'trade', cat:'data', st:'live', m:'line2', h:['#0D1117','#161B22','#1C2330','#F0B429','#E6EDF3','#3B4656'],
   L:[['dash',PG('tradesim')],['code',GH('tradesim')]],
   tags:['Backtesting','Paper trading','Crypto · stocks · FX'],
   uk:{t:'TradeSim — тестування торгових стратегій', c:'Власний проєкт',
       d:'Бектест і paper-trading на крипті, акціях США, золоті, нафті та форексі на годинних свічках, щоб перевірити прибутковість до реальних грошей.',
       f:['Стратегії: EMA, MACD, Дончіан, RSI та інші','Бектест на історії й віртуальний депозит','Дашборд на GitHub Pages']},
   en:{t:'TradeSim — trading strategy tester', c:'Own project',
       d:'Backtesting and paper trading on crypto, US stocks, gold, oil and FX using hourly candles, to prove profitability before real money.',
       f:['Strategies: EMA, MACD, Donchian, RSI and more','Backtests and a virtual account','Dashboard on GitHub Pages']}},
  {id:'media', cat:'docs', st:'done', m:'dash', h:['#E8EEF9','#FFFFFF','#EEF3FC','#2F6BFF','#14213D','#C3D0EA'],
   L:[],
   tags:['Meta Ads','TikTok Ads','Google Ads','CPM'],
   uk:{t:'Медіаплан і брифи відділів', c:'Маркетинг для виробника напоїв',
       d:'Місячний медіаплан з охопленнями та CPM по каналах і брифи для кожного відділу компанії, щоб зібрати вимоги до сайту й систем.',
       f:['Охоплення й CPM по каналах','Брифи по відділах','Вимоги до сайту й ERP']},
   en:{t:'Media plan and department briefs', c:'Marketing for a beverage producer',
       d:'A monthly media plan with reach and CPM per channel, plus briefs for each department to gather site and system requirements.',
       f:['Reach and CPM per channel','Department briefs','Site and ERP requirements']}},
  {id:'cafe', cat:'docs', st:'done', m:'sheet', h:['#E7F2EC','#FFFFFF','#2E8B57','#2E8B57','#173B28','#BFD9C9'],
   L:[],
   tags:['Excel','Financial model','Grants'],
   uk:{t:'Бізнес-план кав\'ярні на винос', c:'Пустомити, під грант «Власна справа»',
       d:'Фінансова модель у таблиці: стартові витрати, виручка, собівартість, окупність, а також аналіз грантів «Власна справа» та Startup EDGE.',
       f:['Стартові витрати й окупність','Прогноз виручки','Аналіз грантових програм']},
   en:{t:'Takeaway café business plan', c:'Pustomyty, for a state small-business grant',
       d:'A spreadsheet financial model: startup costs, revenue, cost of goods and payback, plus a review of Ukrainian and international grant programs.',
       f:['Startup costs and payback','Revenue forecast','Grant program review']}},
  {id:'school', cat:'docs', st:'done', m:'sheet', h:['#FFF4DA','#FFFFFF','#E9A100','#E9A100','#3A2A00','#F1DDA8'],
   L:[],
   tags:['Excel','Curriculum','Python course'],
   uk:{t:'Календарно-тематичне планування з інформатики', c:'Для власних 10–11 класів',
       d:'Річний план за профільною програмою інформатики з окремими вкладками на кожен клас, імпортом у HUMAN і семестром Python в 11 класі.',
       f:['Окрема вкладка на кожен клас','Імпорт у платформу HUMAN','Програма факультативу «Інформатика»']},
   en:{t:'Informatics curriculum planner', c:'For my grade 10–11 classes',
       d:'A full-year plan for the Ukrainian profile-level informatics program, one tab per class, imported into the HUMAN school platform, with a Python semester.',
       f:['One tab per class','Import into the HUMAN platform','Elective course syllabus']}}
];


/* Presentation content: problem, audience, result */
const EXTRA = {
  arkada:{uk:{prob:'Виробнику потрібен сучасний сайт, яким маркетинг керує сам: продукти, новини, експорт і заявки без розробника.',who:'Маркетинг, дистриб\'ютори, HoReCa, експортні партнери',res:'Готовий прототип з адмінкою, який можна показати керівництву й запустити на реальному домені.'},
          en:{prob:'The producer needs a modern site the marketing team runs on its own: products, news, export and leads without a developer.',who:'Marketing, distributors, HoReCa, export partners',res:'A working prototype with admin panel, ready to show management and launch on a real domain.'}},
  arkada3d:{uk:{prob:'Звичайний каталог не передає преміальність продукту і процес його створення.',who:'Покупці й партнери бренду',res:'Яскрава сторінка для запуску продукту й рекламних кампаній.'},
            en:{prob:'A regular catalog fails to convey a premium product and how it is made.',who:'Brand customers and partners',res:'A striking page for product launches and ad campaigns.'}},
  kyiv:{uk:{prob:'Бренду потрібна інтерактивна презентація пляшки для промо й соцмереж.',who:'Покупці, торгові мережі',res:'Сторінка в роботі, демо покажу на запит.'},
        en:{prob:'The brand needs an interactive bottle showcase for promo and social media.',who:'Shoppers, retail chains',res:'Page in progress, demo available on request.'}},
  erp:{uk:{prob:'Виробництво, склад і продажі ведуться в різних таблицях, і керівник не бачить картину в реальному часі.',who:'Керівник, виробництво, склад, продажі, бухгалтерія',res:'Інтерактивне демо всіх модулів і ТЗ з поетапним планом і бюджетом розробки.'},
       en:{prob:'Production, warehouse and sales live in separate spreadsheets, so management has no real-time picture.',who:'Management, production, warehouse, sales, accounting',res:'An interactive demo of every module and a spec with a phased plan and budget.'}},
  eko:{uk:{prob:'Меблі з масиву продаються через переписку, а потрібен магазин з вибором розміру, породи та оплатою.',who:'Покупці меблів онлайн',res:'Магазин з повним шляхом від каталогу до оплати, готовий до показу.'},
       en:{prob:'Solid-wood furniture is sold through chat messages; the business needs a store with size and wood choice plus payment.',who:'Online furniture shoppers',res:'A store with the full path from catalog to payment, ready to demo.'}},
  rmauto:{uk:{prob:'Авто продаються через OLX і TikTok, а власної вітрини з заявками немає.',who:'Покупці вживаних авто, зокрема в кредит',res:'Прототип сайту з каталогом і заявками, пропозицію надіслано власнику.'},
          en:{prob:'Cars are sold via classifieds and TikTok with no own showroom site collecting leads.',who:'Used-car buyers, including on credit',res:'A site prototype with inventory and lead forms; offer sent to the owner.'}},
  gal:{uk:{prob:'Клієнти не розуміють процес і вартість пригону авто зі США та бояться ризиків.',who:'Люди, які хочуть авто з США',res:'Прототип для пропозиції компанії, у роботі.'},
       en:{prob:'Clients don\'t understand the process and cost of importing a car from the US and fear the risks.',who:'People who want a car from the US',res:'A pitch prototype for the company, in progress.'}},
  leo:{uk:{prob:'Меблярам треба швидко знайти плиту, побачити залишки й порахувати розкрій.',who:'Меблярі, майстри, дизайнери',res:'Прототип показано компанії; його можна адаптувати під іншого постачальника.'},
       en:{prob:'Furniture makers need to find a board fast, check offcuts and plan the cutting.',who:'Furniture makers, craftsmen, designers',res:'Prototype shown to the company; can be adapted for another supplier.'}},
  lyceum:{uk:{prob:'Старий сайт школи незручний і не показує життя ліцею.',who:'Батьки, учні, вчителі, громада',res:'Сучасний сайт; розділ «Команда» доповнюється реальними даними.'},
          en:{prob:'The old school site is hard to use and doesn\'t show school life.',who:'Parents, students, teachers, community',res:'A modern site; the Team section is being filled with real data.'}},
  lumen:{uk:{prob:'Оператору потрібне демо продукту з іграми й адмінкою для показу партнерам.',who:'Оператори в ліцензованих юрисдикціях',res:'Робоче демо з 18 ігор і бек-офісом.'},
         en:{prob:'An operator needs a product demo with games and admin to show partners.',who:'Operators in licensed jurisdictions',res:'A working demo with 18 games and a back office.'}},
  academy:{uk:{prob:'Барменам бракує зручного способу вивчити продукти й коктейлі бренду.',who:'Бармени, HoReCa-партнери',res:'Концепт, розробку заплановано.'},
           en:{prob:'Bartenders lack an easy way to learn the brand\'s products and cocktails.',who:'Bartenders, HoReCa partners',res:'Concept; development is planned.'}},
  rozvodka:{uk:{prob:'Монтажник вручну рахує труби й фітинги і втрачає час на замовлення.',who:'Монтажники й мережі сантехмагазинів',res:'Прототип, презентація для мереж і список із 20 компаній для розсилки.'},
            en:{prob:'Installers count pipes and fittings by hand and lose time on orders.',who:'Installers and plumbing store chains',res:'A prototype, a sales deck for chains and a list of 20 companies to contact.'}},
  bud:{uk:{prob:'Людина, яка планує будинок, не знає, скільки він коштуватиме.',who:'Приватні забудовники, прораби',res:'Прототип калькулятора з кошторисом по етапах.'},
       en:{prob:'People planning a house don\'t know what it will cost.',who:'Private builders, site managers',res:'A calculator prototype with a stage-by-stage estimate.'}},
  sytno:{uk:{prob:'Важко харчуватися за ціллю, коли немає часу планувати меню й покупки.',who:'Ті, хто худне, тримає вагу чи набирає масу',res:'Мобільний прототип з повним сценарієм дня.'},
         en:{prob:'Eating for a goal is hard when there\'s no time to plan menus and shopping.',who:'People losing, keeping or gaining weight',res:'A mobile prototype covering a full day.'}},
  cutting:{uk:{prob:'Ручний розкрій дає багато відходів і помилки в ціні.',who:'Меблярі й цехи порізки',res:'Ідея; частину механіки втілено в карті розкрою для Леоплиту.'},
           en:{prob:'Manual cutting plans waste material and get prices wrong.',who:'Furniture makers and cutting shops',res:'An idea; part of it is built into the Leoplyt cutting map.'}},
  poly:{uk:{prob:'Невідомо, чи стратегія ставок прибуткова, а ризикувати реальними грошима не хочеться.',who:'Власне дослідження',res:'Бот безкоштовно працює на GitHub і щодня збирає статистику.'},
        en:{prob:'It\'s unclear whether a betting strategy is profitable, and real money is not worth the risk.',who:'Personal research',res:'The bot runs free on GitHub and collects stats every day.'}},
  trade:{uk:{prob:'Перш ніж доручати боту гроші, треба довести, що стратегія заробляє.',who:'Власне дослідження',res:'Бектести й віртуальна торгівля працюють на GitHub Actions.'},
         en:{prob:'Before trusting a bot with money, the strategy has to prove it earns.',who:'Personal research',res:'Backtests and virtual trading run on GitHub Actions.'}},
  media:{uk:{prob:'Рекламний бюджет треба розподілити між каналами, а вимоги відділів зібрати в одному місці.',who:'Керівництво й маркетинг',res:'Медіаплан на місяць і брифи для старту робіт.'},
         en:{prob:'The ad budget must be split across channels and department requirements gathered in one place.',who:'Management and marketing',res:'A monthly media plan and briefs to kick off the work.'}},
  cafe:{uk:{prob:'Перед подачею на грант треба порахувати, чи окупиться кав\'ярня.',who:'Грантова комісія, власник',res:'Готова фінансова модель.'},
        en:{prob:'Before applying for a grant, the café\'s payback has to be calculated.',who:'Grant committee, owner',res:'A finished financial model.'}},
  school:{uk:{prob:'Річне планування для шести класів забирає багато часу.',who:'Вчитель, адміністрація школи',res:'Готовий план на рік, імпортований у HUMAN.'},
          en:{prob:'Annual planning for six classes takes a lot of time.',who:'Teacher, school administration',res:'A finished year plan imported into HUMAN.'}}
};

function mock(p){
  const [bg,win,hero,acc,txt,dim] = p.h;
  const v = `--h-bg:${bg};--h-win:${win};--h-hero:${hero};--h-acc:${acc};--h-txt:${txt};--h-dim:${dim};--h-grid:${dim}55`;
  const chrome = '<div class="chrome"><i></i><i></i><i></i></div>';
  const nav = '<div class="nav"><b></b><s><i></i><i></i><i></i><i></i></s></div>';
  let inner = '';
  if(p.m==='site'||p.m==='site3d'||p.m==='cars'||p.m==='shop'){
    const em = (p.m==='site3d') ? '<em style="border-radius:40% 40% 12% 12%;width:14%;aspect-ratio:.4"></em>' : (p.m==='site'?'<em style="opacity:.25"></em>':'');
    const cols = p.m==='shop' ? 'repeat(4,1fr)' : (p.m==='cars'?'repeat(3,1fr)':'repeat(3,1fr)');
    const n = p.m==='shop'?4:3;
    inner = `<div class="win">${chrome}<div class="pg">${nav}<div class="herobox"><i></i><i></i><u></u>${em}</div><div class="row" style="grid-template-columns:${cols}">${'<i></i>'.repeat(n)}</div></div></div>`;
  } else if(p.m==='dash'){
    const bars=[40,62,48,80,70,92,66].map(h=>`<i style="height:${h}%"></i>`).join('');
    inner = `<div class="win">${chrome}<div class="pg dash"><div class="side"><i></i><i></i><i></i><i></i><i></i></div><div class="dmain"><div class="kpi"><i></i><i></i><i></i></div><div class="chart">${bars}</div></div></div></div>`;
  } else if(p.m==='line'||p.m==='line2'){
    const pts = p.m==='line' ? '0,70 12,62 24,66 36,50 48,54 60,38 72,42 84,26 100,18' : '0,55 10,60 22,44 34,52 46,30 58,40 70,24 82,34 100,14';
    inner = `<div class="win">${chrome}<div class="pg dash"><div class="side"><i></i><i></i><i></i><i></i></div><div class="dmain"><div class="kpi"><i></i><i></i><i></i></div><div class="chart"><svg viewBox="0 0 100 80" preserveAspectRatio="none"><polygon points="${pts} 100,80 0,80" fill="${acc}" opacity=".18"/><polyline points="${pts}" fill="none" stroke="${acc}" stroke-width="2" vector-effect="non-scaling-stroke"/></svg></div></div></div></div>`;
  } else if(p.m==='plan'||p.m==='plan2'){
    const svg = p.m==='plan'
      ? `<svg viewBox="0 0 100 60" preserveAspectRatio="none"><rect x="10" y="10" width="80" height="40" fill="none" stroke="${txt}" stroke-width="1.6" vector-effect="non-scaling-stroke"/><line x1="50" y1="10" x2="50" y2="50" stroke="${txt}" stroke-width="1" vector-effect="non-scaling-stroke"/><polyline points="18,44 18,20 44,20 44,30 70,30 70,18 84,18" fill="none" stroke="${acc}" stroke-width="2.2" vector-effect="non-scaling-stroke"/><polyline points="18,46 60,46 60,38 84,38" fill="none" stroke="#E5484D" stroke-width="2.2" vector-effect="non-scaling-stroke"/></svg>`
      : `<svg viewBox="0 0 100 60" preserveAspectRatio="none"><polygon points="12,50 12,18 50,8 88,18 88,50" fill="${acc}" fill-opacity=".12" stroke="${acc}" stroke-width="2" vector-effect="non-scaling-stroke"/><line x1="12" y1="34" x2="88" y2="34" stroke="${txt}" stroke-width="1" stroke-dasharray="3 2" vector-effect="non-scaling-stroke"/>${[[12,50],[12,18],[50,8],[88,18],[88,50]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.8" fill="${txt}"/>`).join('')}</svg>`;
    inner = `<div class="win">${chrome}<div class="pg dash"><div class="side"><i></i><i></i><i></i><i></i><i></i></div><div class="dmain"><div class="plan">${svg}</div></div></div></div>`;
  } else if(p.m==='casino'){
    const cols=['#FF4FB0','#7B5CFF','#2FD6C3','#FFB020','#FF5A5A','#4FA3FF','#9BE15D','#C04FFF'];
    inner = `<div class="win">${chrome}<div class="pg">${nav}<div class="herobox" style="flex:.8"><i></i><i></i><u></u></div><div class="casino">${cols.map(c=>`<i style="background:${c}"></i>`).join('')}</div></div></div>`;
  } else if(p.m==='sheet'){
    let cells='';
    for(let r=0;r<6;r++) for(let c=0;c<5;c++) cells+= r===0?'<i class="hd"></i>':`<i class="${c?'v':''}"></i>`;
    inner = `<div class="win">${chrome}<div class="pg"><div class="sheet">${cells}</div></div></div>`;
  } else if(p.m==='cut'){
    const rects=[[4,4,40,26],[46,4,24,26],[72,4,24,40],[4,32,30,28],[36,32,34,14],[36,48,34,12],[72,46,24,14]];
    const svg=`<svg viewBox="0 0 100 64" preserveAspectRatio="none"><rect x="2" y="2" width="96" height="60" fill="none" stroke="${txt}" stroke-width="1.4" vector-effect="non-scaling-stroke"/>${rects.map(([x,y,w,h],i)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${acc}" fill-opacity="${.12+i*.06}" stroke="${acc}" stroke-width="1" vector-effect="non-scaling-stroke"/>`).join('')}</svg>`;
    inner = `<div class="win">${chrome}<div class="pg dash"><div class="side"><i></i><i></i><i></i><i></i></div><div class="dmain"><div class="plan">${svg}</div></div></div></div>`;
  } else if(p.m==='phones'){
    const ph = '<div class="phone"><b></b><i class="big"></i><i></i><i></i><i></i></div>';
    inner = `<div class="phones">${ph}<div class="phone" style="height:112%"><b></b><i class="big" style="background:${acc};opacity:.85"></i><i></i><i></i></div>${ph}</div>`;
  }
  return `<div class="thumb" style="${v}" aria-hidden="true">${inner}</div>`;
}


const dots = {live:'#1FA971', proto:'#2944E0', pitch:'#E0A321', wip:'#B455D9', concept:'#8A8F98', done:'#2E8B57'};
