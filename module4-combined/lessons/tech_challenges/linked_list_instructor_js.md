---
title: Linked List Challenge, Instructor Walkthrough in JS
layout: page
---

```js
class ListNode {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}


function merge_two_sorted_linked_lists(list1, list2) {
  // we need to initialize an array to store our results
  var result = [];

// start a new list with a nil value, which we'll skip later
  let new_list = new ListNode(null);
  // we need to keep track of the start of this linked list for later, also
  let head = new_list;

  // we're going to "while loop" over our linked lists as long as they both have
  // data, if one list runs out early, we'll handle that later
  while (list1 != null && list2 != null) {

    // if list1's current value is less than or equal to list 2, we'll add
    // the current node in list 1 to our new list
    // don't worry, we'll still be able to inject things later
    if (list1.val <= list2.val) {
      new_list.next = list1;
      // and then we'll advance list 1 to the next node
      list1 = list1.next;

    // otherwise, if list2's value is less than list1, we'll add the current node
    // from list 2 into our new list
    } else {
      new_list.next = list2;
      // and then we'll advance list 2 to the next node
      list2 = list2.next;
    }

    // before we continue, we need to advance new_list to the next node since our
    // next check of list 1 or list 2 will be equal or bigger than this value anyway
    new_list = new_list.next;
  }

  // when we get here, one or both lists have run out of nodes, so we need to just
  // add the remainder of the opposite list to our new_list
  if (list1 == null) {
    // for example, if list 1 ran out of nodes, we'll append the rest of list 2 here
    new_list.next = list2;
  } else if (list2 == null) {
    // otherwise if list 2 ran out, we'll append the rest of list 1 here instead
    new_list.next = list1
  }


  // okay, now we need to build our resulting array

  // first, we have to skip the 'null' we started with in our new list, so we're going to
  // reference the "head" variable we tracked earlier, and skip it's value.
  // we'll call the rest of the linked list our "final list"
  let final_list = head.next;

  // and now we use a while loop to check if our final_list node is nil or not
  while (final_list != null) {
    // if not, we add its value to our array
    result.push(final_list.val);
    // and then we advance to our next node
    final_list = final_list.next
  }

  // and then we can return our array
  return result;
}

// test cases:
var list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);
var list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);
if (JSON.stringify(merge_two_sorted_linked_lists(list1, list2)) != JSON.stringify([1, 2, 3, 4, 5, 6])) {
  console.log("test case 1 failed");
}


var list1 = new ListNode(1);
list1.next = new ListNode(2);
var list2 = new ListNode(4);
list2.next = new ListNode(5);
list2.next.next = new ListNode(6);
if (JSON.stringify(merge_two_sorted_linked_lists(list1, list2)) != JSON.stringify([1, 2, 4, 5, 6])) {
  console.log("test case 2 failed");
}


var list1 = new ListNode(10);
list1.next = new ListNode(20);
list1.next.next = new ListNode(40);
var list2 = new ListNode(0);
if (JSON.stringify(merge_two_sorted_linked_lists(list1, list2)) != JSON.stringify([0, 10, 20, 40])) {
  console.log("test case 3 failed");
}


console.log("all done!");

```
