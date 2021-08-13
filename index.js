// Write your code here!

/*
     it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", () => {
      expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
    });

  });
})

4) index.js is processed
has a "newHeader" variable that points to node "h1#victory" with "YOUR-NAME is the champion" inside:
newHeader is not defined

*/

//1) Remove <main>
document.querySelector("main").remove();

//2) Adds the "newHeader" variable
const newHeader = document.createElement("h1");
document.body.appendChild(newHeader);

//3) "newHeader" variable has the id #victory
newHeader.id = "victory";

//4) "newHeader" has text inside of it
newHeader.textContent = "Bingo Bango Bongo is the champion";