export default function (error) {

    this.error = error || (() => {
        console.error('Asset loading failed');
    });

    let head = document.getElementsByTagName("head")[0];

    this.setError = (error) => {
        this.error = error;
    };

    this.script = (src, done) => {

        let el = document.createElement('script');

        Object.assign(el, {
            async: true, src: src,
            onload: done, onerror: this.error
        });

        head.append(el);
    };

    this.style = (href, done) => {

        let el = document.createElement('link');

        Object.assign(el, {
            rel: 'stylesheet', href: href,
            onload: done, onerror: this.error
        });

        head.append(el);
    };

}