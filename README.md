# cacraus

This is the organized version of testRepo, which is a website for the organization Chinese American Citizen Right Alliance.

##Update Log

8/2/2016
- This is meant to be a simple static website where information are presented to the viewer in a straight forward fashion (defintely not because of my lack of knowledge on JavaScript/JQ).

8/5/2016
- Got the digitalized logo from YuanFei, the designer, so I updated the logo picture for the website and finally added in tab icon. "Accidentally" find a bug where the menu bar won't follow while scored horizontallly since this is how fixed position works.

- Solved the menu bar problem by changing it to absolute position, however I still want the effect of fixed position. After some research(Google), it seems that "sticky" value for position would be a quick fix but google doesn't support that value anymore.

- Found some JavaScript/JQ solutions, it took a while for me to realize I need to import JQ to use JQ, but anyway most of them seems to be too complex for the situation, so I settled with a method that is similar to those annoying floating ads that follow you forever (Changing the "top" value when scrolling vertically).

- Replace Contact Page with Story Page, but I don't like the current layout since the pictures look pretty out of places.

8/8/2016
- Tried to use external js file so the html files would be more clean, but the format for js files are unclear online and it took me a while to realize that I shouldn't use "script" in a js file, at least that was the case for Chrome.

- Found a bug/decide flaw that div would overlap which destoryed my formating, an easy fix would be making everything float left which I doubted would be optimal.

8/9/2016
- Add slidshow feature to storypage.html

8/15/2016
- Add a storypageFAKE.html since I am still waiting for the story that is "promised".

- Update the phone number for all pages.

- Add more photos.

- Change the layout of storypageFAKE and I am going to do all the editing on storypageFAKE until I get the story.

8/16/2016
- I changed my mind so the storypageFAKE will be fake forever, and it will the alternative layout for storypage that I don't like.

- After some researching, I decide to make a grid-like format to display the pictures and texts in storypage, which takes longer than I have expected.

- I do some adjust with the font and title for every page, and realize my gramma is over the place in this little README. Going to put this website live on CACRAUS.ORG

- It is live on CACRAUS.ORG and CACRAUS.COM is linked to CACRAUS.ORG

8/28/2016
- Fixed a typo here to prevent README to be fully shown on github

- Give the website more color and Update the logo AGAIN

8/29/2016
- Found out that when screen size changed/shrinked, the format is generally destory.

- IMOPORTANT !!! fit-content value for width is very useful, and it ultimately fixed the menu bar shrinking problem.

- Fixed the footer with similar css.

9/2/2016
- After reading lot of examples online, I settle with a book tags design for the aboutus page and the resources page.

- And by that, I learned about border-radius, line gradient, and after/before. Those are very cool css properties.

- Applies the footer design change to every pages, change the logo to the color one.

- Added the resources page, but forogot to link it to the menu.