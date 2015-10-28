/* 
 * @Author: willclass
 * @Date:   2015-10-28 18:09:22
 * @Last Modified by:   willclass
 * @Last Modified time: 2015-10-28 18:14:01
 */

'use strict';

function* genFunc () {
    console.log('step 1')
    yield 1
    console.log('step 2')
    yield 2
    console.log('step 3')
    return 3
}

var m = genFunc();

console.log(m.next());
console.log(m.next());
console.log(m.next());
