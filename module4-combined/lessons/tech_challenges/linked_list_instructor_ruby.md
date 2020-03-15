---
title: Linked List Challenge, Instructor Walkthrough in Ruby
layout: page
---

```ruby
class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end


def merge_two_sorted_linked_lists(list1, list2)
  # we need to initialize an array to store our results
  result = []

# start a new list with a nil value, which we'll skip later
  new_list = ListNode.new(nil)
  # we need to keep track of the start of this linked list for later, also
  head = new_list

  # we're going to "while loop" over our linked lists as long as they both have
  # data, if one list runs out early, we'll handle that later
  while list1 && list2

    # if list1's current value is less than or equal to list 2, we'll add
    # the current node in list 1 to our new list
    # don't worry, we'll still be able to inject things later
    if list1.val <= list2.val
      new_list.next = list1
      # and then we'll advance list 1 to the next node
      list1 = list1.next

    # otherwise, if list2's value is less than list1, we'll add the current node
    # from list 2 into our new list
    else
      new_list.next = list2
      # and then we'll advance list 2 to the next node
      list2 = list2.next
    end

    # before we continue, we need to advance new_list to the next node since our
    # next check of list 1 or list 2 will be equal or bigger than this value anyway
    new_list = new_list.next
  end

  # when we get here, one or both lists have run out of nodes, so we need to just
  # add the remainder of the opposite list to our new_list
  if list1.nil?
    # for example, if list 1 ran out of nodes, we'll append the rest of list 2 here
    new_list.next = list2
  elsif list2.nil?
    # otherwise if list 2 ran out, we'll append the rest of list 1 here instead
    new_list.next = list1
  end

  # okay, now we need to build our resulting array

  # first, we have to skip the 'nil' we started with in our new list, so we're going to
  # reference the "head" variable we tracked earlier, and skip it's value.
  # we'll call the rest of the linked list our "final list"
  final_list = head.next

  # and now we use a while loop to check if our final_list node is nil or not
  while final_list
    # if not, we add its value to our array
    result << final_list.val
    # and then we advance to our next node
    final_list = final_list.next
  end

  # and then we can return our array
  result
end

# copy/paste this whole block into your editor ahead of time
# test cases:
list1 = ListNode.new(1)
list1.next = ListNode.new(3)
list1.next.next = ListNode.new(5)
list2 = ListNode.new(2)
list2.next = ListNode.new(4)
list2.next.next = ListNode.new(6)
puts 'test case 1 failed' if merge_two_sorted_linked_lists(list1, list2) != [1,2,3,4,5,6]


list1 = ListNode.new(1)
list1.next = ListNode.new(2)
list2 = ListNode.new(4)
list2.next = ListNode.new(5)
list2.next.next = ListNode.new(6)
puts 'test case 2 failed' if merge_two_sorted_linked_lists(list1, list2) != [1,2,4,5,6]

list1 = ListNode.new(10)
list1.next = ListNode.new(20)
list1.next.next = ListNode.new(40)
list2 = ListNode.new(0)
puts 'test case 3 failed' if merge_two_sorted_linked_lists(list1, list2) != [0, 10, 20, 40]

puts 'all done!'
```
