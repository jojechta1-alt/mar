export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`
    window.env = {
      SUPABASE_URL: "${process.env.SUPABASE_URL || ''}",
      SUPABASE_KEY: "${process.env.SUPABASE_KEY || ''}"
    };
  `);
}
