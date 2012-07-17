require.config({
    paths : {
        'jquery': 'libs/jquery'
    }
});
require( [ 'jquery', 'mods/mastercontrol', 'mods/appStatus', 'mods/viewer', 'mods/postservice', 'mods/ads', 'mods/ads-rotator' ], function( $, mc, status, viewer, postsrvc, ads, adRotator ){
    'use strict';

    postsrvc.setup();

    viewer.setup().listen();

    ads.setup();
    adRotator.setup().listen();

    status.setup().listen();

    mc.emit( 'app-initialized' );
});
