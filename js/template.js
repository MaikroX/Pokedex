function showPreviewTemp(pokemon, monsterPic, monsterId, monsterTyp, i) {
    return /*html*/ `
    <div id="background-color(${i})" class="pokemon-preview">
    <div> <img src="" alt="" id="poke_typ(${i})" class="typ-pic"></div>
    <div class="first-line">
    <div class="front-ID">
    <div>#${monsterId}</div>
    </div>
        <div class="name-big preview-name">${pokemon}</div>
    </div>
        <div class="prev-img-container"><img onclick="showCard(${i})" class="preview-pic" src="${monsterPic}" alt="" ></div>
        <div><div class="front-id name-big">${monsterTyp}</div></div>
    </div>
    `;
}

function searchPreviewTemp(pokemon, monsterPic, monsterTyp, i, pokeid) {
    return /*html*/ `
            <div id="background-color(${i})" class="pokemon-preview">
            <div> <img src="" alt="" id="poke_typ(${i})" class="typ-pic"></div>
            <div class="first-line">
            <div class="front-ID">
    <div>#${allPokemon[i].id}</div>
    </div>
                <div class="name-big preview-name">${pokemon}</div>
            </div>
                <div class="prev-img-container"><img onclick="showCard(${i})" class="preview-pic" src="${monsterPic}" alt="" ></div>
                <div><div class="front-id">${monsterTyp}</div></div>
            </div>
            `;
}

function loadDetailCard(i) {
    return /*html*/ `
    <div id="cardy-card" class="holy-card">
    <div class="holy-card-inner">
        <div id="card_color(${i})" class="card-all"><div>
            <div id="pokedex">
                <div class="card-first-row">
                <div class="pokeball-all">
                <img class="pokeball" src="./img/pokeball.png" onclick="closeCard()"alt="">
                <div class="pokeball-close">Catch</div>
                </div>
                <div id="typ_img${i}"></div>
                    <div id="pokemon_id">${('#') + allPokemon[i].id}</div>
                </div>
            </div>
            <div>
                <div class="poke-name">
                    <h1 id="pokemon_name">${allPokemon[i].name}</h1>
                </div>
            </div>
            <div class="pokemon-img">
                <div><img class="arrow-with" src="./img/left.png" alt="" onclick="moveLeft(${i})" ></div>
                <img src="${allPokemon[i].sprites.other.home.front_default}"id="pokemon_pic">
                <div><img class="arrow-with" src="./img/right.png" alt="" onclick="moveRight(${i})"></div>
            </div>
        </div>
        <div class="info-container">
            <div class="info-header">
            </div>
            <div class="info-footer">
                <div class="column">Typ<span id="pokemon_typ(${i})" class="rename name-big">${allPokemon[i].types[0].type.name}</span></div>
                <div class="column">Height<span id="height"></span>${allPokemon[i].height + ' ' + 'ft'}</div>
                <div class="column">Weight<span id="weight"></span>${allPokemon[i].weight + ' ' + 'lbs'}</div>
            </div>
            <div class="stats-container">
                <div class="stats-left">
                    <div class="stat-row">
                        <div class="stat-item">HP</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 200%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="stat_hp">${allPokemon[i].stats[0].base_stat}</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat-item">Attack</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="stat_attack">${allPokemon[i].stats[1].base_stat}</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat-item">Defense</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="stat_deffense">${allPokemon[i].stats[2].base_stat}</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat-item">Special-Attack</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="stat_special-Attack">${allPokemon[i].stats[3].base_stat}</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat-item">Special-Defense</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="stat_special-Deffense">${allPokemon[i].stats[4].base_stat}</div>
                        </div>
                    </div>
                    <div class="stat-row">
                        <div class="stat-item">Speed</div>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="stat_speed">${allPokemon[i].stats[5].base_stat}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

`;
}