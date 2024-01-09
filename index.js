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



const $heightContainer = document.getElementById( 'heightContainer' )

const $weightContainer = document.getElementById( 'weightContainer' )

const $imcButton = document.getElementById( 'imcButton' )

const $imcResultContainer = document.getElementById( 'imcResultContainer' )

$imcButton.addEventListener( "click", () => {
    const weight = Number( $weightContainer.value ) 

    const height = Number( $heightContainer.value ) / 100

    let imcResult = weight / Math.pow(height, 2) 

    $imcResultContainer.textContent = imcResult.toFixed(1)

    $weightContainer.value = ""

    $heightContainer.value = ""

}) 



const $localCurrencyContainer = document.getElementById( 'localCurrencyContainer' )

const $usdCurrencyResult = document.getElementById( 'usdCurrencyResult' )

const $usdCurrencyContainer = document.getElementById( 'usdCurrencyContainer' )

const $localCurrencyResult = document.getElementById( 'localCurrencyResult' )

const $convertButton = document.getElementById( 'convertButton' )

const $deleteButton = document.getElementById( 'deleteButton' )

const $convertButton2 = document.getElementById( 'convertButton2' )

const $deleteButton2 = document.getElementById( 'deleteButton2' )

$convertButton.addEventListener( "click", () => $usdCurrencyResult.textContent = $localCurrencyContainer.value / 500)

$convertButton2.addEventListener( "click", () => $localCurrencyResult.textContent = $usdCurrencyContainer.value * 500)

$deleteButton.addEventListener( "click", () => {
    $localCurrencyContainer.value = ""

    $usdCurrencyResult.textContent = ""

})

$deleteButton2.addEventListener( "click", () => {
    $usdCurrencyContainer.value = ""

    $localCurrencyResult.textContent = ""

})