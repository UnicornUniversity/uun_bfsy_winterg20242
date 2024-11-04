
(function () {
  var cdnBaseUri = new URL(document.currentScript.getAttribute("data-orig-src") || document.currentScript.src).origin;
  var imports = {
    "prop-types": "/libs/prop-types/15.7.2/prop-types.min.js",
    "react": "/libs/react/18.3.1/react.min.js",
    "react-dom": "/libs/react-dom/18.3.1/react-dom.min.js",
    "uu5dndg01": "/uu-uu5dndg01/1.0.0/uu5dndg01.min.js",
    "uu5g05": "/uu-uu5g05/1.0.0/uu5g05.min.js",
    "uu5g05-dev": "/uu-uu5g05/1.0.0/uu5g05-dev.min.js",
    "uu5g05-elements": "/uu-uu5g05/1.0.0/uu5g05-elements.min.js",
    "uu5g05-forms": "/uu-uu5g05/1.0.0/uu5g05-forms.min.js",
    "uu5stringg01": "/uu-uu5stringg01/1.0.0/uu5stringg01.min.js",
    "uu5tilesg02": "/uu-uu5tilesg02/2.0.0/uu5tilesg02.min.js",
    "uu5tilesg02-controls": "/uu-uu5tilesg02/2.0.0/uu5tilesg02-controls.min.js",
    "uu5tilesg02-elements": "/uu-uu5tilesg02/2.0.0/uu5tilesg02-elements.min.js",
    "uu_appg01": "/uu-appg01/6.0.0/uu_appg01.min.js",
    "uu_appg01_core": "/uu-appg01-core/6.0.0/uu_appg01_core.min.js",
    "uu_appg01_oidc": "/uu-appg01-oidc/4.0.0/uu_appg01_oidc.min.js",
    "uu_datatypesg01": "/uu-datatypesg01/0.0.0/uu_datatypesg01.min.js",
    "uu_gdsg01-unicorn": "/uu-gdsg01/1.0.0/uu_gdsg01-unicorn.min.js",
    "uu_i18ng01": "/uu-i18ng01/1.0.0/uu_i18ng01.min.js",
    "uu_plus4u5g02": "/uu-plus4u5g02/1.0.0/uu_plus4u5g02.min.js",
    "uu_plus4u5g02-app": "/uu-plus4u5g02/1.0.0/uu_plus4u5g02-app.min.js",
    "uu_plus4u5g02-elements": "/uu-plus4u5g02/1.0.0/uu_plus4u5g02-elements.min.js",
    "uun_bfsy_winterg20242": "/uun-bfsy-winterg20242/0.1.0/uun_bfsy_winterg20242.min.js"
  }; 
  for (var k in imports) imports[k] = new URL(imports[k], cdnBaseUri).toString();

  window.Uu5Loader.config({ imports: imports });

  let currentUrl = (location.href.slice(0, 6) === "about:" && window.frameElement ? parent : window).location.href;
  let domain = new URL(currentUrl).hostname;
  let isDev = domain === "localhost" || domain === "uuapp-dev.plus4u.net" || /^\d+\.\d+\.\d+\.\d+$/.test(domain);
  if (isDev) {
    if (!window.uu5Environment) window.uu5Environment = {};
    Object.assign(window.uu5Environment, {
      "uu_app_oidc_providers_oidcg02_uri": "https://uuapp-dev.plus4u.net/uu-oidc-maing02/eca71064ecce44b0a25ce940eb8f053d/oidc",
      "uu5g05_libraryRegistryBaseUri": "https://uuapp-dev.plus4u.net/uu-applibraryregistry-maing01/000008ad5570455e83857a394f9a21c9",
      "uu5g05_plus4UGoBaseUri": "https://uuapp-dev.plus4u.net/uu-plus4ugo-maing01/00000c3f57074bfcb759aba2d562e013",
      "uu_plus4u5g02_identityManagementBaseUri": "https://uuapp-dev.plus4u.net/uu-identitymanagement-maing01/58ceb15c275c4b31bfe0fc9768aa6a9c",
      "uu_plus4u5g02_commonServicesBaseUri": "https://uuapp-dev.plus4u.net/uu-commonservices-maing01/00000b33c474420aa887c972097b8024",
      "uu_plus4u5g02_peopleBaseUri": "https://uuapp-dev.plus4u.net/uu-plus4upeople-maing01/0000004723544d1ab0b74000d9f7671c",
      "uu_plus4u5g02_organizationBaseUri": "https://uuapp-dev.plus4u.net/uu-plus4uorganization-maing01/00000e17cfda49f49db73ed53ac8e4cf",
    });
  }
})();
