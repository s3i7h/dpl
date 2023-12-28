import { translateText } from '../api/translate-text';
import { setting } from '../config/setting';

/**
 * 単発変換モード
 */
const singleConversionMode = async () => {
  // 2番目以降の引数を合わせて一つの文字列にする
  const string = process.argv.slice(2).join(' ');

  const translatedText = await translateText({
    text: string,
    ...setting,
  });

  console.log(translatedText);
  process.exit(0);
};

export { singleConversionMode };
