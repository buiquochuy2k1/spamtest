const axios = require("axios");

// Thông tin bot Telegram
const TELEGRAM_API = "https://api.telegram.org/bot7940859076:AAETxnec9aMDVNmeW-3PQaS4gEpaY6X5FZk/sendMessage";
const CHAT_ID = "5764004683";

const names = [
  "info","admin","contact","support","sales","marketing","help","hello","office","service",
  "team","hr","career","billing","finance","accounting","news","press","media","updates",
  "newsletter","webmaster","root","security","system","alerts","noreply","customerservice","cs","legal",
  "compliance","privacy","shop","store","orders","payment","invoice","booking","reservation","events",
  "partners","affiliate","ads","jobs","career","talent","developer","dev","api","it",
  "design","ux","ui","feedback","suggestions","questions","answers","faq","helpdesk","hotline",
  "customer","client","services","business","global","intl","partnersupport","operations","ops","board",
  "management","ceo","founder","cofounder","cto","cfo","coo","staff","teamlead","leader",
  "product","project","engineering","quality","qa","test","build","release","deploy","cloud",
  "server","network","vpn","data","database","report","analysis","analytics","research","lab"
];

const domains = [
  "gmail.com","yahoo.com","outlook.com","hotmail.com","protonmail.com","zoho.com","icloud.com","mail.com","gmx.com","yandex.com",
  "aol.com","fastmail.com","pm.me","tutanota.com","inbox.com","hushmail.com","live.com","msn.com","163.com","126.com",
  "qq.com","sina.com","rediffmail.com","indiatimes.com","rocketmail.com","yahoomail.com","bol.com.br","uol.com.br","terra.com.br","ig.com.br",
  "rambler.ru","bk.ru","list.ru","inbox.ru","ya.ru","seznam.cz","centrum.cz","volny.cz","tiscali.it","libero.it",
  "virgilio.it","tin.it","alice.it","wanadoo.fr","laposte.net","free.fr","orange.fr","neuf.fr","hotmail.co.uk","btinternet.com",
  "sky.com","talktalk.net","virginmedia.com","ntlworld.com","blueyonder.co.uk","o2.co.uk","gmx.net","web.de","arcor.de","t-online.de",
  "mail.ru","inbox.lv","onet.pl","wp.pl","interia.pl","o2.pl","gazeta.pl","ukr.net","meta.ua","bigmir.net",
  "i.ua","tut.by","mail.kz","hanmail.net","daum.net","naver.com","kakao.com","korea.com","yahoo.co.jp","docomo.ne.jp",
  "ezweb.ne.jp","softbank.ne.jp","nifty.com","ocn.ne.jp","biglobe.ne.jp","so-net.ne.jp","jcom.home.ne.jp","au.com","yahoo.com.vn","gmail.vn",
  "hotmail.vn","yahoo.com.sg","singnet.com.sg","pacific.net.sg","starhub.net.sg","optusnet.com.au","bigpond.com","iinet.net.au","tpg.com.au","internode.on.net",
  "vodafone.co.nz","xtra.co.nz","clear.net.nz","ihug.co.nz","hotmail.co.th","yahoo.co.th","mail.co.th","kku.ac.th","cmu.ac.th","ku.ac.th",
  "su.ac.th","chula.ac.th","psu.ac.th","hotmail.ph","yahoo.com.ph","rocketmail.ph","pldt.com.ph","sky.com.ph","protonmail.ch","gmx.ch",
  "bluewin.ch","sunrise.ch","swissonline.ch","hispeed.ch","outlook.de","live.de","hotmail.de","t-online.com","sapo.pt","netcabo.pt",
  "zonmail.pt","clix.pt","hotmail.es","yahoo.es","telefonica.net","terra.es","wanadoo.es","live.nl","hotmail.nl","ziggo.nl",
  "kpnmail.nl","planet.nl","chello.nl","hotmail.be","skynet.be","telenet.be","hotmail.se","live.se","telia.com","bredband.net",
  "comhem.se","spray.se","hotmail.no","live.no","online.no","start.no","frisurf.no","hotmail.dk","live.dk","mail.dk",
  "jubii.dk","hotmail.fi","luukku.com","suomi24.fi","kolumbus.fi","hotmail.is","simnet.is","postur.is","gmail.co.za","webmail.co.za",
  "mweb.co.za","telkomsa.net","vodamail.co.za","hotmail.ng","yahoo.com.ng","rocketmail.ng","gmail.ng","yahoo.co.id","plasa.com","indo.net.id",
  "cbn.net.id","centrin.net.id","indo.net.id","rad.net.id","gmail.my","yahoo.com.my","live.com.my","tm.net.my","jaring.my","gmail.hk",
  "yahoo.com.hk","hotmail.hk","netvigator.com","hkcable.com","seed.net.tw","pchome.com.tw","yahoo.com.tw","gmail.tw","hotmail.tw","msa.hinet.net",
  "kimo.com","gmail.sa","yahoo.com.sa","hotmail.sa","stc.com.sa","mobily.com.sa","zain.com.sa","gmail.ae","yahoo.com.ua","emirates.net.ae"
];


const locations = [
  // USA (United States of America)
  { city: "New York", country: "USA" },
  { city: "Los Angeles", country: "USA" },
  { city: "Chicago", country: "USA" },
  { city: "Houston", country: "USA" },
  { city: "Phoenix", country: "USA" },
  { city: "Philadelphia", country: "USA" },
  { city: "San Antonio", country: "USA" },
  { city: "San Diego", country: "USA" },
  { city: "Dallas", country: "USA" },
  { city: "San Francisco", country: "USA" },

  // Japan
  { city: "Tokyo", country: "Japan" },
  { city: "Yokohama", country: "Japan" },
  { city: "Osaka", country: "Japan" },
  { city: "Nagoya", country: "Japan" },
  { city: "Sapporo", country: "Japan" },
  { city: "Kyoto", country: "Japan" },
  { city: "Kobe", country: "Japan" },

  // China
  { city: "Beijing", country: "China" },
  { city: "Shanghai", country: "China" },
  { city: "Chongqing", country: "China" },
  { city: "Tianjin", country: "China" },
  { city: "Guangzhou", country: "China" },
  { city: "Shenzhen", country: "China" },
  { city: "Wuhan", country: "China" },

  // UK (United Kingdom)
  { city: "London", country: "UK" },
  { city: "Manchester", country: "UK" },
  { city: "Birmingham", country: "UK" },
  { city: "Liverpool", country: "UK" },
  { city: "Glasgow", country: "UK" },
  { city: "Edinburgh", country: "UK" },
  { city: "Bristol", country: "UK" },

  // France
  { city: "Paris", country: "France" },
  { city: "Marseille", country: "France" },
  { city: "Lyon", country: "France" },
  { city: "Toulouse", country: "France" },
  { city: "Nice", country: "France" },
  { city: "Nantes", country: "France" },

  // Germany
  { city: "Berlin", country: "Germany" },
  { city: "Hamburg", country: "Germany" },
  { city: "Munich", country: "Germany" },
  { city: "Cologne", country: "Germany" },
  { city: "Frankfurt", country: "Germany" },
  { city: "Stuttgart", country: "Germany" },

  // Canada
  { city: "Toronto", country: "Canada" },
  { city: "Montreal", country: "Canada" },
  { city: "Vancouver", country: "Canada" },
  { city: "Calgary", country: "Canada" },
  { city: "Ottawa", country: "Canada" },
  { city: "Edmonton", country: "Canada" },

  // Australia
  { city: "Sydney", country: "Australia" },
  { city: "Melbourne", country: "Australia" },
  { city: "Brisbane", country: "Australia" },
  { city: "Perth", country: "Australia" },
  { city: "Adelaide", country: "Australia" },
  { city: "Canberra", country: "Australia" },

  // India
  { city: "Delhi", country: "India" },
  { city: "Mumbai", country: "India" },
  { city: "Bangalore", country: "India" },
  { city: "Kolkata", country: "India" },
  { city: "Chennai", country: "India" },
  { city: "Hyderabad", country: "India" },

  // Brazil
  { city: "São Paulo", country: "Brazil" },
  { city: "Rio de Janeiro", country: "Brazil" },
  { city: "Brasília", country: "Brazil" },
  { city: "Salvador", country: "Brazil" },
  { city: "Fortaleza", country: "Brazil" },
  { city: "Manaus", country: "Brazil" },

  // Italy
  { city: "Rome", country: "Italy" },
  { city: "Milan", country: "Italy" },
  { city: "Naples", country: "Italy" },
  { city: "Turin", country: "Italy" },
  { city: "Florence", country: "Italy" },
  { city: "Venice", country: "Italy" },

  // Spain
  { city: "Madrid", country: "Spain" },
  { city: "Barcelona", country: "Spain" },
  { city: "Valencia", country: "Spain" },
  { city: "Seville", country: "Spain" },
  { city: "Zaragoza", country: "Spain" },
  { city: "Málaga", country: "Spain" },

  // Russia
  { city: "Moscow", country: "Russia" },
  { city: "Saint Petersburg", country: "Russia" },
  { city: "Novosibirsk", country: "Russia" },
  { city: "Yekaterinburg", country: "Russia" },
  { city: "Kazan", country: "Russia" },

  // South Korea
  { city: "Seoul", country: "South Korea" },
  { city: "Busan", country: "South Korea" },
  { city: "Incheon", country: "South Korea" },
  { city: "Daegu", country: "South Korea" },
  { city: "Gwangju", country: "South Korea" },

  // Mexico
  { city: "Mexico City", country: "Mexico" },
  { city: "Guadalajara", country: "Mexico" },
  { city: "Monterrey", country: "Mexico" },
  { city: "Puebla", country: "Mexico" },
  { city: "Cancún", country: "Mexico" },

  // Indonesia
  { city: "Jakarta", country: "Indonesia" },
  { city: "Surabaya", country: "Indonesia" },
  { city: "Bandung", country: "Indonesia" },
  { city: "Medan", country: "Indonesia" },
  { city: "Denpasar", country: "Indonesia" },

  // Turkey
  { city: "Istanbul", country: "Turkey" },
  { city: "Ankara", country: "Turkey" },
  { city: "Izmir", country: "Turkey" },
  { city: "Bursa", country: "Turkey" },
  { city: "Antalya", country: "Turkey" },

  // Argentina
  { city: "Buenos Aires", country: "Argentina" },
  { city: "Córdoba", country: "Argentina" },
  { city: "Rosario", country: "Argentina" },
  { city: "Mendoza", country: "Argentina" },
  
  // South Africa
  { city: "Johannesburg", country: "South Africa" },
  { city: "Cape Town", country: "South Africa" },
  { city: "Durban", country: "South Africa" },
  { city: "Pretoria", country: "South Africa" },
  
  // Egypt
  { city: "Cairo", country: "Egypt" },
  { city: "Alexandria", country: "Egypt" },
  { city: "Giza", country: "Egypt" },
  { city: "Luxor", country: "Egypt" },

  // Thailand
  { city: "Bangkok", country: "Thailand" },
  { city: "Chiang Mai", country: "Thailand" },
  { city: "Phuket", country: "Thailand" },
  { city: "Pattaya", country: "Thailand" },

  // Netherlands
  { city: "Amsterdam", country: "Netherlands" },
  { city: "Rotterdam", country: "Netherlands" },
  { city: "The Hague", country: "Netherlands" },
  { city: "Utrecht", country: "Netherlands" },

  // Switzerland
  { city: "Zurich", country: "Switzerland" },
  { city: "Geneva", country: "Switzerland" },
  { city: "Bern", country: "Switzerland" },
  { city: "Basel", country: "Switzerland" },

  // Sweden
  { city: "Stockholm", country: "Sweden" },
  { city: "Gothenburg", country: "Sweden" },
  { city: "Malmö", country: "Sweden" },

  // Poland
  { city: "Warsaw", country: "Poland" },
  { city: "Kraków", country: "Poland" },
  { city: "Gdańsk", country: "Poland" },
  
  // Belgium
  { city: "Brussels", country: "Belgium" },
  { city: "Antwerp", country: "Belgium" },
  { city: "Bruges", country: "Belgium" },
  
  // Austria
  { city: "Vienna", country: "Austria" },
  { city: "Salzburg", country: "Austria" },
  { city: "Innsbruck", country: "Austria" },
  
  // Greece
  { city: "Athens", country: "Greece" },
  { city: "Thessaloniki", country: "Greece" },
  { city: "Heraklion", country: "Greece" },
  
  // Portugal
  { city: "Lisbon", country: "Portugal" },
  { city: "Porto", country: "Portugal" },
  { city: "Faro", country: "Portugal" },
  
  // Ireland
  { city: "Dublin", country: "Ireland" },
  { city: "Cork", country: "Ireland" },
  { city: "Galway", country: "Ireland" },
  
  // New Zealand
  { city: "Auckland", country: "New Zealand" },
  { city: "Wellington", country: "New Zealand" },
  { city: "Christchurch", country: "New Zealand" },
  
  // UAE (United Arab Emirates)
  { city: "Dubai", country: "UAE" },
  { city: "Abu Dhabi", country: "UAE" },
  { city: "Sharjah", country: "UAE" },
  
  // Singapore
  { city: "Singapore", country: "Singapore" },
  
  // Malaysia
  { city: "Kuala Lumpur", country: "Malaysia" },
  { city: "George Town", country: "Malaysia" },
  { city: "Johor Bahru", country: "Malaysia" },
  
  // Philippines
  { city: "Manila", country: "Philippines" },
  { city: "Cebu City", country: "Philippines" },
  { city: "Davao City", country: "Philippines" },
  
  // Colombia
  { city: "Bogotá", country: "Colombia" },
  { city: "Medellín", country: "Colombia" },
  { city: "Cartagena", country: "Colombia" },
  
  // Chile
  { city: "Santiago", country: "Chile" },
  { city: "Valparaíso", country: "Chile" },
  
  // Peru
  { city: "Lima", country: "Peru" },
  { city: "Cusco", country: "Peru" },
  
  // More European Countries
  { city: "Prague", country: "Czech Republic" },
  { city: "Budapest", country: "Hungary" },
  { city: "Oslo", country: "Norway" },
  { city: "Copenhagen", country: "Denmark" },
  { city: "Helsinki", country: "Finland" },
  { city: "Bucharest", country: "Romania" },
  
  // More Asian Countries
  { city: "Riyadh", country: "Saudi Arabia" },
  { city: "Jeddah", country: "Saudi Arabia" },
  { city: "Doha", country: "Qatar" },
  { city: "Kuwait City", country: "Kuwait" },
  { city: "Tel Aviv", country: "Israel" },
  
  // More African Countries
  { city: "Lagos", country: "Nigeria" },
  { city: "Nairobi", country: "Kenya" },
  { city: "Casablanca", country: "Morocco" },
  { city: "Accra", country: "Ghana" }
];

// Hàm random email
function randomEmail() {
  const name = names[Math.floor(Math.random() * names.length)];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${name}@${domain}`;
}

// Hàm random password
function randomPassword(length = 14) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

// Random City & Country hợp lệ
function randomLocation() {
  return locations[Math.floor(Math.random() * locations.length)];
}

// Random IPv4 giả
function randomIP() {
  return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join(".");
}

// Hàm gửi message
async function sendRandomMessage(numberSend) {
  const email = randomEmail();
  const password = randomPassword();
  const date = new Date().toLocaleString("vi-VN");
  const { city, country } = randomLocation();
  const ip = randomIP();

  const message = `Email: ${email}\nPassword: ${password}\nIP: ${ip}\nDate & Time: ${date}\nCity: ${city}\nCountry: ${country}`;

  try {
    await axios.post(TELEGRAM_API, {
      chat_id: CHAT_ID,
      text: message,
    });
    // console.log("✅ Sent:", message);
    console.log("✅ Done sent: ", numberSend)
  } catch (err) {
    if (err.response?.status === 429) {
      const retryAfter = err.response.data.parameters?.retry_after || 60;
      console.warn(`⏸ Spam limit! Đợi ${retryAfter} giây rồi chạy tiếp...`);
      await sleep((retryAfter + 2) * 1000); // chờ thêm buffer 2s
    } else {
      console.error("❌ Error:", err.response?.data || err.message);
    }
  }
}
// Hàm sleep để delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// -----------
// 👇 Chỉnh số lần gửi ở đây
const times = 99999999999;

(async () => {
  for (let i = 0; i < times; i++) {
    await sendRandomMessage(i);
    	await sleep(200);
  }
})();