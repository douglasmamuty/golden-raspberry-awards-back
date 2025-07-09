/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function loadCSV(filePath: string): any[] {
  try {
    const csvContent = fs.readFileSync(
      path.resolve(__dirname, filePath),
      'utf-8',
    );
    return parse(csvContent, {
      columns: true,
      delimiter: ';',
      skip_empty_lines: true,
    });
  } catch (e) {
    if (e instanceof Error) {
      console.error('❌ Erro ao carregar CSV:', e.message);
    } else {
      console.error('❌ Erro desconhecido ao carregar CSV:', e);
    }
  }
  return [];
}
