describe("../evaluationProjects/node-jsonfile/utils.js:8:1:12:1", () => {
  test("invoc-loc:65:15:65:31-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:3:3:3:30
    _fs = require('graceful-fs');
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:13:1:13:31
    var stripBom = utils.stripBom;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:52:5:52:16
    options = {};
    var fs = _fs;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:59:3:59:30
    var fs = options.fs || _fs;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:64:5:64:48
    var content = fs.readFileSync("/home/katerina/visualStudioGit/dynamic-analysis-js/jsonfile-tests-readfile-sync/somefile3.json", options);
    var arg0 = content;
    var actualResult = stripBom(arg0);
    var expectedResult = "{\"name\":\"JP\"}";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:65:15:65:31-test:1", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:3:3:3:30
    _fs = require('graceful-fs');
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:13:1:13:31
    var stripBom = utils.stripBom;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:52:5:52:16
    options = {};
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:59:3:59:30
    var fs = options.fs || _fs;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:64:5:64:48
    var content = fs.readFileSync("/home/katerina/visualStudioGit/dynamic-analysis-js/jsonfile-tests-readfile-sync/somefile.json", options);
    var arg0 = content;
    var actualResult = stripBom(arg0);
    var expectedResult = "{";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:65:15:65:31-test:2", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:3:3:3:30
    _fs = require('graceful-fs');
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:13:1:13:31
    var stripBom = utils.stripBom;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:52:5:52:16
    options = {};
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:59:3:59:30
    var fs = options.fs || _fs;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:64:5:64:48
    var content = fs.readFileSync("/home/katerina/visualStudioGit/dynamic-analysis-js/jsonfile-tests-readfile-sync/somefile4-invalid.json", options);
    var arg0 = content;
    var actualResult = stripBom(arg0);
    var expectedResult = "{not valid JSON";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:65:15:65:31-test:3", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:3:3:3:30
    _fs = require('graceful-fs');
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    var options = { throws: false };
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:13:1:13:31
    var stripBom = utils.stripBom;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:59:3:59:30
    var fs = options.fs || _fs;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:64:5:64:48
    var content = fs.readFileSync("/home/katerina/visualStudioGit/dynamic-analysis-js/jsonfile-tests-readfile-sync/somefile4-invalid.json", options);
    var arg0 = content;
    var actualResult = stripBom(arg0);
    var expectedResult = "{not valid JSON";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:65:15:65:31-test:4", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:3:3:3:30
    _fs = require('graceful-fs');
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    var options = { throws: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:13:1:13:31
    var stripBom = utils.stripBom;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:59:3:59:30
    var fs = options.fs || _fs;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:64:5:64:48
    var content = fs.readFileSync("/home/katerina/visualStudioGit/dynamic-analysis-js/jsonfile-tests-readfile-sync/somefile4-invalid.json", options);
    var arg0 = content;
    var actualResult = stripBom(arg0);
    var expectedResult = "{not valid JSON";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:65:15:65:31-test:5", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:3:3:3:30
    _fs = require('graceful-fs');
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    var options = { throws: false };
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:13:1:13:31
    var stripBom = utils.stripBom;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:59:3:59:30
    var fs = options.fs || _fs;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:64:5:64:48
    var content = fs.readFileSync("/home/katerina/visualStudioGit/dynamic-analysis-js/jsonfile-tests-readfile-sync/somefile4-invalid.json", options);
    var arg0 = content;
    var actualResult = stripBom(arg0);
    var expectedResult = "{not valid JSON";
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:65:15:65:31-test:6", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:6:1:6:23
    var jf = require("../index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:3:3:3:30
    _fs = require('graceful-fs');
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:12:1:12:32
    var utils = require("../utils.js");
    var options = { throws: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:13:1:13:31
    var stripBom = utils.stripBom;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:59:3:59:30
    var fs = options.fs || _fs;
    ///home/katerina/visualStudioGit/evaluationProjects/node-jsonfile/index.js:64:5:64:48
    var content = fs.readFileSync("/home/katerina/visualStudioGit/dynamic-analysis-js/jsonfile-tests-readfile-sync/somefile4-invalid.json", options);
    var arg0 = content;
    var actualResult = stripBom(arg0);
    var expectedResult = "{not valid JSON";
    expect(expectedResult).toBe(actualResult);
  });
});

