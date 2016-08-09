# cacraus

- This is the organized version of testRepo, which is a website for the organization Chinese American Citizen Right Alliance.

##Update Log

8/2/2016
This is meant to be a simple static website where information are presented to the viewer in a straight forward fashion (defintely not because of my lack of knowledge on JavaScript/JQ).

8/5/2016
- Got the digitalized logo from YuanFei, the designer, so I updated the logo picture for the website and finally added in tab icon. "Accidentally" find a bug where the menu bar won't follow while scored horizontallly since this is how fixed position works.

- Solved the menu bar problem by changing it to absolute position, however I still want the effect of fixed position. After some research(Google), it seems that "sticky" value for position would be a quick fix but google doesn't support that value anymore.

- Found some JavaScript/JQ solutions, it took a while for me to realize I need to import JQ to use JQ, but anyway most of them seems to be too complex for the situation, so I settled with a method that is similar to those annoying floating ads that follow you forever (Changing the "top" value when scrolling vertically).

- Replace Contact Page with Story Page, but I don't like the current layout since the pictures look pretty out of places.

8/8/2016
- Tried to use external js file so the html files would be more clean, but the format for js files are unclear online and it took me a while to realize that I shouldn't use "<script>" in a js file, at least that was the case for Chrome.

- Found a bug/decide flaw that div would overlap which destoryed my formating, an easy fix would be making everything float left which I doubted would be optimal.

