declare var $ : any;

export default class Nav
{
    public el : HTMLElement;

    public options : any = {
        duration:       200,
        delay:          300,
        navSelector:    '> div',
        baseName:       'js__nav',
        openModifier:   'open',
        readyModifier:  'ready'
    };

    public constructor (el : HTMLElement, options: any)
    {
        this.el = el;
        this.options = $.extend({}, this.options, options);
    }

    public bind()
    {
        $(this.el).find('> ul > li').map((index, el) => {
            this.bindEvent(index, el);
        });
    }

    public bindEvent(index : string, el : HTMLElement)
    {
        $(el).on('mouseenter', () => {
            this.openNav(el);
        });

        $(el).on('mouseleave', () => {
            this.closeNav(el);
        });

        $(el).addClass(this.options.baseName)
    }

    protected openNav(el : HTMLElement)
    {
        let $nav = $(el).find(this.options.navSelector).eq(0);

        let options = {
            duration: this.options.duration
        };

        (<any> options).complete = () => {
            $(el).addClass(this.getReadyClass());
        };

        let height = $nav.realHeight();

        if ( ! $(el).hasClass(this.getOpenClass()) ) {
            $nav.css({ display: 'block', height: 0 });
        }

        $nav.velocity('stop')
            .velocity({ opacity: 1, height: height }, options);

        $(el).addClass(this.getOpenClass());
        $nav.css({ zIndex: 20 });
    }

    protected closeNav(el : HTMLElement)
    {
        let $nav = $(el).find(this.options.navSelector).eq(0);

        let options = {
            duration: this.options.duration,
            delay: this.options.delay
        };

        (<any> options).beginn = () => {
            $(el).removeClass(this.getReadyClass());
        };

        (<any> options).complete = () => {

            $(el).removeClass(this.getOpenClass());

            $nav.css({ display: 'none' });
        };

        $nav.velocity('stop', true)
            .velocity({ opacity: 0, height: 0 }, options);

        $nav.css({ zIndex: 10 });
    }

    protected getOpenClass() : string
    {
        return this.options.baseName + '--' + this.options.openModifier;
    }

    protected getReadyClass() : string
    {
        return this.options.baseName + '--' + this.options.readyModifier;
    }

}
