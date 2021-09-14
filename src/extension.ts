import * as vscode from 'vscode';
import * as sqlite3 from 'sqlite3';
import { Console } from 'console';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('stuntman.ImportStuntman', () => {

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage("editor does not exist");
			return;
		}

		var dbLoc = vscode.workspace.getConfiguration('stuntman').databaseFileLocation;

		let db = new sqlite3.Database(dbLoc, (err) => {
			if (err) {
				vscode.window.showErrorMessage(err.message);
				return;
			}
				vscode.window.showInformationMessage("Connected to the 'Stuntman' SQlite database");
			}
		);

		var stuntman = Array();
		db.all('SELECT * FROM stuntman', [], (err, rows) => {
			if (err) {
				throw err;
			}
			rows.forEach((row) => {
				stuntman.push(row);
			});
			const quickPick = vscode.window.createQuickPick();
			quickPick.items = stuntman.map((x: any) => ({ label: x.DisplayName }));
			quickPick.onDidChangeSelection(([item]) => {
				const selection = editor.selection;
				if (item) {
					db.get(`SELECT * FROM Stuntman WHERE DisplayName = "${ item.label }"`, (err, row) => {
						if (err) {
							return vscode.window.showErrorMessage(err.message);
						}
						return row

						? editor.edit(edit => {
								var string1 = new String("$person = Get-Stuntman -Id ");
								var string2 = new String(JSON.stringify(row.Id) );
								var string3 = new String(" -AsPSObject | ConvertTo-Json -Depth 10");
								var value = string1.concat(string2.concat(string3.concat()));
								edit.replace(selection, value);
						})
						: vscode.window.showErrorMessage(`No stuntman found with DisplayName ${ item.label }`);
					});
				}
				quickPick.dispose();
			});
			quickPick.onDidHide(() => quickPick.dispose());
			quickPick.show();
		});
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}