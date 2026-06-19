const ORG_EMAIL = "info@etvac.it";
const FROM = "E Ti Vengo A Cercare <info@etvac.it>";

const AUTORESPONSE_TEXT = `Grazie per aver inviato la tua candidatura!

Abbiamo ricevuto correttamente la tua iscrizione e tutte le informazioni richieste.

La Direzione Artistica esaminerà le candidature ricevute e ti contatterà qualora fossero necessari ulteriori dettagli o comunicazioni relative alla selezione.

Ti invitiamo a seguirci per rimanere aggiornato su tutte le novità di E Ti Vengo A Cercare 2026 (@etivengoacercarecontest).

Il team di E Ti Vengo A Cercare`;

const jsonResponse = (statusCode, payload) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
});

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { ok: false, error: "Metodo non consentito." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return jsonResponse(500, { ok: false, error: "Configurazione mancante." });
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch (err) {
    return jsonResponse(400, { ok: false, error: "Richiesta non valida." });
  }

  if (data._gotcha) {
    return jsonResponse(200, { ok: true });
  }

  const candidateEmail = String(data.email || "").trim();
  if (!isValidEmail(candidateEmail)) {
    return jsonResponse(422, { ok: false, error: "Email non valida." });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [candidateEmail],
        reply_to: ORG_EMAIL,
        subject: "Grazie per la tua candidatura — E Ti Vengo A Cercare 2026",
        text: AUTORESPONSE_TEXT,
      }),
    });
    if (!res.ok) {
      throw new Error(`Resend ${res.status}: ${await res.text()}`);
    }
  } catch (err) {
    return jsonResponse(502, { ok: false, error: "Invio non riuscito." });
  }

  return jsonResponse(200, { ok: true });
};
