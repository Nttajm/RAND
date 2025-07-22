let menu_item_index = 0;
let dropdown_index = 0;
document.addEventListener('keydown', function(event) {
    console.log(menu_item_index);
    switch(event.key) {
        case 'ArrowUp':
            // Handle up arrow key press
            console.log('Up arrow pressed');
            break;
        case 'ArrowDown':
            // Handle down arrow key press
            break;
        case 'ArrowLeft':
            // Handle left arrow key press
            menu_item_index--;
            break;
        case 'ArrowRight':
            // Handle right arrow key press
            menu_item_index++;
            moveMenu(menu_item_index);
            break;
        default:
            // Handle other keys if needed
            break;
    }
});

function moveMenu(index) {
    const menu = document.querySelector('.moving_menu');

    const  ani_ids = [
        'pos_1',
        'pos_2',
        'pos_3',
        'pos_4',
        'pos_5',
        'pos_6',
        'pos_7',
        'pos_8',
        'pos_9',
        'pos_10',
        'pos_11',
        'pos_12',
        'pos_13',
    ];

    if (index < 0 || index >= ani_ids.length) {
        console.error('Index out of bounds');
        return;
    }

    menu.style.animation = `move_to_${ani_ids[index]} 0.75s var(--menu-move) forwards`;
}