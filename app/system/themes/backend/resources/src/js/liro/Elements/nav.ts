declare var $ : any;

export default class Nav
{
    public el : HTMLElement;

    public options : any = {
        duration:       200,
        delay:          300,
        bindMode:       'hover',
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
        if ( $(el).find(this.options.navSelector).length === 0 ) {
            return;
        }

        if ( this.options.bindMode === 'hover' ) {
            this.bindHoverEvent(el);
        }

        if ( this.options.bindMode === 'click' ) {
            this.bindClickEvent(el);
        }

        $(el).addClass(this.options.baseName)
    }

    public bindHoverEvent(el : HTMLElement)
    {
        $(el).on('mouseenter', () => {
            this.openNav(el);
        });

        $(el).on('mouseleave', () => {
            this.closeNav(el);
        });
    }

    public bindClickEvent(el : HTMLElement)
    {
        let open = false;

        $(el).on('click', () => {

            if ( open === false ) {
                this.openNav(el);
                return open = true;
            }

            if ( open === true ) {
                this.closeNav(el);
                return open = false;
            }
        });

        $(document).on('click', (event) => {

            if ( $(event.target).is(el) || $(event.target).parents().is(el) ) {
                return;
            }

            this.closeNav(el);
            return open = false;
        });



        $(el).children('a').on('click', (event) => {
            event.preventDefault();
        });
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
    }

    protected closeNav(el : HTMLElement)
    {
        let $nav = $(el).find(this.options.navSelector).eq(0);

        let options = {
            duration: this.options.duration,
            delay: this.options.delay
        };

        (<any> options).begin = () => {
            $(el).removeClass(this.getReadyClass());
        };

        (<any> options).complete = () => {

            $(el).removeClass(this.getOpenClass());

            $nav.css({ display: 'none' });
        };

        $nav.velocity('stop', true)
            .velocity({ opacity: 0, height: 0 }, options);
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
