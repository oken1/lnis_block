$( document ).ready( function() {
	console.log( '--------------------------------' );
	console.log( 'ln.is block started.' );
	console.log( '--------------------------------' );

	function lnisBlock( node )
	{
		if ( node.nodeType == Node.ELEMENT_NODE )
		{
			var lnis = $( node ).find( "a[data-expanded-url^='http://ln.is/'][lnis!='true']" );

			lnis.each( function() {
				$( this )
					.css( {
						'background': '#c04050'
					} )
					.attr( {
						'lnis': 'true',
						'title': chrome.i18n.getMessage( 'tooltip' )
					} )
					.removeAttr( 'href' )
					.removeClass( 'twitter-timeline-link' );
			} );
		}
	}

	var mo = new MutationObserver( function( mutations ) {
		mutations.forEach( function( mutation ) {
			for ( var i = 0, _l = mutation.addedNodes.length ; i < _l ; i++ )
			{
				lnisBlock( mutation.addedNodes[i] );
			}
		} );
	} );

	var _body = document.querySelector( 'body' );
	lnisBlock( _body );
	mo.observe( _body, { childList: true, subtree: true } );
} );
