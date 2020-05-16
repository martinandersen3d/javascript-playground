export default class PageComponentClass {
  constructor( component ) {

    this.filename = 'PageComponent'

    this._counterA = 4
    this.counterB = 4
    console.log( 'hi from constructor' )

    this.age = {
      label: 'Type Your Age',
      value: 50,
      errors: [ 'sdfsdf' ],
      min: 20,
      max: 25
    }
  }

  go() {
    console.log('....go()')
  }

  btnEvent( event ) {
    console.log( event.target )
    let val = event.target[ 'name' ] || event.target[ 'id' ]
    // console.log(this)
    console.log(  `${ this.filename }.${val}` )
    if ( val ) {
      // this.$emit( `${this.filename}.${val}`, [] )
    }
  }

  get counterA() {
    return 'my Age is...' + this._counterA
  }
  set counterA( val ) {
    this._counterA = this._counterA + val
    this.age.value = 101000
  }


}
