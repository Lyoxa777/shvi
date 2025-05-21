import { assertEquals } from "jsr:@std/assert";

function stringDistance(first, second) {
  if (first.length !== second.length) {
    return -1;
  } else if (first == second) {
    return 0;
  }
  let D = 0;

  for (let i = 0; i < second.length; i++) {
    D += Math.abs(first.charCodeAt(i) - second.charCodeAt(i));
  }
  return D;
}

function isPalindrome(input) {
  throw new Error("TBI...");
}

Deno.test("Exercises", async (t) => {
  await t.step({
    name: "String distance",
    fn: () => {
      assertEquals(stringDistance("a", "a"), 0);
      assertEquals(stringDistance("a", "f"), 5);
      assertEquals(stringDistance("aa", "af"), 5);
      assertEquals(stringDistance("af", "aa"), 5);
      assertEquals(stringDistance("aa", ""), -1);
      assertEquals(stringDistance("aa", "cf"), 7);
      assertEquals(stringDistance("a", "aa"), -1);
      assertEquals(stringDistance("aa", "a"), -1);
    },
  });

  await t.step({
    name: "Is palindrome",
    fn: () => {
      assertEquals(isPalindrome(""), true);
      assertEquals(isPalindrome("abccba"), true);
      assertEquals(isPalindrome("abcabc"), false);
    },
  });
});
