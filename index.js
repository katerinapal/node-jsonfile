let _fs
try {
  _fs = require('graceful-fs')
} catch (_) {
  _fs = require('fs')
}
const universalify = require('universalify')

//REWRITTEN (object pattern not identified in dynamic analysis)
//const { stringify, stripBom } = require('./utils')

const utils = require('./utils');
const stripBom = utils.stripBom;
const stringify = utils.stringify;

//async function _readFile (file, options = {}) {
async function _readFile (file, options) {

  //REWRITTEN TO BE ABLE TO SLICE OVER DEFAULT/UNDEFINED values
  if(options == undefined) {
  
    options = {};
  }

  if (typeof options === 'string') {
    options = { encoding: options }
  }

  const fs = options.fs || _fs

  const shouldThrow = 'throws' in options ? options.throws : true

  let data = await universalify.fromCallback(fs.readFile)(file, options)

  data = stripBom(data)

  let obj
  try {
    obj = JSON.parse(data, options ? options.reviver : null)
  } catch (err) {
    if (shouldThrow) {
      err.message = `${file}: ${err.message}`
      throw err
    } else {
      return null
    }
  }

  return obj
}

const readFile = universalify.fromPromise(_readFile)

//function readFileSync (file, options = {}) {
function readFileSync (file, options) {

  //REWRITTEN TO BE ABLE TO SLICE OVER DEFAULT/UNDEFINED values
  if(options == undefined) {
  
    options = {};
  }

  if (typeof options === 'string') {
    options = { encoding: options }
  }

  const fs = options.fs || _fs

  const shouldThrow = 'throws' in options ? options.throws : true

  try {
    let content = fs.readFileSync(file, options)
    content = stripBom(content)
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = `${file}: ${err.message}`
      throw err
    } else {
      return null
    }
  }
}

//async function _writeFile (file, obj, options = {}) {
async function _writeFile (file, obj, options) {
  const fs = options.fs || _fs

  //REWRITTEN TO BE ABLE TO SLICE OVER DEFAULT/UNDEFINED values
  if(options == undefined) {
  
    options = {};
  }

  const str = stringify(obj, options)

  await universalify.fromCallback(fs.writeFile)(file, str, options)
}

const writeFile = universalify.fromPromise(_writeFile)

//function writeFileSync (file, obj, options = {}) {
function writeFileSync (file, obj, options) {

  //REWRITTEN TO BE ABLE TO SLICE OVER DEFAULT/UNDEFINED values
  if(options == undefined) {
  
    options = {};
  }

  const fs = options.fs || _fs

  const str = stringify(obj, options)
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

const jsonfile = {
  readFile,
  readFileSync,
  writeFile,
  writeFileSync
}

module.exports = jsonfile
