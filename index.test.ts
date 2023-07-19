import { execSync } from 'child_process'
import { describe, expect, it } from 'vitest'

describe('it works', () => {
  it('module.exports = jarpath', () => {
    const file = require('./index')
    expect(typeof file).to.equal('string')
  })

  it('exec is ok', () => {
    const jarpath = require('./index')
    execSync(`java -jar '${jarpath}' -h`)
  })
})
