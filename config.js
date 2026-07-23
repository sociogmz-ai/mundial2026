/* =====================================================================
   CONFIG — Conexión de datos en vivo (API-Football + The Odds API)
   ---------------------------------------------------------------------
   Rellena esto cuando tengas tus claves. Mientras `enabled:false`,
   la página usa el modelo estático (funciona igual, sin costo).

   ⚠️ SEGURIDAD: en un sitio público (GitHub Pages) el JavaScript es
   visible para cualquiera. Si pones las claves aquí con mode:'direct',
   quedan EXPUESTAS y cualquiera puede gastar tu cuota. Lo correcto es
   mode:'proxy' con el Cloudflare Worker (ver API_SETUP.md): las claves
   viven en el Worker, no en el navegador.
===================================================================== */
window.LIGA_CONFIG = {
  enabled: false,            // ← pon true cuando tengas proxy o claves
  mode: 'proxy',             // 'proxy' (recomendado) | 'direct' (solo pruebas locales)

  // --- mode:'proxy' (recomendado) ---
  proxyBase: 'https://odds-proxy.TU-SUBDOMINIO.workers.dev',  // ← URL de tu Worker

  // --- mode:'direct' (NO usar en sitio público) ---
  oddsApiKey: '',            // The Odds API
  footballApiKey: '',        // API-Football (api-sports.io)

  // --- parámetros de liga ---
  sport: 'soccer_epl',       // The Odds API: clave de la liga
  league: 39,                // API-Football: 39 = Premier League
  season: 2026,              // 2026 = temporada 2026-27
  regions: 'eu,uk',          // casas a consultar (us, uk, eu, au)

  // --- opciones ---
  useForm: false,            // true = recalibra el modelo con los últimos 10 (gasta cuota API-Football)
  cacheMinutes: 30           // cuánto cachear la respuesta en el navegador
};
