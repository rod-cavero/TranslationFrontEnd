# TranslationFrontEnd
### Version 1.0.0

A basic UI for demostrate the TranslationApi project
https://github.com/rod-cavero/TranslationApi
***

Installation
====
```
docker pull ghcr.io/rod-cavero/translationfrontend:master
```
Note. Run the coteiner on port 3000 preferably.
It could run in any port execpt for 5000 where TranslationApi must run. 
also better avoid 80 due other local instances running
***


Basic Usage
====
Select the source language or leave the default option 'Detect Language' for auto detection
Type the text to translate
Select the target language

Cick on Translate 
***


Prerequisites
====
* TranslationApi container running on port 5000 
```
docker pull ghcr.io/rod-cavero/translationapi:master
```

***


License
====
google_trans_new is licensed under the MIT License. The terms are as follows:  

```
MIT License  

Copyright (c) 2020 lushan88a  

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.  
```
