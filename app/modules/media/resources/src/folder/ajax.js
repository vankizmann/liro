export default {

    fetchFolder: function (source) {

        var url = this.route('liro-media.ajax.folder.index');

        var request = {
            source: source || ''
        };

        var response = (res) => {
            this.$root.folder = res.data.folder; this.$root.tree = res.data.tree;
        };

        this.http.post(url, request).then(response);
    },

    createFolder: function (source, destination) {

        if ( destination == null || destination == '' ) {
            return;
        }

        var url = this.route('liro-media.ajax.folder.create');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.folder.created');

        var response = (res) => {
            UIkit.notification(msg, 'success'); this.fetchFolder(source);
        };

        this.http.post(url, request).then(response);
    },

    renameFolder: function (source, destination) {

        if ( destination == null || destination == '' ) {
            return;
        }

        var url = this.route('liro-media.ajax.folder.rename');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.folder.renamed');

        var response = (res) => {
            UIkit.notification(msg, 'success'); this.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    moveFolder: function (source, destination) {

        if ( destination == null || destination == '' ) {
            return;
        }

        var url = this.route('liro-media.ajax.folder.move');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.folder.moved');

        var response = (res) => {
            UIkit.notification(msg, 'success'); this.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    deleteFolder: function (source) {

        var url = this.route('liro-media.ajax.folder.delete');

        var request = {
            source: source || ''
        };

        var msg = this.trans('liro-media::message.folder.deleted');

        var response = (res) => {
            UIkit.notification(msg, 'success'); this.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    renameFile: function (source, destination) {

        if ( destination == null || destination == '' ) {
            return;
        }

        var url = this.route('liro-media.ajax.file.rename');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.file.renamed');

        var response = (res) => {
            UIkit.notification(msg, 'success'); this.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    moveFile: function (source, destination) {

        if ( destination == null || destination == '' ) {
            return;
        }

        var url = this.route('liro-media.ajax.file.move');

        var request = {
            source: source || '', destination: destination
        };

        var msg = this.trans('liro-media::message.file.moved');

        var response = (res) => {
            UIkit.notification(msg, 'success'); this.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

    deleteFile: function (source) {

        var url = this.route('liro-media.ajax.file.delete');

        var request = {
            source: source || ''
        };

        var msg = this.trans('liro-media::message.file.deleted');

        var response = (res) => {
            UIkit.notification(msg, 'success'); this.fetchFolder();
        };

        this.http.post(url, request).then(response);
    },

}