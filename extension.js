const vscode = require('vscode');

function activate(context) {

    console.log("VEDA Extension Activated!");

    let disposable = vscode.commands.registerCommand('veda.run', function () {

        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showErrorMessage("No VEDA file is open.");
            return;
        }

        const filePath = editor.document.fileName;

        const terminal = vscode.window.createTerminal("VEDA");

        terminal.show();

        terminal.sendText(`veda "${filePath}"`);

    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};