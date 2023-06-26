function dropdown() {
    const submenu = document.querySelector('#submenu');
    submenu.classList.toggle('hidden');

    const arrow = document.querySelector('#arrow');
    arrow.classList.toggle('rotate-0')
}

function alert() {
    const alerta = document.querySelector('#alert')
    confirm('Deseja realmente sair da página?')
}

function openS() {
  const openSide = document.querySelector("#open");
  openSide.classList.toggle('translate-x-0')
}

