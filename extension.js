const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.refactorRename', function () {
        vscode.commands.executeCommand('editor.action.rename');
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}

exports.deactivate = deactivate;
