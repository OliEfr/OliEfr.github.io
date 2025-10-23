This site is templated and extended from <a href="https://keunhong.com/">Keunhong Park's</a> website. It is build with [jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll) and [bulma](https://bulma.io/), and can be hosted for free on [GitHub Pages](https://pages.github.com/). Feel free to re-use this pagea nd link back to my [homepage](oliver.hausdoerfer.de)!

### Adapt the website for your needs
- change the personal information in `_config.yml`.
- Make sure your `images` have an aspect ratio of 1:1 and are least 320px.
- if you wish to use the submission form for emails, create your own Google AppScript for a GoogleSheet and replace the `googleAppScriptUrl` in `index.js` with your url. You can ask ChatGPT how to create a App Script.
- if you wish to use google analytics, you need to enable the tracker in `index.html`.

### Using this repository locally

Install required tools (if you don't have them already):
```
sudo apt install ruby-full # ruby
gem install bundler # bundler
```

Clone the repository:
```
git clone https://github.com/OliEfr/OliEfr.github.io # clone
cd OliEfr.github.io
sudo bundle install # install required packages
```

Start the website locally:
```
bundle exec jekyll serve --trace
```

Full and detailed instructions can be found [here](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).
# License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. 

