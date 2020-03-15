---
title: Stack/Queue Challenge, Instructor Walkthrough in Ruby
layout: page
---

For the coding walkthrough, read the comments out loud while you write out the actual code.

Be sure to explain that this is just one possible implementation, that there may be others.

```ruby
class StringValidator
  attr_reader :pairs

  def initialize(pairs={'{' => '}', '[' => ']', '(' => ')' } )
    @pairs = pairs
  end

  def validate(string, new_pairs=[])
    # immediately return false if we have an add number of characters, which
    # indicates something isn't matched properly
    return false if string.length.odd?

    # set our pairs
    pairs = @pairs
    # but override the pairs if we pass in a set to match
    pairs = new_pairs if new_pairs.length > 0

    # build our stack using an array
    stack = []

    # for each of the characters in our input string:
    string.chars do |char|

      # track whether we've found some sort of match or not
      match = false

      # walk through our pairs hash
      pairs.each do |k,v|
        # if our current character matches a key, add that to our stack
        if k == char
          stack << char
          # set our flag that we've matched something in our pairs
          match = true
        # otherwise, if our current character matches the value
        elsif v == char
          # pop the last thing off the stack and see if that matches the matching key for
          # the bracket which is our current character
          # if there's a mismatch, return false immediately
          return false unless stack.pop == k
          # set our flag that we've matched something in our pairs
          match = true
        end
      end

      # immediately return false if we didn't match a key or value in our pairs hash,
      # which indicates we had an invalid character
      return false unless match
    end

    # if we got this far, we've matched as much as we could
    true
  end
end

v = StringValidator.new
puts 'case 1 failed' unless v.validate("()")
puts 'case 2 failed' unless v.validate("([{}[]])")
puts 'case 3 failed' if v.validate("()[")
puts 'case 4 failed' if v.validate("([)]")
puts 'all done!'

# extensions
puts 'extension case 1 failed' unless v.validate("(()[])", [ ["(", ")"], ["[", "]"] ])
puts 'extension case 2 failed' if v.validate("()[]", [ ["(", ")"] ])
puts 'extension case 3 failed' unless v.validate("!12@", [ ["1", "2"], ["!", "@"] ])
puts 'all extensions done!'

```
