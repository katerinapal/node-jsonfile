describe(
  "../evaluationProjects/node-jsonfile/filtered-test-modules/node-jsonfile-test-code-merged-entryfile.js:186:22:190:7",
  () => {
    test("invoc-loc:39:11:39:60-test:0", () => {
      var arg0 = "{\"name\":\"jp\",\"day\":\"date:2015-06-19T11:41:26.815Z\"}";
      var arg1 = JSON;
      var actualResult = JSON.parse(arg0, arg1);
      expect(expectedResult.name).toBe("jp");
    });

    test("invoc-loc:39:11:39:60-test:1", () => {
      var arg0 = "{\"name\":\"jp\",\"day\":\"date:2015-06-19T11:41:26.815Z\"}";
      var arg1 = JSON;
      var actualResult = JSON.parse(arg0, arg1);
      expect(expectedResult.name).toBe("jp");
    });
  }
);

