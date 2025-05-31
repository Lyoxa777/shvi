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
  return input == input.split("").reverse().join("");
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

  await t.step({
    name: "Does the bus serve the line?",
    fn: () => {
      // below is the list of lines and buses that serve them
      // the first element of the array is the line number
      // the second element is an array of bus numbers that serve the line
      // if the bus serves the line, return true
      // if the bus does not serve the line, return false
      // if the line does not exist, return false

      const linesAndBuses = [
        [1, [11, 22, 33]],
        [3, [44, 55, 66]],
        [5, [11, 55, 77]],
        [7, [11, 44, 33]],
        [9, [44, 55, 66]],
        [17, [11, 66, 77]],
      ];

      const busServesLine = (line, bus) => {
        const linban = linesAndBuses.find((entry) => entry[0] == line);
        if (!linban) return false;
        return linban[1].includes(bus);
      };

      const generalResult = busServesLine(5, 77);
      const nonExistentLineResult = busServesLine(100, 11);
      const nonExistentBusResult = busServesLine(1, 100);
      const nonExistentLineAndBusResult = busServesLine(100, 100);

      assertEquals(generalResult, true);
      assertEquals(nonExistentLineResult, false);
      assertEquals(nonExistentBusResult, false);
      assertEquals(nonExistentLineAndBusResult, false);
    },
  });

  await t.step({
    name: "How high?",
    fn: () => {
      const buildingsAndHeights = [
        ["Empire State Building", 443],
        ["Burj Khalifa", 828],
        ["Shanghai Tower", 632],
        ["One World Trade Center", 541],
        ["Taipei 101", 508],
      ];

      const howHigh = (building) => {
        const buildingEntry = buildingsAndHeights.find((entry) =>
          entry[0] === building
        );
        return buildingEntry ? buildingEntry[1] : -1;
      };
      const generalResult = howHigh("Burj Khalifa");
      const nonExistentBuildingResult = howHigh("Hanoi Tower");
      const emptyBuildingResult = howHigh("");
      assertEquals(generalResult, 828);
      assertEquals(nonExistentBuildingResult, -1);
      assertEquals(emptyBuildingResult, -1);
    },
  });
});

// function string(name) {
//   for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
//   }
//   return name;
// }
// string("gfdgfdgfdgf");
