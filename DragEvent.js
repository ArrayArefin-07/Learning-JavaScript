// DragEvent object
// ondrahstart
// ondrag
// ondragend
// ondragenter
// ondragleave
// ondragover
// ondrop

const input =  document.querySelector('p');
const p =  document.querySelector('div');

p.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("Text", e.target.id);
    // console.log('drag start');
}); 

input.addEventListener('cut', function() {
    p.innerText = 'you have cut';
    // console.log('you have cut');
});

input.addEventListener('paste', function() {
    p.innerText = 'you have pasted';
    // console.log('you have pasted');
});
