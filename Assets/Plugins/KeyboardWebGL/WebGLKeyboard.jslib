mergeInto(LibraryManager.library, {

    OpenInputKeyboard: function (currentValue) 
	{
        document.getElementById("fixInput").value = Pointer_stringify(currentValue);
        document.getElementById("fixInput").focus();
    },
    CloseInputKeyboard: function () {
        document.getElementById("fixInput").blur();
    },
    FixInputOnBlur: function () 
	{
        gameInstance.SendMessage('_WebGLKeyboard', 'LoseFocus');
    },
    FixInputUpdate: function () 
	{
        gameInstance.SendMessage('_WebGLKeyboard', 'ReceiveInputChange', document.getElementById("fixInput").value);
    },
});