/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
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
 * @fileoverview Generating Robokid for control blocks.
 * @author fraser@google.com (Neil Fraser)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

Blockly.Robokid = Blockly.Generator.get('Robokid');


Blockly.Robokid.LEDS_set = function() {
  // 
  return 'LEDS_set' + '\n';
};

Blockly.Robokid.motors_set = function() {
  // 
  return 'motors_set' + '\n';
};

Blockly.Robokid.read_sensor = function() {
  // 
  var code = (this.getTitleValue('SENSOR'));
  
  return ['Read', 0];
};

Blockly.Robokid.comment = function() {
  // Simple code comment which does not generate any code
  return 'Comment' + '\n';
};

Blockly.Robokid.ubasic_for = function() {
  // For loop.
  var variable0 = Blockly.Robokid.variableDB_.getName(
      this.getInputVariable('VAR'), Blockly.Variables.NAME_TYPE);
  var argument0 = Blockly.Robokid.valueToCode(this, 'FROM',
      Blockly.Robokid.ORDER_ASSIGNMENT) || '0';
  var argument1 = Blockly.Robokid.valueToCode(this, 'TO',
      Blockly.Robokid.ORDER_ASSIGNMENT) || '0';
  var branch0 = Blockly.Robokid.statementToCode(this, 'DO');
  var code;
  if (argument1.match(/^\w+$/)) {
    code = '0 for ' + variable0 + '=' + argument0 + ' to ' + argument1 + 
        '\n' + branch0 + '0 next ' + variable0 + '\n';
  } else {
    // The end value appears to be more complicated than a simple variable.
    // Cache it to a variable to prevent repeated look-ups.
    var endVar = Blockly.Robokid.variableDB_.getDistinctName(
        variable0 + '_end', Blockly.Variables.NAME_TYPE);
    code = 'var ' + endVar + ' = ' + argument1 + ';\n' +
        'for (' + variable0 + ' = ' + argument0 + '; ' +
              variable0 + ' <= ' + endVar + '; ' +
              variable0 + '++) {\n' +
        branch0 + '}\n';
  }
  return code;
};

