describe("../evaluationProjects/node-jsonfile/utils.js:9:1:34:1", () => {
  test("invoc-loc:98:15:98:37-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:14:1:14:33
    var stringify = utils.stringify;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:40:5:40:30
    var obj = { name: 'JP' };
    var obj = { name: 'JP' };
    var arg0 = obj;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:93:5:93:16
    options = {};
    var arg1 = options;
    var actualResult = stringify(arg0, arg1);
    var expectedResult = "{\"name\":\"JP\"}";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:98:15:98:37-test:1", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:14:1:14:33
    var stringify = utils.stringify;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:55:7:58:7
    var sillyReplacer = function (k, v) {
            if (!(v instanceof RegExp)) return v
            return `regex:${v.toString()}`
          };
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:60:7:63:7
    var obj = {
            name: 'jp',
            reg: /hello/g
          };
    var obj = {
            name: 'jp',
            reg: /hello/g
          };
    var arg0 = obj;
    var options = { replacer: sillyReplacer };
    var arg1 = options;
    var actualResult = stringify(arg0, arg1);
    var expectedResult = "{\"name\":\"jp\",\"reg\":\"regex:/hello/g\"}";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:98:15:98:37-test:2", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:14:1:14:33
    var stringify = utils.stringify;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:76:7:76:32
    var obj = { name: 'JP' };
    var obj = { name: 'JP' };
    var arg0 = obj;
    var options = { spaces: 8 };
    var arg1 = options;
    var actualResult = stringify(arg0, arg1);
    var expectedResult = "{undefined        \"name\": \"JP\"undefined}";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:98:15:98:37-test:3", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:14:1:14:33
    var stringify = utils.stringify;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:85:7:85:32
    var obj = { name: 'JP' };
    var obj = { name: 'JP' };
    var arg0 = obj;
    var options = { spaces: 2, EOL: '***' };
    var arg1 = options;
    var actualResult = stringify(arg0, arg1);
    var expectedResult = "{***  \"name\": \"JP\"***}";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:98:15:98:37-test:4", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:14:1:14:33
    var stringify = utils.stringify;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:95:7:95:32
    var obj = { name: 'jp' };
    var obj = { name: 'jp' };
    var arg0 = obj;
    var arg1 = "utf8";
    var actualResult = stringify(arg0, arg1);
    var expectedResult = "{\"name\":\"jp\"}";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:98:15:98:37-test:5", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:14:1:14:33
    var stringify = utils.stringify;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:127:7:127:32
    var obj = { name: 'jp' };
    var obj = { name: 'jp' };
    var arg0 = obj;
    var options = { finalEOL: false };
    var arg1 = options;
    var actualResult = stringify(arg0, arg1);
    var expectedResult = "{\"name\":\"jp\"}";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:98:15:98:37-test:6", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:14:1:14:33
    var stringify = utils.stringify;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:138:7:138:32
    var obj = { name: 'jp' };
    var obj = { name: 'jp' };
    var arg0 = obj;
    var options = { finalEOL: true };
    var arg1 = options;
    var actualResult = stringify(arg0, arg1);
    var expectedResult = "{\"name\":\"jp\"}undefined";
    expect(expectedResult).toBe(actualResult);
  });
});

