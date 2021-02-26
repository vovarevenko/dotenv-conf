import { existsSync, readFileSync } from 'fs'
import { DotenvParseOutput, parse as dotenvParse } from 'dotenv'

export function parse(path: string): DotenvParseOutput {
  return existsSync(path) ? dotenvParse(readFileSync(path)) : {}
}
