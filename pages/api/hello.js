// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
  }

  // req est une instance de http.IncomingMessage , plus quelques middlewares pré-construits
  // resest une instance de http.ServerResponse , plus quelques fonctions d' assistance
