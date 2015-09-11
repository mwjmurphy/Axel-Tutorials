function loadAndDisplayPage(pageName) {
    // alert("main");
    $.ajax({
        url: pageName,
    }).done(function( data ) {
        $('#set_content_here').html (data);
        //if ( console && console.log ) {
        //   console.log( "Sample of data:", data.slice( 0, 100 ) );
        //}
    });
};
