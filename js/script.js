

class Persona {
    constructor (nome, cognome, eta) {
    this.nome=nome;
    this.cognome=cognome;
    this.eta= eta;
    }
    compare(person) {
        if(this.eta>person.eta){
            console.log(`${this.nome} ${this.cognome} è più vecchio di ${person.nome} ${person.cognome}`)
        } else {
            console.log=(`${person.nome} ${person.cognome} è più vecchio di ${this.nome} ${this.cognome}`)
        };
    }
}


let p1 = new Persona('Maria', 'Rossi', 38)
let p2 = new Persona('Marco', 'Verdi', 28)
let p3 = new Persona('Pietro', 'Russo', 32)

p1.compare(p2);

class pagination {
    constructor (listName=[], pageSize=10){
        this.listName=listName;
        this.pageSize=pageSize;
    }
}


let items = [
    "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "item12", "item13", "item14", "item15", "item16",
    "item17", "item18", "item19", "item20", "item21", "item22", "item23", "item24", "item25", "item26", "item27", "item28", "item29", "item30", "item31", 
    "item32", "item33", "item34", "item35", "item36","item37", "item38", "item39", "item40", "item41", "item42", "item43", "item44", "item45", "item46",
    "item47", "item48", "item49", "item50", "item51", "item52", "item53", "item54", "item55", "item56","item57", "item58", "item59", "item60", "item61", 
    "item62", "item63", "item64", "item65", "item66","item67", "item68", "item69", "item70", "item71", "item72", "item73", "item74", "item75", "item76",
    "item77", "item78", "item79", "item80"
];

function showPage(page){
    if(page===1){
        showitem = items.splice(0,9);
    } else {
        let start= (pagination.pageSize * page)-((pagination.pageSize * page)+1);
        let end= (pagination.pageSize * page)-1;
        showitem = items.splice(start,end);
    }
    pagination.listName = [showitem]
}

