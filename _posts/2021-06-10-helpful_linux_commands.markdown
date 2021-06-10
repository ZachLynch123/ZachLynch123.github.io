---
layout: post
title:      "Helpful Linux Commands"
date:       2021-06-10 18:35:37 +0000
permalink:  helpful_linux_commands
---


CD (Change Directory)
The cd Linux command is vital to navigating the Linux platform. It can be used by any user, whether you’re an administrator or a regular user.

cd command:

cd /directory/subdirectory
This will change your current working directory to /directory/subdirectory.

Use the following command to switch back to the parent directory:


cd ..
Now use the following command to go directly to home directory:


cd ~
LS (List)
The ls Linux command is probably the most used command. Chances are you will be using this command first when using Linux for the first time. The ls command is used to list all the directory contents, but that’s not all. You can pair it with other commands to view hidden files, sort files, etc.

ls command:

ls
This command gives you the names of all the files residing in your directory. It does not provide you with metadata about the files, such as type, size, etc.


MKDIR (Make Directory)
You may well know about the different directories already present on your Linux. What if you wanted to create new directories? Well, this command is built for that. The mkdir command is used to make single or many directories. You can also set permissions for each directory you create. Remember that not every user has permission to create directories. You must have the right privileges before you create any directory, or you’ll receive a “permission denied” error.

mkdir directory_name command:

mkdir Sample
This is the most straightforward command without any options. Executing this command will create a folder named “Sample” under the directory you’re currently working in. If you’re on the parent directory, it will create the “Sample” folder under the parent directory. Use the ls command to check if the directory has been created or not.


RM (Remove)
Deleting files or directories in a graphical interface is easy. When it comes to the command-line interface, you’ll need to know commands if you want to delete a file. In Linux, we use the rm command to delete directories or files.

To put it clearly, the rm command deletes all references of that file from the file system. So, you can’t get back the file once it is deleted. There are ways to recursively delete files and folders, but let us stick to the basics first.

rm file_name command:

rm tax.txt
When we execute the rm command without any options, by default, it doesn’t prompt the user and doesn’t delete directories. You must have permission to the parent directory to execute this command. Here when we execute this command, the file named “tax” is deleted forever. You can use any file name if it exists.
