const url = "resData.json";

// get the divs, take their children later..
const grid1 = document.getElementById("grid1");
const grid2 = document.getElementById("grid2");
const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");

async function getData() {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();

        let eduList = data.edu;
        let expList = data.exp;

        // adding content from json data to html element
        heading1.textContent = data.headings.heading1;
        heading2.textContent = data.headings.heading2;
        addContent(eduList, grid1);
        addContent(expList, grid2);

        function addContent(list, grid) {
            for (let i = 0; i < list.length; i++) {
                let name = list[i].name;
                let place = list[i].place;
                let desc = list[i].desc;
                let yearEnd = list[i].yearEnd;
                let yearStart = list[i].yearStart;
                let tempList = [name, place, desc, yearEnd, yearStart];

                const gridList = Array.from(grid.children);
                const innerDivs = Array.from(gridList[i].children);

                // inner-grid, 5 divs with information.
                innerDivs.forEach((div, index) => {
                    div.textContent = tempList[index];
                });
            }
        }
    }
}

getData();
