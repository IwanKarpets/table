let data = [["Brighter Than Gold - Louis II",4848169,124000,1000,826],
            ["My Love Will Never Die - Claire Wyndham",4780126,107000,795,2295],
            ["Lullaby of Woe - Ashley Serena",3058640,130000,692,1789],
            ["Everything or Nothing - Willyecho",2102594,44000,377,370],
            ["Play Dirty - Kevin McAllister ft. Sebell",1608296,42000,243,484]];

// 1 - Подсчет суммы

let looks = 0;
let likes = 0;
let dislikes = 0;
let comments = 0;

for (let row of data){
    
    looks += row[1];
    likes += row[2];
    dislikes += row[3];
    comments += row[4];
} 

data.push(["Итого:",looks,likes,dislikes,comments]);

// 2 - формирование верстки

const wrapper = document.querySelector('.wrapper');

for(let row of data){
   let div = document.createElement('div');
   div.className = 'row';
   wrapper.appendChild(div);
   let id = 0;
   for(let cell of row){
       div.innerHTML+=`<div class="cell" data-id="${id}">${cell}</div>`;
       id++;
   }

}

// 3 - Добавление события

document.addEventListener('click', function(e){
    let cell = e.target;
    if (!cell.closest('.cell'))
       return;
    
     let row = cell.parentElement.children;
     let id = cell.dataset.id;
     let col = document.querySelectorAll(`[data-id="${id}"]`);
     let all = document.querySelectorAll('.cell');
    
    
    for(let item of all){
       item.style.background = 'white';
     }    
     for(let item of row){
       item.style.background = 'yellow';
    }
     for(let item of col){
         item.style.background = 'yellow';
     }
    
    cell.style.background = "red";
    
});
