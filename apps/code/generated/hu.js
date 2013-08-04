// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof codepage == 'undefined') { var codepage = {}; }


codepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="httpRequestError">A kéréssel kapcsolatban probléma merült fel.</span><span id="linkAlert">Ezzel a hivatkozással tudod megosztani a programodat:\n\n%1</span><span id="hashError">Elnézést, a \'%1\' hivatkozásnem tartozik egyetlen programhoz sem.</span><span id="xmlError">A programodat nem lehet betölteni.  Elképzelhető, hogy a Blockly egy másik verziójában készült?</span><span id="badXml">Hiba az XML feldolgozásakor:\n%1\n\nVáltozások elvetése?</span><span id="badCode">Program hiba:\n%1</span><span id="timeout">A program elérte a maximális végrehajtási időt.</span><span id="discard">Az összes %1 blokk törlése?</span></div><table width="100%" height="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Kódszerkesztő</span></h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select></td></tr><tr><td colspan=2><table><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon" onclick="tabClick(this.id)">Blokkok</td><td class="tabmin">&nbsp;</td><td id="tab_javascript" class="taboff" onclick="tabClick(this.id)">JavaScript</td><td class="tabmin">&nbsp;</td><td id="tab_python" class="taboff" onclick="tabClick(this.id)">Python</td><td class="tabmin">&nbsp;</td><td id="tab_xml" class="taboff" onclick="tabClick(this.id)">XML</td><td class="tabmax"><button title="Összes blokk törlése." onclick="discard(); renderContent();"><img src=\'../../media/1x1.gif\' class="trash icon21"></button> <button id="linkButton" title="Mentés és Hivatkozás a kódhoz. " onclick="BlocklyStorage.link()"><img src=\'../../media/1x1.gif\' class="link icon21"></button> <button title="Program futtatása." class="launch" onclick="runJS()"><img src=\'../../media/1x1.gif\' class="run icon21"></button></td></tr></table></td></tr><tr><td height="99%" colspan=2>' + codepage.toolbox(null, null, opt_ijData) + '<iframe id="content_blocks" src="frame.html?' + soy.$$escapeHtml(opt_ijData.langSrc) + '"></iframe><pre id="content_javascript"></pre><pre id="content_python"></pre><div id="content_xml"><textarea id="textarea_xml"></textarea></div></td></tr></table>';
};


codepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Logikai műveletek"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_null"></block><block type="logic_ternary"></block></category><category name="Ciklusok"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Matematikai műveletek"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Sztring műveletek"><block type="text"></block><block type="text_join"></block><block type="text_append"><value name="TEXT"><block type="text"></block></value></block><block type="text_length"></block><block type="text_isEmpty"></block><block type="text_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_charAt"><value name="VALUE"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_getSubstring"><value name="STRING"><block type="variables_get"><title name="VAR">text</title></block></value></block><block type="text_changeCase"></block><block type="text_trim"></block><block type="text_print"></block><block type="text_prompt"></block></category><category name="Listakezelés"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">list</title></block></value></block></category><category name="Színek"><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="Változók" custom="VARIABLE"></category><category name="Eljárások" custom="PROCEDURE"></category></xml>';
};
