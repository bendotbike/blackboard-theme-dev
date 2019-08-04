
# blackboard-theme-dev
Hexo theme designed for use with my site

## Note
This theme is designed to only reside in a ```/blog/``` directory in my site. There are no ```page``` layouts or anything in this theme.
This is a rough conversion of a pure html/css/js theme designed for my site for use for blogging with Hexo.

@todo: clean theme up and make more usable with normal site

## Installation
1.
```
hexo init site
cd site
npm install
git clone https://github.com/bendotbike/blackboard-theme-dev.git themes/blackboard-theme
```
2. delete ```themes/landscape```
3. change the value of ```theme``` in ```_config.yml``` to ```blackboard-theme```
4. configure ```themes/blackboard-theme/_config.yml```
5. 
```
hexo clean
hexo generate
hexo serve
```

## Site config
(the following items from the site's config file are used by this theme and should be set up)
- title
- url
- root
- permalink
- date_format
- theme
