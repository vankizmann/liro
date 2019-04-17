declare const $ : any;
import Locale from './locale';

export default class DOM
{
    public static titleNow : string;

    public static ready (cb : any)
    {
        $(document).on('DOMContentLoaded', cb);
    }

    public static title(title : string, glue : string = ' - ')
    {
        return document.title = [Locale.trans(this.titleNow = title),
            (<any> window).baseTitle].join(glue);
    }

}
