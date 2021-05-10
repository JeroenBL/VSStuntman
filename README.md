# VSStuntman

![logo](https://raw.githubusercontent.com/JeroenBl/VSStuntman/main/logo.png)

## Because every app needs a stuntman!

Stuntman is an add-on for the PSStuntman PowerShell module. It allows you to import the saved stuntman from the PSStuntman database, directly into VSCode as a PowerShell code snippet. 

The PowerShell snippet is formatted as a HelloID person object. This makes it a little easier to develop HelloID connectors within VSCode.

## Installation

1. Download the latest release.
2. Unzip the contents of the folder
3. Open VSCode and click on the three dots.
4. Choose __Install from vsix__ and browse to the vsix file.

![Install](https://raw.githubusercontent.com/JeroenBL/VSStuntman/main/assets/installStuntman.gif)

## Features

- Importing stuntman created with the PSStuntman PowerShell module.

![import](https://raw.githubusercontent.com/JeroenBL/VSStuntman/main/assets/importStuntman.gif)

## Requirements

- Windows PowerShell 5.1
- .NET Framework 4.8
- PSStuntman PowerShell module https://github.com/JeroenBL/PSStuntman

## Extension Settings

This extension adds the following settings:

This extension contributes the following settings:

* `Stuntman.DatabaseFileLocation`: The location to the database (sqlite) on disk.

![Configure](https://raw.githubusercontent.com/JeroenBL/VSStuntman/main/assets/stuntmanConfiguration.png)

## Known Issues


## Release Notes

### 0.0.1

Initial release of Stuntman

## Contributing

Find a bug or have an idea! Open an issue or submit a pull request!
https://github.com/JeroenBL/PSStuntman

**Enjoy!**
