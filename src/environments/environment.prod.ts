const BASE_API_URL = 'https://1f03-176-32-9-218.eu.ngrok.io';
// const BASE_API_URL = 'https://192.168.0.101:5001';

export const environment = {
  production: true,
  baseAPIUrl: BASE_API_URL,
  endpoints: {
    loginAdmin: BASE_API_URL + '/admins/login',
    loginCustomer: BASE_API_URL + '/customers/login',
    registerCustomer: BASE_API_URL + '/customers/register',
    getCustomerPaymentAmount: BASE_API_URL + '/customers/payment',
    payCustomer: BASE_API_URL + '/customers/payment',
    registerAdmin: BASE_API_URL + '/admins/register',
    registerSmartDevice: BASE_API_URL + '/smartdevices/register',
    export: BASE_API_URL + '/servicedata',
    import: BASE_API_URL + '/servicedata',
    getAllSmartDevices: BASE_API_URL + '/smartdevices',
    blockSmartDevice: BASE_API_URL + '/smartdevices/{id}/block',
    resetSmartDevice: BASE_API_URL + '/smartdevices/{id}/reset',
    getStatisticsForSmartDevice: BASE_API_URL + '/smartdevices/{id}/views',
    getCustomerAdvertisements: BASE_API_URL + '/advertisements',
    changeStatusOfAdvertisement: BASE_API_URL + '/advertisements/{id}',
    getStatisticsForAdvertisement: BASE_API_URL + '/advertisements/{id}/views',
    createAdvertisement: BASE_API_URL + '/advertisements'
  },
  selfUAVersion: 'https://ihortsoi.github.io/CV-Ads-Frontend/ua',
  selfENVersion: 'https://ihortsoi.github.io/CV-Ads-Frontend/en'
};
