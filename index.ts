import { existsSync, readFileSync } from 'fs'
import { DotenvParseOutput, parse as dotenvParse } from 'dotenv'

export function parse(path: string): DotenvParseOutput {

  if (!existsSync(path)) return {}

  let data: DotenvParseOutput

  data = dotenvParse(readFileSync(path))

  if (process.env) {
    Object.entries(data).forEach(([key, value]) => {
      data[key] = process.env[key] || value
    })
  }

  return data

}
