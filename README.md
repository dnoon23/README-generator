# <README Generator>

## Description

This project was to create a node application that took user imputs to create a README.md file.  A series of prompts are displayed in the terminal and it populates the sections of a README.md file with the answers provided.  The most difficult part was displaying the license badge at the top of the page.  I had the right idea to use an if statement but how to properly implement it took a lot of trial and error.

![Screenshot](./screenshot.png)

## Installation

To run the program you first need node installed.  Then open the folder in a terminal and type 'npm install' to get the proper files to run it.

## Usage

After all the proper files are installed on your computer, open the folder in a terminal.  Then type 'node index.js' to run the program.  A series of questions will be displayed in the terminal.  Type the answers unless told otherwise.  For the license selection, use the up and down arrows to select the proper license.  Then continue answering questions till the program says that it has successfully created a README.md.  The finished file will be written in the Example folder.  If the program is rerun the file in the folder will be over written.

## Credits

Some code modified from code taken from: 
https://git.bootcampcontent.com/

## Features

this program is a command-line application that dynamically generates a README.md file from a user's input using node and Inquirer.