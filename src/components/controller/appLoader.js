import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9c56f06b6b64496c97098c9780a040c5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
