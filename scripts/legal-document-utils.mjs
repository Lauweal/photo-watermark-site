import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';

export const root = new URL('../', import.meta.url);
export const legalSources = {
  purchase: '01_购买协议.md',
  'auto-renewal': '02_自动续费服务协议.md',
  privacy: '03_隐私政策.md',
  user: '04_用户协议.md',
};
// Agreements ship in the same five languages on both clients. Other App
// languages read the English bundle instead of a machine translation.
export const legalLanguages = ['zh-Hans', 'zh-Hant', 'ja', 'ko', 'en'];
export const webLegalLanguages = legalLanguages;
export const legalCopySource = {
  notice: '这是根据当前中文协议生成的机器辅助译文，仅供阅读；适用地区及待核验事项保持不变，不表示已经完成当地法律审定。',
  originalNotice: '以下为当前完整中文原文。适用地区及待核验事项以协议实际内容为准。',
  showOriginal: '查看中文原文',
  showTranslation: '查看本语言译文',
  kicker: '协议与信息保护',
  toc: '阅读导航',
  contact: '联系运营者',
  skip: '跳至协议正文',
  back: '返回',
};

export function readLegalSource() {
  const documents = {};
  const texts = {};
  for (const [id, file] of Object.entries(legalSources)) {
    const text = readFileSync(new URL(`docs/${file}`, root), 'utf8').trim();
    texts[id] = text;
    const [intro, ...parts] = text.split(/^## /m);
    const [title, ...preamble] = intro.split('\n');
    documents[id] = {
      title: title.replace(/^# /, ''),
      sections: [
        { heading: '重要提示', body: preamble.join('\n').trim() },
        ...parts.map(part => {
          const split = part.indexOf('\n');
          return { heading: part.slice(0, split).trim(), body: part.slice(split + 1).trim() };
        }),
      ],
    };
  }
  const sourceHash = createHash('sha256')
    .update(JSON.stringify({ texts, copy: legalCopySource })).digest('hex');
  const englishFile = new URL('docs/legal-locales/en.json', root);
  const english = existsSync(englishFile) ? JSON.parse(readFileSync(englishFile, 'utf8')) : null;
  const englishBasisHash = english?.sourceHash === sourceHash
    ? createHash('sha256').update(JSON.stringify({ documents: english.documents, copy: english.copy })).digest('hex')
    : null;
  return { documents, sourceHash, englishBasisHash };
}

export function legalTokens(text) {
  const normalized = text.replace(/二十四/g, '24').replace(/十四/g, '14').replace(/十五/g, '15')
    .replace(/三十/g, '30').replace(/七(?=日)/g, '7');
  return (normalized.match(/https:\/\/[^\s。；，、<>]+|[\w.+-]+@[\w.-]+\.[a-z]+|\d+(?:\.\d+)*|\*\*|### /gi) ?? [])
    .map(token => token.startsWith('https://') ? token.replace(/[.,;:!?؛،।॥。；，、）)\]}]+$/u, '') : token);
}

export function validateLegalTranslation(bundle, source, language) {
  if (bundle.language !== language || bundle.sourceHash !== source.sourceHash) {
    throw new Error(`${language}: missing or outdated legal translation; regenerate before syncing`);
  }
  if (!language.startsWith('zh') && language !== 'en' && bundle.englishBasisHash !== source.englishBasisHash) {
    throw new Error(`${language}: missing or outdated corrected-English translation basis`);
  }
  for (const key of Object.keys(legalCopySource)) {
    if (!bundle.copy?.[key]?.trim()) throw new Error(`${language}: missing legal copy ${key}`);
  }
  for (const [id, original] of Object.entries(source.documents)) {
    const translated = bundle.documents?.[id];
    if (!translated?.title?.trim() || translated.sections?.length !== original.sections.length) {
      throw new Error(`${language}/${id}: missing or truncated document`);
    }
    original.sections.forEach((section, index) => {
      const target = translated.sections[index];
      if (!target.heading?.trim() || !target.body?.trim()) {
        throw new Error(`${language}/${id}/${index}: empty section`);
      }
      const expected = legalTokens(section.body).sort();
      const actual = legalTokens(target.body).sort();
      const isNumber = token => /^\d+(?:\.\d+)*$/.test(token);
      const sourceNumbers = expected.filter(isNumber);
      const targetNumbers = actual.filter(isNumber);
      const hanNumbers = [...section.body.matchAll(/[一二三四五六七八九十]+/g)].map(match => {
        const digits = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
        const [tens, ones] = match[0].split('十');
        return match[0].includes('十')
          ? String((digits[tens] ?? 1) * 10 + (digits[ones] ?? 0))
          : String(digits[match[0]]);
      });
      const allowedNumbers = new Set([...sourceNumbers, ...hanNumbers]);
      const numbersIntact = sourceNumbers.every(number =>
        targetNumbers.filter(value => value === number).length >= sourceNumbers.filter(value => value === number).length)
        && targetNumbers.every(number => allowedNumbers.has(number));
      if (!numbersIntact || JSON.stringify(expected.filter(token => !isNumber(token))) !== JSON.stringify(actual.filter(token => !isNumber(token)))) {
        throw new Error(`${language}/${id}/${index}: altered protected details\nExpected: ${JSON.stringify(expected)}\nActual: ${JSON.stringify(actual)}`);
      }
      if (/ZXQ\d+QXZ/.test(target.body)) throw new Error(`${language}/${id}: unresolved token`);
    });
  }
}
