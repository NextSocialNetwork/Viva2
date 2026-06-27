import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route for AI Support Chat
app.post('/api/chat', async (req, res) => {
  const { message, language } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const langMap: Record<string, string> = {
    en: 'English',
    ru: 'Russian',
    es: 'Spanish',
    lt: 'Lithuanian'
  };

  const targetLang = langMap[language] || 'English';

  const systemPrompt = `You are "VIVA AI", the official futuristic AI support assistant for VIVA Mobile (www.MyVivaMobile.Com).
VIVA Mobile is America's premier ultra-fast 5G telecommunication provider featuring next-gen eSIM kits, unlimited 5G Ultra Capacity T-Mobile network connectivity across all 50 US States, and the latest iPhone 17 Pro Max / iPhone 16 Pro and Samsung Galaxy S26 Ultra models.

Key Company Facts:
- Website: www.MyVivaMobile.Com
- Network: Powered by futuristic 5G Ultra-Capacity nodes with real-time signal monitoring, sub-15ms latency in major cities, 99.999% uptime.
- Products: Instant QR eSIM Card Kits ($15 - $35/mo unlimited 5G), iPhone 17 Pro Max Titanium ($1,199 or $49/mo), Samsung Galaxy S26 Ultra AI ($1,249 or $52/mo).
- Activation: Instant 60-second eSIM activation via QR code sent to email.

Your persona: Sleek, polite, tech-savvy, extremely helpful, concise.
CRITICAL INSTRUCTION: You MUST reply strictly in the user's selected language: ${targetLang}. If they speak in Russian, answer in crisp natural Russian. If Spanish, answer in professional Spanish. If Lithuanian, answer in flawless Lithuanian.`;

  // Try Gemini API first if available
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `${systemPrompt}\n\nUser Question (${targetLang}): ${message}`
      });

      if (response.text) {
        return res.json({ reply: response.text });
      }
    } catch (err) {
      console.warn('Gemini API call failed, using intelligent fallback response:', err);
    }
  }

  // Intelligent fallback response generator matching target language
  const msgLower = message.toLowerCase();
  let fallbackReply = '';

  if (language === 'ru') {
    if (msgLower.includes('esim') || msgLower.includes('сим') || msgLower.includes('актив') || msgLower.includes('qr')) {
      fallbackReply = 'Комплект VIVA eSIM активируется мгновенно за 60 секунд! После оформления заказа на сайте www.MyVivaMobile.Com вы получаете QR-код на e-mail. Просто отсканируйте его камерой вашего iPhone или Samsung — и вы сразу в сверхбыстрой сети 5G!';
    } else if (msgLower.includes('iphone') || msgLower.includes('samsung') || msgLower.includes('телефон') || msgLower.includes('купить') || msgLower.includes('цена')) {
      fallbackReply = 'В нашем магазине доступны новейшие флагманы: iPhone 17 Pro Max Dark Titanium и Samsung Galaxy S26 Ultra с поддержкой искусственного интеллекта. Доступна рассрочка 0% от $49/мес с бесплатным подключением безлимитного тарифа 5G Ultra.';
    } else if (msgLower.includes('покрыт') || msgLower.includes('5g') || msgLower.includes('сеть') || msgLower.includes('скорость')) {
      fallbackReply = 'Сеть VIVA Mobile 5G Ultra Capacity охватывает все 50 штатов США с задержкой сигнала ниже 15 мс в крупных городах (Нью-Йорк, Майами, Лос-Анджелес, Чикаго). Наша интерактивная карта покрытия на сайте показывает уровень сигнала в реальном времени!';
    } else {
      fallbackReply = 'Здравствуйте! Я интеллектуальный ассистент VIVA Mobile. Я готов помочь вам с выбором безлимитного тарифа eSIM, проверкой покрытия 5G во всех штатах США или покупкой новых iPhone и Samsung. Какой вопрос вас интересует?';
    }
  } else if (language === 'es') {
    if (msgLower.includes('esim') || msgLower.includes('activ') || msgLower.includes('qr') || msgLower.includes('sim')) {
      fallbackReply = '¡El kit VIVA eSIM se activa al instante en solo 60 segundos! Al completar tu compra en www.MyVivaMobile.Com, recibirás un código QR por correo electrónico. Solo escanéalo con tu teléfono compatible con 5G y disfrutarás de velocidad ilimitada.';
    } else if (msgLower.includes('iphone') || msgLower.includes('samsung') || msgLower.includes('tel') || msgLower.includes('comprar') || msgLower.includes('precio')) {
      fallbackReply = 'Contamos con los modelos más recientes: iPhone 17 Pro Max y Samsung Galaxy S26 Ultra. Puedes adquirirlos al contado o financiados desde $49/mes con eSIM 5G ilimitada incluida sin contratos forzosos.';
    } else if (msgLower.includes('cobertura') || msgLower.includes('5g') || msgLower.includes('red') || msgLower.includes('señal')) {
      fallbackReply = 'La red VIVA Mobile 5G Ultra Capacity cubre los 50 estados de EE. UU. con latencia ultrabaja (12ms - 18ms) y disponibilidad del 99.999%. Consulta nuestro mapa interactivo en tiempo real para verificar tu ciudad.';
    } else {
      fallbackReply = '¡Hola! Soy el asistente virtual IA de VIVA Mobile. Estoy aquí para ayudarte en español con nuestros planes eSIM ilimitados, cobertura 5G nacional o la compra de los nuevos iPhone y Samsung. ¿En qué te puedo ayudar hoy?';
    }
  } else if (language === 'lt') {
    if (msgLower.includes('esim') || msgLower.includes('aktyv') || msgLower.includes('qr') || msgLower.includes('kortel')) {
      fallbackReply = 'VIVA eSIM rinkinys aktyvuojamas vos per 60 sekundžių! Užsisakius www.MyVivaMobile.Com svetainėje, gausite QR kodą el. paštu. Nuskaitykite jį savo iPhone ar Samsung telefonu ir iškart naudokitės neribotu 5G ryšiu!';
    } else if (msgLower.includes('iphone') || msgLower.includes('samsung') || msgLower.includes('telefon') || msgLower.includes('pirkti') || msgLower.includes('kaina')) {
      fallbackReply = 'Mūsų parduotuvėje rasite naujausius modelius: iPhone 17 Pro Max Titanium ir Samsung Galaxy S26 Ultra. Galima įsigyti išsimokėtinai be pabrangimo nuo $49/mėn kartu su nemokamu neribotu 5G planu.';
    } else if (msgLower.includes('aprėptis') || msgLower.includes('ryšys') || msgLower.includes('5g') || msgLower.includes('greitis')) {
      fallbackReply = 'VIVA Mobile 5G tinklas veikia visose 50 JAV valstijų su mažesne nei 15ms delsa didžiuosiuose miestuose (Čikaga, Niujorkas, Los Andželas, Majamis). Svetainėje esantis žemėlapis rodo realaus laiko ryšio stiprumą!';
    } else {
      fallbackReply = 'Sveiki! Aš esu VIVA Mobile dirbtinio intelekto asistentas. Galiu padėti lietuvių kalba pasirinkti eSIM planą, patikrinti 5G ryšio aprėptį JAV arba įsigyti naujausią iPhone ar Samsung flagmaną. Kuo galiu padėti?';
    }
  } else {
    // English default
    if (msgLower.includes('esim') || msgLower.includes('activ') || msgLower.includes('qr') || msgLower.includes('kit')) {
      fallbackReply = 'The VIVA eSIM Card Kit activates instantly in under 60 seconds! Once purchased on www.MyVivaMobile.Com, you receive a secure QR code directly to your email. Scan it with any unlocked eSIM-capable iPhone or Samsung phone for instant 5G Ultra access!';
    } else if (msgLower.includes('iphone') || msgLower.includes('samsung') || msgLower.includes('phone') || msgLower.includes('buy') || msgLower.includes('price')) {
      fallbackReply = 'We stock the absolute latest flagship models including the iPhone 17 Pro Max (Dark Titanium) and Samsung Galaxy S26 Ultra AI edition. Available for outright purchase or 0% APR financing from $49/mo with an unlimited 5G eSIM included.';
    } else if (msgLower.includes('map') || msgLower.includes('cover') || msgLower.includes('5g') || msgLower.includes('network') || msgLower.includes('speed')) {
      fallbackReply = 'VIVA Mobile operates a futuristic 5G Ultra Capacity network covering all 50 US States with 99.999% uptime and ultra-low latency (12ms-18ms) across major metros like NYC, LA, Chicago, Seattle, and Miami. Explore our interactive coverage map above!';
    } else {
      fallbackReply = 'Hello! I am VIVA AI, your 24/7 telecommunication assistant for www.MyVivaMobile.Com. How can I help you today? Ask me about our instant eSIM activation kits, nationwide 5G coverage map, or latest iPhone/Samsung smartphone trade-ins!';
    }
  }

  return res.json({ reply: fallbackReply });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`VIVA Mobile 5G Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start VIVA Mobile server:', err);
});
