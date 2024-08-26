gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDLoginObjects1= [];
gdjs.Untitled_32sceneCode.GDLoginObjects2= [];
gdjs.Untitled_32sceneCode.GDlogoutObjects1= [];
gdjs.Untitled_32sceneCode.GDlogoutObjects2= [];
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1= [];
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.Untitled_32sceneCode.GDLoginObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLoginObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDLoginObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDLoginObjects1[k] = gdjs.Untitled_32sceneCode.GDLoginObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLoginObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.openAuthenticationWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.Untitled_32sceneCode.GDLoginObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLoginObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLoginObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Logout");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("logout"), gdjs.Untitled_32sceneCode.GDlogoutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDlogoutObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDlogoutObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDlogoutObjects1[k] = gdjs.Untitled_32sceneCode.GDlogoutObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDlogoutObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.Untitled_32sceneCode.GDLoginObjects1);
{gdjs.playerAuthentication.logout(runtimeScene);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Logout");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDLoginObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDLoginObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloatingOutButtonDarkBlue"), gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1[k] = gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game 1 lobby", false);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLoginObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLoginObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDlogoutObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDlogoutObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFloatingOutButtonDarkBlueObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
