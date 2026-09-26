// 英語版の図（SVG）から、各言語版を作る。文字列は完全一致で置き換え、欠けがあれば止める。
const fs = require('fs');
const dir = require('path').join(__dirname, '..', 'static', 'img') + '/';
const { fonts, strings } = JSON.parse(fs.readFileSync(__dirname + '/svg-i18n.json', 'utf8'));
const names = ['quick-start', 'calibration', 'spatial-mapping', 'vst-bridge-flow'];
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
let missing = 0;
for (const lang of Object.keys(fonts)) {
  for (const name of names) {
    let svg = fs.readFileSync(`${dir}${name}-en.svg`, 'utf8');
    svg = svg.replace(/<(text|title|desc|tspan)\b([^>]*)>([^<]*)</g, (all, tag, attrs, body) => {
      if (!/[A-Za-z]/.test(body) || body.trim() === 'VOrbit ASMR' || body.trim() === 'VOrbit Bridge' || body.trim() === 'OBS') return all;
      const t = strings[body]?.[lang];
      if (!t) { console.error(`missing [${lang}] ${name}: ${body}`); missing++; return all; }
      return `<${tag}${attrs}>${esc(t)}<`;
    });
    svg = svg.replace(/font-family="Arial, sans-serif"/g, `font-family="${fonts[lang]}"`);
    fs.writeFileSync(`${dir}${name}-${lang}.svg`, svg);
  }
}
if (missing) process.exit(1);
console.log('ok');
