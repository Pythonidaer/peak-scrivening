import fs from 'fs/promises';
import path from 'path';
import pdfParse from 'pdf-parse';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pdfPath = path.join(__dirname, '../public/To_Insure_Peak_Scrivening.pdf');
const outputPath = path.join(__dirname, '../public/parsed-tips.json');

const TIP_REGEX = /^\d{1,3}\)/;
const LINK_REGEX = /^https:\/\/twitter\.com\/GaryGulman\/status\/\d+/;

type Tip = {
  id: number;
  text: string;
  links: string[];
};

async function parseTips() {
  const buffer = await fs.readFile(pdfPath);
  const data = await pdfParse(buffer);
  const lines = data.text.split('\n').map(line => line.trim()).filter(Boolean);

  const tips: Tip[] = [];
  let currentTip: Tip | null = null;

  for (const line of lines) {
    if (TIP_REGEX.test(line)) {
      if (currentTip) tips.push(currentTip);

      const [numberPart, ...rest] = line.split(')');
      const id = parseInt(numberPart.trim(), 10);
      const content = rest.join(')').trim();

      currentTip = {
        id,
        text: `${id}) ${content}`,
        links: [],
      };
    } else if (LINK_REGEX.test(line)) {
      if (currentTip) {
        currentTip.links.push(line);
      }
    } else {
      if (currentTip) {
        currentTip.text += ' ' + line;
      }
    }
  }

  if (currentTip) tips.push(currentTip);

  // Format output to match your previous structure (1 link only)
  const formatted = tips.map(tip => ({
    id: tip.id,
    text: tip.text.trim(),
    link: tip.links[0] || '',
  }));

  await fs.writeFile(outputPath, JSON.stringify(formatted, null, 2), 'utf-8');
  console.log(`✅ Extracted ${formatted.length} tips to ${outputPath}`);
}

parseTips().catch(err => {
  console.error('❌ Error parsing tips:', err);
});
