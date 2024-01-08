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
        
        $colorSquare.textContent = "BLUE"
    }

}) 



const $textInput = document.getElementById( 'inputText' )

const $textContent = document.getElementById( 'textContent' )

const $resetButton = document.getElementById( 'resetButton')

$textInput.addEventListener( "input", () => $textContent.textContent = $textInput.value )

$resetButton.addEventListener( "click", () => {
    $textContent.textContent = ""
    $textInput.value= ""
})