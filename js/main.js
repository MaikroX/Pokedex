let allPokemon = [];

async function loadAllPokemon() {
    for (let i = 1; i < 152; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        previewPokemon = await response.json();
        allPokemon.push(previewPokemon);
    }
    renderAllPokemon();
    document.getElementById('loading_screen').classList.add("d-none");
}

function renderAllPokemon() {
    for (let i = 0; i < allPokemon.length; i++) {
        let pokemon = allPokemon[i].name;
        let monsterPic = allPokemon[i].sprites.other.home.front_default;
        let monsterId = allPokemon[i].id;
        let monsterTyp = allPokemon[i].types[0].type.name;
        document.getElementById('all_names').innerHTML += showPreviewTemp(pokemon, monsterPic, monsterId, monsterTyp, i);
    };
    bgColor();
    typPic();
}

function cardColor(i) {
    let name = allPokemon[i].types[0].type.name;
    if (name == name) {
        document.getElementById(`card_color(${i})`).classList.add(name)
    }
}

function typPic() {
    for (let i = 0; i < allPokemon.length; i++) {
        let name = allPokemon[i].types[0].type.name;
        let img = `./img/${name}.svg`
        if (name == name) {
            document.getElementById(`poke_typ(${i})`).src = img;
        }
    }
}

function typImg(i) {
    let name = allPokemon[i].types[0].type.name;
    if (name == name) {
        document.getElementById(`typ_img${i}`).innerHTML += `<img class="typer" src="./img/${name}.svg" alt="">`;
    }
}

function bgColor() {
    for (let i = 0; i < allPokemon.length; i++) {
        let name = allPokemon[i].types[0].type.name;
        if (name == name) {
            document.getElementById(`background-color(${i})`).classList.add(name)
        };
    }
}

function showCard(i) {
    document.getElementById(`new_card`).innerHTML = loadDetailCard(i);
    progressBar(i);
    cardColor(i);
    typImg(i);
}

function progressBar(i) {
    let percent = allPokemon[i].stats[0].base_stat;
    document.getElementById('stat_hp').style = `width: ${percent}%`;
    let percent2 = allPokemon[i].stats[1].base_stat;
    document.getElementById('stat_attack').style = `width: ${percent2}%`;
    let percent3 = allPokemon[i].stats[2].base_stat;
    document.getElementById('stat_deffense').style = `width: ${percent3}%`;
    let percent4 = allPokemon[i].stats[3].base_stat;
    document.getElementById('stat_special-Attack').style = `width: ${percent4}%`;
    let percent5 = allPokemon[i].stats[4].base_stat;
    document.getElementById('stat_special-Deffense').style = `width: ${percent5}%`;
    let percent6 = allPokemon[i].stats[5].base_stat;
    document.getElementById('stat_speed').style = `width: ${percent6}%`;
}

function closeCard() {
    document.getElementById('new_card').innerHTML = '';
}

function moveRight(i) {
    if (i < allPokemon.length - 1) {
        i++
    } else {
        i = 0
    }
    document.getElementById('new_card').innerHTML = ``;
    showCard(i);
}

function moveLeft(i) {
    if (i !== 0) {
        i--
    } else {
        i = allPokemon.length - 1
    }
    document.getElementById('new_card').innerHTML = ``;
    showCard(i);
}

function filterNames() {
    let search = document.getElementById('search_pokemon').value;
    search = search.toLowerCase();
    let found = document.getElementById('all_names');
    found.innerHTML = '';
    definePokemon(search, found);
    if (search < 1) {
        document.getElementById('arrow_up').classList.remove("d-none");
    };
}

function definePokemon(search, found) {
    for (let i = 0; i < allPokemon.length; i++) {
        let pokemon = allPokemon[i].name;
        let monsterPic = allPokemon[i].sprites.other.home.front_default;
        let monsterTyp = allPokemon[i].types[0].type.name;
        let name = allPokemon[i].types[0].type.name;
        let pokeid = allPokemon[i].id.toString();
        whereIsTheMonster(pokemon, monsterPic, monsterTyp, name, pokeid, search, found, i);
    };
}

function whereIsTheMonster(pokemon, monsterPic, monsterTyp, name, pokeid, search, found, i) {
    if (pokemon.toLowerCase().includes(search) && name == name || name.toLowerCase().includes(search) && name == name || pokeid.includes(search) && name == name) {
        found.innerHTML += searchPreviewTemp(pokemon, monsterPic, monsterTyp, i)
        document.getElementById(`background-color(${i})`).classList.add(name);
        document.getElementById(`poke_typ(${i})`).src = `./img/${name}.svg`;
        document.getElementById('arrow_up').classList.add("d-none");
    } else {
        showPreviewTemp(pokemon, monsterPic, monsterTyp, i);
    }
}