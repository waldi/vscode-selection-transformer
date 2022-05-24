// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as vm from "vm";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "selection-transformer" is now active!');

  let disposable = vscode.commands.registerCommand("selection-transformer.transformSelection", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const selections = editor.selections;
    if (selections.length === 0) return;

    const script = await vscode.window.showInputBox({ value: "value" });
    if (!script || script.length === 0) return;

    editor.edit((editBuilder) => {
      selections.forEach((selection) => {
        const value = editor.document.getText(selection);
        const sandbox: any = { value };
        vm.createContext(sandbox);
        try {
          vm.runInContext(`result = ${script}`, sandbox);
          editBuilder.replace(selection, String(sandbox.result));
        } catch (error: any) {
          vscode.window.showErrorMessage(`Error evaluating "${script}":\n ${error}`);
        }
      });
    });
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
