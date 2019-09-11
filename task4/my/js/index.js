const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');

function createBtn (name, id, className) {
    const btn = document.createElement('button');
    btn.innerHTML = name;
    btn.className = `btn ${className}`;
    btn.setAttribute('id', id);
    wrapper.append(btn);
};

createBtn('creacte Stack', 'btnStack', 'btn-primary');
createBtn('creacte Queue', 'btnQueue', 'btn-secondary');
createBtn('creacte Binary tree', 'btnBst', 'btn-warning');

