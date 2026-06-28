const vscode = require('vscode');

function activate(context) {

    console.log("VEDA Extension Activated!");

    const runCommand = vscode.commands.registerCommand('veda.run', () => {
        vscode.window.showInformationMessage("🚀 VEDA is running!");
    });

    context.subscriptions.push(runCommand);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};