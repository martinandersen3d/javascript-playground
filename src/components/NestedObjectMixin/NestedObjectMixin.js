/* 
_.get(object, path, [defaultValue])
object (Object): The object to query.
path (Array|string): The path of the property to get.
[defaultValue] (*): The value returned for undefined resolved values.

Example
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
*/
import _ from "lodash"

export const NestedData = {
  methods: {
    dataNested(string) {
      let result = _.get(this, string);
      if( result === undefined ){
        return "UNDEFINED"
      }
      return result
    },
    dataHas() {
      return "yes"
    },
    dataCount() {
      return "yes"
    },
  }
   
}