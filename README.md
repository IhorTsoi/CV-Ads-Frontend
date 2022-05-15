How-to deploy on GitHub pages:
- do the changes needed
- set the backend url
- run `ng build --localize --output-path docs`
- delete docs/en-us
- for each index.html replace the base href with `/CV-Ads-Frontend/{language code, e.g. en}/`