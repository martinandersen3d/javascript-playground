export default {

  data () {
    return {
      msg: 'Hello world!'
    }
  },
  computed: {
     dothis() {
       return this.active
     }
  }//computed
}

  //var hey = ""
/* 
    var users = [
      {
        'user': 'barney',
        'age': 36,
        'id': 36
      },
      {
        'user': 'fred',
        'age': 40,
        'id': 40
      },
      {
        'user': 'pebbles',
        'age': 1,
        'id': 1
      }
    ];

      
      var youngest = _
        .chain(users)
        .sortBy('id')
        .map(function(o) {
          return o.user + ' is ' + o.age;
        })
        .head()
        .value();
      // => 'pebbles is 1'

      
      _.find(users, function(o) { return o.age < 40; });
      // => object for 'barney'
      
      // The `_.matches` iteratee shorthand.
      _.find(users, { 'age': 1, 'active': true });
      // => object for 'pebbles'
      
      // The `_.matchesProperty` iteratee shorthand.
      _.find(users, ['active', false]);
      // => object for 'fred'
      
      // The `_.property` iteratee shorthand.
      _.find(users, 'active');
      // => object for 'barney'
 */
