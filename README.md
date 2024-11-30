# Getting Started with File Explorer App

## Main Components

1 - Folder Component
- It helps to define the folder which contains another collections of data (files or other folder).
- Has 3 Props:
  A. files | required | which take the object tree of the files. (This object is defined staticly in /utils/data/data.ts)
  B. NewFolder | required | In this prop, i pass the component (Folder) to itself, so if the Folder contain another folders, i can use the same component and functinality.
  C. setSelectedParent | optional prop | used to update the direct selected folder parent with current selected folder so it can disable the unselected folders on the same level (siblings).
- Methods:
  A. Method for double click to open the folder but it doesn't apply on files.
  B. Method for click to make the file in active and selective state.
  C. Method for right click to open the popup to manpulite the data of the selected file / folder.
  D. Method to handle the action which is passed to the popup.

2 - ContextMenu Component
- Used to open a popup when the user make a right click on the file, so the user can make some actions like copy, delete, rename. Currently these actions reflects in the console log.
- Has 3 Props:
   A. file | required | the selected file which the user want to manpluite its data.
   B. setState | required | To toggle the state of the modal (show/hide)
   C. handleAction | required | used to handle the events and actions taken inside the modal before the user close it.

3 - Button Component 
- Used to display a button with different styling and label
- Has 3 Props:
   A. label | required | The button text
   B. background | required | define the background color (primary | danger | light)
   C. action | required | used to define action taken by the user inside events like clicks and others..



## The data is defined inside utils/data/data.ts and also the data type of the object

Check a short video for the app journey 
https://www.loom.com/share/81056208f918456894624610e1b48d2f?sid=0aa969b5-8b12-4e06-bf5f-482af3858d55
