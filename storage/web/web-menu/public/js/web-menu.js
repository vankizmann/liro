Vue.component('WebMenuIndex', {
    render: function(render) {
        return render('NForm', {}, [
            render('NFormItem', { props: { label: 'Select what you want' } }, [
                render('NSelect', {}, [
                    render('NSelectOption', { props: { label: 'test0', value: 'test0' } }),
                    render('NSelectOption', { props: { label: 'test1', value: 'test1' } }),
                    render('NSelectOption', { props: { label: 'test2', value: 'test2' } })
                ])
            ])
        ]);
    }
});
