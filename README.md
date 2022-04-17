# webpack_learning

1. analyzing modules with dependencies(import the codes) to create chunk, then preprocessed different kind of codes differently into bundle

2. 5 core concepts in Webpack:\
entry: the starting point of bundling codes\
output directory\
loader(allow webpack to analyze the non-js code)\
plugins(similar to loader, but mostly for zipping the files, setting the env virable)\
mode(development, production)\

3. advantage of using build tools like webpack:\
a. convert codes into the files(bundle) which browser can recognized: eg., webpack can help us preprocess `less` file into `css`, turn `css` into an `style` tag in index.html, which is part of the bundle to download\
b. reduce the size of the download: remove comments, space, etc; condensed all frontend codes into index.html, index.js and a directory for media\
c. maybe reduce the number of HTTP request: in Webpack, we can specify a limit for pictures to download, below which the picture will be converted into base64 string, which will be injected into the built.js file. When this happens, we don't need to make a separate HTTP request to download the picture.\
d. obfuscation