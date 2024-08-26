gdjs.Game_321_32lobbyCode = {};
gdjs.Game_321_32lobbyCode.localVariables = [];
gdjs.Game_321_32lobbyCode.GDHostObjects1= [];
gdjs.Game_321_32lobbyCode.GDHostObjects2= [];
gdjs.Game_321_32lobbyCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_321_32lobbyCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_321_32lobbyCode.GDHost2Objects1= [];
gdjs.Game_321_32lobbyCode.GDHost2Objects2= [];
gdjs.Game_321_32lobbyCode.GDHost3Objects1= [];
gdjs.Game_321_32lobbyCode.GDHost3Objects2= [];
gdjs.Game_321_32lobbyCode.GDHost4Objects1= [];
gdjs.Game_321_32lobbyCode.GDHost4Objects2= [];
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects1= [];
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects2= [];
gdjs.Game_321_32lobbyCode.GDfinisObjects1= [];
gdjs.Game_321_32lobbyCode.GDfinisObjects2= [];
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects1= [];
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects2= [];


gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDHostObjects1Objects = Hashtable.newFrom({"Host": gdjs.Game_321_32lobbyCode.GDHostObjects1});
gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDfinisObjects1Objects = Hashtable.newFrom({"finis": gdjs.Game_321_32lobbyCode.GDfinisObjects1});
gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDHost2Objects1Objects = Hashtable.newFrom({"Host2": gdjs.Game_321_32lobbyCode.GDHost2Objects1});
gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDfinisObjects1Objects = Hashtable.newFrom({"finis": gdjs.Game_321_32lobbyCode.GDfinisObjects1});
gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDHost3Objects1Objects = Hashtable.newFrom({"Host3": gdjs.Game_321_32lobbyCode.GDHost3Objects1});
gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDfinisObjects1Objects = Hashtable.newFrom({"finis": gdjs.Game_321_32lobbyCode.GDfinisObjects1});
gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDHost4Objects1Objects = Hashtable.newFrom({"Host4": gdjs.Game_321_32lobbyCode.GDHost4Objects1});
gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDfinisObjects1Objects = Hashtable.newFrom({"finis": gdjs.Game_321_32lobbyCode.GDfinisObjects1});
gdjs.Game_321_32lobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects1[k] = gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Host"), gdjs.Game_321_32lobbyCode.GDHostObjects1);
gdjs.copyArray(runtimeScene.getObjects("finis"), gdjs.Game_321_32lobbyCode.GDfinisObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDHostObjects1Objects, gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDfinisObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Host2"), gdjs.Game_321_32lobbyCode.GDHost2Objects1);
gdjs.copyArray(runtimeScene.getObjects("finis"), gdjs.Game_321_32lobbyCode.GDfinisObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDHost2Objects1Objects, gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDfinisObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Host3"), gdjs.Game_321_32lobbyCode.GDHost3Objects1);
gdjs.copyArray(runtimeScene.getObjects("finis"), gdjs.Game_321_32lobbyCode.GDfinisObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDHost3Objects1Objects, gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDfinisObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Host4"), gdjs.Game_321_32lobbyCode.GDHost4Objects1);
gdjs.copyArray(runtimeScene.getObjects("finis"), gdjs.Game_321_32lobbyCode.GDfinisObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDHost4Objects1Objects, gdjs.Game_321_32lobbyCode.mapOfGDgdjs_9546Game_9595321_959532lobbyCode_9546GDfinisObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton2"), gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects1.length;i<l;++i) {
    if ( gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects1[k] = gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects1[i];
        ++k;
    }
}
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayerMessageManager.sendCustomMessage("Message", "You Recieved a message");
}}

}


};

gdjs.Game_321_32lobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_321_32lobbyCode.GDHostObjects1.length = 0;
gdjs.Game_321_32lobbyCode.GDHostObjects2.length = 0;
gdjs.Game_321_32lobbyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_321_32lobbyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_321_32lobbyCode.GDHost2Objects1.length = 0;
gdjs.Game_321_32lobbyCode.GDHost2Objects2.length = 0;
gdjs.Game_321_32lobbyCode.GDHost3Objects1.length = 0;
gdjs.Game_321_32lobbyCode.GDHost3Objects2.length = 0;
gdjs.Game_321_32lobbyCode.GDHost4Objects1.length = 0;
gdjs.Game_321_32lobbyCode.GDHost4Objects2.length = 0;
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.Game_321_32lobbyCode.GDfinisObjects1.length = 0;
gdjs.Game_321_32lobbyCode.GDfinisObjects2.length = 0;
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects1.length = 0;
gdjs.Game_321_32lobbyCode.GDOnScreenControlsButton2Objects2.length = 0;

gdjs.Game_321_32lobbyCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_321_32lobbyCode'] = gdjs.Game_321_32lobbyCode;
