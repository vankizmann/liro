declare const $ : any;

export default class DOM
{
    public static ready (cb : any)
    {
        $(document).on('DOMContentLoaded', cb);
    }

    public static title(title : string, glue : string = ' - ')
    {
        return document.title = [title, (<any> window).baseTitle].join(glue);
    }

}
