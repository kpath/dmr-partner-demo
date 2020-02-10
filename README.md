# 2018 Stearns & Foster Landing Page - Option 1

##### Contents
	1. Project Process
	   ├── 1.1 Getting Started
	   ├── 1.2 Editing Landing Pages
	   ├── 1.3 Sending for review
	   └── 1.4 Packaging files
	2. Template Updates and Branching Strategy
	   ├── 2.1 Updating Template Files
	   └── 2.2 Vendor partners (Coming Soon)

## 1. Project Process
When a landing page is approved for development, follow the below steps for development. This process is used for single-retailer development:

### 1.1 Getting Started

1. Open Terminal and cd to your Desktop. Clone this library using  
`git clone https://[[[username]]]:[[[password]]]@github.com/IconMarketing/2018-SEA-SF-opt_1`
2. `cd` to the main repo directory on your desktop

At the end of this stage, your working file structure should look like this:

	.
	├──css/
	|  ├──bootstrap.min.css
	|  ├──css-reset.css
	|  └──style.css
	├──fonts/
	├──images/
	├──js
	|  ├──bootstrap.min.js
	|  ├──jquery.js
	|  ├──jquery.prettyPhoto.js
	|  ├──main.js
	|  └──owl.js
	├──README.md
	└──SF-Landing-Option1.html

### 1.2 Editing Landing Pages
All development edits should be made in the css/style.css file. Use comments liberally when changing from the regular template file.

If you need to create new classes, follow [BEM methodology](http://getbem.com/introduction/), whenever possible.

### 1.3 Sending for review
When all edits are made, the landing page should be uploaded to projects.iconmc.com for client review. Use the following instructions to send to client:
1. Run all new JPG and PNG images through [Image Optimizer](https://imageoptim.com/mac)
2. Copy the entire folder and rename it the Icon job code (`XXXXX-SEA-SF`).
3. Rename the html file to ```index.html```
4. Use an FTP client and the following credentials to log in to the projects.iconmc.com folder:  
	```
	FTP Server: ftp.iconmc.com  
	FTP port: 21  
	FTP Username: production@projects.iconmc.com  
	FTP Password: TtkL^klKEq&8
	```
If you are a fulltime Icon employee, request your own FTP account with either Steve (steve@iconmc.com) or Mike (meiners@iconmc.com).
5. Place the newly-named build folder into the Sealy client folder. The staging URL will follow the format of ```projects.iconmc.com/stearns-and-foster/XXXXX-SEA-SF```.

### 1.4 Packaging files
Since these pages are made using plain HTML and CSS, copy the entire folder to the project directory on the Icon server. Give your main code folder the same name as the project folder, replacing the spaces with underscores. Add ```_A_01``` to the end of the folder name, where ```01``` denotes the code version. Compress into a zip file, and deliver the zip to the for proofing along with the staging link from step 1.3.

If this is a subsequent version, move the previous zip file to a `Versions` folder.

## 2. Template Updates and Branching Strategy
The following are guidelines for changes to the landing pages on a global, reuseable scale.

### 2.1 Updating Template Files

#### Creating a landing page for a client does not require a new branch, since it will not be uploaded to Github. Follow the below instructions if you are making a template update.

Cloning a landing page from the command line will automatically set the remote origin to the repo on GitHub. 

If you are making a template revision, make a new local branch titled `updates/XXXXX-ABC`, where `XXXXX` is the Icon job number and `ABC` is the Icon client code (Example: `updates/20442-SEA-SF`). Commit often, and push your local branch to a branch at the origin at the end of every working day.

When an update is approved, create a pull request master branch. Contact steve@iconmc.com and/or keane@iconmc.com for review. Once approved, merge the new code to the master branch. Do not delete updates branches in case a client requests an older version or old inventory.

For more documentation on working with remotes, visit [git-scm.com/docs](https://git-scm.com/docs/git-remote.html).

If you have any questions, email Steve Orchosky at steve@iconmc.com.

### 2.2 Vendor partners (Coming Soon)

Some development groups require different code for landing pages to work with their sites. When making custom alterations for a vendor partner, create a new branch titled `vendor/[[[Vendor_Name]]]`.
