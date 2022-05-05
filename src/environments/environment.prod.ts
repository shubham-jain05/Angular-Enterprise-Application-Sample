export const environment = {
  PRODUCTION: !!window['__env']['PRODUCTION']
    ? window['__env']['PRODUCTION']
    : true,
  ENVIRONMENT_TYPE: !!window['__env']['ENVIRONMENT_TYPE']
    ? window['__env']['ENVIRONMENT_TYPE']
    : 'Production',
  API_URL: !!window['__env']['API_URL']
    ? window['__env']['API_URL']
    : 'https://yourgateway.com/',
  API_URL_MASK: !!window['__env']['API_URL_MASK']
    ? window['__env']['API_URL_MASK']
    : 'https://admin.com/',
};
