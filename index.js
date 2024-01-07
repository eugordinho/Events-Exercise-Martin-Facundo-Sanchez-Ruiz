const $colorSquare = document.getElementById( 'changeColorSquare' )

const $button = document.querySelector( "button" )

$button.addEventListener("click", () => {
    if( $colorSquare.classList.contains( "bg-blue-800" ) ){
        $colorSquare.classList.remove( "bg-blue-800" )

        $colorSquare.classList.add( "bg-red-800" )
        
        $colorSquare.textContent = "RED"

    } else if($colorSquare.classList.contains( "bg-red-800" )){
        $colorSquare.classList.remove( "bg-red-800" )
        
        $colorSquare.classList.add( "bg-green-800" )
        
        $colorSquare.textContent = "GREEN"

    } else{
        $colorSquare.classList.remove( "bg-green-800" )
        
        $colorSquare.classList.add( "bg-blue-800" )
        
    }

}) 



