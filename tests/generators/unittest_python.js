/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Python for unit test blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

Blockly.Python['unittest_main'] = function(block) {
  // Container for unit tests.
  var resultsVar = Blockly.Python.variableDB_.getName('unittestResults',
      Blockly.Variables.NAME_TYPE);
  if (!Blockly.Python.definitions_['unittest_report']) {
    var functionName = Blockly.Python.variableDB_.getDistinctName(
        'testReport', Blockly.Generator.NAME_TYPE);
    Blockly.Python.unittest_main.report = functionName;
    var func = [];
    func.push('def ' + functionName + '():');
    func.push('  # Create test report.');
    func.push('  report = []');
    func.push('  summary = []');
    func.push('  fails = 0');
    func.push('  for (success, title, log) in ' + resultsVar + ':');
    func.push('    if success:');
    func.push('      summary.append(".")');
    func.push('    else:');
    func.push('      summary.append("F")');
    func.push('      fails += 1');
    func.push('      report.append("")');
    func.push('      report.append("FAIL: " + title)');
    func.push('      report.append(log)');
    func.push('  report.insert(0, "".join(summary))');
    func.push('  report.append("")');
    func.push('  report.append("Number of tests run: %d" % len(' +
        resultsVar + '))');
    func.push('  report.append("")');
    func.push('  if fails:');
    func.push('    report.append("FAILED (failures=%d)" % fails)');
    func.push('  else:');
    func.push('    report.append("OK")');
    func.push('  return "\\n".join(report)');
    func.push('');
    Blockly.Python.definitions_['unittest_report'] = func.join('\n');
  }
  // Setup global to hold test results.
  var code = resultsVar + ' = []\n';
  // Run tests (unindented).
  code += Blockly.Python.statementToCode(block, 'DO')
      .replace(/^  /, '').replace(/\n  /g, '\n');
  var reportVar = Blockly.Python.variableDB_.getDistinctName(
      'report', Blockly.Variables.NAME_TYPE);
  code += reportVar + ' = ' + Blockly.Python.unittest_main.report + '()\n';
  // Destroy results.
  code += resultsVar + ' = None\n';
  // Print the report.
  code += 'print(' + reportVar + ')\n';
  return code;
};

Blockly.Python.unittest_main.defineAssert_ = function(block) {
  if (!Blockly.Python.definitions_['unittest_assertequals']) {
    var resultsVar = Blockly.Python.variableDB_.getName('unittestResults',
        Blockly.Variables.NAME_TYPE);
    var functionName = Blockly.Python.variableDB_.getDistinctName(
        'assertEquals', Blockly.Generator.NAME_TYPE);
    Blockly.Python.unittest_main.assert_ = functionName;
    var func = [];
    func.push('def ' + functionName + '(actual, expected, message):');
    func.push('  # Asserts that a value equals another value.');
    func.push('  if ' + resultsVar + ' == None:');
    func.push('    raise Exception("Orphaned assert equals: " + message)');
    func.push('  if actual == expected:');
    func.push('    ' + resultsVar + '.append((True, "OK", message))');
    func.push('  else:');
    func.push('    ' + resultsVar + '.append((False, ' +
        '"Expected: %s\\nActual: %s" % (expected, actual), message))');
    func.push('');
    Blockly.Python.definitions_['unittest_assertequals'] = func.join('\n');
  }
  return Blockly.Python.unittest_main.assert_;
};

Blockly.Python['unittest_assertequals'] = function(block) {
  // Asserts that a value equals another value.
  var resultsVar = Blockly.Python.variableDB_.getName('unittestResults',
      Blockly.Variables.NAME_TYPE);
  // Asserts that a value equals another value.
  var message = Blockly.Python.quote_(block.getTitleValue('MESSAGE'));
  var actual = Blockly.Python.valueToCode(block, 'ACTUAL',
      Blockly.Python.ORDER_NONE) || 'None';
  var expected = Blockly.Python.valueToCode(block, 'EXPECTED',
      Blockly.Python.ORDER_NONE) || 'None';
  return Blockly.Python.unittest_main.defineAssert_() +
      '(' + actual + ', ' + expected + ', ' + message + ')\n';
};

Blockly.Python['unittest_assertvalue'] = function(block) {
  // Asserts that a value is true, false, or null.
  var resultsVar = Blockly.Python.variableDB_.getName('unittestResults',
      Blockly.Variables.NAME_TYPE);
  // Asserts that a value is true.
  var message = Blockly.Python.quote_(block.getTitleValue('MESSAGE'));
  var actual = Blockly.Python.valueToCode(block, 'ACTUAL',
      Blockly.Python.ORDER_NONE) || 'None';
  var expected = block.getTitleValue('EXPECTED');
  if (expected == 'TRUE') {
    expected = 'True';
  } else if (expected == 'FALSE') {
    expected = 'False';
  } else if (expected == 'NULL') {
    expected = 'None';
  }
  return Blockly.Python.unittest_main.defineAssert_() +
      '(' + actual + ', ' + expected + ', ' + message + ')\n';
};

Blockly.Python['unittest_fail'] = function(block) {
  // Always assert an error.
  var resultsVar = Blockly.Python.variableDB_.getName('unittestResults',
      Blockly.Variables.NAME_TYPE);
  var message = Blockly.Python.quote_(block.getTitleValue('MESSAGE'));
  if (!Blockly.Python.definitions_['unittest_fail']) {
    var functionName = Blockly.Python.variableDB_.getDistinctName(
        'fail', Blockly.Generator.NAME_TYPE);
    Blockly.Python.unittest_fail.assert = functionName;
    var func = [];
    func.push('def ' + functionName + '(message):');
    func.push('  # Always assert an error.');
    func.push('  if ' + resultsVar + ' == None:');
    func.push('    raise Exception("Orphaned assert equals: ' + message + '")');
    func.push('  ' + resultsVar + '.append((False, "Fail.", message))');
    func.push('');
    Blockly.Python.definitions_['unittest_fail'] = func.join('\n');
  }
  return Blockly.Python.unittest_fail.assert + '(' + message + ')\n';
};
