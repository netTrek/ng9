
const dataset = {
  col1: 'wert1',
  col2: 'wert2',
  col3: 'wert3',
  col4: 'wert4',
  col5: 'wert5',
  col6: 'wert6',
  col7: 'wert7',
};

const col3 = dataset.col3;
const {col4, col7} = dataset;

console.log ( col4, col7 );

/*
const address  = {zip: 46283, city: 'dorsten' };
const username = 'Saban';
const userage = 44;
const user = { name: username, age: userage, add: address };
const user1 = { username, userage, address };
address.city = 'ddorf';
console.log ( user, user1 );
*/


/*
const user: {username: string, age: number, address?: string } = {
  username: 'saban', age: 44
};
/!*

const user: any = {
  username: 'saban', age: 44
};
*!/

const userClone = {...user};
const userCloneAndMod = {...user, username: 'peter'};
const userCloneAndExt = {...user, address: 'Overbergstr. 35', p: 'ee'};

console.log ( user, userCloneAndExt );
*/

/*
const list1 = [1, 2, 3, 4];
const list2 = [11, 12, 13, 14];
const list1Clone = [...list1]; // vorsicht immutable! erste Ebene
const list1Ext = [...list1, 5, 6, 7];
const list1Ext2 = [...list1, ...list2];

console.log ( list1Ext2, list1, list1Clone, list1Ext );
*/


export class SyntaxMagie {}
