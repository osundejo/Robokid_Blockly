// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">視覺化程式設計環境</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">查看產生的JavaScript程式碼。</span><span id="linkTooltip">儲存模組並提供連結。</span><span id="runTooltip">於工作區中運行模組所定義的程式。</span><span id="runProgram">運行程式</span><span id="resetProgram">重設</span><span id="dialogOk">確定</span><span id="dialogCancel">Cancel</span><span id="catLogic">邏輯</span><span id="catLoops">迴圈</span><span id="catMath">數學公式</span><span id="catText">文字</span><span id="catLists">列表</span><span id="catColour">顏色</span><span id="catVariables">變數</span><span id="catProcedures">程序</span><span id="httpRequestError">請求存在問題。</span><span id="linkAlert">以此連結分享您的模組：\n\n%1</span><span id="hashError">對不起，「%1」並未對應任何已保存的程式。</span><span id="xmlError">未能載入您保存的檔案。或許它是由其他版本的Blockly創建？</span><span id="listVariable">列表</span><span id="textVariable">文字</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">確定</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">將烏龜向前或向後移動指定的量。</span><span id="Turtle_moveForward">向前移動</span><span id="Turtle_moveBackward">向後移動</span><span id="Turtle_turnTooltip">按指定度數向左或向右轉動烏龜。</span><span id="Turtle_turnRight">右轉</span><span id="Turtle_turnLeft">左轉</span><span id="Turtle_widthTooltip">更改寬度。</span><span id="Turtle_setWidth">將寬度設置為</span><span id="Turtle_colourTooltip">更改鋼筆。</span><span id="Turtle_setColour">設置顏色</span><span id="Turtle_penTooltip">提高或放下筆以停止或開始續畫</span><span id="Turtle_penUp">拿起筆</span><span id="Turtle_penDown">放下筆</span><span id="Turtle_turtleVisibilityTooltip">使龜（綠色圓圈和箭頭），可見或隱藏。</span><span id="Turtle_hideTurtle">隱藏烏龜</span><span id="Turtle_showTurtle">顯示烏龜</span><span id="Turtle_printHelpUrl">http://zh.wikipedia.org/wiki/印刷</span><span id="Turtle_printTooltip">在烏龜的方向及位置繪製文字。</span><span id="Turtle_print">列印</span><span id="Turtle_fontHelpUrl">http://zh.wikipedia.org/wiki/字體</span><span id="Turtle_fontTooltip">設置列印模組使用的字型。</span><span id="Turtle_font">字型</span><span id="Turtle_fontSize">字體大小</span><span id="Turtle_fontNormal">一般</span><span id="Turtle_fontBold">粗體</span><span id="Turtle_fontItalic">斜體</span><span id="Turtle_unloadWarning">離開本頁面將失去你的工作。</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : 烏龜圖形</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><script type="text/javascript" src="../slider.js"><\/script><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="讓烏龜按模組的指令工作。"><img src="../../media/1x1.gif" class="run icon21">運行程式</button><button id="resetButton" class="primary" style="display: none"><img src="../../media/1x1.gif" class="stop icon21"> 重設</button></td></tr></table><div id="toolbarDiv"><button id="codeButton" class="notext" title="查看產生的JavaScript程式碼。"><img src=\'../../media/1x1.gif\' class="code icon21"></button><button id="linkButton" class="notext" title="儲存模組並提供連結。"><img src=\'../../media/1x1.gif\' class="link icon21"></button><button class="notext" id="captureButton" title="儲存該繪圖。" onclick="Turtle.createImageLink();"><img src=\'../../media/1x1.gif\' class="img icon21"></button><a id="downloadImageLink" download="drawing.png"></a></div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="烏龜"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="顏色"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="邏輯"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="迴圈"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="數學公式"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="列表"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">列表</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">列表</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">列表</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">列表</title></block></value></block></category><category name="變數" custom="VARIABLE"></category><category name="程序" custom="PROCEDURE"></category></xml>';
};
